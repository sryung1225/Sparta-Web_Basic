from flask import Flask, render_template, request

app = Flask(__name__)
import random
import requests

@app.route("/")
def home():
    name = "이령"
    lotto = [16, 18, 20, 23, 32, 43] # 내 로또 번호

    # 랜덤 로또 번호
    def generate_lotto_numbers():
        numbers = random.sample(range(1, 46), 6) # 1-46 숫자 중 6개 선택
        return sorted(numbers) # 오름차순 정렬

    random_lotto = generate_lotto_numbers()

    # 내 로또 번호 & 랜덤 로또 번호의 일치율
    def count_common_elements(list1, list2):
      common_elements = set(list1) & set(list2) # 두 리스트의 공통 숫자 추출
      return len(common_elements) # 공통 숫자들의 수

    common_count = count_common_elements(lotto, random_lotto)

    # context 선언
    context = {
        "name": name,
        "lotto": lotto,
        "random_lotto": random_lotto,
        "common_count": common_count,
    }

    return render_template("index.html", data=context)
    # 아무것도 하지 않은 상태에서는 index.html 렌더링
    # 만들어진 context를 data라는 이름으로 html에 넘겨줌


@app.route("/mypage") # /mypage 루트 선언
def mypage():
  return "This is My Page!"

@app.route("/movie") # /movie 루트 선언
def movie():
  query = request.args.get('query') # 검색어
  URL = f"http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=f5eef3421c602c6cb7ea224104795888&movieNm={query}" # URL
  res = requests.get(URL)
  rjson = res.json()

  movie_list = rjson["movieListResult"]["movieList"]

  return render_template("movie.html", data=movie_list)

@app.route("/answer") # /answer 루트 선언
def answer():
    if request.args.get('query'): # 검색어
        query = request.args.get('query')
    else:
        query = '20230601'

    URL = f"http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt={query}"
    res = requests.get(URL)
    rjson = res.json()

    boxoffice_list = rjson["boxOfficeResult"]["weeklyBoxOfficeList"]
    
    return render_template("answer.html", data=boxoffice_list)


if __name__ == "__main__":
    app.run(debug=True)
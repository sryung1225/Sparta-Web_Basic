# 필수 라이브러리
'''
0. Flask : 웹서버를 시작할 수 있는 기능. app이라는 이름으로 플라스크를 시작한다
1. render_template : html파일을 가져와서 보여준다
'''
from flask import Flask, render_template
from bs4 import BeautifulSoup
import requests

app = Flask(__name__)

@app.route("/")
def home():
    name = "이령"
    motto = "노력은 배신하지 않는다."

    context = {
        "name": name,
        "motto": motto,
    }
    return render_template("motto.html", data=context)

@app.route("/music")
def music():
    # bs4 시작코드
    url = "https://www.melon.com/chart/index.htm"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
    data = requests.get(url, headers=headers)
    soup = BeautifulSoup(data.text, 'html.parser')

    melon_data = []
    trs = soup.select(".service_list_song > table > tbody > tr")
    for tr in trs:
        rank = tr.select_one('.rank').text
        title = tr.select_one('.rank01 > span > a').text
        artist = tr.select_one('.rank02 > a').text
        image = tr.select_one('img')['src']
        melon_data.append({'rank': rank, 'artist': artist, 'title': title, 'image': image})

    return render_template("music.html", data=melon_data)

@app.route("/iloveyou/<name>/")
def iloveyou(name):
    motto = f"{name}야 난 너뿐이야!"
    context = {
        "name": name,
        "motto": motto
    }
    return render_template("motto.html", data=context)

if __name__ == "__main__":
    app.run(debug=True)
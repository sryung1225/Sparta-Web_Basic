fetch("http://spartacodingclub.shop/sparta_api/seoulair") // 이 URL로 웹 통신을 요청한다. 괄호 안에 다른 것이 없다면 GET!
  .then((res) => res.json()) // 통신 요청을 받은 데이터는 res라는 이름으로 JSON화 한다
  .then((data) => {
    // console.log(data); // 개발자 도구에 찍어보기
    let rows = data["RealtimeCityAir"]["row"];
    rows.forEach((element) => {
      console.log(element["MSRSTE_NM"]);
      console.log(element["IDEX_MVL"]);
    });
  }); // JSON 형태로 바뀐 데이터를 data라는 이름으로 붙여 사용한다

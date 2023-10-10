function q1() {
  fetch("http://spartacodingclub.shop/sparta_api/seoulair")
    .then((res) => res.json())
    .then((data) => {
      let rows = data["RealtimeCityAir"]["row"];

      $("#names-q1").empty(); // 이전 데이터 삭제

      rows.forEach((element) => {
        let gu_name = element["MSRSTE_NM"];
        let gu_miss = element["IDEX_MVL"];
        // console.log(gu_name, gu_miss);

        let temp_html = ``; // 수치 40이상이면 빨간 글씨
        if (gu_miss > 40) {
          temp_html = `<li class="bad">${gu_name} : ${gu_miss}</li>`;
        } else {
          temp_html = `<li>${gu_name} : ${gu_miss}</li>`;
        }

        $("#names-q1").append(temp_html);
      });
    });
}

document.querySelector("#mo_tien_do").onclick = function (){
    document.querySelector(".tien_do").classList.remove('hien_thi');
    document.querySelector(".khai_bao").classList.add('hien_thi');
    document.querySelector(".thong_tin_chung").classList.add('hien_thi');
    fetch('http://localhost:8000/api/kiemtratiendo',{
        method: 'GET',
        headers: new Headers({
                'Authorization': document.cookie, 
                'Content-Type': 'application/json'
              }),
    }).then(function(response){
        return response.json();
    }).then(function(info){
        document.querySelector('#tbl_tien_do thead').innerHTML = "";
        document.querySelector('#tbl_tien_do tbody').innerHTML = "";

        var thead = document.querySelector('#tbl_tien_do thead');
        rh = document.createElement('tr');
        ch1 = document.createElement('th');
        ch2 = document.createElement('th');
        ch3 = document.createElement('th');
        ch4 = document.createElement('th');
        if(info[0].role == "2") {
            ch1.innerHTML = "Tỉnh/Thành Phố";
        }
        if(info[0].role == "4") {
            ch1.innerHTML = "Huyện/Quận";
        }
        if(info[0].role == "6") {
            ch1.innerHTML = "Xã/Phường";
        }
        if(info[0].role == "8") {
            ch1.innerHTML = "Thôn/Bản/Tổ Dân Phố";
        }
        ch2.innerHTML = "Thời gian bắt đầu";
        ch3.innerHTML = "Thời gian kết thúc";
        ch4.innerHTML = "Trạng thái";
        rh.appendChild(ch1);
        rh.appendChild(ch2);
        rh.appendChild(ch3);
        rh.appendChild(ch4);
        thead.appendChild(rh);
        var tbody = document.querySelector('#tbl_tien_do tbody');
        for(i = 0; i < info.length; i++) {
            r = document.createElement('tr');
            c1 = document.createElement('td');
            c2 = document.createElement('td');
            c3 = document.createElement('td');
            c4 = document.createElement('td');

            c1.innerHTML = info[i].Tenkhuvuc;
            c2.innerHTML = info[i].start;
            console.log(info[i].start);
            c3.innerHTML = info[i].end;
            if(info[i].status == "1"){
                c4.innerHTML = "đã hoàn thành";
                c4.style.color = "#7ef407";
            }
            else {
                c4.innerHTML = "chưa hoàn thành";
                c4.style.color = "#b2b2b2"
            }

            r.appendChild(c1);
            r.appendChild(c2);
            r.appendChild(c3);
            r.appendChild(c4);
            tbody.appendChild(r);
        }
    })
}

fetch('Data',{
    method: 'GET'
}).then(function(response){
    return response.json();
}).then(function(info){
    document.querySelector('#tbl thead').innerHTML = "";
    document.querySelector('#tbl tbody').innerHTML = "";

    var thead = document.querySelector('#tbl thead');
    rh = document.createElement('tr');
    ch1 = document.createElement('th');
    ch2 = document.createElement('th');
    ch3 = document.createElement('th');
    ch4 = document.createElement('th');
    if(info[0].user == "A1") {
        ch1.innerHTML = "Tỉnh/Thành Phố";
    }
    if(info[0].user == "A2") {
        ch1.innerHTML = "Huyện/Quận";
    }
    if(info[0].user == "A3") {
        ch1.innerHTML = "Xã/Phường";
    }
    if(info[0].user == "B1") {
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
    var tbody = document.querySelector('#tbl tbody');
    for(i = 1; i < info.length; i++) {
        r = document.createElement('tr');
        c1 = document.createElement('td');
        c2 = document.createElement('td');
        c3 = document.createElement('td');
        c4 = document.createElement('td');

        c1.innerHTML = info[i].name;
        c2.innerHTML = info[i].Date_begin;
        console.log(info[i].Date_begin);
        c3.innerHTML = info[i].Date_end;
        if(info[i].status == "finished"){
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
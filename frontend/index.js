
document.getElementById("trang_chu_btn").onclick = function() {
    document.querySelector(".main").classList.remove('hien_thi');
    document.querySelector(".them_can_bo").classList.add('hien_thi');
    document.querySelector(".giao_viec").classList.add('hien_thi');
    document.querySelector(".xoa_quyen").classList.add('hien_thi');
    // document.querySelector(".cap_phat_kv").classList.add('hien_thi');
}



document.getElementById("them_can_bo_btn").onclick = function() {
    document.querySelector(".them_can_bo").classList.remove('hien_thi');
    // document.querySelector(".cap_phat_kv").classList.add('hien_thi');
    document.querySelector(".giao_viec").classList.add('hien_thi');
    document.querySelector(".main").classList.add('hien_thi');
    document.querySelector(".xoa_quyen").classList.add('hien_thi');
}

document.getElementById("giao_viec_btn").onclick = function() {
    document.querySelector(".giao_viec").classList.remove('hien_thi');
    document.querySelector(".xoa_quyen").classList.add('hien_thi');
    document.querySelector(".them_can_bo").classList.add('hien_thi');
    // document.querySelector(".cap_phat_kv").classList.add('hien_thi');
    document.querySelector(".main").classList.add('hien_thi');
}
document.getElementById("xoa_quyen").onclick = function() {
    document.querySelector(".xoa_quyen").classList.remove('hien_thi');
    document.querySelector(".them_can_bo").classList.add('hien_thi');
    document.querySelector(".giao_viec").classList.add('hien_thi');
    // document.querySelector(".cap_phat_kv").classList.add('hien_thi');
    document.querySelector(".main").classList.add('hien_thi');
}

document.getElementById("khai_bao_tong").onclick = function() {
    document.querySelector(".khai_bao").classList.remove('hien_thi');
    document.querySelector(".thong_tin_chung").classList.add('hien_thi');
	document.querySelector(".tien_do").classList.add('hien_thi');
	document.querySelector(".xoa_quyen").classList.add('hien_thi');
}


// document.getElementById("mo_tien_do").onclick = function() {
// 	document.querySelector(".tien_do").classList.remove('hien_thi');
//     document.querySelector(".khai_bao").classList.add('hien_thi');
//     document.querySelector(".main_right_table").classList.add('hien_thi');
// }


document.getElementById("hoten").onblur = function() {
	this.value = ChuanhoaTen(this.value);
};

document.getElementById("hoten").onkeyup = function(e) {
	DoKeyup(e, this, 'CCCD');
};

document.getElementById("CCCD").onkeyup = function(e) {
	DoKeyup(e, this, 'ngay_sinh');
};

document.getElementById("ngay_sinh").onkeyup = function(e) {
	DoKeyup(e, this, 'ton_giao');
};

document.getElementById("ton_giao").onkeyup = function(e) {
	DoKeyup(e, this, 'hoc_van');
};

document.getElementById("hoc_van").onkeyup = function(e) {
	DoKeyup(e, this, 'nghe_nghiep');
};

document.getElementById("nghe_nghiep").onkeyup = function(e) {
	DoKeyup(e, this, 'quoc_tich');
};

document.getElementById("nghe_nghiep").onkeyup = function(e) {
	DoKeyup(e, this, 'que_quan');
};

document.getElementById("que_quan").onkeyup = function(e) {
	DoKeyup(e, this, 'noi_khai_sinh');
};

document.getElementById("noi_khai_sinh").onkeyup = function(e) {
	DoKeyup(e, this, 'noi_o_hien_tai');
};


function DoKeyup(e, myself, nextcontrolid) {
	if (window.event) e = window.event; 
	if (e.keyCode == 13) {
		document.getElementById(nextcontrolid).focus();
	}
}

document.getElementById("btn_khai_bao").onclick =  function () {
	var okie = true; //chua co loi
	//xoa cac thong bao loi
	document.getElementById("loi_hoten").innerHTML  = "";
	document.getElementById("loi_ngay_sinh").innerHTML = "";
	document.getElementById("loi_que_quan").innerHTML = "";
	document.getElementById("loi_noi_khai_sinh").innerHTML = "";
	document.getElementById("loi_noi_o_hien_tai").innerHTML = "";

    //kiem tra cac truong bat buoc nhap
	if (document.getElementById("noi_o_hien_tai").value == "") {
		document.getElementById("loi_noi_o_hien_tai").innerHTML = "Quý vị chưa nhập địa chỉ";
		document.getElementById("noi_o_hien_tai").focus();
		okie = false;
	} 
    if (document.getElementById("noi_khai_sinh").value == "") {
		document.getElementById("loi_noi_khai_sinh").innerHTML = "Quý vị chưa nhập địa chỉ";
		document.getElementById("noi_khai_sinh").focus();
		okie = false;
	}
    if (document.getElementById("que_quan").value == "") {
		document.getElementById("loi_que_quan").innerHTML = "Quý vị chưa nhập địa chỉ";
		document.getElementById("que_quan").focus();
		okie = false;
	} 


	if (document.getElementById("ngay_sinh").value == "") {
		document.getElementById("loi_ngay_sinh").innerHTML = "Quý vị chưa nhập ngày sinh";
		document.getElementById("ngay_sinh").focus();
		okie = false;
	} else if (!laNgayThang(document.getElementById("ngay_sinh").value)) {
		document.getElementById("loi_ngay_sinh").innerHTML = "Ngày sinh không đúng định dạng";
		document.getElementById("ngay_sinh").focus();
		okie = false;
	}


	if (document.getElementById("hoten").value == "") {
		document.getElementById("loi_hoten").innerHTML = "Quý vị chưa nhập họ tên";
		document.getElementById("hoten").focus();
		okie = false;
	}
	if(okie) {
		fetch("http://localhost:8000/api/khaibao", {
			method: "POST",
			headers: new Headers({
				'Authorization': document.cookie, 
				'Content-Type': 'application/json'
			  }),
			body: '{"Hovaten":"' + document.querySelector("input.dong_1_1_ten").value + 
			'","CCCD":"' + document.querySelector("input.dong_1_2_CCCD").value + 
			'", "Gioitinh":"' + document.querySelector('input[name="sex"]:checked').value+ 
			'", "Ngaysinh":"' + document.querySelector("input.dong_2_2_date").value + 
			'", "Tongiao":"' + document.querySelector("input.dong_3_1_ton_giao").value +
			'","Trinhdovanhoa":"' + document.querySelector("input.dong_3_2_hoc_van").value + 
			'", "Nghenghiep":"' + document.querySelector("input.dong_4_1_nghe_nghiep").value + 
			'", "Quequan":"' + document.querySelector("input.dong_5_que_quan").value + 
			'", "Diachithuongtru":"' + document.querySelector("input.dong_6_thuong_tru").value +
			'", "Diachitamtru":"' + document.querySelector("input.dong_7_tam_tru").value + '" }'
		})
		.then(resp => {
			if (resp.status == 200) {
				resp.json()
				.then(ret => {
					if (ret.status == "OK") {
						if (ret.data == 1) {
							confirm('Khai báo thành công');
							document.querySelector("input.dong_1_1_ten").value = "";
							document.querySelector("input.dong_1_2_CCCD").value = "";
							document.getElementsByName("sex").innerHTML = "";
							document.querySelector("input.dong_2_2_date").value = "";
							document.querySelector("input.dong_3_1_ton_giao").value = "";
							document.querySelector("input.dong_3_2_hoc_van").value = "";
							document.querySelector("input.dong_4_1_nghe_nghiep").value = "";
							document.querySelector("input.dong_5_que_quan").value = "";
							document.querySelector("input.dong_6_thuong_tru").value = "";
							document.querySelector("input.dong_7_tam_tru").value = "";
						}
						else {
							
							confirm('Không có quyền khai báo');
						}
					} else {
						confirm('Hết thời khai bao hoặc chưa đến thời gian khai báo')
					}
				});
			} else {
				
			}
		});
	}

}





// function laCCCD(s) {
//     if(Number.isFinite(s)) {
//         if(s.toString().length == 12) {
//             return true;
//         } else {
//             return false;
//         }
//     } else {
//         return false;
//     }
	
// }

function laNgayThang(d) { //d = nn/tt/nnnn
    //kiem tra d co phai la ngay thang
	//tach xau d boi dau /
	s = d.split('-');

	if (s.length != 3) return false; //phai co 3 phan
	if (isNaN(s[0]) || isNaN(s[1]) || isNaN(s[2])) return false;//ca 3 la so

	//chuyen thanh cac so nguyen
	ngay = parseInt(s[0]);
	thang = parseInt(s[1]);
	nam = parseInt(s[2]);

	//kiem tra
	if (thang > 12 || thang < 1) return false;
	if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12) {
		if (ngay > 31) return false;
	} else if (thang == 2){
		if (nam%4 == 0 && nam%100 != 0) {
			if (ngay > 29) return false;
		} else if (ngay > 28) return false;
	} else if (ngay > 30) return false;

	if (ngay < 1) return false;

	date = new Date();
	if (nam > date.getFullYear() || nam < 1950) return false;

	return true;
}

function ktNgayThang(d, k) { //d = nn/tt/nnnn
    //kiem tra d co phai la ngay thang
	//tach xau d boi dau /
	s = d.split('-');
	t = k.split('-');
	

	//chuyen thanh cac so nguyen
	ngay1 = parseInt(s[0]);
	thang1 = parseInt(s[1]);
	nam1 = parseInt(s[2]);

	ngay2 = parseInt(t[0]);
	thang2 = parseInt(t[1]);
	nam2 = parseInt(t[2]);

	//kiem tra
	
	
	if(nam2 < nam1) {
		return false;
	} else {
		if(nam2 > nam1) return true;
		if(nam2 == nam1 && thang2 < thang1) {
			return false;
		} else {
			if(thang2 > thang1) return true;
			if(thang2 == thang1 && ngay2 < ngay1) {
				return false;
			} else return true;
		}
	}
	return true;
}


//chuan hoa ten
function ChuanhoaTen(ten) {
	dname = ten;
	ss = dname.split(' ');
	dname = "";
	for (i = 0; i < ss.length; i++)
		if (ss[i].length > 0) {
			if (dname.length > 0) dname = dname + " ";
			dname = dname + ss[i].substring(0, 1).toUpperCase();
			dname = dname + ss[i].substring(1).toLowerCase();
		}
	return dname;
}


document.querySelector(".btn_tao_tai_khoan").onclick = function() {
    document.querySelector("span.them_thanh_cong").classList.add("hien_thi");
    document.querySelector("span.them_that_bai").classList.add("hien_thi");
    document.getElementById("loi_pass").innerHTML = "";
    document.getElementById("loi_repass").innerHTML = "";
    document.getElementById("loi_username").innerHTML = "";
    document.getElementById("loi_ma_khu_vuc").innerHTML = "";

	var okie = true;
    if (document.getElementById("pass").value == "") {
		document.getElementById("loi_pass").innerHTML = "Quý vị chưa nhập mật khẩu";
		document.getElementById("pass").focus();
		okie = false;
	} else if (document.getElementById("repass").value == "") {
		document.getElementById("loi_repass").innerHTML = "Quý vị chưa gõ lại mật khẩu";
		document.getElementById("repass").focus();
		okie = false;
	} else if (document.getElementById("pass").value  != document.getElementById("repass").value ) {
		document.getElementById("loi_pass").innerHTML = "Mật khẩu và gõ lại mật khẩu không trùng nhau";
		document.getElementById("pass").focus();
		okie = false;
	}
    if (document.getElementById("username").value == "") {
		document.getElementById("loi_username").innerHTML = "Quý vị chưa nhập tên sử dụng";
		document.getElementById("username").focus();
		okie = false;
	}
	if (document.getElementById("ma_khu_vuc").value == "") {
		document.getElementById("loi_ma_khu_vuc").innerHTML = "Quý vị chưa nhập mã khu vực";
		document.getElementById("ma_khu_vuc").focus();
		okie = false;
	}
	if(okie) {
		fetch("http://localhost:8000/api/register", {
			method: "POST",
			headers: new Headers({
				'Authorization': document.cookie, 
				'Content-Type': 'application/json'
			  }),
			body: '{"Tenkhuvuc":"' + document.querySelector("input#ma_khu_vuc").value + 
			'","username":"' + document.querySelector("input#username").value + 
			'", "password":"' + document.querySelector("input#pass").value + 
			'", "password_confirmation":"' + document.querySelector("input#repass").value + '" }'
		})
		.then(resp => {
			if (resp.status == 200) {
				resp.json()
				.then(ret => {
					if (ret.status == "OK") {
						if (ret.data == 1) {
							confirm('Thêm cán bộ thành công');
							document.querySelector("input#ma_khu_vuc").value = "";
							document.querySelector("input#username").value = "";
							document.querySelector("input#pass").value = "";
							document.querySelector("input#repass").value = "";

                            
						}
						else {
							
							document.querySelector("span.them_that_bai").classList.remove("hien_thi");
						}
					} else {
						
					}
				});
			} else {
				
			}
		});
	}
}


document.querySelector(".giao_viec_btn_OK").onclick = function() {
    document.querySelector("span.them_that_bai").classList.add("hien_thi");
    document.querySelector("span.them_thanh_cong").classList.add("hien_thi");
    document.querySelector(".loi_tg_bat_dau").innerHTML = "";
    document.querySelector(".loi_tg_ket_thuc").innerHTML = "";
    document.querySelector(".loi_tai_khoan_gv").innerHTML = "";

	var okie = true;
    if (document.querySelector(".tg_bat_dau").value == "") {
		document.querySelector(".loi_tg_bat_dau").innerHTML = "Quý vị chưa nhập ngày bắt đầu";
		document.querySelector(".tg_bat_dau").focus();
		okie = false;
	} else if (!laNgayThang(document.querySelector(".tg_bat_dau").value)) {
		document.querySelector(".loi_tg_bat_dau").innerHTML = "Ngày không đúng định dạng";
		document.querySelector(".tg_bat_dau").focus();
		okie = false;
	}
	if (document.querySelector(".tg_ket_thuc").value == "") {
		document.querySelector(".loi_tg_ket_thuc").innerHTML = "Quý vị chưa nhập ngày kết thúc";
		document.querySelector(".tg_ket_thuc").focus();
		okie = false;
	} else if (!laNgayThang(document.querySelector(".tg_ket_thuc").value)) {
		document.querySelector(".loi_tg_ket_thuc").innerHTML = "Ngày không đúng định dạng";
		document.querySelector(".tg_ket_thuc").focus();
		okie = false;
	}
	if(!ktNgayThang(document.querySelector(".tg_bat_dau").value, document.querySelector(".tg_ket_thuc").value)) {
		document.querySelector(".loi_tg_ket_thuc").innerHTML = "Ngày bắt đầu muộn hơn ngày kết thúc";
		okie = false;
	}
    if (document.querySelector(".ten_tai_khoan").value == "") {
		document.querySelector(".loi_tai_khoan_gv").innerHTML = "Quý vị chưa nhập tên tài khoản";
		document.querySelector(".ten_tai_khoan").focus();
		okie = false;
	}
	
	if(okie) {
		fetch("http://localhost:8000/api/capquyen", {
			method: "POST",
			headers: new Headers({
				'Authorization': document.cookie, 
				'Content-Type': 'application/json'
			  }),
			body: '{"start":"' + document.querySelector("input.tg_bat_dau").value + 
			'","end":"' + document.querySelector("input.tg_ket_thuc").value + 
			'", "username":"' + document.querySelector("input.ten_tai_khoan").value +'"}'
		})
		.then(resp => {
			if (resp.status == 200) {
				resp.json()
				.then(ret => {
					if (ret.status == "OK") {
						if (ret.data == 1) {
							confirm('Cấp quyền thành công')
							document.querySelector("input.tg_bat_dau").value = "";
							document.querySelector("input.tg_ket_thuc").value = "";
							document.querySelector("input.ten_tai_khoan").value = "";

						}
						else {
							
							confirm('Cấp quyền thất bại');
						}
					} else {
						document.querySelector("span.them_thanh_cong").innerHTML = ret.message;
					}
				});
			} else {
				
			}
		});
	}
}

// document.querySelector("button.tim_kiem_button").onclick = function() {
// 	fetch("index.php/login", {
// 		method: "POST",
// 		headers: new Headers({
// 			'Authorization': 'document.cookie', 
// 			'Content-Type': 'application/x-www-form-urlencoded'
// 		  }),
// 		body: '{"timkiem":"' + document.querySelector("input.tim_kiem_input").value + 
// 		'", "khuvuc":"' + document.querySelector(".khu_vuc_nhan_tt").value + '" }'
// 	})
// 	.then(resp => {
// 		if (resp.status == 200) {
// 			resp.json()
// 			.then(ret => {
// 				if (ret.status == "OK") {
// 					if (ret.data == 1) {
// 						document.querySelector(".khai_bao").classList.add('hien_thi');
//     					document.querySelector(".main_right_table").classList.remove('hien_thi');

// 					}	
// 				} 
// 			});
// 		} 
// 	});

// 	fetch('data2', {
// 		method: 'GET'
// 	}).then(function (response) {
// 		return response.json()
// 	}).then(function (info) {
// 		var tbody = document.querySelector('.tbl tbody');
// 		for (i = 0; i < info.length; i++) {
// 			r = document.createElement('tr');
// 			c1 = document.createElement('td');
// 			c2 = document.createElement('td');
// 			c3 = document.createElement('td');
// 			c4 = document.createElement('td');
// 			c5 = document.createElement('td');
// 			c6 = document.createElement('td');
// 			c7 = document.createElement('td');
// 			r.appendChild(c1);
// 			r.appendChild(c2);
// 			r.appendChild(c3);
// 			r.appendChild(c4);
// 			r.appendChild(c5);
// 			r.appendChild(c6);
// 			r.appendChild(c7);
// 			c1.innerHTML = info[i].id;
// 			c2.innerHTML = info[i].hoten;
// 			c3.innerHTML = info[i].ngaysinh;
// 			c4.innerHTML = info[i].quequan;
			
// 			let aupd = document.createElement("a");
// 			aupd.href = "#";
// 			aupd.classList.add("xem_chi_tiet");
// 			aupd.innerHTML = "Xem";
// 			c5.appendChild(aupd);
// 			xemClick(aupd);
			
// 			let b = document.createElement("a");
// 			b.href = "#";
// 			b.classList.add("chinh_sua");
// 			b.innerHTML = "Sửa";
// 			c6.appendChild(b); 
// 			suaClick(b, info); 

// 			let a = document.createElement("a");
// 			a.href = "#";
// 			a.classList.add("xoa");
// 			a.innerHTML = "Xóa";
// 			c7.appendChild(a); 
// 			xoaClick(a);
			 
// 			tbody.appendChild(r);
// 		}
// 	})
// };



document.getElementById("danh_sach_tong").onclick = function loadData() {
	document.querySelector(".thong_tin_chung").classList.remove('hien_thi');
    document.querySelector(".khai_bao").classList.add('hien_thi');
	document.querySelector(".tien_do").classList.add('hien_thi');


	fetch('http://localhost:8000/api/personalInfo', {
		method: 'GET',
		headers: new Headers({
				'Authorization': document.cookie, 
				'Content-Type': 'application/json'
			  }),
	}).then(function (response) {
		return response.json()
	}).then(function (info) {
		document.querySelector('.tbl tbody').innerHTML = "";
		var tbody = document.querySelector('.tbl tbody');
		for (i = 0; i < info.length; i++) {
			r = document.createElement('tr');
			c1 = document.createElement('td');
			c2 = document.createElement('td');
			c3 = document.createElement('td');
			c4 = document.createElement('td');
			c5 = document.createElement('td');
			c6 = document.createElement('td');
			c7 = document.createElement('td');
			r.appendChild(c1);
			r.appendChild(c2);
			r.appendChild(c3);
			r.appendChild(c4);
			r.appendChild(c5);
			r.appendChild(c6);
			r.appendChild(c7);
			c1.innerHTML = info[i].id;
			c2.innerHTML = info[i].Hovaten;
			c3.innerHTML = info[i].Ngaysinh;
			c4.innerHTML = info[i].Quequan;
			
			let aupd = document.createElement("a");
			aupd.href = "#";
			aupd.classList.add("xem_chi_tiet");
			aupd.innerHTML = "Xem";
			c5.appendChild(aupd);
			xemClick(aupd, info);
			
			let b = document.createElement("a");
			b.href = "#";
			b.classList.add("chinh_sua");
			b.innerHTML = "Sửa";
			c6.appendChild(b); 
			suaClick(b, info); 

			let a = document.createElement("a");
			a.href = "#";
			a.classList.add("xoa");
			a.innerHTML = "Xóa";
			c7.appendChild(a); 
			xoaClick(a);
			 
			tbody.appendChild(r);
		}
	})
}
document.querySelector(".timkiemkv").onclick = function() {
	fetch('http://localhost:8000/api/getInformations', {
		method: 'POST',
		headers: new Headers({
				'Authorization': document.cookie, 
				'Content-Type': 'application/json'
			  }),
		body: '{"Tenkhuvuc":"' + document.querySelector("input.khu_vuc_nhan_tt").value + '"}'
	}).then(function (response) {
		return response.json()
	}).then(function (info) {
		document.querySelector('.tbl tbody').innerHTML = "";
		var tbody = document.querySelector('.tbl tbody');
		for (i = 0; i < info.length; i++) {
			r = document.createElement('tr');
			c1 = document.createElement('td');
			c2 = document.createElement('td');
			c3 = document.createElement('td');
			c4 = document.createElement('td');
			c5 = document.createElement('td');
			c6 = document.createElement('td');
			c7 = document.createElement('td');
			r.appendChild(c1);
			r.appendChild(c2);
			r.appendChild(c3);
			r.appendChild(c4);
			r.appendChild(c5);
			r.appendChild(c6);
			r.appendChild(c7);
			c1.innerHTML = info[0][i].id;
			c2.innerHTML = info[0][i].Hovaten;
			c3.innerHTML = info[0][i].Ngaysinh;
			c4.innerHTML = info[0][i].Quequan;
			
			let aupd = document.createElement("a");
			aupd.href = "#";
			aupd.classList.add("xem_chi_tiet");
			aupd.innerHTML = "Xem";
			c5.appendChild(aupd);
			xemClick1(aupd, info);
			
			let b = document.createElement("a");
			b.href = "#";
			b.classList.add("chinh_sua");
			b.innerHTML = "Sửa";
			c6.appendChild(b); 
			suaClick1(b, info); 

			let a = document.createElement("a");
			a.href = "#";
			a.classList.add("xoa");
			a.innerHTML = "Xóa";
			c7.appendChild(a); 
			xoaClick1(a);
			 
			tbody.appendChild(r);
		}
	})
}
let xemClick = function(a, info) {
	a.onclick = function() {
		var the_a = this.parentNode.parentNode.childNodes[0].innerHTML;
		document.querySelector(".modal").classList.remove('hien_thi');
		for (i = 0; i < info.length; i++) {
				if( the_a == info[i].id) {
					document.querySelector("span.ten_ct").innerHTML = info[i].Hovaten;
					document.querySelector("span.CCCD_ct").innerHTML = info[i].CCCD;
					document.querySelector("span.sex_ct").innerHTML = info[i].Gioitinh;
					document.querySelector("span.ngay_sinh_ct").innerHTML = info[i].Ngaysinh;
					document.querySelector("span.ton_giao_ct").innerHTML = info[i].Tongiao;
					document.querySelector("span.hoc_van_ct").innerHTML = info[i].Trinhdovanhoa;
					document.querySelector("span.nghe_nghiep_ct").innerHTML = info[i].Nghenghiep;
					document.querySelector("span.que_quan_ct").innerHTML = info[i].Quequan;
					document.querySelector("span.noi_khai_sinh_ct").innerHTML = info[i].Diachithuongtru;
					document.querySelector("span.noi_o_hien_tai_ct").innerHTML = info[i].Diachitamtru;
				}
				
			}

	};
	document.querySelector(".chi_tiet_button_close").onclick = function() {
		document.querySelector(".modal").classList.add('hien_thi');
	}


};

let suaClick = function (a, info) {
	a.onclick = function () {
		document.querySelector("input.sua_ten").value = "";
		document.querySelector("input.sua_CCCD").value = "";
		document.querySelector("input.sua_sex").value = "";
		document.querySelector("input.sua_ngay_sinh").value = "";
		document.querySelector("input.sua_ton_giao").value = "";
		document.querySelector("input.sua_hoc_van").value = "";
		document.querySelector("input.sua_nghe_nghiep").value = "";
		document.querySelector("input.sua_que_quan").value = "";
		document.querySelector("input.sua_thuong_tru").value = "";
		document.querySelector("input.sua_tam_tru").value = "";



		var the_a = this.parentNode.parentNode.childNodes[0].innerHTML;
		document.querySelector(".modal_2").classList.remove('hien_thi');
		for (i = 0; i < info.length; i++) {
				if (the_a == info[i].id) {
					document.querySelector("input.sua_ten").value = info[i].Hovaten;
					document.querySelector("input.sua_CCCD").value = info[i].CCCD;
					document.querySelector("input.sua_sex").value = info[i].Gioitinh;
					document.querySelector("input.sua_ngay_sinh").value = info[i].Ngaysinh;
					document.querySelector("input.sua_ton_giao").value = info[i].Tongiao;
					document.querySelector("input.sua_hoc_van").value = info[i].Trinhdovanhoa;
					document.querySelector("input.sua_nghe_nghiep").value = info[i].Nghenghiep;
					document.querySelector("input.sua_que_quan").value = info[i].Quequan;
					document.querySelector("input.sua_thuong_tru").value = info[i].Diachithuongtru;
					document.querySelector("input.sua_tam_tru").value = info[i].Diachitamtru;
				}

			}

		document.querySelector("button.chinh_sua_btn").onclick = function () {

			var okie = true; //chua co loi
			//xoa cac thong bao loi
			document.getElementById("loi_hoten_sua").innerHTML = "";
			document.getElementById("loi_ngay_sinh_sua").innerHTML = "";
			document.getElementById("loi_que_quan_sua").innerHTML = "";
			document.getElementById("loi_thuong_tru_sua").innerHTML = "";
			document.getElementById("loi_tam_tru_sua").innerHTML = "";

			//kiem tra cac truong bat buoc nhap
			if (document.querySelector("input.sua_que_quan").value == "") {
				document.getElementById("loi_que_quan_sua").innerHTML = "Quý vị chưa nhập địa chỉ";
				document.querySelector("input.sua_que_quan").focus();
				okie = false;
			}
			if (document.querySelector("input.sua_thuong_tru").value == "") {
				document.getElementById("loi_thuong_tru_sua").innerHTML = "Quý vị chưa nhập địa chỉ";
				document.querySelector("input.sua_thuong_tru").focus();
				okie = false;
			}
			if (document.querySelector("input.sua_tam_tru").value == "") {
				document.getElementById("loi_tam_tru_sua").innerHTML = "Quý vị chưa nhập địa chỉ";
				document.querySelector("input.sua_tam_tru").focus();
				okie = false;
			}


			if (document.querySelector("input.sua_ngay_sinh").value == "") {
				document.getElementById("loi_ngay_sinh_sua").innerHTML = "Quý vị chưa nhập ngày sinh";
				document.querySelector("input.sua_ngay_sinh").focus();
				okie = false;
			} else if (!laNgayThang(document.querySelector("input.sua_ngay_sinh").value)) {
				document.getElementById("loi_ngay_sinh_sua").innerHTML = "Ngày sinh không đúng định dạng";
				document.querySelector("input.sua_ngay_sinh").focus();
				okie = false;
			}


			if (document.querySelector("input.sua_ten").value == "") {
				document.getElementById("loi_hoten_sua").innerHTML = "Quý vị chưa nhập họ tên";
				document.querySelector("input.sua_ten").focus();
				okie = false;
			}
			if(okie) {
				fetch("http://localhost:8000/api/personalInfo/" + the_a , {
					method: "PATCH",
					headers: new Headers({
						'Authorization': document.cookie,
						'Content-Type': 'application/json'
					}),
					body: '{"Hovaten":"' + document.querySelector("input.sua_ten").value +
						'","CCCD":"' + document.querySelector("input.sua_CCCD").value +
						'", "Gioitinh":"' + document.querySelector("input.sua_sex").value +
						'", "Ngaysinh":"' + document.querySelector("input.sua_ngay_sinh").value +
						'", "Tongiao":"' + document.querySelector("input.sua_ton_giao").value +
						'","Trinhdovanhoa":"' + document.querySelector("input.sua_hoc_van").value +
						'", "Nghenghiep":"' + document.querySelector("input.sua_nghe_nghiep").value +
						'", "Quequan":"' + document.querySelector("input.sua_que_quan").value +
						'", "Diachithuongtru":"' + document.querySelector("input.sua_thuong_tru").value +
						'", "Diachitamtru":"' + document.querySelector("input.sua_tam_tru").value + '" }'
				}).then(resp => {
						if (resp.status == 200) {
							resp.json()
								.then(ret => {
									if (ret.status == "OK") {
										if (ret.data == 1) {
											document.querySelector(".sua_thanh_cong").classList.remove("hien_thi");
										}
										else {
											document.querySelector(".sua_that_bai").classList.remove("hien_thi");
										}
									} else {

									}
								});
						} else {

						}
				});
			}
		}
	}

	document.querySelector(".sua_button_close").onclick = function () {
		document.querySelector(".modal_2").classList.add('hien_thi');
	};
}

let xoaClick = function (a) {
	a.onclick = function() {
		var the_a = this.parentNode.parentNode.childNodes[0].innerHTML;
		if(confirm("Bạn có muốn xóa " + this.parentNode.parentNode.childNodes[1].innerHTML + ", mã số " + this.parentNode.parentNode.childNodes[0].innerHTML)) {
			let soCCCD = this.parentNode.parentNode.childNodes[1].innerHTML;
			fetch("http://localhost:8000/api/personalInfo/" + the_a , {
					method: "DELETE",
					headers: new Headers({
						'Authorization': document.cookie,
						'Content-Type': 'application/json'
					}),
			}).then(resp => {
				if (resp.status == 200) {
					resp.json()
					.then(ret => {
						if (ret.status == "OK") { 
							if (ret.data == 1) {
								let tb = this.parentNode.parentNode.parentNode;
								tb.removeChild(a.parentNode.parentNode);
								
							}
						}
					});
				}
			});
		} else { return false;}
	};
};




document.querySelector(".bao_cao_ht").onclick = function() {
	fetch("http://localhost:8000/api/hoanthanh", {
		method: "POST",
		headers: new Headers({
			'Authorization': document.cookie, 
			'Content-Type': 'application/json'
		  }),
		body: '{"status":"1"}'
	})
	.then(resp => {
		if (resp.status == 200) {
			resp.json()
			.then(ret => {
				if (ret.status == "OK") {
					if (ret.data == 1) {
						confirm("Bạn đã hoàn thành báo cáo");
					}
					else {
					}
				} else {
					// Xử lý lỗi HTTP
				}
			});
		} else {
			// Xử lý lỗi HTTP
		}
	});
}

document.querySelector("#dang_xuat_btn").onclick = function() {
	fetch("http://localhost:8000/api/logout", {
		method: "POST",
		headers: new Headers({
			'Authorization': document.cookie, 
			'Content-Type': 'application/json'
		  }),
		body: '{"status":"1"}'
	})
	.then(resp => {
		if (resp.status == 200) {
			resp.json()
			.then(ret => {
				if (ret.status == "OK") {
					if (ret.data == 1) {
						document.location.href = "dang_nhap.html";
					}
					else {
					}
				} else {
					// Xử lý lỗi HTTP
				}
			});
		} else {
			// Xử lý lỗi HTTP
		}
	});
}

let xemClick1 = function(a, info) {
	a.onclick = function() {
		var the_a = this.parentNode.parentNode.childNodes[0].innerHTML;
		document.querySelector(".modal").classList.remove('hien_thi');
		for (i = 0; i < info[0].length; i++) {
				if( the_a == info[0][i].id) {
					document.querySelector("span.ten_ct").innerHTML = info[0][i].Hovaten;
					document.querySelector("span.CCCD_ct").innerHTML = info[0][i].CCCD;
					document.querySelector("span.sex_ct").innerHTML = info[0][i].Gioitinh;
					document.querySelector("span.ngay_sinh_ct").innerHTML = info[0][i].Ngaysinh;
					document.querySelector("span.ton_giao_ct").innerHTML = info[0][i].Tongiao;
					document.querySelector("span.hoc_van_ct").innerHTML = info[0][i].Trinhdovanhoa;
					document.querySelector("span.nghe_nghiep_ct").innerHTML = info[0][i].Nghenghiep;
					document.querySelector("span.que_quan_ct").innerHTML = info[0][i].Quequan;
					document.querySelector("span.noi_khai_sinh_ct").innerHTML = info[0][i].Diachithuongtru;
					document.querySelector("span.noi_o_hien_tai_ct").innerHTML = info[0][i].Diachitamtru;
				}
				
			}

	};
	document.querySelector(".chi_tiet_button_close").onclick = function() {
		document.querySelector(".modal").classList.add('hien_thi');
	}


};

let suaClick1 = function (a, info) {
	a.onclick = function () {
		document.querySelector("input.sua_ten").value = "";
		document.querySelector("input.sua_CCCD").value = "";
		document.querySelector("input.sua_sex").value = "";
		document.querySelector("input.sua_ngay_sinh").value = "";
		document.querySelector("input.sua_ton_giao").value = "";
		document.querySelector("input.sua_hoc_van").value = "";
		document.querySelector("input.sua_nghe_nghiep").value = "";
		document.querySelector("input.sua_que_quan").value = "";
		document.querySelector("input.sua_thuong_tru").value = "";
		document.querySelector("input.sua_tam_tru").value = "";



		var the_a = this.parentNode.parentNode.childNodes[0].innerHTML;
		document.querySelector(".modal_2").classList.remove('hien_thi');
		for (i = 0; i < info[0].length; i++) {
				if (the_a == info[0][i].id) {
					document.querySelector("input.sua_ten").value = info[0][i].Hovaten;
					document.querySelector("input.sua_CCCD").value = info[0][i].CCCD;
					document.querySelector("input.sua_sex").value = info[0][i].Gioitinh;
					document.querySelector("input.sua_ngay_sinh").value = info[0][i].Ngaysinh;
					document.querySelector("input.sua_ton_giao").value = info[0][i].Tongiao;
					document.querySelector("input.sua_hoc_van").value = info[0][i].Trinhdovanhoa;
					document.querySelector("input.sua_nghe_nghiep").value = info[0][i].Nghenghiep;
					document.querySelector("input.sua_que_quan").value = info[0][i].Quequan;
					document.querySelector("input.sua_thuong_tru").value = info[0][i].Diachithuongtru;
					document.querySelector("input.sua_tam_tru").value = info[0][i].Diachitamtru;
				}

			}

		document.querySelector("button.chinh_sua_btn").onclick = function () {

			var okie = true; //chua co loi
			//xoa cac thong bao loi
			document.getElementById("loi_hoten_sua").innerHTML = "";
			document.getElementById("loi_ngay_sinh_sua").innerHTML = "";
			document.getElementById("loi_que_quan_sua").innerHTML = "";
			document.getElementById("loi_thuong_tru_sua").innerHTML = "";
			document.getElementById("loi_tam_tru_sua").innerHTML = "";

			//kiem tra cac truong bat buoc nhap
			if (document.querySelector("input.sua_que_quan").value == "") {
				document.getElementById("loi_que_quan_sua").innerHTML = "Quý vị chưa nhập địa chỉ";
				document.querySelector("input.sua_que_quan").focus();
				okie = false;
			}
			if (document.querySelector("input.sua_thuong_tru").value == "") {
				document.getElementById("loi_thuong_tru_sua").innerHTML = "Quý vị chưa nhập địa chỉ";
				document.querySelector("input.sua_thuong_tru").focus();
				okie = false;
			}
			if (document.querySelector("input.sua_tam_tru").value == "") {
				document.getElementById("loi_tam_tru_sua").innerHTML = "Quý vị chưa nhập địa chỉ";
				document.querySelector("input.sua_tam_tru").focus();
				okie = false;
			}


			if (document.querySelector("input.sua_ngay_sinh").value == "") {
				document.getElementById("loi_ngay_sinh_sua").innerHTML = "Quý vị chưa nhập ngày sinh";
				document.querySelector("input.sua_ngay_sinh").focus();
				okie = false;
			} else if (!laNgayThang(document.querySelector("input.sua_ngay_sinh").value)) {
				document.getElementById("loi_ngay_sinh_sua").innerHTML = "Ngày sinh không đúng định dạng";
				document.querySelector("input.sua_ngay_sinh").focus();
				okie = false;
			}


			if (document.querySelector("input.sua_ten").value == "") {
				document.getElementById("loi_hoten_sua").innerHTML = "Quý vị chưa nhập họ tên";
				document.querySelector("input.sua_ten").focus();
				okie = false;
			}
			if(okie) {
				fetch("http://localhost:8000/api/personalInfo/" + the_a , {
					method: "PATCH",
					headers: new Headers({
						'Authorization': document.cookie,
						'Content-Type': 'application/json'
					}),
					body: '{"Hovaten":"' + document.querySelector("input.sua_ten").value +
						'","CCCD":"' + document.querySelector("input.sua_CCCD").value +
						'", "Gioitinh":"' + document.querySelector("input.sua_sex").value +
						'", "Ngaysinh":"' + document.querySelector("input.sua_ngay_sinh").value +
						'", "Tongiao":"' + document.querySelector("input.sua_ton_giao").value +
						'","Trinhdovanhoa":"' + document.querySelector("input.sua_hoc_van").value +
						'", "Nghenghiep":"' + document.querySelector("input.sua_nghe_nghiep").value +
						'", "Quequan":"' + document.querySelector("input.sua_que_quan").value +
						'", "Diachithuongtru":"' + document.querySelector("input.sua_thuong_tru").value +
						'", "Diachitamtru":"' + document.querySelector("input.sua_tam_tru").value + '" }'
				}).then(resp => {
						if (resp.status == 200) {
							resp.json()
								.then(ret => {
									if (ret.status == "OK") {
										if (ret.data == 1) {
											document.querySelector(".sua_thanh_cong").classList.remove("hien_thi");
										}
										else {
											document.querySelector(".sua_that_bai").classList.remove("hien_thi");
										}
									} else {

									}
								});
						} else {

						}
				});
			}
		}
	}

	document.querySelector(".sua_button_close").onclick = function () {
		document.querySelector(".modal_2").classList.add('hien_thi');
	};
}

let xoaClick1 = function (a) {
	a.onclick = function() {
		var the_a = this.parentNode.parentNode.childNodes[0].innerHTML;
		if(confirm("Bạn có muốn xóa " + this.parentNode.parentNode.childNodes[1].innerHTML + ", mã số " + this.parentNode.parentNode.childNodes[0].innerHTML)) {
			let soCCCD = this.parentNode.parentNode.childNodes[1].innerHTML;
			fetch("http://localhost:8000/api/personalInfo/" + the_a , {
					method: "DELETE",
					headers: new Headers({
						'Authorization': document.cookie,
						'Content-Type': 'application/json'
					}),
			}).then(resp => {
				if (resp.status == 200) {
					resp.json()
					.then(ret => {
						if (ret.status == "OK") { 
							if (ret.data == 1) {
								let tb = this.parentNode.parentNode.parentNode;
								tb.removeChild(a.parentNode.parentNode);
								
							}
						}
					});
				}
			});
		} else { return false;}
	};
};

document.querySelector(".btn_xoa_quyen").onclick = function() {
	fetch("http://localhost:8000/api/khoaquyen", {
					method: "POST",
					headers: new Headers({
						'Authorization': document.cookie,
						'Content-Type': 'application/json'
					}),
					body:'{"username":"' + document.querySelector("input.ten_tai_khoan_xoa").value + '"}'
			}).then(resp => {
				if (resp.status == 200) {
					resp.json()
					.then(ret => {
						if (ret.status == "OK") { 
							if (ret.data == 1) {
								confirm('Xóa quyền thành công');
							}
						}
					});
				}
			});
}
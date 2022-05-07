// document.getElementById("hoten").focus();

// document.getElementById("hoten").onblur = function() {
// 	this.value = ChuanhoaTen(this.value);
// };

// document.getElementById("hoten").onkeyup = function(e) {
// 	DoKeyup(e, this, 'diachi');
// };

// document.getElementById("diachi").onkeyup = function(e) {
// 	DoKeyup(e, this, 'nam');
// };

// document.getElementById("nam").onkeyup = function(e) {
// 	DoKeyup(e, this, 'nu');
// };

// document.getElementById("nu").onkeyup = function(e) {
// 	DoKeyup(e, this, 'ngaysinh');
// };

// document.getElementById("ngaysinh").onkeyup = function(e) {
// 	DoKeyup(e, this, 'email');
// };

// document.getElementById("email").onkeyup = function(e) {
// 	DoKeyup(e, this, 'codinh');
// };

// function DoKeyup(e, myself, nextcontrolid) {
// 	if (window.event) e = window.event; //de chay ca tren IE
// 	if (e.keyCode == 13) {
// 		document.getElementById(nextcontrolid).focus();
// 	}
// }

// function Chapnhan() {
// 	var okie = true; //chua co loi
// 	//xoa cac thong bao loi
// 	document.getElementById("loi_hoten").innerHTML  = "";
// 	document.getElementById("loi_ngaysinh").innerHTML = "";
// 	document.getElementById("loi_email").innerHTML = "";
// 	document.getElementById("loi_username").innerHTML = "";
// 	document.getElementById("loi_pass").innerHTML = "";
// 	document.getElementById("loi_repass").innerHTML = "";

//     //kiem tra cac truong bat buoc nhap
// 	if (document.getElementById("pass").value == "") {
// 		document.getElementById("loi_pass").innerHTML = "Quý vị chưa nhập mật khẩu";
// 		document.getElementById("pass").focus();
// 		okie = false;
// 	} else if (document.getElementById("repass").value == "") {
// 		document.getElementById("loi_repass").innerHTML = "Quý vị chưa gõ lại mật khẩu";
// 		document.getElementById("repass").focus();
// 		okie = false;
// 	} else if (document.getElementById("pass").value  != document.getElementById("repass").value ) {
// 		document.getElementById("loi_pass").innerHTML = "Mật khẩu và gõ lại mật khẩu không trùng nhau";
// 		document.getElementById("pass").focus();
// 		okie = false;
// 	}

// 	if (document.getElementById("username").value == "") {
// 		document.getElementById("loi_username").innerHTML = "Quý vị chưa nhập tên sử dụng";
// 		document.getElementById("username").focus();
// 		okie = false;
// 	} else if (!laTenSD(document.getElementById("username").value)) {
// 		document.getElementById("loi_username").innerHTML = "Tên sử dụng không đúng định dạng";
// 		document.getElementById("username").focus();
// 		okie = false;
// 	}

// 	if (document.getElementById("email").value == "") {
// 		document.getElementById("loi_email").innerHTML = "Quý vị chưa nhập e-mail";
// 		document.getElementById("email").focus();
// 		okie = false;
// 	} else if (!laEmail(document.getElementById("email").value)) 				{
// 		document.getElementById("loi_email").innerHTML = "E-mail không đúng định dạng";
// 		document.getElementById("email").focus();
// 		okie = false;
// 	}

// 	if (document.getElementById("ngaysinh").value == "") {
// 		document.getElementById("loi_ngaysinh").innerHTML = "Quý vị chưa nhập ngày sinh";
// 		document.getElementById("ngaysinh").focus();
// 		okie = false;
// 	} else if (!laNgayThang(document.getElementById("ngaysinh").value)) {
// 		document.getElementById("loi_ngaysinh").innerHTML = "Ngày sinh không đúng định dạng";
// 		document.getElementById("ngaysinh").focus();
// 		okie = false;
// 	}


// 	if (document.getElementById("hoten").value == "") {
// 		document.getElementById("loi_hoten").innerHTML = "Quý vị chưa nhập họ tên";
// 		document.getElementById("hoten").focus();
// 		okie = false;
// 	}

// 	//neu tất cả các dữ liệu được nhập đúng đắn
// 	//submit form
// 	if (okie) document.getElementById("form1").submit();
// }

// //kiem tra s la email hay khong
// function laEmail(s) {
// 	return true;
// }

// //kiem tra s la ten su dung hop le hay khong
// function laTenSD(s) {
// 	return true;
// }

// function laNgayThang(d) { //d = nn/tt/nnnn
//     //kiem tra d co phai la ngay thang
// 	//tach xau d boi dau /
// 	s = d.split('/');

// 	if (s.length != 3) return false; //phai co 3 phan
// 	if (isNaN(s[0]) || isNaN(s[1]) || isNaN(s[2])) return false;//ca 3 la so

// 	//chuyen thanh cac so nguyen
// 	ngay = parseInt(s[0]);
// 	thang = parseInt(s[1]);
// 	nam = parseInt(s[2]);

// 	//kiem tra
// 	if (thang > 12 || thang < 1) return false;
// 	if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12) {
// 		if (ngay > 31) return false;
// 	} else if (thang == 2){
// 		if (nam%4 == 0 && nam%100 != 0) {
// 			if (ngay > 29) return false;
// 		} else if (ngay > 28) return false;
// 	} else if (ngay > 30) return false;

// 	if (ngay < 1) return false;

// 	date = new Date();
// 	if (nam > date.getFullYear() || nam < 1950) return false;

// 	return true;
// }


// //chuan hoa ten
// function ChuanhoaTen(ten) {
// 	dname = ten;
// 	ss = dname.split(' ');
// 	dname = "";
// 	for (i = 0; i < ss.length; i++)
// 		if (ss[i].length > 0) {
// 			if (dname.length > 0) dname = dname + " ";
// 			dname = dname + ss[i].substring(0, 1).toUpperCase();
// 			dname = dname + ss[i].substring(1).toLowerCase();
// 		}
// 	return dname;
// }

// //bam nut bo qua
// function Boqua() {
// 	document.location.href = "../";
// }

// // hien thi anh chan dung
// document.getElementById("FileUpload1").onchange = function () {
//     let preview = document.querySelector("img.preview");
//     let file = this.files[0];
//     let reader = new FileReader();
//     reader.onload = function () {
//         preview.src = reader.result;
//     };
//     if (file) {
//         reader.readAsDataURL(file);
//         preview.classList.remove("nodisplay");
//     }
// };



















//global variables
var keyword = $("#keyword");
var filterSelect = $("#filter-select");
var keywordHref = $("#keyword-button").attr("href");
var keywordVal = "";
/*var filters = {
  "aardvark" : { sprite : "" }
}
var filterArray = Object.keys(filters);*/

//the filter array.  It should probably be organized better, or possibly broken down into a few arrays.  You can collapse it, since it takes up a lot of space.  These are actual popular search terms at paviliongift.com.
var filterArray = ["05853 in memory candle holder","05971 stars in the sky candle holder","19050 heaven in our home frame","19045 stars in the sky angel","19043 mother angel","82045 with sympathy angel","82224 stars in the sky angel","19009 in memory candle holder","82351 in memory angel","66111 teacher mug","74033 mother mug","19044 in memory angel","82294 sympathy angel","19060 father memorial stone","19058 stars memorial stone","82249 mother in memory angel","82338 stars in the sky angel","82328 best things in life angel","66120 retirement mug","61034 teacher mug","66101 mother mug","61044 mother plaque","66105 grandmother mug","72150 dog door stopper","72151 bless this home door stopper","72157 home door stopper","72160 welcome door stopper","72198 dog door stopper","72196 shut the front door stopper","66241 dad mug","75117 girlfriends mug","75113 friendships mug","67220 wine frame","79207 fox baby leggings","79217 elephant baby leggings","79246 camouflage baby leggings","67089 white fishing hat","81073 friends snowman with penguin","81085 snowman holding birdhouse","81125 family love","81123 snowman and moose","74056 joy bicycle mug","74036 sister mug","74027 grandma plaque","61049 teachers plaque","74053 survivor mug","82344 teacher angel ornament","74067 friend teapot","02998 october bird figurine","angels","angels elements","accents","aunt","aunt gift","aunt mug","adjustable hats","amylee weeks","angel figurines","angel holding flowers","angel ornaments","angels mother","angels grandmother","angels friend","angels in memory","angels god","angels simple spirits","angels light your way","angels country soul","angels perfectly paisley","angel praying","angel holding cross","angel holding heart","angel holding dove","angel holding butterfly","angel holding book","angel birthstone","angel blonde hair","angel brown hair","angel black hair","angel bible","amylee weeks mugs","baby","baby leggings","birchhearts christmas figurines","birthday","birthday gifts","black lab","baby girl","baby boy","baby unisex","baby hats","baby bibs","baby blankets","birthday angel","birthday mug","bloom by amylee weeks","bloom by amylee weeks mugs","birthstone","birthstone angels","birthstone necklace","birthstone bracelet","breast cancer awareness","bird","bird mug","bird figurine","bird plaque","boxer","beach","baptism","bunny","butterfly","butterfly figurine","butterfly mug","butterfly plaque","butterfly angel","baseball hats","blue","brown hair angel","blonde hair angel","bible","blessed","blanket baby","beer","beer glasses","beer bottle magnets","beer bottle lanterns","comfort candles","candle holders","coffee mugs","cat","christmas","christmas gift","christmas decor","christmas ornament","christmas figurines","christmas angels","cross","country soul","country soul angels","candles","candle holders tealight","candle holders glass","candle holders terra cotta","candle holders memorial","candle holders stars","candle holders round","cat mugs","cat magnets","cat wall art","cat mom","communion","cute","cork","cork holder","cork bag","canvas","canvas tote","ceramic mug","coasters","cookie jars","cat orange","cat black","door stopper","decorative","dog","dog mugs","dad","dad mugs","daughter","decorative figurines","double angel","december","distressed wood","dog door stoppers","dog key chains","dog coin banks","dog vases","dog salt pepper shakers","dishwaser safe","diamond","elements","elements angels","earrings","earrings swarovski","earrings silver","earrings gold","eat share love","easel back","figurine","figurine angel","faith","family","family angel","family mug","family ornament","friend","friendship","friend angel","friend mug","friend ornament","frames","funny","funny mugs","funny magnets","father","football","flower","flower angel","flower figurine","fox","gift mother","globe","god bless","golden retriever","gift grandmother","gift aunt","gift friend","gift teacher","gift nurse","gift dad","gift sister","gift box","godmother","grandmother","grandmother angel","grandma","grandma mug","global love","global love mugs","global love ornaments","graduation","german shepherd","granddaughter","god","grandparents","grandson","glass","gray","home","home decor","hiccup","hand painted","heart","heart angel","heaven","heavenly woods","heavenly winter woods","husband","hats","hats baseball","hats fishing","hats mom","handbags","home door stopper","home plaque","halloween","high quality ceramic","home sweet home","hope","in memory","in memory angels","in memory candle holders","izzy & owie","izzy & owie baby leggings","izzy & owie blanket","izzy & owie baby hats","in memory grandmother","jewelry","jewelry swarovski","jessie steele","jesus","kitchen","keepsake","keepsake box","kindness angel","key chains","keyhole hanger","knife","leggings baby","lit LED","leather","lake","lake people","lake tote","lake picture frame","love","love angel","light your way","light your way angels","light your way memorial","light your way every day","leather purse","lantern","mug","mom gift","musical water globes","magnets","mugs mom","mugs grandma","mugs dad","mugs mark my words","mugs we people","mugs bloom by amylee weeks","magnets dog","magnets funny","marquee","mother","mother angel","mother mug","mother memorial","mother plaque","music box","mom mugs","mom angels","mom plaque","my pedigree pals","mark my words","mark my words mugs","mom love","mom love mugs","mom love shirts","merry christmas","memory","memory grandmother","modeles","modeles angels","merlot","microwave safe","men shirt","nana","nana gift","nurse","nurse gift","nurse angel","nurse mug","nativity","necklace","necklace swarovski","november birthstone","notepads","open door decor door stoppers","ornaments","owl","ornaments angels","ornaments birchhearts","ornaments snowman","october birthstone","picture frames","pet","pet mug","pug","pedigree pals","pedigree pals mugs","pedigree pals plaques","pilsner beer glass","perfectly paisley","paw palettes","paw palettes mugs","popular","popular gifts","pink ribbon","pink mug","pink angel","polyresin","polyresin figurine","polyresin angel","polyresin ornament","purse","purse leather","pens","pen sets","purple","peace","plaques","plaques friend","plaques mother","purple shirt","photo frames","plate","plate glass","planters","retirement","round candle holder","rescue me now","remove your shoes","rememberance","sister","sister mug","sister angel","swarovski","sockings","sympathy","snowman","snowman figurine","simple spirits","simple spirits angels","simple spirits figurines","shot glasses","shot glass girl","survivor","stars in the sky","shut the front door","star of wonder plaques","stoneware","stoneware mug","stoneware bowl","sawtooth hanger","tea","tea mugs","the birchhearts","teacher","teacher mug","teacher angel","teacher plaque","the sockings","tray","tea for one","teapot","tealights","tealight candle holders","tote bags","travel mugs","terra cotta","vintage","vase","vase dog","vase cat","vintage by stephanie ryan","violet","water globes","water globes musical","wine","we people","with god","wreaths","wine tumbler","wine glasses","wine hiccup","we people hats","we people mugs","we people picture frames","wine candle holders","wedding","wedding gifts","waggy dogz","waggy dogz door stoppers","waggy dogz mugs","wood","wall art","wall hanging","wallet","women shirt","yellow","yellow lab","yellow shirt","you are my world"];
var newFilter = [];
var tabIndex = -1;
//Events

keyword.on("focus", function(e){
  e.preventDefault();
  if (keywordVal !== "" && keydownTarget !== 9 && keydownTarget !== 16 && keydownTarget !== 38 && keydownTarget !== 40 && newFilter.length > 1) {
    fillSelect();
  }
});
keyword.on("keyup", function(e) {
  keywordVal = $(this).val();
  keydownTarget = e.which;
  var ignoreKeys = e.which !== 9 && e.which !== 16 && e.which !== 38 && e.which !== 40;
  if (keywordVal !== "" && ignoreKeys) { 
     newFilter = filterArray.filter(isResult);
    if (newFilter.length === 0) {
      removeListBlur();
      return false;
    }
        //keyword.val(newFilter[0]);
        //keyword[0].setSelectionRange(selectRange, newFilter[0].length);
  }
  
  if (e.which !== 9 && ignoreKeys) {
    fillSelect();
    tabIndex = -1;
    if (newFilter.length === 0) {
      removeListBlur();
      return false;
    }
    
  }
});
keyword.on("keydown", function(e) {
  if (keywordVal !== "") {
    if (e.which === 9) {
    e.preventDefault();
      keydownTarget = e.which;
    if (!e.shiftKey) {
      cycleSelectList("next");
    }
    if (e.shiftKey) { 
      cycleSelectList("previous");
    }
  }
    if (e.which === 38 || e.which === 40) {
      e.preventDefault();
      keydownTarget = e.which;
    }
    if (e.which === 38) {
      cycleSelectList("previous");
    }
    else if (e.which === 40) {
      cycleSelectList("next");
    }
  }
  if (e.which === 13) {
    $("#keyword-button").click()
  }
});
/*use mousedown instead of click because the keyword blur event is firing before this call back can occur*/
$("#filter-select").on("mousedown",".filter-select-list", function(e){
  e.preventDefault();
  var $this = $(this);
  var currentIndex = $this.index();
  tabIndex = currentIndex;
  keydownTarget = 9;
  cycleSelectList("none");
});
keyword.on('blur', removeListBlur);
//helper functions
function isResult(val) {
    return val.indexOf(keywordVal.toLowerCase()) === 0 
}
function removeListBlur() {
  if (filterSelect.has("li").length) {
    filterSelect.addClass("no-value").children("li").remove();
  }
}
function cycleSelectList(direction) {
  var newList = filterSelect.find("li");
   if (direction === "previous") {
      if (tabIndex <= 0) {
        tabIndex = newList.length;
      }
      tabIndex--;
    }
    else if (direction === "next") {
      tabIndex++;
      if (tabIndex === newList.length) {
        
        tabIndex = 0;
      }
    }
  newList.eq(tabIndex).addClass("list-highlight");
  keyword.val(newList.eq(tabIndex).attr("data-value"));
  newList.not(newList.eq(tabIndex)).removeClass("list-highlight");
    keyword.focus();
}
function fillSelect() {
  filterSelect.children("li").remove();
  //filterSelect.attr("size",newFilter.length)
  if (keywordVal !== "") {
    filterSelect.removeClass("no-value");
  for (var i = 0; i < newFilter.length; i++) {
    filterSelect.append("<li class='filter-select-list' data-value='" + newFilter[i] + "'>" + newFilter[i] + "</li>");
    //filters[i].sprite;
  }
  }
  else {
    filterSelect.addClass("no-value");
  }
}
//for demo purposes only
$("#keyword-button").on("click", fillHref)
function fillHref() {
  var newHrefString = keywordHref + keyword.val().replace(/\s+/g, '+');
  var newHref = $("#keyword-button").attr("href", newHrefString);
}
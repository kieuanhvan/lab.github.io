function init(){
 var htmlEnterName = document.getElementById("EnterName");
 htmlEnterName.onclick = getName;
 
 var htmlPhoneNumber = document.getElementById("phoneNumber");
  htmlPhoneNumber.onclick = getPhoneNumber;

 var htmlAddRess = document.getElementById("addRess");
 htmlAddRess.onclick = getAddress;
 
 var htmlQuestion = document.getElementById("question");
 htmlQuestion.onclick = getQuestion;
}
window.onload = init;





// nhap ten
function getName(){
		var name = prompt("Nhập vô tên anh bạn: ");
		var getIdName = document.getElementById("name");
		getIdName.textContent = name;
		// function_name(name);
		
}
// nhap sdt
function getPhoneNumber(){
		var name = prompt("Nhập vô số điện thoại: ");
		var getIdName = document.getElementById("sdt");
		getIdName.textContent = name;
		// function_name(name);
}
// 
function getAddress(){
		var name = prompt("Nhập vô địa chỉ: ");
		var getIdName = document.getElementById("address");
		getIdName.textContent = name;
		// function_name(name);

}
function getQuestion(){
		var name = prompt("Nhập vô thắc mắc của bạn: ");
		var getIdName = document.getElementById("que");
		getIdName.textContent = name;
		// function_name(name);

}
// hien thi full
// function function_name(info) {
// 	var inforr = " " + info;
// 	var getIdName = document.getElementById("newww");
// 	getIdName.textContent = getIdName;
// }


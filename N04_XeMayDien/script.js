//Thiết kế đáp ứng thanh menubarfunction toggleMenu() {
function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

//Hàm kiểm tra dữ liệu tìm kiếm
function checkSearch(event){
	var keyCode=event.keyCode;
	var searchInput=document.querySelector('.search-txt');
	var searchData=searchInput.value.trim();
	if(keyCode===32){
		if(searchData===''){
			alert("Không được để trống");
			return false;
		}
		console.log('Tìm kiếm: ', searchData);
	}
	
}
//Hàm kiểm tra dữ liệu đầu vào trang đăng nhập
function lginValidate(frm){
	let emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	if ( emailReg.test(frm.email.value) == false ) {
		alert("Vui lòng nhập email hợp lệ.");
		frm.email.focus();
		return false;
	}
	var pswReg=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g;
	if(pswReg.test(frm.psw.value)==false){
		alert("Vui lòng nhập đúng mật khẩu");
		frm.password.focus();
		return false;
	}
	return true;
}
//Hàm kiểm tra dữ liệu đầu vào trang đăng kí
function regValidate(frm){
	let emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	if ( emailReg.test(frm.email.value) == false ) {
		alert("Vui lòng nhập email hợp lệ.");
		frm.email.focus();
		return false;
	}
	let psw1Reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g;
	if(psw1Reg.test(frm.password1.value)== false){
		alert("Mật khẩu phải ít nhất 8 kí tự, bao gồm chữ thường, chữ hoa, số và kí tự đặt biệt");
		frm.password1.focus();
		return false;
	}
	let psw2 = frm.password2.value;
	if(password1.value != psw2){
		alert("Vui lòng nhập mật khẩu trùng với mật khẩu trước đó");
		frm.password2.focus();
		return false;
	}
	if(frm.checkbox.checked==false){
		alert("Vui lòng đồng ý với chính sách & điều khoản của chúng tôi");
		frm.checkbox.focus();
		return false;
	}
	return true;
}
//Hàm kiểm tra dữ liệu gửi ý kiến
function regOpinion(form) {
    var name = form.name.value.trim();
    var input = form.input.value.trim();
    var idea = form.idea.value.trim();

    if (name === '') {
        alert("Vui lòng nhập Họ và Tên.");
        form.name.focus();
        return false;
    }

    if (input === '') {
        alert("Vui lòng nhập Số điện thoại hoặc Email.");
        form.input.focus();
        return false;
    }

    if (idea === '') {
        alert("Vui lòng nhập Nội dung cần liên hệ.");
        form.idea.focus();
        return false;
    }

    return true;
}

//List sản phẩm
var ListItem={
	"vin-sp01":{
		"name":"Xe máy điện VinFast Evo200",
		"price":18000000,
		"photo":[
			"image/trangchu/sp1.1.jpg",
			"image/trangchu/sp1.2.jpg",
			"image/trangchu/sp1.3.jpg",
			"image/trangchu/sp1.4.jpg",
			"image/trangchu/sp1.5.jpg"
		],
		"color":[
			"Vàng",
			"Đen",
			"Đỏ",
			"Xanh đen",
			"Trắng"
		]
	},
	"vin-sp02":{
		"name":"Xe máy điện VinFast Klara S (2022)",
		"price":35000000,
		"photo":[
			"image/trangchu/sp2.1.jpg",
			"image/trangchu/sp2.2.jpg",
			"image/trangchu/sp2.3.jpg",
			"image/trangchu/sp2.4.jpg",
			"image/trangchu/sp2.5.jpg"
		],
		"color":[
			"Trắng",
			"Đỏ",
			"Đen",
			"Xanh đen",
			"Xanh rêu"
		]
	},
	"vep-sp03":{
		"name":"Xe máy điện Vespa Ga 50CC Roma SX",
		"price":35000000,
		"photo":[
			"image/trangchu/sp3.1.jpg",
			"image/trangchu/sp3.2.jpg",
			"image/trangchu/sp3.3.jpg",
			"image/trangchu/sp3.4.jpg",
			"image/trangchu/sp3.5.jpg",
			"image/trangchu/sp3.6.jpg",
			"image/trangchu/sp3.7.jpg"
		],
		"color":[
			"Xanh lam",
			"Đỏ",
			"Trắng",
			"Xanh lơ",
			"Kem",
			"Đen",
			"Xanh nhám"
		]
	},
	"vep-sp04":{
		"name":"Xe máy điện Vespa Sprint Notte 125",
		"price":78000000,
		"photo":[
			"image/trangchu/sp4.1.jpg"
		],
		"color":[
			"Đen"
		]
	},
	"vin-sp05":{
		"name":"Xe máy điện VinFast Vintro S",
		"price":50000000,
		"photo":[
			"image/trangchu/sp5.1.jpg",
			"image/trangchu/sp5.2.jpg",
			"image/trangchu/sp5.3.jpg",
			"image/trangchu/sp5.4.jpg",
			"image/trangchu/sp5.6.jpg"
		],
		"color":[
			"Vàng",
			"Đen",
			"Xanh lá",
			"Đỏ",
			"Trắng"
		]
	},
	"dk-sp06":{
		"name":"Xe máy điện DK Roma Si",
		"price":23500000,
		"photo":[
			"image/trangchu/sp6.1.jpg"
		],
		"color":[
			"Đen"
		]
	},
	"dk-sp07":{
		"name":"Xe máy điện DK Roma Lite ",
		"price":"18400000",
		"photo":[
			"image/trangchu/sp7.1.jpg",
			"image/trangchu/sp7.2.jpg",
			"image/trangchu/sp7.3.jpg",
			"image/trangchu/sp7.4.jpg"
		],
		"color":[
			"Vàng",
			"Xám",
			"Đỏ",
			"Trắng"
		]
	},
	"dk-sp08":{
		"name":"Xe máy điện DK Gogo Super",
		"price":18699000,
		"photo":[
			"image/trangchu/sp8.1.jpg",
			"image/trangchu/sp8.2.jpg",
			"image/trangchu/sp8.3.jpg",
			"image/trangchu/sp8.4.jpg"
		],
		"color":[
			"Đen",
			"Đỏ",
			"Xanh đậm",
			"Xanh lơ"
		]
	},
	"ka-sp09":{
		"name":"Xe máy điện Kazuki Canely-S",
		"price":18990000,
		"photo":[
			"image/trangchu/sp9.1.jpg",
			"image/trangchu/sp9.2.jpg",
			"image/trangchu/sp9.3.jpg",
			"image/trangchu/sp9.4.jpg"
		],
		"color":[
			"Trắng",
			"Đen",
			"Đỏ",
			"Xanh"
		]
	},
	"ka-sp10":{
		"name":"Xe máy điện DK Virgo",
		"price":18990000,
		"photo":[
			"image/trangchu/sp10.1.jpg"
		],
		"color":[
			"Xanh lơ"
		]
	},
	"vep-sp11":{
		"name":"Xe máy điện Vespa Virtoria V38",
		"price":17440000,
		"photo":[
			"image/trangchu/sp11.1.jpg"
		],
		"color":[
			"Xám"
		]
	},
	"vep-sp12":{
		"name":"Xe máy điện Vespa Virtoria V89",
		"price":18200000,
		"photo":[
			"image/trangchu/sp12.1.png"
		],
		"color":[
			"Xám xanh"
		]
	},
	"ka-sp13":{
		"name":"Xe máy điện Kazuki Xmen Z2",
		"price":16500000,
		"photo":[
			"image/trangchu/sp13.1.jpg"
		],
		"color":[
			"Đen"
		]
	},
	"ka-sp14":{
		"name":"Xe máy điện Kazuki Xmen Z3",
		"price":16540000,
		"photo":[
			"image/trangchu/sp14.1.jpg"
		],
		"color":[
			"Xanh"
		]
	},
	"vin-sp16":{
		"name":"Xe máy điện VinFast Feliz S",
		"price":26800000,
		"photo":[
			"image/trangchu/sp16.1.jpg",
			"image/trangchu/sp16.2.jpg",
			"image/trangchu/sp16.3.jpg",
			"image/trangchu/sp16.4.jpg",
			"image/trangchu/sp16.6.jpg"
		],
		"color":[
			"Trắng",
			"Đỏ",
			"Đen",
			"Trắng Xám",
			"Xanh đen"
		]
	},
	"vin-sp17":{
		"name":"Xe máy điện VinFast Theon S",
		"price":63500000,
		"photo":[
			"image/trangchu/sp17.1.jpg",
			"image/trangchu/sp17.2.jpg",
			"image/trangchu/sp17.3.jpg"
		],
		"color":[
			"Trắng",
			"Đỏ",
			"Đen"
		]
	}
};
//Hàm thêm vào giỏ hàng
function addCart(code) {
        let number = parseInt(document.getElementById(code).value);
        if (number == 0)
            return;
        if (typeof localStorage[code] === "undefined") {
            window.localStorage.setItem(code, number);
            alert("Đặt hàng thành công. Tổng số lượng đã đặt là: " + number + ".");
        } else {
            var current = parseInt(window.localStorage.getItem(code));
            if (number + current > 100) {
                window.localStorage.setItem(code, 100);
                alert("Tổng số lượng đặt hàng không thể vượt quá 10. Đặt hàng với số lượng: " + (100 - current) + ".");
                return;
            } else {
                window.localStorage.setItem(code, number + current);
                alert("Đặt hàng thành công. Tổng số lượng đã đặt là: " + (number + current) + ".");
            }
        }
}
//Hàm hiển thị giỏ hàng
function displayCart() {
    var cartTable = document.getElementById("CartDetail").getElementsByTagName('tbody')[0];
    cartTable.innerHTML = ""; // Xóa nội dung cũ trong giỏ hàng

    // Lặp qua tất cả các mục trong localStorage
    for (var i = 0; i < window.localStorage.length; i++) {
        var code = window.localStorage.key(i);
        var quantity = parseInt(window.localStorage.getItem(code));
        var item = ListItem[code]; // Lấy thông tin sản phẩm từ ListItem

        // Tạo một hàng mới cho mỗi mục trong giỏ hàng
        var newRow = document.createElement("tr");

        // Cột hình ảnh sản phẩm
        var photoCell = document.createElement("td");
        var img = document.createElement("img");
        img.src = item.photo[0]; // Chọn hình ảnh đầu tiên từ mảng hình ảnh của sản phẩm
        img.width = "100";
        photoCell.appendChild(img);
        newRow.appendChild(photoCell);

        // Cột thông tin sản phẩm
        var infoCell = document.createElement("td");
        var productName = document.createElement("p");
        productName.textContent = "Tên sản phẩm: " + item.name;
        var productColor = document.createElement("p");
        productColor.textContent = "Màu sắc: " + item.color[i]; // Chọn màu sắc đầu tiên từ mảng màu sắc của sản phẩm
        var productQuantity = document.createElement("p");
        productQuantity.textContent = "Số lượng: " + quantity;
        infoCell.appendChild(productName);
        infoCell.appendChild(productColor);
        infoCell.appendChild(productQuantity);
        newRow.appendChild(infoCell);

        // Cột tổng giá tiền
        var totalPriceCell = document.createElement("td");
        totalPriceCell.textContent = item.price * quantity;
        newRow.appendChild(totalPriceCell);


		
		var removeCell = document.createElement("td");
        var removeButton = document.createElement("button");
        removeButton.textContent = "Xóa";
        removeButton.classList.add("remove-button"); // Thêm class cho nút xóa để dễ dàng thao tác CSS hoặc JavaScript
        removeButton.dataset.code = code; // Lưu mã sản phẩm vào thuộc tính data-code của nút xóa
        removeCell.appendChild(removeButton);
        newRow.appendChild(removeCell);
		
		// Thêm hàng vào bảng
        cartTable.appendChild(newRow);
		
		var removeButtons = document.querySelectorAll('.remove-button');
		removeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var code = button.dataset.code; // Lấy mã sản phẩm từ thuộc tính data-code của nút
            removeCartItem(code); // Gọi hàm xóa sản phẩm
        });
    });

    }
}

// Gọi hàm displayCart để hiển thị giỏ hàng khi trang tải xong
window.onload = function() {
    displayCart();
};

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeCartItem(code) {
    if (typeof window.localStorage[code] !== "undefined") {
        window.localStorage.removeItem(code);
        displayCart(); // Gọi lại hàm hiển thị giỏ hàng sau khi xóa
    }
}

function calculateTotal() {
    var total = 0;
    var items = document.querySelectorAll("#CartDetail tbody tr");

    items.forEach(function(item) {
        var price = parseFloat(item.querySelector(".item-price").textContent);
        total += price;
    });

    document.getElementById("bill_totalpretax").textContent = total.toFixed(2);
}

// Sự kiện click cho nút "Xác Nhận Đơn Hàng"
document.getElementById("bill_totalpretax").addEventListener("click", function() {
    var confirmed = confirm("Xác nhận đơn hàng?");
    if (confirmed) {
        // Thực hiện hành động xác nhận đơn hàng ở đây
        alert("Đơn hàng đã được xác nhận!");
    }
});

// Gọi hàm calculateTotal để tính toán tổng thành tiền khi trang được load
window.addEventListener("load", function() {
    calculateTotal();
});
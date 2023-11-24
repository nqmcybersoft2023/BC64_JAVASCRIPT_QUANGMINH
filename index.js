//  --------BÀI 1 tính tiền lương dựa vào số giờ làm-------

// Mô hình 3 khối 
// - input : soNgayLam ,soTienLamTheoNgay
// - Process : soNgayLam * soTienLamTheoNgay
// - outphut: tính tiền lương đưa ra ketQua2

document.querySelector(".btn-success").onclick = function () {
    var soNgayLam = document.getElementById("soNgayLam").value * 1;
    var soTienLamTheoNgay = 100000;
    var ketQua2 = soNgayLam * soTienLamTheoNgay;
    console.log(ketQua2);
    document.getElementById("ketQua2").innerHTML = ketQua2.toLocaleString(
        "it-IT",
        {
            style: "currency",
            currency: "VND",
        }
    );
};
// BÀI 2 TÍNH SỐ TRUNG BÌNH CỘNG

// Mô hình 3 khối 
// - input : nhập các số thực` đưa vào no1 no2 no3 no4 no5;
// - Process : (no1 + no2 + no3 + no4 + no5) / 5 ;
// - outphut: tính và  đưa ra ketQua3

document.querySelector(".btn-danger").onclick = function () {
    var no1 = document.getElementById("no1").value * 1;
    var no2 = document.getElementById("no2").value * 1;
    var no3 = document.getElementById("no3").value * 1;
    var no4 = document.getElementById("no4").value * 1;
    var no5 = document.getElementById("no5").value * 1;
    var ketQua3 = (no1 + no2 + no3 + no4 + no5) / 5;
    console.log(ketQua3);
    document.getElementById("ketQua3").innerHTML = ketQua3.toLocaleString();
};
// BÀI 3 CHUYỂN ĐỔI TIỀN

// Mô hình 3 khối 
// - input : nhập giá trị tiền usd cần chuyển đổi(soDola), giá trị 1usd = 23500dvnd;
// - Process :  soDola * giaTri1Dola;
// - outphut: tính và  đưa ra soTienVND  

document.getElementById("btn4").onclick = function () {
    var soDola = document.getElementById("soDola").value * 1;
    var giaTri1dola = 23500;
    var soTienVND = soDola * giaTri1dola;
    console.log(soTienVND);
    document.getElementById("soTienVND").innerHTML = soTienVND.toLocaleString(
        "it-IT",
        {
            style: "currency",
            currency: "VND",
        }
    );
};

// BÀI 4 TÍNH CHU VI DIỆN TÍCH HCN


// Mô hình 3 khối 
// - input : nhập chiều dài, chiều rộng
// - Process :  tính diện tích = dài * rộng, chu vi = (dài + rộng ) *2
// - outphut: tính dienTich và chuVi và xuất ra màn hình

document.getElementById("btn5").onclick = function () {
    var chieuDai = document.getElementById("chieuDai").value * 1;
    var chieuRong = document.getElementById("chieuRong").value * 1;
    dienTich = chieuDai * chieuRong;
    chuVi = (chieuDai + chieuRong) * 2;
    console.log(dienTich);
    console.log(chuVi);
    var ketQua5 = "";
    document.getElementById(
        "ketQua5"
    ).innerHTML = ` Diện tích: ${dienTich}  - Chu vi: ${chuVi} `;
};

// BÀI 5 TÍNH TỔNG 2 KÝ SỐ 


// Mô hình 3 khối 
// - input : nhập số có 2 chữ số <=99
// - Process :  tìm số hàng chục và hàng đơn vị 
// - outphut: tính TỔNG hàng chục + đơn vị và xuất ra màn hình


document.getElementById('btn6').onclick = function () {
    var soCanTinh = document.getElementById('soCanTinh').value * 1;
    var soHangChuc = Math.floor(soCanTinh / 10);
    var soHangDonVi = soCanTinh % 10;
    var tong = soHangChuc + soHangDonVi;
    if (soCanTinh <= 10) {
        alert("vui lòng nhập giá trị lớn hơn 10")
    }
    else if (soCanTinh <= 99) {
        console.log(tong)
    }
  
    document.getElementById('ketQua6').innerHTML = tong;
};
 
// lấy phần Modal
var mo = document.getElementById("tvModal");
         
// Lấy phần button mở Modal
var btn = document.getElementById("tv");

// Lấy phần span đóng Modal
var span = document.getElementById("close");

// Khi button được click thi mở Modal
btn.onclick = function() {
    setTimeout(() => {
        mo.style.display = "block";
    },500);
    
}

// Khi span được click thì đ
span.onclick = function() {
    mo.style.display = "none";
}

// Khi click ngoài Modal thì đóng Modal
window.onclick = function(event) {
    if (event.target == mo) {
        mo.style.display = "none";
    }
}
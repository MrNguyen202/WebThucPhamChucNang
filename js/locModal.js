// lấy phần Modal
var modal = document.getElementById("locModal");
         
// Lấy phần button mở Modal
var btn = document.getElementById("btnLoc");

// Lấy phần span đóng Modal
var span = document.getElementById("close");

// Khi button được click thi mở Modal
btn.onclick = function() {
    setTimeout(() => {
        modal.style.display = "block";
    },500);
    
}

// Khi span được click thì đ
span.onclick = function() {
    modal.style.display = "none";
}

// Khi click ngoài Modal thì đóng Modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
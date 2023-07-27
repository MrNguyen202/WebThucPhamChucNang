//khai báo biến slideIndex đại diện cho slide hiện tại
var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");
//KHai bào hàm hiển thị slide
function showSlides() {
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
  slideIndex++;
  //nếu đang ở slide cuối cùng thì chuyển về slide đầu
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }
  //tự động chuyển đổi slide sau 2s
  setTimeout(showSlides, 2500);
}
showSlides();

// function click(){
//   var i;
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex].style.display = "block";
// }

// click();

// function trai(){

//   if(slideIndex == 0)
//     slideIndex = slides.length - 1;
//   else
//     slideIndex--;
//   click();
// }

// function phai(){
//   if(slideIndex == slides.length - 1)
//     slideIndex = 0;
//   else
//     slideIndex++;
//   click();
// }
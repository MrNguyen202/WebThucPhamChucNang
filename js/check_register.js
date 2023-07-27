function validateFormDK() {
  var usernameDK = document.getElementById("usernameDK").value;
  var passwordDK = document.getElementById("passwordDK").value;
  var checkpwd = document.getElementById("password-agrDK").value;
  var patternName = /^([a-z]+)([0-9A-Z]+)$/;
  var patternPw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  if (usernameDK == "") {
    document.getElementById("tich-xanhUser").style.display = "none";
    document.getElementById("LoiUser").innerHTML = "Bắt buộc nhập!";
    return false;
  } else {
    if (!patternName.test(usernameDK)) {
      document.getElementById("tich-xanhUser").style.display = "none";
      document.getElementById("LoiUser").innerHTML = "Mẫu: nguyenthuan203";
      return false;
    } else {
      document.getElementById("LoiUser").innerHTML = "";
      document.getElementById("tich-xanhUser").style.display = "block";
    }
  }

  if (passwordDK == "") {
    document.getElementById("tich-xanhPass").style.display = "none";
    document.getElementById("LoiPass").innerHTML = "Bắt buộc nhập!";
    return false;
  } else {
    if (!patternPw.test(passwordDK)) {
      document.getElementById("tich-xanhPass").style.display = "none";
      document.getElementById("LoiPass").innerHTML =
        "ít nhất 8 ký tự(hoa, thường, số)";
      return false;
    } else {
      document.getElementById("LoiPass").innerHTML = "";
      document.getElementById("tich-xanhPass").style.display = "block";
    }
  }

  if (checkpwd == "") {
    document.getElementById("tich-xanhPass-agrDk").style.display = "none";
    document.getElementById("LoiPwd-ggrDK").innerHTML = "Bắt buộc nhập!";
    return false;
  } else if (checkpwd != passwordDK) {
    document.getElementById("tich-xanhPass-agrDk").style.display = "none";
    document.getElementById("LoiPwd-agrDK").innerHTML = "Sai password!";
    return false;
  } else {
    document.getElementById("LoiPwd-agrDK").innerHTML = "";
    document.getElementById("tich-xanhPass-agrDk").style.display = "block";
  }
}

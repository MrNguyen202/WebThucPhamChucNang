function validateFormDN() {
    var username = document.getElementById("usernameDN").value;
    var password = document.getElementById("passwordDN").value;
    var patternName = /^([a-z]+)([0-9A-Z]+)$/
    var patternPw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (username == "") {
        document.getElementById("tich-xanhUser").style.display = "none";
        document.getElementById("LoiUser").innerHTML = "Bắt buộc nhập!"
        return false;
    }else{
        if(!patternName.test(username)){
            document.getElementById("tich-xanhUser").style.display = "none";
            document.getElementById("LoiUser").innerHTML = "Mẫu: nguyenthuan203"
            return false;
        }else{
            document.getElementById("LoiUser").innerHTML = ""
            document.getElementById("tich-xanhUser").style.display = "block";
        }
    }
    
    if (password == "") {
        document.getElementById("tich-xanhPass").style.display = "none";
        document.getElementById("LoiPass").innerHTML = "Bắt buộc nhập!"
        return false;
    }else{
        if(!patternPw.test(password)){
            document.getElementById("tich-xanhPass").style.display = "none";
            document.getElementById("LoiPass").innerHTML = "ít nhất 8 ký tự(hoa, thường, số)"
            return false;
        }else{
            document.getElementById("LoiPass").innerHTML = ""
            document.getElementById("tich-xanhPass").style.display = "block";
        }
    }
}
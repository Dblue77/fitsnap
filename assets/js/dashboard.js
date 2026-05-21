let user = JSON.parse(localStorage.getItem("userLogin"))

if(!user){
    alert("Silakan login terlebih dahulu")
    window.location.href="login.html"
}

document.getElementById("welcome").innerHTML =
"Selamat Datang, " + user.nama
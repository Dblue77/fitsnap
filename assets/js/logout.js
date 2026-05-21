function logout(){

localStorage.removeItem("userLogin")

alert("Anda berhasil logout")

window.location.href = "login.html"

}
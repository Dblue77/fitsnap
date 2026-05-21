init();
function init() {
  let user = JSON.parse(localStorage.getItem("userLogin"));

  if (!user) {
    alert("Silahkan Login dahulu");
    window.location.href = "login.html";
    return;
  }

  let dataBMI = JSON.parse(localStorage.getItem("riwayatBMI")) || [];
  let tbody = document.getElementById("riwayatBmi");

  dataBMI.forEach(function (item, index) {
    if (item.email === user.email) {
      tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.tinggi}</td>
                <td>${item.berat}</td>
                <td>${item.bmi}</td>
                <td>${item.kategori}</td>
            </tr>
        `;
    }
  })
}

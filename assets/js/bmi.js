function hitungBMI(event) {
  event.preventDefault();

  const tinggi = parseFloat(document.getElementById("tinggi").value);
  const berat = parseFloat(document.getElementById("berat").value);


  if (!tinggi || !berat) {
    alert("Silahkan mengisi Tinggi dan Berat badan");
    return;
  }

  const tinggiMeter = tinggi / 100;

  const bmi = berat / (tinggiMeter * tinggiMeter);

  let kategori = "";

  if (bmi < 18.5) {
    kategori = "kurus";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    kategori = "Normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    kategori = "Overweight";
  } else {
    kategori = "Obesitas";
  }

  const dataBMI = {
    email: user.email,
    tinggi: tinggi + " cm",
    berat: berat + " kg",
    bmi: bmi.toFixed(1),
    kategori: kategori
  };

  let riwayatBMI = JSON.parse(localStorage.getItem("riwayatBMI")) || [];

  riwayatBMI.push(dataBMI);

  localStorage.setItem("riwayatBMI", JSON.stringify(riwayatBMI));

  alert("Menghitung BMI berhasil")

  window.location.href = "riwayat.html";
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah refresh halaman

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        document.getElementById("formMessage").innerText = "Harap isi semua bidang!";
        document.getElementById("formMessage").style.color = "red";
    } else {
        document.getElementById("formMessage").innerText = "Pesan berhasil dikirim!";
        document.getElementById("formMessage").style.color = "green";
        document.getElementById("contactForm").reset();
    }
});
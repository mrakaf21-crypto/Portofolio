function sapa() {
    alert("Halo Raka! Website ini sudah interaktif!");
}

console.log("Portofolio Raka berhasil dimuat!");

document.getElementById("darkToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark");

    // Ganti teks tombol
    if (document.body.classList.contains("dark")) {
        this.textContent = "Light Mode";
    } else {
        this.textContent = "Dark Mode";
    }
});

const fades = document.querySelectorAll('.fade');

function checkFade() {
    fades.forEach(fade => {
        const rect = fade.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            fade.classList.add('show');
        }
    });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);

const toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {
    if(window.scrollY > 300){
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }
});

toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

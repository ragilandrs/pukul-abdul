const tanah = document.querySelectorAll('.tanah');
const abdul = document.querySelectorAll('.abdul');
const papanSkor = document.querySelector('.papan-skor');

let tanahSebelumnya;
let selesai;
let skor;

function randomTanah(tanah) {
    const t = Math.floor(Math.random() * tanah.length);
    const tRandom = tanah[t];
    if(tRandom == tanahSebelumnya) {
        randomTanah(tanah);
    }
    tanahSebelumnya = tRandom;
    return tRandom;
}

function randomWaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function munculkanAbdul() {
    const tRandom = randomTanah(tanah);
    const wRandom = randomWaktu(300, 900);
    tRandom.classList.add('muncul');

    setTimeout(() => {
        tRandom.classList.remove('muncul');
        if (!selesai) {
            munculkanAbdul();
        }
    }, wRandom);
}

function mulai() {
    selesai = false;
    skor = 0;
    papanSkor.textContent = 0;
    munculkanAbdul();
    setTimeout(() => {
       selesai = true; 
    }, 10000);
}

function pukul() {
skor++;
this.parentNode.classList.remove('muncul');
papanSkor.textContent = skor;
}

abdul.forEach(t => {
   t.addEventListener('click', pukul);
});
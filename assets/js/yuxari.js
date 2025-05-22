// Düğme elementini seçin
var yukariGitBtn = document.getElementById('yukariGitBtn');

// Düğmeyi başlangıçta gizli tutmak için bir bayrak ekleyin
var gizli = true;

// Düğme görünür hale gelene kadar sayfa aşağı kaydığınızda çalışacak bir fonksiyon tanımlayın
function gizliDugmeKontrol() {
    if (window.scrollY > 100 && gizli) { // Sayfa aşağı kaydıkça ve düğme gizliyken
        yukariGitBtn.style.opacity = '1'; // Düğmeyi görünür yap
        gizli = false; // Bayrağı güncelle
    } else if (window.scrollY <= 100 && !gizli) { // Sayfa yukarı kaydıkça ve düğme görünürken
        yukariGitBtn.style.opacity = '0'; // Düğmeyi gizle
        gizli = true; // Bayrağı güncelle
    }
}

// Sayfa yüklendiğinde ve kaydırma sırasında düğme görünürlüğünü kontrol edin
window.addEventListener('load', gizliDugmeKontrol);
window.addEventListener('scroll', gizliDugmeKontrol);

// Düğme tıklandığında yukarı gitme işlemini yapacak fonksiyonu tanımlayın
yukariGitBtn.addEventListener('click', function() {
    // Sayfanın yukarısına hızlıca atlayın
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Animasyonlu bir şekilde yukarı kaydırma
    });
});

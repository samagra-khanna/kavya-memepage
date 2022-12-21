document.addEventListener('contextmenu', event => event.preventDefault());
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");
    loader.addEventListener("transitionend", () => {
        loader.style.display = "none";
    });
});
function checkFileFormat() {
    var fileName = document.getElementById('meme-post').value.toLowerCase();
    if (!fileName.endsWith('.jpg') && !fileName.endsWith('.jpeg') && !fileName.endsWith('.gif') && !fileName.endsWith('.jfif') && !fileName.endsWith('.png')) {
        alert('Only jpeg , jpg , gif , png and jfif file are supported...');
        window.location.reload();
    }
}
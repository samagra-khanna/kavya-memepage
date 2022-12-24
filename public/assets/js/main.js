document.addEventListener('contextmenu', event => event.preventDefault());
function checkFileFormat() {
    var fileName = document.getElementById('meme-post').value.toLowerCase();
    if (!fileName.endsWith('.jpg') && !fileName.endsWith('.jpeg') && !fileName.endsWith('.gif') && !fileName.endsWith('.jfif') && !fileName.endsWith('.png')) {
        alert('Only jpeg , jpg , gif , png and jfif file are supported...');
        window.location.reload();
    }
}

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");
    loader.addEventListener("transitionend", () => {
        loader.style.display = "none";
    });
});

const form = document.querySelector('form');

$("#meme-post").bind('change', function () {
    var filename = $("#meme-post").val();
    if (/^s*$/.test(filename)) {
        $("#blankFile").text("No File Chosen..");
        $(".success").hide();
    } else {
        $("#blankFile").text(filename.replace("C:\\fakepath\\", ""));
        $(".success").show();
        $(form).submit();
    }
}); 

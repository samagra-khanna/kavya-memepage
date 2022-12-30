document.addEventListener('contextmenu', event => event.preventDefault());

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");
    loader.addEventListener("transitionend", () => {
        loader.style.display = "none";
    });
});

$("#meme-post").bind('change', function () {
    var filename = $("#meme-post").val();
    if (/^s*$/.test(filename)) {
        $("#blankFile").text("No File Chosen..");
        $(".success").hide();
    } else {
        $("#blankFile").text(filename.replace("C:\\fakepath\\", ""));
        $(".success").show();
    }
});

const form1 = document.querySelector('.form1');

const meme_post = document.querySelector('#meme-post');
const main_post = document.querySelector('#main-post');

meme_post.addEventListener('change', e => {
    const file = meme_post.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        main_post.value = reader.result;
        form1.submit();
    });
    reader.readAsDataURL(file);
});
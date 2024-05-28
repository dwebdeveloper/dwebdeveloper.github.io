const article = document.querySelector("#aboutMe");

function showMore() {
    if (article.className == "open") {
        // read less
        article.className = "";
        button.innerHTML = "Show more";
    } else {
        //read more
        article.className = "open";
        button.innerHTML = "Show less";
    }
}
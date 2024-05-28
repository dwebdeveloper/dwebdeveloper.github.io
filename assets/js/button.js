function change() // no ';' here
{
    var elem = document.getElementById("aboutMe");
    if (elem.value == "Close Curtain") elem.value = "Open Curtain";
    else elem.value = "Close Curtain";
}
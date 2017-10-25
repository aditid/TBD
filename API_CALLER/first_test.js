function send(){
    var api = "https://api.themoviedb.org/3/search/movie?api_key=";
    var api_key = "f37192bac1820d00d2a11439b5535fb3";
    var language = "&language=en-US";
    var title_req = "&query=";

    var movieTitle;
    movieTitle = document.getElementById("movie")
    var ItemJSON;

    // We have to use the .value thing in order for the input to used as a String value.

    URL = api +  api_key + language + title_req + movieTitle.value;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    xmlhttp.open("POST", URL, false);
    xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    xmlhttp.send(ItemJSON);
    alert(xmlhttp.responseText);
    document.getElementById("div").innerHTML = xmlhttp.statusText + ":" + xmlhttp.status + "<BR><textarea rows='100' cols='100'>"+ xmlhttp.responseText +"</textarea>";

    console.log('Checkout this JSON! ', URL);
}

function callbackFunction(xmlhttp)
{
    //alert(xmlhttp.responseXML);
}
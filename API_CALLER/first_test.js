function send() {

    var api = "https://api.themoviedb.org/3/search/movie?api_key=";
    var api_key = "f37192bac1820d00d2a11439b5535fb3";
    var language = "&language=en-US";
    var title_req = "&query=";
    var movieTitle;
    movieTitle = document.getElementById("movie");
    URL = api +  api_key + language + title_req + movieTitle.value;
    //Debugger to make sure URL is properly Created
    //    alert(URL);
    var response;
    // INITIALIZE XMLHttpRequest object
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", URL, false);
    //Send Request
    xmlHttp.send();
    xmlHttp.onreadystatechange = callbackFunction(xmlHttp);
//    alert(xmlHttp.responseText);
    var JSONSTUFF = JSON.parse(xmlHttp.responseText);
//    alert("debug");
//    alert(JSONSTUFF.result[0]);
//    alert("debug");
    document.getElementById("results").innerHTML = xmlHttp.responseText ;
//    document.getElementById("results").innerHTML =  xmlHttp.responseText;

}

function callbackFunction(xmlHttp) {
    //Ready State change calls it back 5 times . 4 out of five times Process Request gets called not 5.
    //We dont want the process to end so we need to keep it at 4

    //We also want to check when the HTTP request is successful = code is = 200
    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
        var response = JSON.parse(xmlHttp.responseText);
    }

}

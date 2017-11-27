/*global $ APIKEY*/ //tells the editor chill the $ is on purpose, don't throw an error message - no impact on user experience
$(document).ready(function() { //makes sure everything reads/loads in correct order
    $.ajax({
        method: "GET", //changed "POST" to "GET" - all requets are in uppercase letters
        url: "https://newsapi.org/v2/sources",
        data: { category:"business", country:"us", language:"en", apiKey: APIKEY }, //don't put apikey on a public github repo
        success: function(data){
            if (data.status === "ok") { //did we connect to the API and get data back?
                console.log(data);
                for (var i = 0; i < data.sources.length; i++) {
                    var source = document.createElement("OPTION");
                    source.innerHTML = data.sources[i].name;
                    document.getElementById("selection").appendChild(source);
                }
            }    
        }
    });
})

$(document).ready(function(){
    
    var button = document.createElement("button");
    var buttonTxt = document.createTextNode("Hello");
    //The intention is onclick change the route of the URL 
    button.append(buttonTxt);
    console.log(words);
    $("body").append(button);

    $("button").on("click", function(){
        $("ul li").text(words[0]);
    })
})

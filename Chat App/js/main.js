var couleur = document.getElementById("chat2");
couleur.addEventListener('click',function(){
    document.getElementById("chat").style.background = "#ffffff";
    var sam = document.querySelectorAll("span.text-grey"), samy = sam.length;
    for(var  i=0; i<samy; i++ ){
        sam[i].style.color="#313131";
    }
});
var couleur = document.getElementById("chat1");
couleur.addEventListener('click',function(){
    document.getElementById("chat").style.background = "#1d222f";
    var sam = document.querySelectorAll("span.text-grey"), samy = sam.length;
    for(var  i=0; i<samy; i++ ){
        sam[i].style.color="#f0f0f0";
    }
});

var couleur = document.getElementById("chat2");
couleur.addEventListener('click',function(){
    document.getElementById("discussion-tab").style.background = "#ffffff";
    var sam = document.querySelectorAll("span.text-grey"), samy = sam.length;
    for(var  i=0; i<samy; i++ ){
        sam[i].style.color="#313131";
    }
});

var couleur = document.getElementById("chat1");
couleur.addEventListener('click',function(){
    document.getElementById("discussion-tab").style.background = "#1d222f";
    var sam = document.querySelectorAll("span.text-grey"), samy = sam.length;
    for(var  i=0; i<samy; i++ ){
        sam[i].style.color="#f0f0f0";
    }
});


var couleur = document.getElementById("chat2");
couleur.addEventListener('click',function(){
    document.getElementById("bottom-field").style.background = "#ffffff";
    var sam = document.querySelectorAll("span.text-grey"), samy = sam.length;
    for(var  i=0; i<samy; i++ ){
        sam[i].style.color="#313131";
    }
});

var couleur = document.getElementById("chat2");
couleur.addEventListener('click',function(){
    document.getElementById("chatspace").style.background="url(images/aerial-beverage-blueberry-972530.jpg)";
    document.getElementById("chatspace").style.backgroundPosition="left";
    document.getElementById("chatspace").style.backgroundSize="cover";
    var sam = document.querySelectorAll("span.text-grey"), samy = sam.length;
    for(var  i=0; i<samy; i++ ){
        sam[i].style.color="#313131";
    }
});
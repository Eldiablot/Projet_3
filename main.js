let monBouton = document.getElementById("bouton");
let block = document.getElementById("corps_page")

monBouton.onclick = function () {

   if (corps_page.style.display = "none")
   { 
        monBouton.style.display = "none";
        corps_page.style.display = "block";
    } else {
        block.display = "block";
    }
}


let maPageWeb = document.querySelector('html')

maPageWeb.onclick = function () {
   setTimeout(function(){alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please"); }, 10000);
}

var req = new XMLHttpRequest();
req.open('www.google.com', + 'q' + '=' + responseText);
req.send(null);
// if (req.status === 0) {}
console.log(req.responseText);

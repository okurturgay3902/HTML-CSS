let renk = document.querySelector(".container");

let renk1 = document.querySelector(".red");
let renk2 = document.querySelector(".white");
let renk3 = document.querySelector(".blue");
let renk4 = document.querySelector(".black");

renk1.innerText="RED";
renk2.innerText="WHITE";
renk3.innerText="BLUE";
renk4.innerText="BLACK";

let yanlisHali= `<div class="kutu">
<div class="red">SİYAH</div>
<div class="white">KIRMIZI</div>
<div class="blue">BEYAZ</div>
<div class="black">MAVİ</div>
</div>`

renk.innerHTML= "<h1>RENKLER</h1>" + yanlisHali;
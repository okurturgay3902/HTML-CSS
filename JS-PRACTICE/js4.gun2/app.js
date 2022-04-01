// Kullanıcıdan alınan sayının çift veya tek olma durumuna göre
// farklı class ekleme

const sec = () =>{
    let tercih= Number(document.querySelector("#secim").value);

    if (tercih<0) {
        tercih=-tercih
    }
    
    if (tercih%2==1) {
        document.querySelector("#sonuc").classList.add("tek");
        document.querySelector("#sonuc").classList.remove("cift");
    }else if (tercih%2==0){
        document.querySelector("#sonuc").classList.add("cift");
        document.querySelector("#sonuc").classList.remove("tek");
    }    
};
/*
GENEL TEKRAR
1. Isimler ve camelCase olmali
2. Isimleri kodla alakali secmek okunabilirlik acisindan onemli
3.Isimlerde harf sayi $, _ kullanilabilir
4. Sayi kelimenin basina yazilamaz.
5. + isaretinin her iki tarafi da sayi ise toplamayapar, ama birtarafi bile string ise concatination olur.
6. Matematiksel islemlerde parantezler yardimci olur kullan
7. prompt() kullanicidan bir veri alamak icin kullanilir
8. Data tipleri:
-String 
-Boolean 
-Boolean 
-Number 
-Boolean 
-null 
-Object
*/

/* // ornek 1
console.log("Merhaba");
console.warn("bu bir uyaridir");
console.error("bu bir hatadir"); */

// ornek-2
/* var name =prompt("isminizi yazimiz");
console.log("Merhaba " +name+ " nasilsin?"); */

// ornek-3
/* var kenar=prompt("karenin bir kenarini giriniz");
var kareninAlani=kenar*kenar;
console.log("Kenari "+ kenar+ " olan karenin alani :"+ kareninAlani); */



// ornek-5 

/* var pi=3.14;
console.log(pi);
console.log(typeof pi);
pi=true;
console.log(typeof pi); */

// ornek-6
/* let fiyat;
console.log(fiyat);
fiyat=5.5;
console.log(fiyat);
console.log(typeof fiyat); */

// ornek-7
/* const kelime=null;
console.log(typeof kelime);
console.log(kelime); */

// ornek-8

/* const kutu=6;
const koli=34;
const sise=76;
let toplamMalzeme=kutu + koli+ sise;
console.log(toplamMalzeme);
toplamMalzeme++;
console.log(toplamMalzeme);
toplamMalzeme+=5;
console.log(toplamMalzeme);
console.log(toplamMalzeme++);
console.log(toplamMalzeme);

console.log("Toplam ", toplamMalzeme, " adet malzeme var");
console.log("Toplam "+ toplamMalzeme+ " adet malzeme var");
console.log(`Toplam`, toplamMalzeme, ` adet malzeme var`);
console.log(`Toplam, ${toplamMalzeme},  adet malzeme var`); */

// ornek-9 

/* const ad="Tom";
const soyad="Sawyer";
console.log(ad +" "+ soyad); */


// ornek-10
/* const isim="kursat";
const yas= 35;
console.log("Benim adim " +isim+ " yasim: "+ yas +"'tir.");
console.log(`Benim adim ${isim}  yasim:  ${yas} 'tir.`);
console.log(`Sepet sepet yumurta
Sakin beni unutma
Unutursan kuserim
Mektubu keserim`); */

// ornek-11
/* const yil=2022;
const dogumTarihi=1968;
const yasi=yil-dogumTarihi;
console.log("yas :"+ yasi);
console.log("yas :"+ (yil-dogumTarihi));
console.log(`yas : ${yil}-${dogumTarihi}`);
console.log(`yas : ${yil-dogumTarihi}`); */

// ornek-12
/* const taban=4;
const ust=8;
const sonuc=taban**ust;
console.log(sonuc); */

// ornek-13

/* const sayi=123;
const birler=sayi%10
console.log(birler);
const onlar= (sayi%100-sayi%10)/10;
console.log(onlar);

const yuzler= Math.floor(sayi/100)%10;
console.log(yuzler); */

// ornek-14
/* const language='JavaScript'
console.log(Number(language)); */


/* var depo=0;
const sayi=123;
const birler=sayi%10;
depo+=birler;
console.log(birler);
const onlar=Math.floor(sayi/10)%10;
depo+=onlar;
console.log(onlar);
const yuzler=Math.floor(sayi/100)%10;
depo+=yuzler;
console.log(yuzler);
console.log("rakamlar toplami: "+depo) */

// ornek-15

/* const sayi1=5;
const sayi2=-7;
const isim="Jhon";
console.log(Boolean(sayi1)); //True
console.log(Boolean(sayi2));//True
console.log(Boolean(isim)); //True
const sifir=0;
console.log(Boolean(sifir)); //false
const hic=null;
console.log(Boolean(hic)); //false
const bos="";
console.log(Boolean(bos)); //false
const tanimsiz=undefined;
console.log(Boolean(tanimsiz)); //false
const sayiDegil=0;
console.log(Boolean(sayiDegil)); //false */

// ornek-16

/* const sayi="1000";
console.log(sayi+15); //100015
console.log(Number(sayi)+15);//1051523 */

// ornek-17
/* const sayi=13;
console.log(sayi + sayi) //26
console.log(String(sayi)+ sayi);//1313 */


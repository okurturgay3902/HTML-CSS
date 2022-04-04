/* length:: özelliği stringin uzunluğunu verir
 (karakter sayısını, boşluklarda dahil olmak üzere). */
let cumle= "Kar taneleri ne güzel anlatıyor, birbirlerine zarar vermeden de yol almanın mümkün olduğunu.";
console.log(cumle.length); //92

/* Substring() metodu, kendisine verilen parametreler ile değişkenin 
içeriğinden parametrelerde istenilen kısmı kopyalayarak sonucu bize döndürür.
 Kullanım mantığı substring(start, end) şeklindedir. Substring() Metodu eksi
  değerleri kabul etmez…
 */
let esya = "telefon, çanta, cüzdan, kalem, ayna";
let esya1=esya.substring(6, 12);
console.log(esya.substring(6));

/* indexOf::: metodu kendine verilen karakteri ya da kelimeyi metnin içinde arar
ve bulduğu ilk değerin sıra numarasını verir. */

let cumle1 = "İlerlemenin sirri başlamaktır.";
console.log(cumle1.indexOf("lam"));
console.log(cumle1.indexOf("l", 2));

/* lastIndexOf:: metodu kendine verilen karakteri ya da kelimeyi metnin içinde arar
 ve bulduğu son değerin sıra numarasını verir.
 indexOf ve  lastIndexOf metodu, kendine verilen değeri metin içinde bulamazsa
  geriye -1(bulunamadı)  döndürür. */

console.log(cumle1.lastIndexOf("r"));
console.log(cumle1.lastIndexOf("a"));

/* includes() Metodu, değişekenin içerisinde kendisine verilen parametreyi
arar ve sonucu boolean (mantıksal) olarak geri döndürür.
 Yani eğer varsa true veya yoksa false döndürecektir.
 Büyük ve küçük harf duyarlıdır. */

 let cumle2 = "insanlarin, senin hakkında ne düşündüklerini önemsemeyerek, ömrünü uzatabilirsin mesela.";
console.log(cumle2.includes("senin")); //True
console.log(cumle2.includes("seninle")); //false
console.log(cumle2.includes("Sen")); //false


/* startsWith() Metodu, değişkenin başlanagıç değerinin girdiğimiz parametre ile eşleşmesini
kontrol eder ve eşleşme varsa true yoksa false döndürür. Büyük ve küçük harf duyarlıdır. */

console.log(cumle2.startsWith("insanlarin")); //True

/* endsWith() Metodu, değişkenin bitiş değerinin girdiğimiz parametre ile eşleşmesini
kontrol eder ve eşleşme varsa true yoksa false döndürür. Büyük ve küçük harf duyarlıdır. */

console.log(cumle2.endsWith("la.")); //True

/* replace():: metodu ile bir metnin içinde arama yapıp, bulduğumuz değerleri yine istediğimiz bir
 değer ile değiştirebiliriz(sadece ilk bulduğu değeri değiştirir). */

 const str=" Cuma gunu hava guzeldi."
 console.log(str.replace("Cuma", "Pazar")); //Pazar gunu hava guzeldi.
 console.log(str.replace("a", "X")); //CumX gunu hava guzeldi.
 console.log(str.replaceAll("a", "X")); //CumX gunu hXvX guzeldi.
 console.log(str.toUpperCase()); //CUMA GUNU HAVA GUZELDI.
 console.log(str.toLowerCase()); //cuma gunu hava guzeldi.
 console.log(str.split()); //['Cuma gunu hava guzeldi.']
 console.log(str.split("")); //(23) ['C', 'u', 'm', 'a', ' ', ....]
 console.log(str.split(" ")); //['Cuma', 'gunu', 'hava', 'guzeldi.']
 
/* trim() metodu ile karakter dizisinin başındaki ve sonundaki boşluk karakterlerini sileriz. */
console.log(str.trim());

let sayi=1453;
console.log(typeof sayi);// number
let sonuc= sayi.toString();
console.log(typeof sonuc);// string

let dil1 = "Html";
let dil2 = "CSS";
let dil3 = "JS";
let sonuc2=dil1.concat(dil2, dil3);
console.log(sonuc2);//HtmlCSSJS

let sonuc3=dil1.concat(`, ${dil2}, ${dil3}`)
console.log(sonuc3);//Html, CSS, JS

/* slice():: metodu string içinden belirli bir bölümü çıkartmaya yarar.
iki parametre alır: ilk parametre başlama indeksi, ikinci parametre bitiş indeksidir.
Eğer parametre değerlerini negatif verirseniz o zaman parçalama işlemi metnin sonundan başlayacaktır. */

let renkler = "yeşil,kırmızı,mavi,siyah,beyaz";
console.log(renkler.slice());//yeşil,kırmızı,mavi,siyah,beyaz
console.log(renkler.slice(7, 15));//ırmızı,m
console.log(renkler.slice(-12, -6));//,siyah

/* search() Metodu, bir değişkenin içerisinde parametre olarak girdiğimiz ifadeyi ilk eşleşme sağlandığı
yerdeki index ini bize geri döndürür. Büyük ve küçük harf duyarlıdır.
Yazdığımız parametreyi değişken içerisinde
 bulamazsa bize -1 geri döndürür. */

 console.log(renkler.search("mavi"));//14

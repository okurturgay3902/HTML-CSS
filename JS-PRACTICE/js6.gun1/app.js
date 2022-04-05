let aday = [
  {
    isim: "Ali T",
    yas: 14,
  },
  {
    isim: "Ayse K",
    yas: 30,
  },
  {
    isim: "Tarık G",
    yas: 16,
  },
  {
    isim: "Elif S",
    yas: 22,
  },
];

let toplam= aday.reduce((toplam, item) => {
  return (toplam + item.yas)
}, 0);
let ortalama= toplam/aday.length;
console.log(ortalama);

// ornek-2

let dizim = [24, 456, 788, 56, 124, 38, 324, 490];

let yeniDizi=dizim.filter(x=>x>70).map(y=>y/2);
console.log(yeniDizi);

let yeniDizi2=dizim.filter(x=>x<70).map(y=>(y*1.2).toFixed(2)).
forEach((n)=>console.log(n));

// ornek-3

let cumle = "Bugün hava güzeldi";
for (let i in cumle){
  console.log(`${i} = ${cumle[i]}`);
}
for(n of cumle){
  console.log(n);
}

// ornek-4
let dizi = ["çanta", "kalem", "silgi", "defter", "cüzdan"];

for(let i in dizi){
  console.log(i, dizi[i]); 
}
for(i of dizi){
  console.log(i);
}
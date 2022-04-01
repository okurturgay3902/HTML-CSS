
const mesaj = () => {
  let saat = Number(document.querySelector("#saat").value);
  
  if(saat>=20 || saat<06){
    document.querySelector("#msj").innerHTML = `Vakit aksam`;
  }
  document.querySelector("#msj").innerHTML = `Vakit gunduz`;
  return;
};

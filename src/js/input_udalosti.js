const nazev_udalosti = document.getElementById("nazev_udalosti")
const date_od = document.getElementById("date_od")
const oznaceni_barva = document.getElementById("oznaceni_barva")
const poznamka = document.getElementById("poznamka")
const tlacitko_ulozeni = document.getElementById("ulozeni_udalosti")

tlacitko_ulozeni.onclick = ()=>{
   Udalost()
}

function Udalost(){

let udalost={
   nazev:nazev_udalosti.value,
   datum:date.value,
   barva:oznaceni_barva.value,
   poznamka:poznamka.value,
}

var dateString = JSON.stringify(udalost)
localStorage.setItem(a,dateString)
a++
alert("data byla ulozena")
}

const tlacitkoL = document.getElementById("koleckol")
const tlacitkoP = document.getElementById("koleckop")
const mesic_kalendar = document.getElementById("mesic")
const rok_nad_kalendarem = document.getElementById("rok")
const dny = document.getElementsByClassName("dny")

const date = new Date()
let rok = date.getFullYear()
let mesic = date.getMonth()
let den = date.getDay()
let datum = date.getDate()

const date_defalut = new Date(rok, mesic)
let rok_defalut = date_defalut.getFullYear()
let mesic_defalut = date_defalut.getMonth()
let den_defalut = date_defalut.getDay()
let datum_default = date_defalut.getDate()

console.log(rok)
console.log(mesic)
console.log(datum_default)
console.log(datum)

let mesice_dni = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
let mesice_kalendar_nazev = ["Leden", "Unor", "brezen", "Duben", "Kveten", "Cerven", "Cervenec", "Srpen", "Zari", "Rijen", "Listopad", "Prosinec"]


let pro_den_po = new Date(rok, mesic)
let c = pro_den_po.getDay()

if (c === 0) {
    c = 7
}

Kalendar(c)

function Kalendar(a) {

    if (rok % 4 === 0 || rok % 100 === 0 && rok % 400 === 0) {
        mesice_dni[1] = 29
    }
    else {
        mesice_dni[1] = 28
    }
    for (let b = 0; b <= 41; b++) {
        dny[b].innerHTML = ""
        dny[b].style.color = "white"
    }

    let umisteni_cisla_kalendar = 0

    for (let i = 1; i <= mesice_dni[mesic]; i++) {
        if (a === 0) {
            umisteni_cisla_kalendar = 5 + i
        }
        else {
            umisteni_cisla_kalendar = i + a - 2
        }
        dny[umisteni_cisla_kalendar].innerHTML = i
        mesic_kalendar.innerHTML = mesice_kalendar_nazev[mesic]
        rok_nad_kalendarem.innerHTML = rok
    }
    if (rok === rok_defalut && mesic === mesic_defalut) {
        dny[(datum + a - 2)].style.color = "red";
    }
}
tlacitkoL.onclick = () => {
    if (mesic == 0) {
        mesic = 11
        rok--
    }
    else {
        mesic--
    }
    let pro_den_po_pohybuP = new Date(rok, mesic)
    let a = pro_den_po_pohybuP.getDay()
    if (a === 0) {
        a = 7
    }
    Kalendar(a)
};
tlacitkoP.onclick = () => {
    if (mesic == 11) {
        mesic = 0
        rok++
    }
    else {
        mesic++
    }
    let pro_den_po_pohybuL = new Date(rok, mesic)
    let b = pro_den_po_pohybuL.getDay()
    if (b === 0) {
        b = 7
    }
    Kalendar(b)
};

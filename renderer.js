const tlacitkoL = document.getElementById("koleckol")
const tlacitkoP = document.getElementById("koleckop")
const mesic_kalendar = document.getElementById("mesic")
const rok_nad_kalendarem = document.getElementById("rok")
const dny = document.getElementsByClassName("dny")
const dnyElements = document.querySelectorAll('.dny');
const ulozeni_udalosti = document.getElementById("ulozeni_udalosti")
const stranka = document.getElementById("stranka")
const udalost_button = document.getElementById("udalost_button")
const udalost_nazev = document.getElementById("udalost_nazev")
const input_udalosti = document.getElementById("input_udalosti")
const input_color = document.getElementById("input_color")
const button_udalosti = document.getElementById("button_udalosti")
const vypsani_dnesni_udalosti = document.getElementById("vypsani_dnesni_udalosti")
const vytvoreni_udalosti = document.getElementById("vytvoreni_udalosti")
const hodiny = document.getElementById("hodiny")
const minuty = document.getElementById("minuty")

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

let mesice_dni = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
let mesice_kalendar_nazev = ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"]
let pro_den_po = new Date(rok, mesic)
let c = pro_den_po.getDay()
document.getElementById("datum").innerHTML = datum + "." + (mesic + 1) + "."

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
    Nacteni_udalosti()
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
    Nacteni_udalosti()
};

datum_pro_ulozeni_udalosti = ""

dnyElements.forEach(element => {
    element.addEventListener('click', () => {
        const dataKalendarValue = element.getAttribute('data-kalendar');
        a = dny[dataKalendarValue].innerHTML
        datum_pro_ulozeni_udalosti = (a) + "." + (mesic + 1) + "." + rok

        if (dny[dataKalendarValue].innerHTML !== "") {
            datum = (dny[dataKalendarValue].innerHTML)
            document.getElementById("datum").innerHTML = datum + "." + (mesic + 1) + "."
            Vypsani_udalost()
        }
    });
});

udalost_button.onclick = () => {
    Zpatky()
}

function Zpatky() {
    ulozeni_udalosti.style.display = "none"
    stranka.style.display = ""
}

udalost_nacteni_ulozeni = []

Nacteni_udalosti()

function Nacteni_udalosti() {

    udalost_nacteni_ulozeni = []

    delka_pole = 0

    for (let i = 0; i < 32; i++) {
        let udalost_nacteni = localStorage.getItem(i + "." + (mesic + 1) + "." + rok);
        if (udalost_nacteni !== null) {
            udalost_nacteni_ulozeni.push(i + "," + udalost_nacteni)
            delka_pole = delka_pole + 1
        }
    }

    for (let a = 0; a < delka_pole; a++) {
        j = udalost_nacteni_ulozeni[a].split(",")
        for (let b = 0; b < 40; b++) {
            if (dny[b].innerHTML === j[0]) {
                dny[b].style.color = j[2];
            }
        }
    }
}

vytvoreni_udalosti.onclick = () => {
    ulozeni_udalosti.style.display = "block"
    stranka.style.display = "none"
}

button_udalosti.onclick = () => {
    a = hodiny.value + ":" + minuty.value
    b = input_color.value
    c = udalost_nazev.value
    if (c !== "") {
        let u = localStorage.getItem(datum_pro_ulozeni_udalosti)
        if (u !== null) {
            localStorage.setItem(datum_pro_ulozeni_udalosti, u + "<br>" + "<br>" + a + "," + b + "," + c);
        }
        else {
            
            localStorage.setItem(datum_pro_ulozeni_udalosti, a + "," + b + "," + c);
        }
        ulozeni_udalosti.style.display = "none"
        stranka.style.display = ""
        Nacteni_udalosti()
        Vypsani_udalost()
    }
    else {
        alert("zadejte nazev udalosti")
    }
}

function Vypsani_udalost() {
    let vypsani_dnesni_udalosti_hodnota = localStorage.getItem(datum + "." + (mesic + 1) + "." + rok);
    if (vypsani_dnesni_udalosti_hodnota !== null) {
        let rozdeleni_udalosti = vypsani_dnesni_udalosti_hodnota.split(",")
        a = ""
        for (let i = 0; i <= rozdeleni_udalosti.length; i++) {
            if (i % 2 === 0) {
                a = a + rozdeleni_udalosti[i] + " "
            }
            vypsani_dnesni_udalosti.innerHTML = a
        }
    }
    else {
        vypsani_dnesni_udalosti.innerHTML = "dneska nemate zadnou udalost"
    }
}




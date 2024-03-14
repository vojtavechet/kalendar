const tlacitkoL= document.getElementById("koleckol")
const tlacitkoP= document.getElementById("koleckop")
const mesic_kalendar = document.getElementById("mesic")

const dny = document.getElementsByClassName("dny")



const date = new Date()
let rok=date.getYear()
let mesic_cislo = date.getMonth()
let ziskani_dnu = date.getDay()




let mesice_dni =[31,28,31,30,31,30,31,31,30,31,30,31]
let mesice_kalendar_nazev = ["Leden","Unor","brezen","Duben","Kveten","Cerven","Cervenec","Srpen","Zari","Rijen","Listopad","Prosinec"]


mesic_kalendar.innerHTML= mesice_kalendar_nazev[mesic_cislo]


console.log(ziskani_dnu)

for(let i = 0; i <= mesice_dni[mesic_cislo];i++ ){
    let mesic_zacatek = ziskani_dnu
    if(i ===0){
        dny[mesic_zacatek].innerHTML= i+1
        i++
    }
    else{
    let mesic_zacatek = ziskani_dnu+i-1
    dny[mesic_zacatek].innerHTML= i

    }

    
}
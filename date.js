const vu = document.getElementById("vu");

const month = new Date()
const date = new Date()
let mo = month.getMonth()
let day = date.getDate();
document.getElementById("datum").innerHTML=  day +"."+ (mo +1 ) +"."


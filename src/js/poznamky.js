const button = document.getElementById("button_poznamka")
const input = document.getElementById("input_poznamka")
const pozn = document.getElementById("pozn")

let poznamky = localStorage.getItem("poznamky") || ""

console.log(poznamky)

button_poznamka.onclick = () => {
  Poznamka()
};

function Poznamka() {
  poznamky = poznamky + "," + input_poznamka.value
  localStorage.setItem("poznamky", poznamky);
  console.log(poznamky)
  pole = poznamky.split(",")
  console.log(pole)

  for (a = 1; a < pole.length; a++) {
    const para = document.createElement("p");
    const node = document.createTextNode(pole[a] + "    x");
    para.appendChild(node);
    pozn.appendChild(para);
  }


}

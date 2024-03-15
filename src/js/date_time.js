function datum_cas() {
   const datum = new Date()
   let mesic = datum.getMonth()
   let den = datum.getDate();
   document.getElementById("datum").innerHTML = den + "." + (mesic + 1) + "."
   const cas = new Date()
   let hodiny = cas.getHours()
   let minuty = cas.getMinutes()
   if (minuty < 10) {
      minuty = "0" + minuty
   }
   document.getElementById("cas").innerHTML = hodiny + ":" + minuty


   setTimeout(datum_cas, 1000);
}
datum_cas()

function bilFaktorial(nilai) {
  let angka = 1,
      faktorial = 1;

   for (angka = 1; angka <= nilai; angka++) {
     faktorial *= angka;
   }
   document.write("Hasil dari " + nilai + "! adalah " + faktorial);
}
bilFaktorial(prompt("Bilangan inputan :"));

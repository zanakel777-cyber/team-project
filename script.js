let skaicius = 0;
const mygtukas = document.getElementById("skaitiklis");

mygtukas.addEventListener("click", () => {
  skaicius = skaicius + 1;
  mygtukas.textContent = "Paspausta: " + skaicius;
});
const zinutes = [ 
  "Šiandien puiki diena kodui", 
  "Git nieko nepamiršta", 
  "Commit dažnai, gailėsies rečiau", 
  "Merge conflict – ne katastrofa",
];
  const zinutesMygtukas = document.getElementById("zinutesMygtukas");
  const zinute = document.getElementById("zinute");
  zinutesMygtukas.addEventListener("click", () => {
     const atsitiktinis = Math.floor(Math.random() * zinutes.length);
     zinute.textContent = zinutes[atsitiktinis];
    });
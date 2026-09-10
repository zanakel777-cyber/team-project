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

const spalvos = ["#411010", "#10412a", "#102841", "#41103d"];
let spalvosIndeksas = 0;
const spalvosMygtukas = document.getElementById("spalvosMygtukas");

spalvosMygtukas.addEventListener("click", () => {
  spalvosIndeksas = (spalvosIndeksas + 1) % spalvos.length;
  document.body.style.background = spalvos[spalvosIndeksas];
});

let taip = 0;
let ne = 0;
const taipMygtukas = document.getElementById("taipMygtukas");
const neMygtukas = document.getElementById("neMygtukas");
const rezultatas = document.getElementById("rezultatas");

function rodykRezultata() {
  rezultatas.textContent = "Taip: " + taip + " | Ne: " + ne;
}

rodykRezultata();

taipMygtukas.addEventListener("click", () => {
  taip = taip + 1;
  rodykRezultata();
});

neMygtukas.addEventListener("click", () => {
  ne = ne + 1;
  rodykRezultata();
});

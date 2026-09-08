let skaicius = 0;
const mygtukas = document.getElementById("skaitiklis");

mygtukas.addEventListener("click", () => {
  skaicius = skaicius + 1;
  mygtukas.textContent = "Paspausta: " + skaicius;
});

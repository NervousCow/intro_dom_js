"use strict";

// Descripcion de los tipos
const descripcion_agua = "Los Pokémon tipo agua se dice que son puros y que suelen adaptarse a cualquier situación o condición climática, ya que el agua puede adoptar cualquier forma en cualquier momento. Por ejemplo, en un vaso adopta una forma, mientras que, en un cubo, adopta otra distinta. Por eso, los Pokémon de tipo agua se sienten a menudo libres en cualquier sitio donde haya agua a su disposición."
const descripcion_planta = "Los Pokémon de tipo planta suelen ser pacíficos y les gusta cuidar de las flores y a los demás, pero también son grandes luchadores y pueden envenenar, paralizar o dormir al rival en combate"
const descripcion_electrico = "Los Pokémon de tipo eléctrico tienen hábitats variados, desde bosques y praderas, hasta ciudades y centrales eléctricas. Los Pokémon de tipo dragón, eléctrico y planta son resistentes al tipo eléctrico, y aún más los de tipo tierra, quienes son inmunes a los ataques eléctricos. Por consiguiente, los Pokémon eléctricos deben de ser muy precavidos con los ataques de tipo tierra, el cual representa su única debilidad."
const descripcion_normal = "Los Pokémon de tipo normal abarcan la mayor cantidad y variedad de movimientos que el resto de tipos. Gran parte de estos son movimientos que no realizan daño o no lo hacen directamente, sino que afectan a las características o estados del Pokémon. Los tipos normal son los más diversos entre los Pokémon, con características variadas, desarrollos y requisitos para las evoluciones diferentes de cada uno, al igual que diferir en las zonas donde se pueden capturar, desde bosques, cuevas, montañas, ciudades, etc."
const descripcion_fuego = "Los Pokémon de tipo tipo fuego basan sus ataques, principalmente, en el control de este elemento; y la mayoría pueden quemar al Pokémon oponente, mientras que ellos no sufren quemaduras. Son apasionados y, algunos, de mal carácter (como el Charizard de Ash); viven en cuevas o zonas rocosas y muy áridas; y, más probable, aun cerca de volcanes activos. Sin embargo, los únicos Pokémon que aparentemente suelen andar por lugares verdes como las praderas, son Ponyta y Rapidash, pudiendo ser que estos lugares les permiten galopar sin obstáculos. También, algunos son más dóciles, como Growlithe, Vulpix y sus respectivas evoluciones."

/* Comienza a escribir su código aquí */


const btnPlanta = document.querySelector("#btnPlanta");
const btnAgua = document.querySelector("#btnAgua");
const btnElectricidad = document.querySelector("#btnElectricidad");
const btnNormal = document.querySelector("#btnNormal");
const btnFuego = document.querySelector("#btnFuego");

const descripcion = document.querySelector("#descripcion");
const fondo = document.querySelector("article");
const titulo = document.querySelector(".header");
const imgArticle = document.querySelector("article img");

btnPlanta.addEventListener("click", 
    function () {
      descripcion.textContent = descripcion_planta;
      fondo.className = "planta";
      titulo.textContent = "Tipo Planta";
      imgArticle.src = "images/grass_type.png"
    }
);

btnAgua.addEventListener("click", 
    function () {
      descripcion.textContent = descripcion_agua;
      fondo.className = "agua";
      titulo.textContent = "Tipo Agua";
      imgArticle.src = "images/water_type.png"
    }
);

btnElectricidad.addEventListener("click", 
    function () {
      descripcion.textContent = descripcion_electrico;
      fondo.className = "electricidad";
      titulo.textContent = "Tipo Electrico";
      imgArticle.src = "images/electric_type.png"
    }
);

btnNormal.addEventListener("click", 
    function () {
      descripcion.textContent = descripcion_normal;
      fondo.className = "normal";
      titulo.textContent = "Tipo Normal";
      imgArticle.src = "images/normal_type.png"
    }
);

btnFuego.addEventListener("click", 
    function () {
      descripcion.textContent = descripcion_fuego;
      fondo.className = "fuego";
      titulo.textContent = "Tipo Fuego";
      imgArticle.src = "images/fire_type.png"
    }
);
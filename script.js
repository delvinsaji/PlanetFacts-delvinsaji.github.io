// The colored border on the top of the planet namnes on hover
let planet_hover = function (x) {
  if (document.body.offsetWidth >= 900) {
    switch (x.innerText) {
      case "MERCURY":
        x.style.borderTop = "5px solid orange";
        break;
      case "VENUS":
        x.style.borderTop = "5px solid lightblue";
        break;
      case "EARTH":
        x.style.borderTop = "5px solid violet";
        break;
      case "MARS":
        x.style.borderTop = "5px solid red";
        break;
      case "JUPITER":
        x.style.borderTop = "5px solid darkred";
        break;
      case "SATURN":
        x.style.borderTop = "5px solid orange";
        break;
      case "URANUS":
        x.style.borderTop = "5px solid green";
        break;
      case "NEPTUNE":
        x.style.borderTop = "5px solid cyan";
        break;
    }
  }
};

let planet_leave = function (x) {
  x.style.borderTop = "none";
};

// Drop down list of the planets in the mobile version
let drop_down = document.querySelector(".drop_down");
let current = 0;
document.querySelector(".toggle_button").addEventListener("click", function () {
  if (current === 0) {
    drop_down.classList.remove("drop");
    current = 1;
  } else {
    drop_down.classList.add("drop");
    current = 0;
  }
});

// To add the circular dot to the left of the planets name buttons in mobile version and change their colors
let planet_buttons = drop_down.querySelectorAll("button");
let dot_color = document.createElement("div");
dot_color.classList.add("dot");
let dot = document.querySelector(".dot");
for (i = 0; i < 8; i++) {
  let x = planet_buttons[i];
  let name = x.innerText;
  switch (name) {
    case "MERCURY":
      dot_color.style.backgroundColor = "orange";
      break;
    case "VENUS":
      dot_color.style.backgroundColor = "lightblue";
      break;
    case "EARTH":
      dot_color.style.backgroundColor = "violet";
      break;
    case "MARS":
      dot_color.style.backgroundColor = "red";
      break;
    case "JUPITER":
      dot_color.style.backgroundColor = "darkred";
      break;
    case "SATURN":
      dot_color.style.backgroundColor = "orange";
      break;
    case "URANUS":
      dot_color.style.backgroundColor = "green";
      break;
    case "NEPTUNE":
      dot_color.style.backgroundColor = "cyan";
      break;
  }
  x.prepend(dot_color.cloneNode(true));
}

// To add the hover function in the internal buttons and disable them when they are being displayed.
let hover = function (x) {
  if (x.style.backgroundColor == planets_info[current_planet][6]) {
  } else {
    x.style.backgroundColor = "rgb(56, 56, 79)";
  }
};

let hover_leave = function (x) {
  if (x.style.backgroundColor == planets_info[current_planet][6]) {
  } else {
    x.style.background = "none";
  }
};

// A object containing the data of all planets
let planets_info = {
  MERCURY: [
    "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 only slightly less than Earth's density.",
    "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    "images\\planet-mercury.svg",
    "images\\planet-mercury-internal.svg",
    "images\\planet-mercury-geology.png",
    "orange",
    "58.6 DAYS",
    "87.97 DAYS",
    "2,439.7 KM",
    "430&degC",
    "https://en.wikipedia.org/wiki/mercury",
  ],
  VENUS: [
    "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
    "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least par tially liquid because the two planets have been cooling at about the same rate.",
    "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
    "images\\planet-venus.svg",
    "images\\planet-venus-internal.svg",
    "images\\planet-venus-geology.png",
    "lightblue",
    "243 DAYS",
    "224.7 DAYS",
    "6,051.8 KM",
    "471&degC",
    "https://en.wikipedia.org/wiki/venus",
  ],
  EARTH: [
    "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
    "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
    "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
    "images\\planet-earth.svg",
    "images\\planet-earth-internal.svg",
    "images\\planet-earth-geology.png",
    "violet",
    "0.99 DAYS",
    "365.25 DAYS",
    "6,371 KM",
    "16&degC",
    "https://en.wikipedia.org/wiki/Earth",
  ],
  MARS: [
    "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'.",
    "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
    "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
    "images\\planet-mars.svg",
    "images\\planet-mars-internal.svg",
    "images\\planet-mars-geology.png",
    "red",
    "1.03 DAYS",
    "1.88 YEARS",
    "3,389.5 KM",
    "-28&degC",
    "https://en.wikipedia.org/wiki/mars",
  ],
  JUPITER: [
    "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
    "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
    "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
    "images\\planet-jupiter.svg",
    "images\\planet-jupiter-internal.svg",
    "images\\planet-jupiter-geology.png",
    "darkred",
    "9.93 HOURS",
    "11.86 YEARS",
    "69,911 KM",
    "-108&degC",
    "https://en.wikipedia.org/wiki/jupiter",
  ],
  SATURN: [
    "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
    "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
    "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
    "images\\planet-saturn.svg",
    "images\\planet-saturn-internal.svg",
    "images\\planet-saturn-geology.png",
    "orange",
    "10.8 HOURS",
    "29.46 YEARS",
    "58,232 KM",
    "-138&degC",
    "https://en.wikipedia.org/wiki/saturn",
  ],
  URANUS: [
    "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
    "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
    "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
    "images\\planet-uranus.svg",
    "images\\planet-uranus-internal.svg",
    "images\\planet-uranus-geology.png",
    "green",
    "17.2 HOURS",
    "84 YEARS",
    "25,362 KM",
    "-195&degC",
    "https://en.wikipedia.org/wiki/uranus",
  ],
  NEPTUNE: [
    "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
    "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
    "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
    "images\\planet-neptune.svg",
    "images\\planet-neptune-internal.svg",
    "images\\planet-neptune-geology.png",
    "cyan",
    "16.08 HOURS",
    "164.79 YEARS",
    "24,622 KM",
    "-201&degC",
    "https://en.wikipedia.org/wiki/neptune",
  ],
};

let current_planet = "MERCURY";
let internal_state = 1;
let image_class = document.querySelector(".first_img");
overview = document.querySelectorAll(".overview");
surface = document.querySelectorAll(".surface");
structure = document.querySelectorAll(".structure");

// Overview button
for (i = 0; i < 2; i++) {
  overview[i].addEventListener("click", function () {
    document.querySelector(".description").textContent =
      planets_info[current_planet][0];
    overview[1].style.backgroundColor = planets_info[current_planet][6];
    image_class.src = planets_info[current_planet][3];
    if (internal_state === 2) {
      structure[1].style.backgroundColor = "rgb(255,255,255,0)";
      structure[1].style;
    } else if (internal_state === 3) {
      surface[1].style.backgroundColor = "rgb(255,255,255,0)";
      let surface_img = document.querySelector(".surface_img");
      surface_img.classList.add("ss");
    }
    internal_state = 1;
  });
}

// Structure button
for (i = 0; i < 2; i++) {
  structure[i].addEventListener("click", function () {
    document.querySelector(".description").textContent =
      planets_info[current_planet][1];
    structure[1].style.backgroundColor = planets_info[current_planet][6];
    image_class.src = planets_info[current_planet][4];
    if (internal_state === 1) {
      overview[1].style.backgroundColor = "rgb(255,255,255,0)";
    } else if (internal_state === 3) {
      surface[1].style.backgroundColor = "rgb(255,255,255,0)";
      let surface_img = document.querySelector(".surface_img");
      surface_img.classList.add("ss");
    }
    internal_state = 2;
  });
}

// Surface
for (i = 0; i < 2; i++) {
  surface[i].addEventListener("click", function () {
    document.querySelector(".description").textContent =
      planets_info[current_planet][2];
    surface[1].style.backgroundColor = planets_info[current_planet][6];
    image_class.src = planets_info[current_planet][3];
    if (internal_state === 2) {
      structure[1].style.backgroundColor = "rgb(255,255,255,0)";
    } else if (internal_state === 1) {
      overview[1].style.backgroundColor = "rgb(255,255,255,0)";
    }
    internal_state = 3;

    let surface_img = document.querySelector(".surface_img");
    surface_img.src = planets_info[current_planet][5];
    surface_img.classList.remove("ss");
  });
}

// Change the page when different planets are chosen from the header
let planet_click = function (x) {
  document.querySelector(".first_img").src = planets_info[x.innerText][3];
  document.querySelector(".surface_img").src = planets_info[x.innerText][5];
  document.getElementsByTagName("h2")[0].textContent = x.innerText;
  document.querySelector(".description").textContent =
    planets_info[x.innerText][0];
  current_planet = x.innerText;

  document.querySelector(".a").innerHTML = planets_info[x.innerText][7];
  document.querySelector(".b").innerHTML = planets_info[x.innerText][8];
  document.querySelector(".c").innerHTML = planets_info[x.innerText][9];
  document.querySelector(".d").innerHTML = planets_info[x.innerText][10];
  document.querySelector(".line").href = planets_info[x.innerText][11];
  if (current === 1) {
    drop_down.classList.add("drop");
    current = 0;
  }
};


var facebook_link = "https://www.facebook.com/tommy.berglund1"
var facebook_name = "tommy.berglund1"
var email_link = "mailto:toberglu@gmail.com"
var email_name = "toberglu@gmail.com"
var finn_link = "https://www.finn.no/profil?userId=290019030"
var phone_number = "92 22 20 67"

var facebook_btn = document.querySelectorAll("[id='facebook_btn']")
var facebook_label = document.querySelector("[id='facebook_label']")
var email_btn = document.querySelectorAll("[id='email_btn']")
var email_label = document.querySelector("[id='email_label']")
var finn_btn = document.querySelectorAll("[id='finn_btn']")
var phone_label = document.querySelector("[id='phone_label']")


var hjem_blokk = document.getElementById("hjem_blokk");
var kjop_blokk = document.getElementById("kjop_blokk");
var bilder_blokk = document.getElementById("bilder_blokk");
var kontakt_blokk = document.getElementById("kontakt_blokk");
var om_oss_blokk = document.getElementById("om_oss_blokk");

var hjem_button = document.getElementById("hjem_button");
var kjop_button = document.getElementById("kjop_button");
var bilder_button = document.getElementById("bilder_button");
var kontakt_button = document.getElementById("kontakt_button");
var om_oss_button = document.getElementById("om_oss_button");

var last_active_button = hjem_button;
var last_active_blokk = hjem_blokk;


for (var i = 0; i < facebook_btn.length; i++) {
  //facebook_btn[i].href = facebook_link
  //facebook_label.innerHTML = facebook_name
}

for (var i = 0; i < finn_btn.length; i++) {
  //finn_btn[i].href = finn_link
  //phone_label.innerHTML = phone_number
}

for (var i = 0; i < email_btn.length; i++) {
  //email_btn[i].href = email_link
  //email_label.innerHTML = email_name
}


update_prislabels();


function hjem_btn() {
  last_active_button.classList.remove("active");
  hjem_button.classList.add("active");
  last_active_button = hjem_button

  last_active_blokk.classList.replace("vis", "sjul");
  hjem_blokk.classList.replace("sjul", "vis");
  last_active_blokk = hjem_blokk
}

function kjop_btn() {
  last_active_button.classList.remove("active");
  kjop_button.classList.add("active");
  last_active_button = kjop_button

  last_active_blokk.classList.replace("vis", "sjul");
  kjop_blokk.classList.replace("sjul", "vis");
  last_active_blokk = kjop_blokk
}

function bilder_btn() {
  last_active_button.classList.remove("active");
  bilder_button.classList.add("active");
  last_active_button = bilder_button

  last_active_blokk.classList.replace("vis", "sjul");
  bilder_blokk.classList.replace("sjul", "vis");
  last_active_blokk = bilder_blokk
}

function kontakt_btn() {
  last_active_button.classList.remove("active");
  kontakt_button.classList.add("active");
  last_active_button = kontakt_button

  last_active_blokk.classList.replace("vis", "sjul");
  kontakt_blokk.classList.replace("sjul", "vis");
  last_active_blokk = kontakt_blokk
}

function om_oss_btn() {
  last_active_button.classList.remove("active");
  om_oss_button.classList.add("active");
  last_active_button = om_oss_button

  last_active_blokk.classList.replace("vis", "sjul");
  om_oss_blokk.classList.replace("sjul", "vis");
  last_active_blokk = om_oss_blokk
}


function create_saleblock(img_path, tittel, beskrivelse, pris) {
  console.log("OK 1");
  const block = document.createElement("div")
  block.classList.add("salg_container");
  
  const img = document.createElement("img")
  img.src = img_path;
  block.appendChild(img);
  
  const display_block = document.createElement("div")
  display_block.style = "display: flexbox;";
  
  const under_tittel = document.createElement("p")
  under_tittel.classList.add("under_tittel");
  under_tittel.style = "align-self: normal; margin-top: 10px; padding-top: 0%;";
  under_tittel.innerHTML = tittel;
  display_block.appendChild(under_tittel);

  const normal_tekst = document.createElement("p")
  normal_tekst.classList.add("normal_tekst");
  normal_tekst.style = "height: fit-content;";
  normal_tekst.innerHTML = beskrivelse;
  display_block.appendChild(normal_tekst);

  const pris_tekst = document.createElement("p")
  pris_tekst.classList.add("normal_tekst");
  pris_tekst.id = "pris";
  pris_tekst.style = "font-size: 180%;";
  pris_tekst.innerHTML = "<b>" + pris + "</b>";
  display_block.appendChild(pris_tekst);

  block.appendChild(display_block);
  document.getElementById("salgblock_container").appendChild(block);
  update_prislabels();

// Mal for bil til salg blokk              
//                <div class="salg_container">
//                    <img src="path/to/front/image">
//                    <div style="display: block;">
//                        <p class="under_tittel" style="align-self: normal; margin-top: 10px; padding-top: 0%;">
//                            Tittel / Navn på bil
//                        </p>
//                        <p class="normal_tekst" style="height: 120px;">
//                            Beskrivelse og informasjon om bilen
//                        </p>
//                        <p class="normal_tekst" id="pris" style="font-size: 180%; position: relativ; bottom: 0;"><b>pris</b></p>
//                    </div>
//                </div>
}

function update_prislabels() {
  var pris_labels = document.querySelectorAll("[id='pris']")
  if (pris_labels.length === 0) {
    document.getElementById("bilsalg_label").innerHTML = "Dessverre ikke noe til salgs akkurat nå"
  }

  else {
    for (var i = 0; i < pris_labels.length; i++) {
      if (!pris_labels[i].innerHTML.endsWith(",- kr")) {
        pris_labels[i].innerHTML += "<b>,- kr</b>"
      }
    }
  }
}

window.alert("Nettsiden er under utvikling, feil og mangler kan oppstå :)")

//create_saleblock('images/biler/bilde3.png', 'Toyota Hiace', 'Selger Toyota Hiace 2030 model. I god stand, nye kanaler og eu godkjent til 2034', '47 250');

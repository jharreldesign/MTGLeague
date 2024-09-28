console.log("hello");

const otjLogoContainer = document.querySelector("#otjLogoContainer");
const dmuImageContainer = document.querySelector("#dmuImageContainer");
const oneImageContainer = document.querySelector("#oneImageContainer");
const manaSymbol = document.querySelector("#manaSymbol");
const companionOne = document.querySelector("#companionOne");
const companionTwo = document.querySelector("#companionTwo");
const companionThree = document.querySelector("#companionThree");
const largeCompanion = document.querySelector("#largeCompanion");

//----------------COMPANIONS------------------------------------//
const companionSmallOne = document.querySelector("#companionSmallOne");
const companionSmallTwo = document.querySelector("#companionSmallTwo");
const companionSmallThree = document.querySelector("#companionSmallThree");
const largeImage = document.getElementById("largeCompanion");

//----------------CAROUSEL--------------------------------------//


// Function to fetch and display the set logos
const otjSetLogo = async () => {
    let otjLogo = await axios.get(`https://api.scryfall.com/sets/otj`);
    let logoOTJ = otjLogo.data.icon_svg_uri;
    otjLogoContainer.setAttribute("src", logoOTJ);
};

const dmuSetLogo = async () => {
    let dmuLogo = await axios.get(`https://api.scryfall.com/sets/dmu`);
    let logoDMU = dmuLogo.data.icon_svg_uri;
    dmuImageContainer.setAttribute("src", logoDMU);
};

const oneSetLogo = async () => {
    let oneLogo = await axios.get(`https://api.scryfall.com/sets/one`);
    let logoONE = oneLogo.data.icon_svg_uri;
    oneImageContainer.setAttribute("src", logoONE);
};

const symbol = async () => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);
    let manaIconBlue = response.data.data;
    let blueMana = manaIconBlue.find((symbolObj) => symbolObj.symbol === "{U}");
    manaSymbol.setAttribute("src", blueMana.svg_uri);
};

const firstCompanion = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?order=set&q=e%3Amat`);
    let firstCard = response.data.data[39];
    let imageUrl = firstCard.image_uris?.art_crop;
    companionOne.setAttribute("src", imageUrl); // Set the image src
};

const secondCompanion = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/3bdd2b4b-5ba3-4984-8d48-c4c1d75dd177`);
    let companiondos = response.data.image_uris.art_crop;
    companionTwo.setAttribute("src", companiondos);
};

const thirdCompanion = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/d608df31-bcc6-4fec-89f1-5cefe5c2ec99`);
    let companion3 = response.data.image_uris.art_crop;
    companionThree.setAttribute("src", companion3);
};

const companionLargeBlock = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3Acmm&unique=prints`);
    let largeCompanionImage = response.data.data[83];
    let imageUrl = largeCompanionImage.image_uris?.art_crop;
    largeCompanion.setAttribute("src", imageUrl);
};

// companionSmallOne
const companionOneSmall = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3Acmm&unique=prints`);
    let smallCompanionImageOne = response.data.data[83];
    let imageUrl = smallCompanionImageOne.image_uris?.art_crop;
    companionSmallOne.setAttribute("src", imageUrl);
};

// companionSmallTwo
const companionTwoSmall = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?format=json&include_extras=true&include_multilingual=false&include_variations=true&order=set&page=2&q=e%3A2x2&unique=prints`);
    let smallCompanionImageTwo = response.data.data[172];
    let imageUrl = smallCompanionImageTwo.image_uris?.art_crop;
    companionSmallTwo.setAttribute("src", imageUrl);
};

// companionSmallThree
const companionThreeSmall = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3Am10&unique=prints`);
    let smallCompanionImageThree = response.data.data[67];
    let imageUrl = smallCompanionImageThree.image_uris?.art_crop;
    companionSmallThree.setAttribute("src", imageUrl);
};

// Function to change the large image
function setLargeImage(source) {
    largeImage.src = source;
}

// Add event listeners to the small images
companionSmallOne.addEventListener("click", function () {
    setLargeImage(companionSmallOne.src);
});

companionSmallTwo.addEventListener("click", function () {
    setLargeImage(companionSmallTwo.src);
});

companionSmallThree.addEventListener("click", function () {
    setLargeImage(companionSmallThree.src);
});

//-----------------CAROUSEL--------------------------//
// https://api.scryfall.com/cards/search?q=jace



//----SET LOGOS----//
otjSetLogo();
dmuSetLogo();
oneSetLogo();
symbol();

//-----COMPANIONS----//
firstCompanion();
secondCompanion();
thirdCompanion();

//-----ABILITIES----//
companionOneSmall();
companionTwoSmall();
companionThreeSmall();
companionLargeBlock();

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

//MANA SYMBOL
const symbol = async () => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);
    let manaIconRed = response.data.data;
    let redMana = manaIconRed.find((symbolObj) => symbolObj.symbol === "{W}");
    manaSymbol.setAttribute("src", redMana.svg_uri);
};

//-------------------------------------------------------------------------------------------------//
//COMPANION

const firstCompanion = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Awar`);
    let firstCard = response.data.data[134].image_uris.art_crop;
    let imageUrl = firstCard
    companionOne.setAttribute("src", imageUrl); 
};

const secondCompanion = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Amom`);
    let secondCard = response.data.data[8].image_uris.art_crop;
    let imageUrl = secondCard
    companionTwo.setAttribute("src", imageUrl); 
};

const thirdCompanion = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Amom&page=2`);
    let thirdCard = response.data.data[14].image_uris.art_crop;
    let imageUrl = thirdCard;
    companionThree.setAttribute("src", imageUrl);
};

//--------------ABILITIES SECTION--------------------------------------------//

//-------------INITIAL PAGE LOAD IMAGE---------------------//
const companionLargeBlock = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/51825d35-cdb2-40fa-ab89-1625161b04af`);
    let largeCompanionImage = response.data.image_uris.art_crop;
    let imageUrl = largeCompanionImage;
    largeCompanion.setAttribute("src", imageUrl);
};

// abilitySmallOne
const companionOneSmall = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?order=collector_number&q=e%3Amh3`);
    let smallCompanionImageOne = response.data.data[8].card_faces[0].image_uris.art_crop;
    let imageUrl = smallCompanionImageOne
    companionSmallOne.setAttribute("src", imageUrl);
};

// abilitySmallTwo
const companionTwoSmall = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?order=collector_number&q=e%3Am14`);
    let smallCompanionImageTwo = response.data.data[7].image_uris.art_crop;
    let imageUrl = smallCompanionImageTwo;
    companionSmallTwo.setAttribute("src", imageUrl);
};

// abilitySmallThree
const companionThreeSmall = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?order=collector_number&q=e%3Addh`);
    let smallCompanionImageThree = response.data.data[4].image_uris.art_crop;
    let imageUrl = smallCompanionImageThree;
    companionSmallThree.setAttribute("src", imageUrl);
};

function setLargeImage(source) {
    largeImage.src = source;
}

companionSmallOne.addEventListener("click", function () {
    setLargeImage(companionSmallOne.src);
});

companionSmallTwo.addEventListener("click", function () {
    setLargeImage(companionSmallTwo.src);
});

companionSmallThree.addEventListener("click", function () {
    setLargeImage(companionSmallThree.src);
});

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

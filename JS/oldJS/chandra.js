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
    let redMana = manaIconRed.find((symbolObj) => symbolObj.symbol === "{R}");
    manaSymbol.setAttribute("src", redMana.svg_uri);
};

//-------------------------------------------------------------------------------------------------//
//COMPANION

const firstCompanion = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?order=set&q=e%3Amat`);
    let firstCard = response.data.data[48];
    let imageUrl = firstCard.image_uris?.art_crop;
    companionOne.setAttribute("src", imageUrl); // Set the image src
};

const secondCompanion = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?order=set&q=e%3Amat`);
    let secondCard = response.data.data[40];
    let imageUrl = secondCard.image_uris?.art_crop;
    companionTwo.setAttribute("src", imageUrl); // Set the image src
};

const thirdCompanion = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/2a717b98-cdac-416d-bf6c-f6b6638e65d1`);
    let thirdCard = response.data.card_faces[0];
    let imageUrl = thirdCard.image_uris?.art_crop;
    companionThree.setAttribute("src", imageUrl); // Set the image src
};

//--------------ABILITIES SECTION--------------------------------------------//

//-------------INITIAL PAGE LOAD IMAGE---------------------//
const companionLargeBlock = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3Acmm&unique=prints`);
    let largeCompanionImage = response.data.data[83];
    let imageUrl = largeCompanionImage.image_uris?.art_crop;
    largeCompanion.setAttribute("src", imageUrl);
};

// abilitySmallOne
const companionOneSmall = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?order=collector_number&q=e%3Aori`);
    let smallCompanionImageOne = response.data.data[40];
    let imageUrl = smallCompanionImageOne.image_uris?.art_crop;
    companionSmallOne.setAttribute("src", imageUrl);
};

// abilitySmallTwo
const companionTwoSmall = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?order=set&q=e%3Am20`);
    let smallCompanionImageTwo = response.data.data[128];
    let imageUrl = smallCompanionImageTwo.image_uris?.art_crop;
    companionSmallTwo.setAttribute("src", imageUrl);
};

// abilitySmallThree
const companionThreeSmall = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?format=json&include_extras=true&order=set&page=2&q=e%3Am21`);
    let smallCompanionImageThree = response.data.data[103];
    let imageUrl = smallCompanionImageThree.image_uris?.art_crop;
    companionSmallThree.setAttribute("src", imageUrl);
};

// Function to change ability to the large image
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

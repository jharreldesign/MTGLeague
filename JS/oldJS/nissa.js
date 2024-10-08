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
    let redMana = manaIconRed.find((symbolObj) => symbolObj.symbol === "{G}");
    manaSymbol.setAttribute("src", redMana.svg_uri);
};

//-------------------------------------------------------------------------------------------------//
//COMPANION

const firstCompanion = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Awar`);
    let firstCard = response.data.data[4].image_uris.art_crop;
    let imageUrl = firstCard
    companionOne.setAttribute("src", imageUrl); // Set the image src
};

const secondCompanion = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Awar`);
    let secondCard = response.data.data[136].image_uris.art_crop;
    let imageUrl = secondCard
    companionTwo.setAttribute("src", imageUrl); // Set the image src
};

const thirdCompanion = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Awar&page=2`);
    let thirdCard = response.data.data[55].image_uris.art_crop;
    let imageUrl = thirdCard;
    companionThree.setAttribute("src", imageUrl); // Set the image src
};

//--------------ABILITIES SECTION--------------------------------------------//

//-------------INITIAL PAGE LOAD IMAGE---------------------//
const companionLargeBlock = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3Acmm&unique=prints`);
    // console.log(response.data.data[83].image_uris)
    // let largeCompanionImage = response.data.data[83].image_uris.art_crop;
    // let imageUrl = largeCompanionImage;
    // largeCompanion.setAttribute("src", imageUrl);
};

// abilitySmallOne
const companionOneSmall = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Aone`);
    let smallCompanionImageOne = response.data.data[154].image_uris.art_crop;
    let imageUrl = smallCompanionImageOne
    companionSmallOne.setAttribute("src", imageUrl);
};

// abilitySmallTwo
const companionTwoSmall = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Amat`);
    let smallCompanionImageTwo = response.data.data[28].image_uris.art_crop;
    let imageUrl = smallCompanionImageTwo;
    companionSmallTwo.setAttribute("src", imageUrl);
};

// abilitySmallThree
const companionThreeSmall = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Ac21&page=2`);
    let smallCompanionImageThree = response.data.data[15].image_uris.art_crop;
    let imageUrl = smallCompanionImageThree;
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

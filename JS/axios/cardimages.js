//Goals: 
//Change to just the same sets on the five that are avaliable.
//create companion for each page. Can just be Companion 1, Companion 2, Companion 3
//Each Planeswalker will choose a random out of the amount avaliable.
//But beware, you need to make sure you choose different for each page so they're not the same on multiple pages

//----------------COMPANIONS------------------------------------//
// const blbCompanionOne = document.querySelector("#blbCompanionOne");
// const blbCompanionTwo = document.querySelector("#blbCompanionTwo");
// const blbCompanionThree = document.querySelector("#blbCompanionThree");

// const dmuCompanionOne = document.querySelector("#dmuCompanionOne");
// const dmuCompanionTwo = document.querySelector("#dmuCompanionTwo");
// const dmuCompanionThree = document.querySelector("#dmuCompanionThree");

// const dskCompanionOne = document.querySelector("#dskCompanionOne");
// const dskCompanionTwo = document.querySelector("#dskCompanionTwo");
// const dskCompanionThree = document.querySelector("#dskCompanionThree");

// const mkmCompanionOne = document.querySelector("#mkmCompanionOne");
// const mkmCompanionTwo = document.querySelector("#mkmCompanionTwo");
// const mkmCompanionThree = document.querySelector("#mkmCompanionThree");

// const otjCompanionOne = document.querySelector("#otjCompanionOne");
// const otjCompanionTwo = document.querySelector("#otjCompanionTwo");
// const otjCompanionThree = document.querySelector("#otjCompanionThree");

//----------------LARGE IMAGE-----------------------------------//
// const blbLargeImage = document.getElementById("blbLargeCompanion");
// const dmuLargeImage = document.getElementById("dmuLargeCompanion");
// const dskLargeImage = document.getElementById("dskLargeCompanion");
// const mkmLargeImage = document.getElementById("mkmLargeCompanion");
// const otjLargeImage = document.getElementById("otjLargeCompanion");

//----------------ABILITIES-------------------------------------//
// const blbAbilitiesOne = document.querySelector("#blbAbilitiesOne");
// const blbAbilitiesTwo = document.querySelector("#blbAbilitiesTwo");
// const blbAbilitiesThree = document.querySelector("#blbAbilitiesThree");

// const dmuAbilitiesOne = document.querySelector("#dmuAbilitiesOne");
// const dmuAbilitiesTwo = document.querySelector("#dmuAbilitiesTwo");
// const dmuAbilitiesThree = document.querySelector("#dmuAbilitiesThree");

// const dskAbilitiesOne = document.querySelector("#dksAbilitiesOne");
// const dskAbilitiesSmallTwo = document.querySelector("#dksAbilitiesTwo");
// const dskAbilitiesThree = document.querySelector("#dksAbilitiesThree");

// const mkmAbilitiesOne = document.querySelector("#mkmAbilitiesOne");
// const mkmAbilitiesTwo = document.querySelector("#mkmAbilitiesTwo");
// const mkmAbilitiesThree = document.querySelector("#mkmAbilitiesThree");

// const otjAbilitiesOne = document.querySelector("#otjAbilitiesOne");
// const otjAbilitiesTwo = document.querySelector("#otjAbilitiesTwo");
// const otjAbilitiesThree = document.querySelector("#otjAbilitiesThree");

// ----------------------------------------COMPANIONS---------------------------------------------------//

const firstCompanionBlb = async () => {
        let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Ablb`);
        let blbCompanions = response.data.data; 
        
        let randomIndex = Math.floor(Math.random() * blbCompanions.length);
        
        let randomCompanion = blbCompanions[randomIndex];
        
        if (randomCompanion.image_uris && randomCompanion.image_uris.art_crop) {
            let imageUrl = randomCompanion.image_uris.art_crop;
            
            blbCompanionOne.setAttribute("src", imageUrl);
        }
};


const secondCompanionDmu = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Admu`);
    let dmuCompanions = response.data.data; 
    
    let randomIndex = Math.floor(Math.random() * dmuCompanions.length);
    
    let randomCompanion = dmuCompanions[randomIndex];
    
    if (randomCompanion.image_uris && randomCompanion.image_uris.art_crop) {
        let imageUrl = randomCompanion.image_uris.art_crop;
        
        dmuCompanionOne.setAttribute("src", imageUrl);
    }
};

const thirdCompanionDsk = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Adsk`);
    let dskCompanions = response.data.data; 
    
    let randomIndex = Math.floor(Math.random() * dskCompanions.length);
    
    let randomCompanion = dskCompanions[randomIndex];
    
    if (randomCompanion.image_uris && randomCompanion.image_uris.art_crop) {
        let imageUrl = randomCompanion.image_uris.art_crop;
        
        dskCompanionOne.setAttribute("src", imageUrl);
    }
};

firstCompanionBlb();
secondCompanionDmu();
thirdCompanionDsk();

// const firstCompanionBlb = async () => {
//     let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Ablb`);
//     let blbFirstCompanion = response.data.data[10].image_uris.art_crop;
//     let imageUrl = blbFirstCompanion
//     blbCompanionOne.setAttribute("src", imageUrl); // Set the image src
// };

// const secondCompanionBlb = async () => {
//     let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Ablb`);
//     let blbSecondCompanion = response.data.data[91].image_uris.art_crop;
//     let imageUrl = blbSecondCompanion
//     blbCompanionTwo.setAttribute("src", imageUrl); // Set the image src
// };

// const thirdCompanionBlb = async () => {
//     let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Ablb`);
//     let blbThirdCompanion = response.data.data[29].image_uris.art_crop;
//     let imageUrl = blbThirdCompanion
//     blbCompanionThree.setAttribute("src", imageUrl); // Set the image src
// };

// const firstCompanionDmu = async () => {
//     let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Admu`);
//     let dmuFirstCompanion = response.data.data[29].image_uris.art_crop;
//     let imageUrl = dmuFirstCompanion
//     dmuCompanionOne.setAttribute("src", imageUrl); // Set the image src
// };

// const secondCompanionDmu = async () => {
//     let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Admu`);
//     let dmuSecondCompanion = response.data.data[29].image_uris.art_crop;
//     let imageUrl = dmuSecondCompanion
//     dmuCompanionTwo.setAttribute("src", imageUrl); // Set the image src
// };

// const thirdCompanionDmu = async () => {
//     let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Admu`);
//     let dmuThirdCompanion = response.data.data[29].image_uris.art_crop;
//     let imageUrl = dmuThirdCompanion
//     dmuCompanionThree.setAttribute("src", imageUrl); // Set the image src
// };

// ----------------------------------------ABILITIES---------------------------------------------------//

//-------------INITIAL PAGE LOAD IMAGE---------------------//
// const companionLargeBlock = async () => {
//     let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Ablb`);
//     let largeCompanionImage = response.data.data[83];
//     let imageUrl = largeCompanionImage.image_uris?.art_crop;
//     largeCompanion.setAttribute("src", imageUrl);
// };

// // abilitySmallOne
// const companionOneSmall = async () => {
//     let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Admu`);
//     let smallCompanionImageOne = response.data.data[97];
//     let imageUrl = smallCompanionImageOne.image_uris?.art_crop;
//     companionSmallOne.setAttribute("src", imageUrl);
// };

// // abilitySmallTwo
// const companionTwoSmall = async () => {
//     let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Adsk`);
//     console.log(response.data.data)
//     let smallCompanionImageTwo = response.data.data[100];
//     let imageUrl = smallCompanionImageTwo.image_uris?.art_crop;
//     companionSmallTwo.setAttribute("src", imageUrl);
// };

// abilitySmallThree
// const companionThreeSmall = async () => {
//     let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Amkm`);
//     let smallCompanionImageThree = response.data.data[103];
//     let imageUrl = smallCompanionImageThree.image_uris?.art_crop;
//     companionSmallThree.setAttribute("src", imageUrl);
// };

// const companionThreeSmall = async () => {
//     let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Aotj`);
//     let smallCompanionImageThree = response.data.data[103];
//     let imageUrl = smallCompanionImageThree.image_uris?.art_crop;
//     companionSmallThree.setAttribute("src", imageUrl);
// };

// // Function to change ability to the large image
// function setLargeImage(source) {
//     largeImage.src = source;
// }

// // Add event listeners to the small images
// companionSmallOne.addEventListener("click", function () {
//     setLargeImage(companionSmallOne.src);
// });

// companionSmallTwo.addEventListener("click", function () {
//     setLargeImage(companionSmallTwo.src);
// });

// companionSmallThree.addEventListener("click", function () {
//     setLargeImage(companionSmallThree.src);
// });

// firstCompanionBlb();
// secondCompanionBlb();
// thirdCompanionBlb();

// firstCompanionDmu();
// secondCompanionDmu();
// thirdCompanionDmu();
//Goals: 
//Change to just the same sets on the five that are avaliable.
//create companion for each page. Can just be Companion 1, Companion 2, Companion 3
//Each Planeswalker will choose a random out of the amount avaliable.
//But beware, you need to make sure you choose different for each page so they're not the same on multiple pages

// ----------------------------------------COMPANIONS---------------------------------------------------//
const bloomburrow = document.getElementById("bloomburrow")
const duskmourn = document.getElementById('duskmourn')
const outlaws = document.getElementById('outlaws')

const dmuAbilityImage = document.getElementById("dmuAbilityImage")
const mkmAbilityImage = document.getElementById("mkmAbilityImage")

const bloomburrowCompanionAbility = async () => {
        let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Ablb`);
        let blbCompanions = response.data.data;
        
        let randomIndex = Math.floor(Math.random() * blbCompanions.length);
        
        let randomCompanion = blbCompanions[randomIndex];
        
        if (randomCompanion.image_uris && randomCompanion.image_uris.art_crop) {
            let companionImageUrl = randomCompanion.image_uris.art_crop;
            blbCompanionOne.setAttribute("src", companionImageUrl);
        }
};

const dominariaCompanionAbility = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Admu`);
    let dmuCompanions = response.data.data;
    
    let randomIndex = Math.floor(Math.random() * dmuCompanions.length);
    
    let randomCompanion = dmuCompanions[randomIndex];

    if (randomCompanion.image_uris && randomCompanion.image_uris.normal) {
        let abilityImageUrl = randomCompanion.image_uris.art_crop; 
        dmuAbilityImage.setAttribute("src", abilityImageUrl); 
    }
};

const duskmournCompanionAbility = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Adsk`);
    let dskCompanions = response.data.data;
    
    let randomIndex = Math.floor(Math.random() * dskCompanions.length);
    
    let randomCompanion = dskCompanions[randomIndex];
    
    if (randomCompanion.image_uris && randomCompanion.image_uris.art_crop) {
        let companionImageUrl = randomCompanion.image_uris.art_crop;
        dskCompanionOne.setAttribute("src", companionImageUrl);
    }
};

const murdersCompanionAbility = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Amkm`);
    let mkmCompanions = response.data.data;
    
    let randomIndex = Math.floor(Math.random() * mkmCompanions.length);
    
    let randomCompanion = mkmCompanions[randomIndex];

    if (randomCompanion.image_uris && randomCompanion.image_uris.normal) {
        let abilityImageUrl = randomCompanion.image_uris.art_crop; 
        mkmAbilityImage.setAttribute("src", abilityImageUrl); 
    }
};

const outlawsCompanionAbility = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Aotj`);
    let otjCompanions = response.data.data;
    
    let randomIndex = Math.floor(Math.random() * otjCompanions.length);
    
    let randomCompanion = otjCompanions[randomIndex];
    
    if (randomCompanion.image_uris && randomCompanion.image_uris.art_crop) {
        let companionImageUrl = randomCompanion.image_uris.art_crop;
        otjCompanionOne.setAttribute("src", companionImageUrl);
    }
};

// Function to change the large ability image
const setLargeImage = (source) => {
    const largeImage = document.getElementById("largeAbilityWindow");
    largeImage.src = source;
};


dmuAbilityImage.addEventListener("click", () => {
    setLargeImage(dmuAbilityImage.src);
});

mkmAbilityImage.addEventListener("click", () => {
    setLargeImage(mkmAbilityImage.src);
});

// Call the ability functions
bloomburrowCompanionAbility();
dominariaCompanionAbility();
duskmournCompanionAbility();
murdersCompanionAbility();
outlawsCompanionAbility();
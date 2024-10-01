//Goals: 
//Change to just the same sets on the five that are avaliable.
//create companion for each page. Can just be Companion 1, Companion 2, Companion 3
//Each Planeswalker will choose a random out of the amount avaliable.
//But beware, you need to make sure you choose different for each page so they're not the same on multiple pages

// ----------------------------------------COMPANIONS---------------------------------------------------//

const bloomburrowCompanion = async () => {
        let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Ablb`);
        let blbCompanions = response.data.data; 
        
        let randomIndex = Math.floor(Math.random() * blbCompanions.length);
        
        let randomCompanion = blbCompanions[randomIndex];
        
        if (randomCompanion.image_uris && randomCompanion.image_uris.art_crop) {
            let imageUrl = randomCompanion.image_uris.art_crop;
            
            blbCompanionOne.setAttribute("src", imageUrl);
        }
};

const dominariaCompanion = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Admu`);
    let dmuCompanions = response.data.data; 
    
    let randomIndex = Math.floor(Math.random() * dmuCompanions.length);
    
    let randomCompanion = dmuCompanions[randomIndex];
    
    if (randomCompanion.image_uris && randomCompanion.image_uris.art_crop) {
        let imageUrl = randomCompanion.image_uris.art_crop;
        
        dmuCompanionOne.setAttribute("src", imageUrl);
    }
};

const duskmournCompanion = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Adsk`);
    let dskCompanions = response.data.data; 
    
    let randomIndex = Math.floor(Math.random() * dskCompanions.length);
    
    let randomCompanion = dskCompanions[randomIndex];
    
    if (randomCompanion.image_uris && randomCompanion.image_uris.art_crop) {
        let imageUrl = randomCompanion.image_uris.art_crop;
        
        dskCompanionOne.setAttribute("src", imageUrl);
    }
};

const murdersCompanion = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Amkm`);
    let mkmCompanions = response.data.data; 
    
    let randomIndex = Math.floor(Math.random() * mkmCompanions.length);
    
    let randomCompanion = mkmCompanions[randomIndex];
    
    if (randomCompanion.image_uris && randomCompanion.image_uris.art_crop) {
        let imageUrl = randomCompanion.image_uris.art_crop;
        
        mkmCompanion.setAttribute("src", imageUrl);
    }
};

const outlawsCompanion = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Aotj`);
    let otjCompanions = response.data.data; 
    
    let randomIndex = Math.floor(Math.random() * otjCompanions.length);
    
    let randomCompanion = otjCompanions[randomIndex];
    
    if (randomCompanion.image_uris && randomCompanion.image_uris.art_crop) {
        let imageUrl = randomCompanion.image_uris.art_crop;
        
        otjCompanionOne.setAttribute("src", imageUrl);
    }
};

// ----------------------------------------COMPANIONS---------------------------------------------------//

const bloomburrowAbility = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Ablb`);
    let blbAbilities = response.data.data; 
    
    let randomIndex = Math.floor(Math.random() * blbAbilities.length);
    
    let randomAbility = blbAbilities[randomIndex];
    
    if (randomAbility.image_uris && randomAbility.image_uris.art_crop) {
        let imageUrl = randomAbility.image_uris.art_crop;
        
        blbAbilityOne.setAttribute("src", imageUrl);
    }
};

const dominariaAbility = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Admu`);
    let dmuAbilities = response.data.data; 
    
    let randomIndex = Math.floor(Math.random() * dmuAbilities.length);
    
    let randomAbility = dmuAbilities[randomIndex];
    
    if (randomAbility.image_uris && randomAbility.image_uris.art_crop) {
        let imageUrl = randomAbility.image_uris.art_crop;
        
        dmuAbilityOne.setAttribute("src", imageUrl);
    }
};

const duskmournAbility = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Adsk`);
    let dskAbilities = response.data.data; 
    
    let randomIndex = Math.floor(Math.random() * dskAbilities.length);
    
    let randomAbility = dskAbilities[randomIndex];
    
    if (randomAbility.image_uris && randomAbility.image_uris.art_crop) {
        let imageUrl = randomAbility.image_uris.art_crop;
        
        dskAbilityOne.setAttribute("src", imageUrl);
    }
};

const murdersAbility = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Amkm`);
    let mkmAbilities = response.data.data; 
    
    let randomIndex = Math.floor(Math.random() * mkmAbilities.length);
    
    let randomAbility = mkmAbilities[randomIndex];
    
    if (randomAbility.image_uris && randomAbility.image_uris.art_crop) {
        let imageUrl = randomAbility.image_uris.art_crop;
        
        mkmAbilityOne.setAttribute("src", imageUrl);
    }
};

const outlawsAbility = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Aotj`);
    let otjAbilities = response.data.data; 
    
    let randomIndex = Math.floor(Math.random() * otjAbility.length);
    
    let randomAbility = otjAbilities[randomIndex];
    
    if (randomAbility.image_uris && randomAbility.image_uris.art_crop) {
        let imageUrl = randomAbility.image_uris.art_crop;
        
        otjAbilityOne.setAttribute("src", imageUrl);
    }
};

// ------------------------------LARGE WINDOWS---------------------------------------------------//

const bloomburrowLAbility = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Ablb`);
    let blbLAbilities = response.data.data; 
    
    let randomIndex = Math.floor(Math.random() * blbLAbilities.length);
    
    let randomAbility = blbLAbilities[randomIndex];
    
    if (randomAbility.image_uris && randomAbility.image_uris.art_crop) {
        let imageUrl = randomAbility.image_uris.art_crop;
        
        blbLAbilityOne.setAttribute("src", imageUrl);
    }
};

const dominariaLAbility = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Admu`);
    let dmuLAbilities = response.data.data; 
    
    let randomIndex = Math.floor(Math.random() * dmuLAbilities.length);
    
    let randomAbility = dmuLAbilities[randomIndex];
    
    if (randomAbility.image_uris && randomAbility.image_uris.art_crop) {
        let imageUrl = randomAbility.image_uris.art_crop;
        
        dmuLAbilityOne.setAttribute("src", imageUrl);
    }
};

const duskmournLAbility = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Adsk`);
    let dskLAbilities = response.data.data; 
    
    let randomIndex = Math.floor(Math.random() * dskLAbilities.length);
    
    let randomAbility = dskLAbilities[randomIndex];
    
    if (randomAbility.image_uris && randomAbility.image_uris.art_crop) {
        let imageUrl = randomAbility.image_uris.art_crop;
        
        dskLAbilityOne.setAttribute("src", imageUrl);
    }
};

const murdersLAbility = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Amkm`);
    let mkmLAbilities = response.data.data; 
    
    let randomIndex = Math.floor(Math.random() * mkmLAbilities.length);
    
    let randomAbility = mkmLAbilities[randomIndex];
    
    if (randomAbility.image_uris && randomAbility.image_uris.art_crop) {
        let imageUrl = randomAbility.image_uris.art_crop;
        
        mkmLAbilityOne.setAttribute("src", imageUrl);
    }
};

const outlawsLAbility = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/search?q=e%3Aotj`);
    let otjLAbilities = response.data.data; 
    
    let randomIndex = Math.floor(Math.random() * otjLAbilities.length);
    
    let randomAbility = otjLAbilities[randomIndex];
    
    if (randomAbility.image_uris && randomAbility.image_uris.art_crop) {
        let imageUrl = randomAbility.image_uris.art_crop;
        
        otjLAbilityOne.setAttribute("src", imageUrl);
    }
};


bloomburrowCompanion();
dominariaCompanion();
duskmournCompanion();
murdersCompanion();
outlawsCompanion();

bloomburrowAbility();
dominariaAbility();
duskmournAbility();
murdersAbility();
outlawsAbility();

bloomburrowLAbility();
dominariaLAbility();
duskmournLAbility();
murdersLAbility();
outlawsLAbility();
const cardImgContainerBloomburrow = document.querySelector('#cardImgContainerBloomburrow');
const cardImgContainerDominaria = document.querySelector('#cardImgContainerDominaria');
const cardImgContainerDuskmourn = document.querySelector('#cardImgContainerDuskmourn');
const cardImgContainerMurders = document.querySelector('#cardImgContainerMurders');
const cardImgContainerOutlaws = document.querySelector('#cardImgContainerOutlaws');

// ------------- BLOOMBURROW ------------//
const cardImagesContainerBloomburrow = document.querySelector('#imageContainer');

const crdImgBlb = async () => {
    //we fetch the data from our API call
    let response = await axios.get('https://api.scryfall.com/cards/search?q=e%3Ablb');


    //We extract the image_uris.large from the array that is returned to us and we map over them to only target those images
    //By maping we get a new array of all the targeted large image links
    const imageUris = response.data.data.map(card => card.image_uris.large);

    // Shuffle the array of image URIs
    // By using sort() we randomly return the values which randomizes the results
    const shuffledUris = imageUris.sort(() => 0.5 - Math.random());

    // Limit to the first 20 images
    // We get this by using slice(), creating a new array containing the first 30 elements from our sort call. 
    const limitedUris = shuffledUris.slice(0, 30);

    // Create and append new images
    // we iterate over limitedUris array that was created
    // we then append each img element to a container called cardImagesContainerBloomburrow
    limitedUris.forEach(uri => {
        const img = document.createElement('img');
        img.src = uri;
        img.alt = 'Card Image';
        cardImagesContainerBloomburrow.appendChild(img);
    });
};

// ------------- DOMINARIA UNITED ------------//
const cardImagesContainerDominaria = document.querySelector('#imageContainer');

const crdImgDmu = async () => {
    let response = await axios.get('https://api.scryfall.com/cards/search?q=e%3Admu');
    console.log(response.data.data[0].image_uris.large);
    
    const imageUris = response.data.data.map(card => card.image_uris.large);
    console.log(imageUris);

    // Shuffle the array of image URIs
    const shuffledUris = imageUris.sort(() => 0.5 - Math.random());

    // Limit to the first 20 images
    const limitedUris = shuffledUris.slice(0, 30);

    // Create and append new images
    limitedUris.forEach(uri => {
        const img = document.createElement('img');
        img.src = uri;
        img.alt = 'Card Image';
        cardImagesContainerDominaria.appendChild(img);
    });
};

// ----------------DUSKMOURN---------------- //
const cardImagesContainerDuskmourn = document.querySelector('#imageContainer');

const crdImgDsk = async () => {
    let response = await axios.get('https://api.scryfall.com/cards/search?q=e%3Adsk');
    console.log(response.data.data);
    
    const imageUris = response.data.data.map(card => card.image_uris.large);
    console.log(imageUris);

    // Shuffle the array of image URIs
    const shuffledUris = imageUris.sort(() => 0.5 - Math.random());

    // Limit to the first 20 images
    const limitedUris = shuffledUris.slice(0, 30);

    // Create and append new images
    limitedUris.forEach(uri => {
        const img = document.createElement('img');
        img.src = uri;
        img.alt = 'Card Image';
        cardImagesContainerDuskmourn.appendChild(img);
    });
};

// ---------------------MURDERS-------------------- //
const cardImagesContainerMurders = document.querySelector('#imageContainer');

const crdImgMkm = async () => {
    let response = await axios.get('https://api.scryfall.com/cards/search?q=e%3Amkm');
    console.log(response.data.data);
    
    const imageUris = response.data.data.map(card => card.image_uris.large);
    console.log(imageUris);

    // Shuffle the array of image URIs
    const shuffledUris = imageUris.sort(() => 0.5 - Math.random());

    // Limit to the first 20 images
    const limitedUris = shuffledUris.slice(0, 30);

    // Create and append new images
    limitedUris.forEach(uri => {
        const img = document.createElement('img');
        img.src = uri;
        img.alt = 'Card Image';
        cardImagesContainerMurders.appendChild(img);
    });
};

// -------------------OUTLAWS------------------//
const cardImagesContainerOutlaws = document.querySelector('#imageContainer');

// Fetch card images
const crdImgOtj = async () => {
    let response = await axios.get('https://api.scryfall.com/cards/search?q=e%3Aotj');
    
    const imageUris = response.data.data.map(card => card.image_uris.large);
    
    const shuffledUris = imageUris.sort(() => 0.5 - Math.random());
    const limitedUris = shuffledUris.slice(0, 30);
    
    limitedUris.forEach(uri => {
        const img = document.createElement('img');
        img.src = uri;
        img.alt = 'Card Image';
        cardImagesContainerOutlaws.appendChild(img);
    });
};

crdImgBlb();
crdImgDmu();
crdImgDsk();
crdImgMkm();
crdImgOtj();
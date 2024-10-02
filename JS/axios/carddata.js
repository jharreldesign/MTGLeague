const blbCardImagesContainer = document.querySelector('#blbCardImagesContainer');
const dmuCardImagesContainer = document.querySelector('#dmuCardImagesContainer');
const dskCardImagesContainer = document.querySelector('#dskCardImagesContainer');
const mkmCardImagesContainer = document.querySelector('#mkmCardImagesContainer');
const otjCardImagesContainer = document.querySelector('#otjCardImagesContainer');

const teamLogo = document.querySelector('.teamLogo')

// Fetch card images
const blbCrdImgs = async () => {
    let response = await axios.get('https://api.scryfall.com/cards/search?q=e%3Ablb');
    
    const imageUris = response.data.data.map(card => card.image_uris.large);

    // Shuffle the array of image URIs
    const shuffledUris = imageUris.sort(() => 0.5 - Math.random());

    // Limit to the first 20 images
    const limitedUris = shuffledUris.slice(0, 30);

    // Create and append new images
    limitedUris.forEach(uri => {
        const img = document.createElement('img');
        img.src = uri;
        img.alt = 'Card Image';
        blbCardImagesContainer.appendChild(img);
    });
};

const dmuCrdImgs = async () => {
    let response = await axios.get('https://api.scryfall.com/cards/search?q=e%3Admu');
    console.log(response.data.data[0].image_uris.large);
    
    const imageUris = response.data.data.map(card => card.image_uris.large);
    console.log(imageUris);

    const shuffledUris = imageUris.sort(() => 0.5 - Math.random());

    const limitedUris = shuffledUris.slice(0, 30);

    limitedUris.forEach(uri => {
        const img = document.createElement('img');
        img.src = uri;
        img.alt = 'Card Image';
        dmuCardImagesContainer.appendChild(img);
    });
};

const dskCrdImgs = async () => {
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
        dskCardImagesContainer.appendChild(img);
    });
};

const mkmCrdImgs = async () => {
    let response = await axios.get('https://api.scryfall.com/cards/search?q=e%3Amkm');
    
    const imageUris = response.data.data.map(card => card.image_uris.large);

    const shuffledUris = imageUris.sort(() => 0.5 - Math.random());
    const limitedUris = shuffledUris.slice(0, 30);

    limitedUris.forEach(uri => {
        const img = document.createElement('img');
        img.src = uri;
        img.alt = 'Card Image';
        mkmCardImagesContainer.appendChild(img);
    });
};

const otjCrdImgs = async () => {
    let response = await axios.get('https://api.scryfall.com/cards/search?q=e%3Aotj');
    
    const imageUris = response.data.data.map(card => card.image_uris.large);

    const shuffledUris = imageUris.sort(() => 0.5 - Math.random());
    const limitedUris = shuffledUris.slice(0, 30);

    limitedUris.forEach(uri => {
        const img = document.createElement('img');
        img.src = uri;
        img.alt = 'Card Image';
        otjCardImagesContainer.appendChild(img);
    });
};



blbCrdImgs();
dmuCrdImgs();
dskCrdImgs();
mkmCrdImgs();
otjCrdImgs();
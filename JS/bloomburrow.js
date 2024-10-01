const cardImagesContainer = document.querySelector('#imageContainer');
const teamLogo = document.querySelector('.teamLogo');

const crdImgs = async () => {
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
        cardImagesContainer.appendChild(img);
    });
};

const setLogo = async () => {
    let response = await axios.get('https://api.scryfall.com/sets/blb')

    blbLogoImage = response.data.icon_svg_uri;

    teamLogo.setAttribute("src", blbLogoImage)
}

crdImgs();
setLogo();
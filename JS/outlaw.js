const cardImagesContainer = document.querySelector('#imageContainer');
const teamLogo = document.querySelector('.teamLogo')

// Fetch card images
const crdImgs = async () => {
    let response = await axios.get('https://api.scryfall.com/cards/search?q=e%3Aotj');
    
    const imageUris = response.data.data.map(card => card.image_uris.large);

    const shuffledUris = imageUris.sort(() => 0.5 - Math.random());
    const limitedUris = shuffledUris.slice(0, 30);

    limitedUris.forEach(uri => {
        const img = document.createElement('img');
        img.src = uri;
        img.alt = 'Card Image';
        cardImagesContainer.appendChild(img);
    });
};

const setLogo = async () => {
    let response = await axios.get('https://api.scryfall.com/sets/mkm')

    mkmLogoImage = response.data.icon_svg_uri;

    teamLogo.setAttribute("src", mkmLogoImage)
}

crdImgs();
setLogo();
const cardImagesContainer = document.querySelector('#imageContainer');
const teamLogo = document.querySelector('.teamLogo')

const crdImgs = async () => {
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
        cardImagesContainer.appendChild(img);
    });
};

const setLogo = async () => {
    let response = await axios.get('https://api.scryfall.com/sets/dmu')

    dmuLogoImage = response.data.icon_svg_uri;

    teamLogo.setAttribute("src", dmuLogoImage)
}


crdImgs();
setLogo();
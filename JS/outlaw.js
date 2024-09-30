const cardImagesContainer = document.querySelector('#imageContainer');
const dskLogoContainer = document.querySelector('#dskLogoContainer');
const blbLogoContainer = document.querySelector('#blbLogoContainer');
const mkmLogoContainer = document.querySelector('#mkmLogoContainer');
const otjLogoContainer = document.querySelector('#otjLogoContainer');
const dmuLogoContainer = document.querySelector('#dmuLogoContainer');

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

// Fetch team logos
const teamDSK = async () => {
    let response = await axios.get(`https://api.scryfall.com/sets/dsk`);
    let logoDSK = response.data.icon_svg_uri;
    dskLogoContainer.setAttribute("src", logoDSK);
};

const teamBLB = async () => {
    let response = await axios.get(`https://api.scryfall.com/sets/blb`);
    let logoBLB = response.data.icon_svg_uri;
    blbLogoContainer.setAttribute("src", logoBLB);
};

const teamMKM = async () => {
    let response = await axios.get(`https://api.scryfall.com/sets/mkm`);
    let logoMKM = response.data.icon_svg_uri;
    mkmLogoContainer.setAttribute("src", logoMKM);
};

const teamOTJ = async () => {
    let response = await axios.get(`https://api.scryfall.com/sets/otj`);
    let logoOTJ = response.data.icon_svg_uri;
    otjLogoContainer.setAttribute("src", logoOTJ);
};

const teamDMU = async () => {
    let response = await axios.get(`https://api.scryfall.com/sets/dmu`);
    let logoDMU = response.data.icon_svg_uri;
    dmuLogoContainer.setAttribute("src", logoDMU);
};

// Execute functions
teamDSK();
teamBLB();
teamMKM();
teamOTJ();
teamDMU();
crdImgs();

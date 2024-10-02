const filterButtons = document.querySelectorAll('#filter-bar button');
const championCards = document.querySelectorAll('.champion-card');

const otjSetLogo = document.querySelector('#otjSetLogo')
const dmuSetLogo = document.querySelector('#dmuSetLogo')
const dskSetLogo = document.querySelector('#dskSetLogo')
const mkmSetLogo = document.querySelector('mkmSetLogo')
const blbSetLogo = document.querySelector('blbSetLogo')

const manaIconWhite = document.querySelector('#manaIconWhite')
const manaIconBlue = document.querySelector('#manaIconBlue')
const manaIconBlack = document.querySelector('#manaIconBlack')
const manaIconRed = document.querySelector('#manaIconRed')
const manaIconGreen = document.querySelector('#manaIconGreen')

const heroWhiteIcon = document.querySelector('.heroWhiteIcon')
const heroBlueIcon = document.querySelector('.heroBlueIcon')
const heroBlackIcon = document.querySelector('.heroBlackIcon')
const heroRedIcon = document.querySelector('.heroRedIcon')
const heroGreenIcon = document.querySelector('.heroGreenIcon')

const setLogoBlb = async () => {
    let response = await axios.get('https://api.scryfall.com/sets/blb')

    blbLogoImage = response.data.icon_svg_uri;

    blbSetLogo.setAttribute("src", blbLogoImage)
}

const setLogoOtj = async () => {
    let response = await axios.get('https://api.scryfall.com/sets/otj')

    otjLogoImage = response.data.icon_svg_uri;

    otjSetLogo.setAttribute("src", otjLogoImage)
}

const setLogoDmu = async () => {
    let response = await axios.get('https://api.scryfall.com/sets/dmu')

    dmuLogoImage = response.data.icon_svg_uri;

    dmuSetLogo.setAttribute("src", dmuLogoImage)
}

const setLogoDSK = async () => {
    let response = await axios.get('https://api.scryfall.com/sets/dsk')

    dskLogoImage = response.data.icon_svg_uri;

    dskSetLogo.setAttribute("src", LogoImage)
}

const setLogoBlb = async () => {
    let response = await axios.get('https://api.scryfall.com/sets/blb')

    blbLogoImage = response.data.icon_svg_uri;

    blbSetLogo.setAttribute("src", blbLogoImage)
}



const symbolWhite = async () => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);
    let whiteManaIcon = response.data.data;
    let whiteMana = whiteManaIcon.find((symbolObj) => symbolObj.symbol === "{W}");
    manaIconWhite.setAttribute("src", whiteMana.svg_uri);
};

const symbolBlue = async () => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);
    let blueManaIcon = response.data.data;
    let blueMana = blueManaIcon.find((symbolObj) => symbolObj.symbol === "{U}");
    manaIconBlue.setAttribute("src", blueMana.svg_uri);
};

const symbolBlack = async () => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);
    let blackManaIcon = response.data.data;
    let blackMana = blackManaIcon.find((symbolObj) => symbolObj.symbol === "{B}");
    manaIconBlack.setAttribute("src", blackMana.svg_uri);
};

const symbolRed = async () => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);
    let redManaIcon = response.data.data;
    let redMana = redManaIcon.find((symbolObj) => symbolObj.symbol === "{R}");
    manaIconRed.setAttribute("src", redMana.svg_uri);
};

const symbolGreen = async () => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);
    let greenManaIcon = response.data.data;
    let greenMana = greenManaIcon.find((symbolObj) => symbolObj.symbol === "{G}");
    manaIconGreen.setAttribute("src", greenMana.svg_uri);
};

//HERO MANA ICONS

const heroWhite = async () => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);
    let whiteManaIcon = response.data.data;
    let whiteMana = whiteManaIcon.find((symbolObj) => symbolObj.symbol === "{W}");
    heroWhiteIcon.setAttribute("src", whiteMana.svg_uri);
};

const heroBlue = async () => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);
    let blueManaIcon = response.data.data;
    let blueMana = blueManaIcon.find((symbolObj) => symbolObj.symbol === "{U}");
    heroBlueIcon.setAttribute("src", blueMana.svg_uri);
};

const heroBlack = async () => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);
    let blackManaIcon = response.data.data;
    let blackMana = blackManaIcon.find((symbolObj) => symbolObj.symbol === "{B}");
    heroBlackIcon.setAttribute("src", blackMana.svg_uri);
};

const heroRed = async () => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);
    let redManaIcon = response.data.data;
    let redMana = redManaIcon.find((symbolObj) => symbolObj.symbol === "{R}");
    heroRedIcon.setAttribute("src", redMana.svg_uri);
};

const heroGreen = async () => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);
    let greenManaIcon = response.data.data;
    let greenMana = greenManaIcon.find((symbolObj) => symbolObj.symbol === "{G}");
    heroGreenIcon.setAttribute("src", greenMana.svg_uri);
};

symbolWhite();
symbolBlue();
symbolBlack();
symbolRed();
symbolGreen();

heroWhite();
heroBlue();
heroBlack();
heroRed();
heroGreen();
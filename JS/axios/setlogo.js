const dskLogoContainer = document.querySelector('#dskLogoContainer');
const blbLogoContainer = document.querySelector('#blbLogoContainer');
const mkmLogoContainer = document.querySelector('#mkmLogoContainer');
const otjLogoContainer = document.querySelector('#otjLogoContainer');
const dmuLogoContainer = document.querySelector('#dmuLogoContainer');

// TEAMS

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
}

teamWhiteLogo();
teamBlueLogo();
teamBlackLogo();
teamRedLogo();
teamGreenLogo();

teamDSK();
teamBLB();
teamMKM();
teamOTJ();
teamDMU();
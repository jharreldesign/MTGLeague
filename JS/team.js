const teamBlueMana = document.querySelector("#teamBlueMana");
const teamWhiteMana = document.querySelector('#teamWhiteMana');
const teamBlackMana = document.querySelector('#teamBlackMana');
const teamRedMana = document.querySelector('#teamRedMana');
const teamGreenMana = document.querySelector('#teamGreenMana');

const dskLogoContainer = document.querySelector('#dskLogoContainer');
const blbLogoContainer = document.querySelector('#blbLogoContainer');
const mkmLogoContainer = document.querySelector('#mkmLogoContainer');
const otjLogoContainer = document.querySelector('#otjLogoContainer');
const dmuLogoContainer = document.querySelector('#dmuLogoContainer');

const teamWhiteLogo = async () => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);

    let whiteTeamLogo = response.data.data[75];

    let teamMana = whiteTeamLogo.svg_uri
    teamWhiteMana.setAttribute("src", teamMana)
};

const teamBlueLogo = async () => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);

    let blueTeamLogo = response.data.data[76];

    let teamMana = blueTeamLogo.svg_uri
    teamBlueMana.setAttribute("src", teamMana)
};

const teamBlackLogo = async () => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);

    let blackTeamLogo = response.data.data[77];

    let teamMana = blackTeamLogo.svg_uri
    teamBlackMana.setAttribute("src", teamMana)
};

const teamRedLogo = async () => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);

    let redTeamLogo = response.data.data[78];

    let teamMana = redTeamLogo.svg_uri
    teamRedMana.setAttribute("src", teamMana)
};

const teamGreenLogo = async () => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);

    let greenTeamLogo = response.data.data[79];

    let teamMana = greenTeamLogo.svg_uri
    teamGreenMana.setAttribute("src", teamMana)
};

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
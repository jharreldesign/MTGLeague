const whiteMana = document.querySelector('#whiteMana');
const teamBlueMana = document.querySelector("#teamBlueMana");
const teamBlackMana = document.querySelector('#teamBlackMana');
const teamRedMana = document.querySelector('#teamRedMana');
const teamGreenMana = document.querySelector('#teamGreenMana');

const dskIcon = document.querySelector('#dskIcon');
const blbIcon = document.querySelector('#blbIcon');
const mkmIcon = document.querySelector('#mkmIcon');
const otjIcon = document.querySelector('#otjIcon');
const dmuIcon = document.querySelector('#dmuIcon');

const homeWhiteMana = async () => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);

    let whiteHomeMana = response.data.data[75];

    let homeWhiteMana = whiteHomeMana.svg_uri
    whiteMana.setAttribute("src", homeWhiteMana)
};

const homeBlueMana = async () => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);

    let blueHomeMana = response.data.data[76];

    let homeBlueMana = blueHomeMana.svg_uri
    blueMana.setAttribute("src", homeBlueMana)
};

const homeBlackMana = async () => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);

    let blackHomeMana = response.data.data[77];

    let homeBlackMana = blackHomeMana.svg_uri
    blackMana.setAttribute("src", homeBlackMana)
};

const homeRedMana = async () => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);

    let redHomeMana = response.data.data[78];

    let homeRedMana = redHomeMana.svg_uri
    redMana.setAttribute("src", homeRedMana)
};

const homeGreenMana = async () => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);

    let greenHomeMana = response.data.data[79];

    let homeGreenMana = greenHomeMana.svg_uri
    greenMana.setAttribute("src", homeGreenMana)
};

// TEAMS

const teamDSK = async () => {
    let response = await axios.get(`https://api.scryfall.com/sets/dsk`);
    let logoDSK = response.data.icon_svg_uri;
    dskIcon.setAttribute("src", logoDSK);
};

const teamBLB = async () => {
    let response = await axios.get(`https://api.scryfall.com/sets/blb`);
    let logoBLB = response.data.icon_svg_uri;
    blbIcon.setAttribute("src", logoBLB);
};

const teamMKM = async () => {
    let response = await axios.get(`https://api.scryfall.com/sets/mkm`);
    let logoMKM = response.data.icon_svg_uri;
    mkmIcon.setAttribute("src", logoMKM);
};

const teamOTJ = async () => {
    let response = await axios.get(`https://api.scryfall.com/sets/otj`);
    let logoOTJ = response.data.icon_svg_uri;
    otjIcon.setAttribute("src", logoOTJ);
};

const teamDMU = async () => {
    let response = await axios.get(`https://api.scryfall.com/sets/dmu`);
    let logoDMU = response.data.icon_svg_uri;
    dmuIcon.setAttribute("src", logoDMU);
}

homeWhiteMana();
homeBlueMana();
homeBlackMana();
homeRedMana();
homeGreenMana();

teamDSK();
teamBLB();
teamMKM();
teamOTJ();
teamDMU();
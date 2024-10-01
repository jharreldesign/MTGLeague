const teamBlueMana = document.querySelector("#teamBlueMana");
const teamWhiteMana = document.querySelector('#teamWhiteMana');
const teamBlackMana = document.querySelector('#teamBlackMana');
const teamRedMana = document.querySelector('#teamRedMana');
const teamGreenMana = document.querySelector('#teamGreenMana');

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
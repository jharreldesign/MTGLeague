const teamBlueMana = document.querySelector("#teamBlueMana");
const teamWhiteMana = document.querySelector('#teamWhiteMana');
const teamBlackMana = document.querySelector('#teamBlackMana');
const teamRedMana = document.querySelector('#teamRedMana');
const teamGreenMana = document.querySelector('#teamGreenMana');

const teamBlackRedMana = document.querySelector('#teamBlackRedMana');
const teamGreenBlackMana = document.querySelector('#teamGreenBlackMana');
const teamGreenWhiteMana = document.querySelector('#teamGreenWhiteMana');
const teamWhiteRedMana = document.querySelector('#teamWhiteRedMana');
const teamBlueRedMana = document.querySelector('#teamBlueRedMana');

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

const teamBlackRedLogo = async () => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);

    let blackRedTeamLogo = response.data.data[38];

    let teamMana = blackRedTeamLogo.svg_uri
    teamBlackRedMana.setAttribute("src", teamMana)
};

const teamGreenBlackLogo = async () => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);

    let blackGreenTeamLogo = response.data.data[39];

    let teamMana = blackGreenTeamLogo.svg_uri
    teamGreenBlackMana.setAttribute("src", teamMana)
};

const teamGreenWhiteLogo = async () => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);

    let whiteGreenTeamLogo = response.data.data[44];

    let teamMana = whiteGreenTeamLogo.svg_uri
    teamGreenWhiteMana.setAttribute("src", teamMana)
};

const teamWhiteRedLogo = async () => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);

    let whiteRedTeamLogo = response.data.data[43];

    let teamMana = whiteRedTeamLogo.svg_uri
    teamWhiteRedMana.setAttribute("src", teamMana)
};

const teamBlueRedLogo = async () => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);

    let blueRedTeamLogo = response.data.data[41];

    let teamMana = blueRedTeamLogo.svg_uri
    teamBlueRedMana.setAttribute("src", teamMana);
}

teamWhiteLogo();
teamBlueLogo();
teamBlackLogo();
teamRedLogo();
teamGreenLogo();
teamBlackRedLogo();
teamGreenBlackLogo();
teamGreenWhiteLogo();
teamWhiteRedLogo();
teamBlueRedLogo();
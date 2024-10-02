const teamWhiteLogo = async (elementId) => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);
    let whiteTeamLogo = response.data.data[75];

    if (whiteTeamLogo.svg_uri) {
        let teamMana = whiteTeamLogo.svg_uri;
        document.getElementById(elementId).setAttribute("src", teamMana);
    }
};

teamWhiteLogo("teamWhiteMana1");
teamWhiteLogo("teamWhiteMana2");

const teamBlueLogo = async (elementId) => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);
    let blueTeamLogo = response.data.data[76];

    if (blueTeamLogo.svg_uri) {
        let teamMana = blueTeamLogo.svg_uri;
        document.getElementById(elementId).setAttribute("src", teamMana);
    }
};

teamBlueLogo("teamBlueMana1");
teamBlueLogo("teamBlueMana2");

const teamBlackLogo = async (elementId) => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);
    let blackTeamLogo = response.data.data[77];

    if (blackTeamLogo.svg_uri) {
        let teamMana = blackTeamLogo.svg_uri;
        document.getElementById(elementId).setAttribute("src", teamMana);
    }
};

teamBlackLogo("teamBlackMana1");
teamBlackLogo("teamBlackMana2"); 

const teamRedLogo = async (elementId) => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);
    let redTeamLogo = response.data.data[78];

    if (redTeamLogo.svg_uri) {
        let teamMana = redTeamLogo.svg_uri;
        document.getElementById(elementId).setAttribute("src", teamMana);
    }
};

teamRedLogo("teamRedMana1");
teamRedLogo("teamRedMana2"); 


const teamGreenLogo = async (elementId) => {
    let response = await axios.get(`https://api.scryfall.com/symbology`);
    let greenTeamLogo = response.data.data[79];

    if (greenTeamLogo.svg_uri) {
        let teamMana = greenTeamLogo.svg_uri;
        document.getElementById(elementId).setAttribute("src", teamMana);
    }
};

teamGreenLogo("teamGreenMana1");
teamGreenLogo("teamGreenMana2"); 
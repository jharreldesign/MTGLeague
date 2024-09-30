const jaceProfileImage = document.querySelector('#jaceProfileImage');
const nissaProfileImage = document.querySelector("#nissaProfileImage");
const lilianaProfileImage = document.querySelector('#lilianaProfileImage');
const chandraProfileImage = document.querySelector('#chandraProfileImage');
const ajaniProfileImage = document.querySelector('#ajaniProfileImage');

const otjTeamImage = document.querySelector('#otjTeamImage')
const blbTeamImage = document.querySelector('#blbTeamImage');
const dmuTeamImage = document.querySelector('#dmuTeamImage');
const mkmTeamImage = document.querySelector('#mkmTeamImage');

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

//PLANESWALKERS
const ajaniImageProfile = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/79883468-a37c-4894-8d05-6a4d150b7d59`);
    let ajaniProfile = response.data.image_uris.art_crop;
    ajaniProfileImage.setAttribute("src", ajaniProfile);
};

const lilianaImageProfile = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/b63ae119-f91e-4d0d-8bbd-65350a4d47c4`);
    let lilianaProfile = response.data.image_uris.art_crop;
    lilianaProfileImage.setAttribute("src", lilianaProfile);
};

const chandraImageProfile = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/43da8995-77da-4ec4-94a5-5e7932a3c969`);
    let chandraProfile = response.data.image_uris.art_crop;
    chandraProfileImage.setAttribute("src", chandraProfile);
};

const jaceImageProfile = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/64e6a8d1-ae75-45bd-af62-9a622620cb5c`);
    let jaceProfile = response.data.image_uris.art_crop;
    jaceProfileImage.setAttribute("src", jaceProfile);
};

const nissaImageProfile = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/8d64871b-6ee5-426b-9828-125cb9c7746d`);
    let nissaProfile = response.data.image_uris.art_crop;
    nissaProfileImage.setAttribute("src", nissaProfile);
};


// TEAMS ICONS

const otjImage = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/7054012b-4f9d-44a0-aaf9-7fd3bddc7b2d`);
    let otjTeamLogo = response.data.image_uris.art_crop;
    otjTeamImage.setAttribute("src", otjTeamLogo);
};

const blbImage = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/dc6c9196-6d28-4cc2-9748-60e9632a502b`);
    let blbTeamLogo = response.data.image_uris.art_crop;
    blbTeamImage.setAttribute("src", blbTeamLogo);
};

const dmuImage = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/d67be074-cdd4-41d9-ac89-0a0456c4e4b2`);
    let dmuTeamLogo = response.data.image_uris.art_crop;
    dmuTeamImage.setAttribute("src", dmuTeamLogo);
};

const dskImage = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/4dde86d6-34a0-4b3b-a46a-d9941501d08c`);
    let dskTeamLogo = response.data.image_uris.art_crop;
    dskTeamImage.setAttribute("src", dskTeamLogo);
};

const mkmImage = async () => {
    let response = await axios.get(`https://api.scryfall.com/cards/14a5cd7c-b0b1-4ffa-a806-bb0e73baffad`);
    let mkmTeamLogo = response.data.image_uris.art_crop;
    mkmTeamImage.setAttribute("src", mkmTeamLogo);
};



ajaniImageProfile();
nissaImageProfile();
jaceImageProfile();
lilianaImageProfile();
chandraImageProfile();

otjImage();
blbImage();
dmuImage();
dskImage();
mkmImage();
// Logo containers
const logoContainers = {
    dsk: [document.querySelector('#dskLogoContainer1'), document.querySelector('#dskLogoContainer2')],
    blb: [document.querySelector('#blbLogoContainer1'), document.querySelector('#blbLogoContainer2')],
    mkm: [document.querySelector('#mkmLogoContainer1'), document.querySelector('#mkmLogoContainer2')],
    otj: [document.querySelector('#otjLogoContainer1'), document.querySelector('#otjLogoContainer2')],
    dmu: [document.querySelector('#dmuLogoContainer1'), document.querySelector('#dmuLogoContainer2')]
};

// Function to update logos in multiple containers
const updateLogoContainers = (containers, logoUrl) => {
    containers.forEach(container => {
        if (container) {
            container.setAttribute("src", logoUrl);
        }
    });
};

// TEAMS

const teamDSK = async () => {
    let response = await axios.get(`https://api.scryfall.com/sets/dsk`);
    let logoDSK = response.data.icon_svg_uri;
    updateLogoContainers(logoContainers.dsk, logoDSK);
};

const teamBLB = async () => {
    let response = await axios.get(`https://api.scryfall.com/sets/blb`);
    let logoBLB = response.data.icon_svg_uri;
    updateLogoContainers(logoContainers.blb, logoBLB);
};

const teamMKM = async () => {
    let response = await axios.get(`https://api.scryfall.com/sets/mkm`);
    let logoMKM = response.data.icon_svg_uri;
    updateLogoContainers(logoContainers.mkm, logoMKM);
};

const teamOTJ = async () => {
    let response = await axios.get(`https://api.scryfall.com/sets/otj`);
    let logoOTJ = response.data.icon_svg_uri;
    updateLogoContainers(logoContainers.otj, logoOTJ);
};

const teamDMU = async () => {
    let response = await axios.get(`https://api.scryfall.com/sets/dmu`);
    let logoDMU = response.data.icon_svg_uri;
    updateLogoContainers(logoContainers.dmu, logoDMU);
};

// Call the functions for each team
teamDSK();
teamBLB();
teamMKM();
teamOTJ();
teamDMU();





// const dskLogoContainer = document.querySelector('#dskLogoContainer');
// const blbLogoContainer = document.querySelector('#blbLogoContainer');
// const mkmLogoContainer = document.querySelector('#mkmLogoContainer');
// const otjLogoContainer = document.querySelector('#otjLogoContainer');
// const dmuLogoContainer = document.querySelector('#dmuLogoContainer');

// const dskLogo = async (elementId) => {
//         let response = await axios.get('https://api.scryfall.com/sets/dsk');
//         console.log(response.data.icon_svg_uri);
//         let dskIcon = response.data;

//         if (dskIcon.icon_svg_uri) {
//             let setIcon = dskIcon.icon_svg_uri;
//             document.getElementById(elementId)?.setAttribute("src", setIcon);
//         }
// }


// // TEAMS

// const teamDSK = async () => {
//     let response = await axios.get(`https://api.scryfall.com/sets/dsk`);
//     let logoDSK = response.data.icon_svg_uri;
//     dskLogoContainer.setAttribute("src", logoDSK);
// };

// const teamBLB = async () => {
//     let response = await axios.get(`https://api.scryfall.com/sets/blb`);
//     let logoBLB = response.data.icon_svg_uri;
//     blbLogoContainer.setAttribute("src", logoBLB);
// };

// const teamMKM = async () => {
//     let response = await axios.get(`https://api.scryfall.com/sets/mkm`);
//     let logoMKM = response.data.icon_svg_uri;
//     mkmLogoContainer.setAttribute("src", logoMKM);
// };

// const teamOTJ = async () => {
//     let response = await axios.get(`https://api.scryfall.com/sets/otj`);
//     let logoOTJ = response.data.icon_svg_uri;
//     otjLogoContainer.setAttribute("src", logoOTJ);
// };

// const teamDMU = async () => {
//     let response = await axios.get(`https://api.scryfall.com/sets/dmu`);
//     let logoDMU = response.data.icon_svg_uri;
//     dmuLogoContainer.setAttribute("src", logoDMU);
// }

// dskLogo();
// // teamWhiteLogo();



// teamDSK();
// teamBLB();
// teamMKM();
// teamOTJ();
// teamDMU();
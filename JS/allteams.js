const otjSetLogo = document.querySelector('#otjSetLogo')
const dmuSetLogo = document.querySelector('#dmuSetLogo')
const dskSetLogo = document.querySelector('#dskSetLogo')
const mkmSetLogo = document.querySelector('#mkmSetLogo')
const blbSetLogo = document.querySelector('#blbSetLogo')

const cardSetIconMkm = document.querySelector('#cardSetIconMkm')
const cardSetIconOtj = document.querySelector('#cardSetIconOtj')
const cardSetIconDsk = document.querySelector('#cardSetIconDsk')
const cardSetIconBlb = document.querySelector('#cardSetIconBlb')
const cardSetIconDmu = document.querySelector('#cardSetIconDmu')

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

    dskSetLogo.setAttribute("src", dskLogoImage)
}

const setLogoMkm = async () => {
    let response = await axios.get('https://api.scryfall.com/sets/mkm')

    mkmLogoImage = response.data.icon_svg_uri;

    mkmSetLogo.setAttribute("src", mkmLogoImage)
}

//-----CARD ICONS-------//

const cardLogoMkm = async () => {
    let response = await axios.get('https://api.scryfall.com/sets/mkm')

    mkmLogoImage = response.data.icon_svg_uri;

    cardSetIconMkm.setAttribute("src", mkmLogoImage)
}

const cardLogoDmu = async () => {
    let response = await axios.get('https://api.scryfall.com/sets/dmu')

    dmuLogoImage = response.data.icon_svg_uri;

    cardSetIconDmu.setAttribute("src", dmuLogoImage)
}

const cardLogoDsk = async () => {
    let response = await axios.get('https://api.scryfall.com/sets/dsk')

    dskLogoImage = response.data.icon_svg_uri;

    cardSetIconDsk.setAttribute("src", dskLogoImage)
}

const cardLogoBlb = async () => {
    let response = await axios.get('https://api.scryfall.com/sets/blb')

    blbLogoImage = response.data.icon_svg_uri;

    cardSetIconBlb.setAttribute("src", blbLogoImage)
}

const cardLogoOtj = async () => {
    let response = await axios.get('https://api.scryfall.com/sets/otj')

    otjLogoImage = response.data.icon_svg_uri;

    cardSetIconOtj.setAttribute("src", otjLogoImage)
}

setLogoMkm();
setLogoOtj();
setLogoBlb();
setLogoDmu();
setLogoDSK();

cardLogoMkm();
cardLogoOtj();
cardLogoDsk();
cardLogoBlb();
cardLogoDmu();

console.log('hello');

const cardImagesContainer = document.querySelector('#imageContainer');

const crdImgs = async () => {
    let response = await axios.get('https://api.scryfall.com/cards/search?q=e%3Adsk');
    console.log(response.data.data);
    
    const imageUris = response.data.data.map(card => card.image_uris.large);
    console.log(imageUris);

    // Shuffle the array of image URIs
    const shuffledUris = imageUris.sort(() => 0.5 - Math.random());

    // Limit to the first 20 images
    const limitedUris = shuffledUris.slice(0, 30);

    // Create and append new images
    limitedUris.forEach(uri => {
        const img = document.createElement('img');
        img.src = uri;
        img.alt = 'Card Image';
        cardImagesContainer.appendChild(img);
    });
};

crdImgs();
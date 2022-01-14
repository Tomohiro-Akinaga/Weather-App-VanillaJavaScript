/* Fetch the image data using city name - Finish */
export async function fetchBackgroundImage(text) {

    const backgroundImageUrl = "https://api.unsplash.com/search/photos?query="+text + "&client_id=n-Mbim4tzmenTZYgEXI7p8y0-XLnX-ItwFCLhh-lOaw";
    const backgroundImageData = await fetch(backgroundImageUrl).then(res => res.json());

    function applyBackgroundImage() {
        if ( backgroundImageData.results.length >= 10 ) {
            let i = Math.floor(Math.random() * 10);
            const backgroundImage = backgroundImageData.results[i].urls.full;
            document.body.style.backgroundImage = `url(${backgroundImage})`;
        } else if ( backgroundImageData.results.length < 9 ) {
            const backgroundImage = backgroundImageData.results[0].urls.full;
            document.body.style.backgroundImage = `url(${backgroundImage})`;
        }
    };

    applyBackgroundImage();

};
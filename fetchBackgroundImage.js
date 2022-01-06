// import { finishLoading } from "./Loading";

// Fetch the image data using city name
export async function fetchBackgroundImage(text) {
    const bakgroundImageUrl = "https://api.unsplash.com/search/photos?query="+text + "&client_id=n-Mbim4tzmenTZYgEXI7p8y0-XLnX-ItwFCLhh-lOaw";
    const bakgroundImageData = await fetch(bakgroundImageUrl).then(res => res.json());
    let i = Math.floor(Math.random() * 10);
    const bakgroundImage = await bakgroundImageData.results[i].urls.full;
    
    document.body.style.backgroundImage = "url(" + bakgroundImage + ")";
    // finishLoading();
};
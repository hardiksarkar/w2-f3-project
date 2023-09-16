let movieContainer = document.getElementById("movies-container");
let api_key = document.getElementById("api-key");
let apiKeyBtn = document.getElementById("api-key-btn");
apiKeyBtn.addEventListener("click",()=>{
    fetchApiKey(api_key.value);
})

async function fetchApiKey(apiKey){
    try {
        let getData = await fetch(apiKey);
        const apiData = await getData.json();
        getMovies(apiData);
        // console.log(apiData);    
    } catch (error) {
        console.log("Error fetching data");
    }
    
}

function getMovies(apiData){
    let c=1;
    const htmlData = `<div id="movie-card">
    <img src="${apiData.Poster}" alt="${apiData.Title}">
    <div class="px-3 py-2">
        <p class="m-0" id="movie-number">${c++}</p>
        <h5 class="fw-bold m-0 text-end">${apiData.Title}</h5>
    </div>
</div>`;
    movieContainer.insertAdjacentHTML("beforeend",htmlData);
}

fetchApiKey("http://www.omdbapi.com/?i=tt3896198&apikey=468df59c");
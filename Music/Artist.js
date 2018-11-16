
let artistToken = 'BQC22_s0Q1eEGhYRHFD7BLoJ5LEDqzuzdlroCaH0ZNJunRCfJwVpSftO66vU1XIEfue5j9CuxkB5iKo4gyWyBXYVVmgcWy0jl-7I33mYTz8AefaRIAq9iFwjGHo6lQUAd-SVLbxycqCe3na_pDCzQxswRSC5M0sTAK_pmsA2MApkXJKfb0FxzwDw6xw7mGiilwzncrSwxKUkB6wsuAyRgBIdPk_17GCUo1XCnydlx0nRbPAOnsB_j-yLtF8ZwuOGyeg';
let apiUrl = 'https://api.spotify.com/v1/search?q=';
let search2 = '&type=artist';


function searchForArtist() {
    let clientId = 'def6df2d9e404f4389042d2be1c30ac2';
    let clientSecret = 'd8a6717cda0e4104821354fd0f5d5349';
    let artist = document.getElementById('artist').value;
    fetch(apiUrl + artist + search2, {method: "GET", required: "true", headers:{
        "Authorization": "Bearer " + artistToken , "Accept": "application/json"}})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        album = data;
        // console.log(data);
        console.log(data.artists.items[0]);
        showArtist();

        function showArtist() {
            for (i=0; i<1; i++) {
                let newArtist = document.createElement('p')
                newArtist.innerText = 
                album.artists.items[i].name; 
                let linebreak = document.createElement("br") +
                document.getElementById('artist-data').appendChild(linebreak);
                album.artists.items[i].genres[0];
                linebreak = document.createElement("br") +
                document.getElementById('artist-data').appendChild(linebreak);
                album.artists.items[i].followers.total;
                linebreak = document.createElement("br") +
                document.getElementById('artist-data').appendChild(linebreak);  
                album.artists.items[i].external_urls.spotify;
                document.getElementById('artist-data').appendChild(newArtist); 
        }
        }
    })
    .catch((error) => {
        console.log(error);
    });

}





let artistToken = 'BQAAj4CuNmvLvKa-vYf0hDmDtp5HYCYtYBSC9CLMOpLT1l0fBx-YhrCHmoWM8U2l4zPh04jjisLiHWEIoKGF5xb-2hPBSqXJk2qxGQ4x2yXgZK4NdQvo4kiiA_1TCuOWWApUcyQADdmY2tu09GPe926aVCK8pX0MA1vIOB8i9awgs4nqC1ms_poQFqhE6cQ6KKzF7zp8TBzR7Cp9ChchQecIzPsF2bCewetbXx8-iH-1mKtem_Kf-iIUkhbxpiWf5CU';
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
        console.log(data);
        console.log(data.artists.items[0]);
        showArtist();

        function showArtist() {
            for (i=0; i<1; i++) {
                //name
                $('#artist-data').append(`<h1>${album.artists.items[i].name}</h1>`)

                //image
                $('#artist-data').append(`<img src="${album.artists.items[i].images[2].url}">`)

                //genre
                $('#artist-data').append(`<h3>Genre:</h3><h6>${album.artists.items[i].genres}</h6>`)

                //Followers
                $('#artist-data').append(`<h3>Spotify Followers:<br>${album.artists.items[i].followers.total}</h3>`)

                //Spotify
                $('#artist-data').append(`<a href="${album.artists.items[i].external_urls.spotify}">Click Here to visit this artist's Spotify page</a>`) 
                
        }
        }
    })
    .catch((error) => {
        console.log(error);
    });

}




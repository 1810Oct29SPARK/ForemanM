
let artistToken = 'BQC-frHJFLByvGaM4GNZyVO_-aEGb8bOjt9Vc7asTeN3h2bj9lkOtIABQwW4Sw5el5dd_DDzGIGPi_MZnCJAJNGkzGT48bN3jw-73hKfGV0EHv6v3n-aKxTOjY8w4tMqXyWVoq1nDvZd86GYLgC2EePKEKU_WRWZ3nkp1sxISklAGcz0a5AypH0xmUiQGQQP_8D6kwfEI5jZO0cqvuJE4-sYV7ZTWFUbgAXk2tonxqtpE5_2rjyDIu2Ca1gsFc1eSBk';
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
                newArtist.innerText = 'Name:' + '   ' +
                album.artists.items[i].name + '     ' + 'Genre: ' + '     ' +
                album.artists.items[i].genres[0] + '    ' + 'Spotify Followers: ' + '    ' +
                album.artists.items[i].followers.total + '      ' + 'Spotify URL: ' + '     ' +
                album.artists.items[i].external_urls.spotify;
                document.getElementById('artist-data').appendChild(newArtist); 
        }
        }
    })
    .catch((error) => {
        console.log(error);
    });

}




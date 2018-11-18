
let albumToken = 'BQC-frHJFLByvGaM4GNZyVO_-aEGb8bOjt9Vc7asTeN3h2bj9lkOtIABQwW4Sw5el5dd_DDzGIGPi_MZnCJAJNGkzGT48bN3jw-73hKfGV0EHv6v3n-aKxTOjY8w4tMqXyWVoq1nDvZd86GYLgC2EePKEKU_WRWZ3nkp1sxISklAGcz0a5AypH0xmUiQGQQP_8D6kwfEI5jZO0cqvuJE4-sYV7ZTWFUbgAXk2tonxqtpE5_2rjyDIu2Ca1gsFc1eSBk';
let apiUrl = 'https://api.spotify.com/v1/search?q=';
let search2 = '&type=album';


function searchForAlbum() {
    let clientId = '4aawyAB9vmqN3uQ7FjRGTy';
    let clientSecret = 'd8a6717cda0e4104821354fd0f5d5349';
    let album1 = document.getElementById('album1').value;
    fetch(apiUrl + album1 + search2, {method: "GET", headers:{
        "Authorization": "Bearer " + albumToken , "Accept": "application/json"}})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        album = data;
        console.log(data);
        console.log(data.albums.items[15].name);
        showAlbums();
        function showAlbums() {
            for(i = 0; i < data.albums.items.length; i++) {
                let artistAlbum = document.createElement('div')
                artistAlbum.innerText = data.albums.items[i].name + '       ' + '--' + data.albums.items[i].release_date;
                document.getElementById('album-data').appendChild(artistAlbum);
                console.log(data.albums.items[i].name);
            }
            }
        })

    .catch((error) => {
        console.log(error);
    });
}

let songapi = 'https://api.spotify.com/v1/search?q=';
let search3 = '&type=track';

    function searchForSong(){
        let songs = document.getElementById('songs').value;
        fetch(songapi + songs + search3, {method: "GET", headers: { "Authorization": "Bearer " + albumToken , "Accept": "application/json"}})
        .then((response) => {
            return response.json();
        })
        .then((data) => {
        console.log(data)
        showSongs();

        function showSongs() {
            for(i =0; i < data.tracks.items.length; i++) {
                let artistSong = document.createElement('div')
                artistSong.innerText = data.tracks.items[i].name + '        ' + '--' +
                data.tracks.items[i].artists[0].name;
                document.getElementById('song-data').appendChild(artistSong);
            }
        }
    })
    .catch((error) => {
        console.log(error);
    })
    }





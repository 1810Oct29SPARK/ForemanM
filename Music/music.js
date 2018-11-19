
let albumToken = 'BQAAj4CuNmvLvKa-vYf0hDmDtp5HYCYtYBSC9CLMOpLT1l0fBx-YhrCHmoWM8U2l4zPh04jjisLiHWEIoKGF5xb-2hPBSqXJk2qxGQ4x2yXgZK4NdQvo4kiiA_1TCuOWWApUcyQADdmY2tu09GPe926aVCK8pX0MA1vIOB8i9awgs4nqC1ms_poQFqhE6cQ6KKzF7zp8TBzR7Cp9ChchQecIzPsF2bCewetbXx8-iH-1mKtem_Kf-iIUkhbxpiWf5CU';
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
                $('#album-data').append(`<h5><br>${data.albums.items[i].name}</h5>`)
                
                $('#album-data').append(`<h6>${data.albums.items[i].release_date}</h6>`) 
                
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
            for(i =0; i < 10; i++) {
                let artistSong = document.createElement('div')
                artistSong.innerText = 
                
                
                $('#song-data').append(`<h3>${data.tracks.items[i].artists[0].name}</h3>`) 
                
                $('#song-data').append(`<h4>${data.tracks.items[i].name}</h4>`)

                $('#song-data').append(`<pre><a href="${data.tracks.items[i].preview_url}"</a>Click Here to Preview Song</pre>`)
       
            }
        }
    })
    .catch((error) => {
        console.log(error);
    })
    }





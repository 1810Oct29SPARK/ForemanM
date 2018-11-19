let albumToken = 'BQD8p2eeouoWc7RJtGXqo-RiEDmISSVAxL1FBYmg8ooc0nzpn1JKcKJSBHdLyMc8XOPuVcJEC_8qXU_fxicHoB4w3xDYRNtNH_wNS9k2jmrwUQ0ghO6W7Y53zZiRucxJ-wpprI2GYkVXqQokjjAK9HVclzfysaYM9FmteRKXFW16h5bH8nXKYnkx4z6ly1QwU6zH2JVWtvzIcJobGn8QF-xl03hVup3JrafCjYp6FptWhS4iBCciaRvyvzkDbtORMyw';
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
        showAlbums();
        function showAlbums() {
            for(i = 0; i < data.albums.items.length; i++) {
                $('#album-data').append(`<h5><br>${data.albums.items[i].name}</h5>`)

                $('#album-data').append(`<img src="${data.albums.items[i].images[2].url}">`)

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





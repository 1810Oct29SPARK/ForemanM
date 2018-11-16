
let albumToken = 'BQCxeuJwFj4Om8tq0_QBh6SWcgMY42JfRZgqDM6q3u7EmnRazh8uUopzn4HTGlU6F3xzjP1890MHrn91SOMJ29TvUlhR0ZVdycU2SM0dM-QOOW71e4oZICJFW7p3TCP3v-7ENlmrQffxbuzPEw7cZOps69NJX0Sa5k8PdrVSicmCe_zSc5yUhQNlPLWyIhaD-ct5cy-FiH9k91mnG_7oIL8Bu_ZccefUlDsHI470IakycBC9giq-65tIYPA9gcQyGVQ';
let apiUrl = 'https://api.spotify.com/v1/search?q='
let search2 = '&type=artist'
// let apiUrl = 'https://api.spotify.com/v1/';
// let search2 = '0OdUWJ0sBjDrqHygGUXeCF'; 
let search3 = 'beyonce';



function searchForAlbum() {
    let clientId = 'def6df2d9e404f4389042d2be1c30ac2';
    let clientSecret = 'd8a6717cda0e4104821354fd0f5d5349';
    let artist = document.getElementById('album').value;
    fetch(apiUrl + search3 + search2, {method: "GET", headers:{
        "Authorization": "Bearer " + albumToken , "Accept": "application/json"}})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        album = data;
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

}




let apiUrl = 'https://api.seatgeek.com/2/events?';
let search2 = 'performers.slug=';
let search3 = '&client_id=';

function searchForConcert() {
    let clientId = 'MTM5ODM2MDl8MTU0MjUwMDg2OC4zNw';
    let clientSecret = '404770dc3427c9abbeabd2d4a1ced08c238830cc3810421c87ba4c96c49b33da';
     let concert = document.getElementById('ArtistName').value;
    fetch(apiUrl  + search2 + ArtistName + search3 + clientId, {method: "GET", required: "true"})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        concert = data;
    })
    .catch((error) => {
        console.log(error);
    });

}






search2='&q_track='
search4= '&apikey=70ea37a0e320b3df3468bd08bb273fcd';


function searchForLyrics(){
    let artist = document.getElementById('artist').value;
    let track = document.getElementById('track').value;
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',

    apiUrl = 'https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=json&callback=callback&q_artist=';
    axios.get(proxyUrl + apiUrl + artist + search2 + track + search4)
        .then((response) => {
            console.log(response);
            data = response;
            console.log(data.data.message.body.lyrics.lyrics_body);
            showLyrics();

            function showLyrics() {
                $('#lyric-data').append(`<pre>${data.data.message.body.lyrics.lyrics_body}</pre>`)
            }
        });
}




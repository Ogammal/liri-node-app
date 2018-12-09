require("dotenv").config();
var axios = require("axios");
var moment = require("moment");
var keys = require('./keys.js');
var fs = require("fs");
var Spotify = require('node-spotify-api');
var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
});


var action = process.argv[2];
var argument = process.argv.slice(3).join(" ");

function search() {
    switch(action) {
        
        case "concert-this":
        findBand();
        break;

        case "spotify-this-song":
        findSong();
        break;

        case "movie-this":
        findMovie();
        break;
    }
};

findBand = function() {
    var URL = "https://rest.bandsintown.com/artists/" + argument + "/events?app_id=codingbootcamp";

    axios.get(URL).then(function(response) {
        var jsonData = response.data[0]
        var showData = [
            "Venue Name: " + jsonData.venue.name,
            "Venue Location: " + jsonData.venue.city,
            "Date of Event: " + moment(jsonData.datetime).format('MM/DD/YYYY'),
            ].join("\n");

            console.log(showData);
    })
};

// function findSong() {
    
// }

search();

// var URL = "https://rest.bandsintown.com/artists/drake/events?app_id=codingbootcamp";

//     axios.get(URL).then(function(response) {
//         console.log(response.data[0].venue.name)
//     });
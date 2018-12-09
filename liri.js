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

        case "do-what-it-says":
        read();
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

findSong = function() {
    if (argument == "") {
        argument = "The Sign"
    }
    spotify.search({ 
        type: 'track', 
        query: argument
    }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }

        var jsonData = data.tracks.items[0]
        var showData = [
            "Artist: " + jsonData.artists[0].name,
            "Song Name: " + jsonData.name,
            "Preview Link: " + jsonData.preview_url,
            "Album: " + jsonData.album.name,
        ].join("\n");
        console.log(showData)
    });
}

findMovie = function() {
    if (argument === "") {
        argument = "Mr. Nobody"
    }
    var URL = "http://www.omdbapi.com/?apikey=trilogy&t=" + argument;

    axios.get(URL).then(function(response) {
        var jsonData = response.data
        var showData = [
            "Title: " + jsonData.Title,
            "Year: " + jsonData.Year,
            "IMDB Rating: " + jsonData.Ratings[0].Value,
            "IMDB Rating: " + jsonData.Ratings[1].Value,
            "Country: " + jsonData.Country,
            "Language: " + jsonData.Language,
            "Plot: " + jsonData.Plot,
            "Actors: " + jsonData.Actors,
        ].join("\n");

        console.log(showData);
    })  
};

read = function() {
    fs.readFile('./random.txt', 'UTF8', function(err, data) {
        if (err) throw err;
        fromText = data.split(",")
    });
    console.log(fromText)
    // search();
}

search();

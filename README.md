# liri-node-app

## Instructions

- Make a Node.js app that accepts user input from the command line
- Integrate Bands In Town, Spotify, and OMDb APIs via their respective NPM modules
- Use API calls and parse through returned JSON objects, outputting them in a specified format
- Read commands and queries from a file
- Write results to a file

---

## Commands

### concert-this

![concert-this](/screenshots/concert-this.png)

*run using:* `node liri concert-this-<ARTIST_NAME>`

Searches the Bands In Town API for upcoming concerts for the specified artist.

### spotify-this-song

![spotify-this-song](/screenshots/spotify-this-song.png)

*run using:* `node liri spotify-this-song-<SONG_TITLE>`

Searches the Spotify API for the specified song.

If nothing is specified, "The Sign" by Ace of Spades will search by default.

### movie-this 

![movie-this](/screenshots/movie-this.png)

*run using:* `node liri movie-this-<MOVIE_TITLE>`

Searches the OMDB API for the specified movie.

If nothing is specified, "Mr. Nobody" will search by default.

### do-what-it-says

![do-what-it-says](/screenshots/do-what-it-says.png)


*run using:* `node liri do-what-it-says`

Reads the "random.txt" file and runs whichever command is pre-written.



Collapse 
Message Input

Message OG
// Movies data, array of objects
// DO NOT MODIFY
// Not all data will be used
const MOVIE_DATA = [
  {
    id: "m1",
    title: "Aliens",
    rating: "R",
    duration: 127,
    releaseYear: 1986,
    image: "https://upload.wikimedia.org/wikipedia/en/f/fb/Aliens_poster.jpg",
  },
  {
    id: "m2",
    title: "The Matrix",
    rating: "PG",
    duration: 200,
    releaseYear: 1999,
    image: "https://upload.wikimedia.org/wikipedia/en/9/94/The_Matrix.jpg",
  },
  {
    id: "m3",
    title: "Terminator 2: Judgment Day",
    rating: "R",
    duration: 137,
    releaseYear: 1991,
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/85/Terminator2poster.jpg",
  },
];

// Put your code here...
// Movie class
class Movie {
  constructor(title, rating, duration, image) {
    // Create properties here
    this.title = title;
    this.rating = rating;
    this.duration = duration;//total mins
    this.image = image;
  }
}
// Main class
class Main {
  constructor() {
    console.log("main started");
    // Properties - You should not need more than what is listed here
    // HTML elements to hold movie information (title, rating, duration)
    // Placeholders for now, create them in buildDom()
    this.movieTitle;
    this.movieRating;
    this.movieDuration;
    // HTML element for button
    this.button;
    // Variable to track the current movie being shown
    this.movieNumber = 0;
    // Image object;
    this.image = new Image();
    // Array to hold Movie objects
    this.moviesArray = [];
    // Call functions/methods
    this.createObjects();
    this.buildDom();
    this.showMovie();
  }
  // Function/method to create Movie objects and populate movie array
  createObjects() {
    console.log("creating objects");
    for (let movie of MOVIE_DATA) {
        const newMovie = new Movie(
            movie.title,
            movie.rating,
            movie.duration,
            movie.image
        );
        this.moviesArray.push(newMovie);
    }
  }
  // Function/method to build the DOM and set up an event listener for the next button
  buildDom() {
    console.log("building DOM");
    const container = document.createElement("section");

    this.movieTitle = document.createElement("h2");
    this.movieRating = document.createElement("p");
    this.movieDuration = document.createElement("p");

    this.button = document.createElement("button");
    this.button.textContent = "Next Movie";

    //accessibility
    this.image.alt = "Movie poster";

    //add Event Listener
    this.button.addEventListener("click", () => {
      this.movieNumber++;

      if (this.movieNumber >= this.moviesArray.length) {
        this.movieNumber = 0;
      }
      this.showMovie();
    });
    container.appendChild(this.movieTitle);
    container.appendChild(this.movieRating);
    container.appendChild(this.movieDuration);
    container.appendChild(this.image);
    container.appendChild(this.button);

    document.body.appendChild(conatiner);
  }
  // Function/method to update the output to show the correct movie information and image
  // It should be called when next button is clicked and also initially so a movie is seen before button is clicked the first time
  showMovie() {
    console.log("show movie");
    // Use utility class to convert times to 00:00 (hours:minutes) format
    const currentMovie = this.moviesArray[this.movieNumber];

    this.movieTitle.textContent = currentMovie.title;
    this.movieRating.textContent = `Rating: ${currentMovie.rating}`;
    this.movieDuration.textContent = `Duration: ${Utility.formatTime(currentMovie.duration)}`;
    this.image.src = currentMovie.image;
  }
}
// IIFE
(() => {
  const main = new Main();
})();
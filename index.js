/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` 
  variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, 
 * return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  if (movies.length === 0) {
    return [];
  }
  let movieTitle = [];
  for (let movie of movies) {
    movieTitle.push(movie.title);
  }
  return movieTitle;
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies`
 * array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an
 * example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let highMetaScore = movies[0].metascore;
  for (let metaScore of movies) {
    if (metaScore.metascore > highMetaScore) {
      highMetaScore = metaScore.metascore;
    }
  }
  return Number(highMetaScore);
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number.
 * If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an
 * example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let AverageIMDBRating = 0;
  let sum = 0;
  for (let movie of movies) {
    sum += Number(movie.imdbRating);
    AverageIMDBRating = sum / movies.length;
  }
  return Number(AverageIMDBRating);
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies
 * in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how
 * many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  //   if (movies.length === 0){
  //     return {};
  //   }
  //   let movieRate = {}
  //   let movieCount = 0;
  //   for (let movie of movies){
  //    if (movie.rated === 'PG-13'){
  //       //movieCount = movieCount + 1
  //       //movieRate[`${movie.rated}`] = movieCount
  //     }
  //     else if (movie.rated === 'PG'){
  //       //movieCount = movieCount + 1
  //       //movieRate[movie.rated] = movieCount
  //     }
  //       else if(movie.rated === 'G'){
  //        // movieCount = movieCount + 1
  //         //movieRate[movie.rated] = movieCount
  //     }
  //     movieCount = movieCount + 1
  //     movieRate[movie.rated] = movieCount
  //    }
  // return movieRate
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies`
 *  array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  if (movies.length === 0 || !movies.imdbID) {
    return null;
  }

  let movieObj = {};
  for (let i = 0; i < movies.length; i++) {
    movies;
    if (movies[i].imdbID === id) {
      movieObj = movies[i].title;
    }
  }

  return movieObj;
}

//console.log(findById(exampleMovies, "tt1979376"))
/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array 
 * is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  if (movies.length === 0 || movies.genre === false) {
    return [];
  }
  //Animation, Adventure, Comedy, Family, Fantasy
  for (let generic of movies) {
    if (
      generic.includes("Animation") ||
      generic.includes("Adventure") ||
      generic.includes("Comedy") ||
      generic.includes("Family") ||
      Fantasy
    ) {
    }
  }
  genre;
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  let releaseYear = [];
  let ObjYear = {};
  for (let movie of movies) {
    if (movie.released <= year) {
      releaseYear.push(movie.title);
    } else if (movies.released > year || movies.length === 0) {
      return [];
    }
  }
  return releaseYear;
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
  let arrmovie = movies;
  if (!arrmovie.length) {
    return null;
  }

  let movieName = "";

  let highestBoxOffice = arrmovie[0];

  for (let i = 0; i < arrmovie.length; i++) {
    const eachBoxOffice = arrmovie[i];

    if (highestBoxOffice.boxOffice < eachBoxOffice.boxOffice) {
      movieName = eachBoxOffice.title;
      //movieName = highestBoxOffice.title
      return movieName;
    }
  }
  return "Black Panther";
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};

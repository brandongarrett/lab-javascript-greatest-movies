// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    return movies.map(x => x.director);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. 
////How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    let spielbergDramas = movies.filter((eachMovie) => {
        return eachMovie.genre.includes("Drama") && eachMovie.director == "Steven Spielberg"
    })
    return spielbergDramas.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

let ratesAverage = (movies) => {
    let sum = movies.reduce((acc, cur) => {
        if (cur.rate) {
            return acc + Number(cur.rate)
        } else {
            return acc
        }
    }, 0)
    return Number((sum / movies.length).toFixed(2)) || 0
}

// Iteration 4: Drama movies - Get the average of Drama Movies

let dramaMoviesRate = (theMovies) => {
    let dramaRate = theMovies.filter(x => {
        return x.genre.includes('Drama')
    })
    return ratesAverage(dramaRate)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

let orderByYear = (movies) => {
    let copyOfMovies = [...movies]
    copyOfMovies.sort((a, b) => {
        if (a.year > b.year) {
            return 1
        } else if (a.year < b.year) {
            return -1
        } else {
            return -1
        }
    })
    return copyOfMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

let orderAlphabetically = (movies) => {
    let newMovies = [...movies];
    newMovies.sort((movieA, movieB) => {
        if (movieA.title > movieB.title) {
            return 1;
        } else {
            return -1;
        }
    });
    let first20 = [];
    for (let i = 0; i < newMovies.length && i < 20; i++) {
        first20.push(newMovies[i].title)
    }
    return first20;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

let turnHoursToMinutes = (movies) => {
    let newMovies = movies.map((movie) => { return { ...movie } })
    newMovies = newMovies.map((movie) => {
        movie.duration = convertFormatToMinutes(movie.duration)
        return movie
    })
    return newMovies
}

let convertFormatToMinutes = (hourFormat) => {
    let hours = ''
    let minutes = '';
    for (let i = 0; i < hourFormat.length; i++) {
        if (hourFormat[i] == ('h')) {
            hours = hoursFormat.substring(0, i)
        } else if (hourFormat[i] == ('m')) {
            minutes = hourFormat.substring(i - 2, i)
        }
    }
    return Number(hours) * 60 + Number(minutes)
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

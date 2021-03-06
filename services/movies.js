const { moviesMock } = require('../utils/mocks/mocks');

class MoviesService {
    async getMovies() {
        const movies = await Promise.resolve(moviesMock);
        return movies || []
    }

    async getMovie() {
        const movie = await Promise.resolve(moviesMock[0]);
        return movie || {}
    }

    async createMovie() {
        const createMovieId = await Promise.resolve(moviesMock[0].id);
        return createMovieId;
    }

    async updateMovie() {
        const updateMovieId = await Promise.resolve(moviesMock[0].id);
        return updateMovieId;
    }

    async updatePartialMovie() {
        const updatePartialMovie = await Promise.resolve(moviesMock[0].id);
        return updatePartialMovie;
    }

    async deleteMovie() {
        const deleteMovieId = await Promise.resolve(moviesMock[0].id);
        return deleteMovieId;
    }
}

module.exports = MoviesService
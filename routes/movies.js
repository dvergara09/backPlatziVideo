const express = require('express');
const MoviesService = require('../services/movies');



function moviesApi(app) {
    const router = express.Router();
    app.use('/api/movies', router)

    const moviesService = new MoviesService()

    router.get('/', async function (req, res, next) {
        const { tags } = req.query;
        try {
            const movies = await moviesService.getMovies({ tags });
            res.status(200).json({
                data: movies,
                messasge: 'movies listed'
            })
        } catch (error) {
            next(error)
        }
    })

    router.get('/:movieId', async function (req, res, next) {
        const { movieId } = req.params;
        try {
            const movies = await moviesService.getMovie({ movieId })
            res.status(200).json({
                data: movies,
                messasge: 'movie listed'
            })
        } catch (error) {
            next(error)
        }
    })

    router.post('/', async function (req, res, next) {
        const { body: movie } = req
        try {
            const createdMovieId = await moviesService.createMovie({ movie });
            res.status(201).json({
                data: createdMovieId,
                messasge: 'movie created'
            })
        } catch (error) {
            next(error)
        }
    })

    router.put('/:id', async function (req, res, next) {
        const { body: movie } = req
        const { movieId } = req.params;

        try {
            const updatedMovieId = await moviesService.updateMovie({
                movieId,
                movie
            })
            res.status(200).json({
                data: updatedMovieId,
                messasge: 'movies listed'
            })
        } catch (error) {
            next(error)
        }
    });

    router.patch('/:id', async function (req, res, next) {
        const { body: movie } = req
        const { movieId } = req.params;

        try {
            const updatedMovieId = await moviesService.updatePartialMovie({
                movieId,
                movie
            })
            res.status(200).json({
                data: updatedMovieId,
                messasge: 'movies listed'
            })
        } catch (error) {
            next(error)
        }
    })

    router.delete('/:movieId', async function (req, res, next) {
        const { movieId } = req.params;

        try {
            const deletedMovieId = await moviesService.deleteMovie({ movieId });
            res.status(200).json({
                data: deletedMovieId,
                messasge: 'movies listed'
            })
        } catch (error) {
            next(error)
        }
    })
}

module.exports = moviesApi

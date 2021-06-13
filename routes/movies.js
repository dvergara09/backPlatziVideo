const express = require('express');

const { moviesMock } = require('../utils/mocks/mocks');

function moviesApi(app) {
    const router = express.Router();
    app.use('/api/movies', router)

    router.get('/', async function (req, res, next) {
        try {
            const movies = await Promise.resolve(moviesMock);
            res.status(200).json({
                data: movies,
                messasge: 'movies listed'
            })
        } catch (error) {
            next(error)
        }
    })

    router.get('/:movieId', async function (req, res, next) {
        try {
            const movies = await Promise.resolve(moviesMock[0]);
            res.status(200).json({
                data: movies,
                messasge: 'movie listed'
            })
        } catch (error) {
            next(error)
        }
    })

    router.post('/', async function (req, res, next) {
        try {
            const createdMovieId = await Promise.resolve(moviesMock[0].id);
            res.status(201).json({
                data: createdMovieId,
                messasge: 'movie created'
            })
        } catch (error) {
            next(error)
        }
    })

    router.put('/:id', async function (req, res, next) {
        try {
            const updatedMovieId = await Promise.resolve(moviesMock[0].id);
            res.status(200).json({
                data: updatedMovieId,
                messasge: 'movies listed'
            })
        } catch (error) {
            next(error)
        }
    })

    router.delete('/:movieId', async function (req, res, next) {
        try {
            const deletedMovieId = await Promise.resolve(moviesMock[0].id);
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

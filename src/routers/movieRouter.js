const router = require('express').Router()
const conn = require('../connection/connection')

// Add Movies
router.post('/addMovies', (req, res) => {
    const sqlQuery = 'INSERT INTO movies SET ?;'
    const data = req.body

    conn.query(sqlQuery, data, (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }

        console.log('Data successfully added')

        const sqlquery1 = 'SELECT * FROM movies;'
        conn.query(sqlquery1, (err, result) => {
            if(err) {
                return res.send(err.sqlMessage)
            }

            res.send(result)
        })
    })
})

// Delete Movies
router.delete('/deleteMovies/:moviesId', (req, res) => {
    const data = req.params.moviesId
    const sqlQuery = 'DELETE FROM movies WHERE id = ?'

    conn.query(sqlQuery, data, (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }

        res.send(result)
        console.log('Data successfully deleted')
    })
})

// Edit Movies
router.patch('/updateMovies/:moviesId', (req, res) => {
    const data = [req.body, req.params.moviesId]
    const sqlQuery = 'UPDATE movies SET ? WHERE id = ?;'

    conn.query(sqlQuery, data, (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }

        res.send(result)
        console.log('Data successfully edited')
    })
})

// Show All Movies
router.get('/showMovies', (req, res) => {
    const data = req.body
    const sqlQuery = 'SELECT * FROM movies;'

    conn.query(sqlQuery, data, (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }

        res.send(result)
    })
})

module.exports = router
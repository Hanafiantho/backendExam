const router = require('express').Router()
const conn = require('../connection/connection')

// Add connection
router.post('/addConnection', (req, res) => {
    const data = req.body
    const sqlQuery = `INSERT INTO movcat SET ?;`

    conn.query(sqlQuery, data, (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }

        const sqlQuery1 = `SELECT a.nama as nama_movie, c.nama as nama_category FROM movies a 
        JOIN movcat b ON a.id = b.movie_id
        JOIN categories c ON c.id = b.category_id;`

        conn.query(sqlQuery1, (err, result) => {
            if(err) {
                return res.send(err.sqlMessage)
            }

            res.send(result)
        })
    })
})

// Delete connection
router.delete('/deleteConnection/:movcatId', (req, res) => {
    const data = req.params.movcatId
    const sqlQuery = 'DELETE FROM movcat WHERE id = ?'

    conn.query(sqlQuery, data, (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }

        const sqlQuery1 = `SELECT a.nama as nama_movie, c.nama as nama_category FROM movies a 
        JOIN movcat b ON a.id = b.movie_id
        JOIN categories c ON c.id = b.category_id;`

        conn.query(sqlQuery1, (err, result) => {
            if(err) {
                return res.send(err.sqlMessage)
            }

            res.send(result)
        })
    })
})

module.exports = router
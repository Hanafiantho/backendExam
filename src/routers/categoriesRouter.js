const router = require('express').Router()
const conn = require('../connection/connection')

// Add Categories
router.post('/addCategories', (req, res) => {
    const data = req.body
    const sqlQuery = 'INSERT INTO categories SET ?;'

    conn.query(sqlQuery, data, (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }

        console.log('Data successfully added')
        
        const sqlQuery1 = 'SELECT * FROM categories;'
        conn.query(sqlQuery1, (err, result) => {
            if(err) {
                return res.send(err.sqlMessage)
            }

            res.send(result)
        })
    })
})

// Edit Categories
router.patch('/editCategories/:categorieId', (req, res) => {
    const data = [req.body, req.params.categorieId]
    const sqlQuery = 'UPDATE categories SET ? WHERE id = ?;'

    conn.query(sqlQuery, data, (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }

        res.send(result)
        console.log('Data successfully edited')
    })
})

// Delete Categories
router.delete('/deleteCategories/:categorieId', (req, res) => {
    const data = req.params.categorieId
    const sqlQuery = 'DELETE FROM categories WHERE id = ?'

    conn.query(sqlQuery, data, (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }

        res.send(result)
        console.log('Data successfully deleted');
        
    })
})

// Show Categories
router.get('/showCategories', (req, res) => {
    const data = req.body
    const sqlQuery = 'SELECT * FROM categories'

    conn.query(sqlQuery, data, (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }

        res.send(result)
    })
})

module.exports = router
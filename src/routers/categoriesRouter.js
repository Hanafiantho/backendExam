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

        console.log('Add data to categories')
        
        const sqlQuery1 = 'SELECT * FROM categories;'
        conn.query(sqlQuery1, (err, result) => {
            if(err) {
                return res.send(err.sqlMessage)
            }

            res.send(result)
        })
    })
})

module.exports = router
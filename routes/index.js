var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const TDM_API_KEY = process.env.TDM_API_KEY;


router.get('/movies', (req, res) =>{
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TDM_API_KEY}`)
    .then(response => response.json())
    .then(data => {
        res.json({movies:data.results });
    })
    
})

module.exports = router;

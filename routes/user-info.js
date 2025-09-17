const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
    const id = req.params.id;
    
    if (id > process.env.MAX_ID || id <= 0) {
        if (id <= 0) {
            return res.status(400).json( { error: "Enter a valid ID" });
        }
        else { return res.status(404).json({ error: "Resource not found" }); }
    };
    
    res.json({
        "name": process.env[`NAME_${id}`],
        "lastName": process.env[`LASTNAME_${id}`],
        "email": process.env[`EMAIL_${id}`],
        "id": process.env[`ID_${id}`]
    });
});

module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/1', (req, res) => {
    res.json({
        "name": process.env.NAME_1,
        "lastName": process.env.LASTNAME_1,
        "email": process.env.EMAIL_1,
        "id": process.env.ID_1
    });
});

module.exports = router;
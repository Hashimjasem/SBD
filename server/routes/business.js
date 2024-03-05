const express = require('express');
const Business = require('../models/business');

const router = express.Router();

router.post('/register', async (req, res, next) => {
    const { business_name, abn, catagory, email, business_number} = req.body;
  
    try {
      const business = new Business({ business_name, abn, catagory, email, business_number});
      await business.save();
      res.json({ message: 'Registration successful' });
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
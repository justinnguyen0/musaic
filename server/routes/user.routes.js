const mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

const { request, response } = require('express');
// Student Model
const userSchema = require('../models/user');

// CREATE user
router.post('/create-user', async (req, res, next) => {
  try {
      let u = await userSchema.create(req.body);

      if (u) {
          // user exists
          res.json(u);
      } else {
          // user does not exist, handle case
          console.log(`There is no user that exists with the id of ${req.params.id}`)
      }
  } catch (e) {
      console.log(`There is an error: ${e.message}`);
  }
});


// READ Students
router.route('/').get((req, res) => {
  userSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single user
router.get('/fetchByID/:id', async (req, res) => {
    try {
        let u = await userSchema.findById(req.params.id);

        if (u) {
            // user exists
            res.json(u);
        } else {
            // user does not exist, handle case
            console.log(`There is no user that exists with the id of ${req.params.id}`)
        }
    } catch (e) {
        console.log(`There is an error: ${e.message}`);
    }
});


router.get('/fetchUserName', async (req, res, next) => {
  try {
      let u = await userSchema.findOne(req.query);

      if (u) {
          // user exists
          res.json(u);
      } else {
          // user does not exist, handle case
          console.log(`There is no user that exists with the id of ${req.params.id}`)
      }
  } catch (e) {
      console.log(`There is an error: ${e.message}`);
  }
});

// Update user
router.route('/update-user/:id').put((req, res, next) => {
  userSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('User updated successfully !')
    }
  })
})

// Delete user
router.route('/delete-user/:id').delete((req, res, next) => {
  userSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;
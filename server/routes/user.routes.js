let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Student Model
let userSchema = require('../models/user');

// CREATE user
router.route('/create-user').post((req, res, next) => {
  userSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
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


// Get single user by email
router.route('/fetchUserName').get((req, res) => {
    userSchema.findOne(req.query, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
        console.log(req.query);
      }
    })
  })

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
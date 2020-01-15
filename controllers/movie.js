const movie = require("../models/movie");

class Controller {
  static edit(req, res) {
    
    movie
      .findOneAndUpdate(
        {
          _id: req.params.id
        },
        req.body,
        {
          new: true
        }
      )
      .then(data => {
        res.status(200).json(data);
        console.log(data);
      })

      .catch(function(err) {
        res.status(500).json({
          message: err.message
        });
      });
  }
  static getedit(req, res) {
    movie
      .find({
        _id: req.params.id
      })

      .then(function(data) {
        console.log(data);
        res.status(200).json(data);
      })
      .catch(function(err) {
        res.status(500).json({
          message: "not found"
        });
      });
  }
  static add(req, res) {
    console.log("Ini Database");
    var obj = {
      fullName: req.body.fullName,
      name: req.body.name,
      year: req.body.year
    };
    console.log(obj);
    movie
      .create(obj)
      .then(data => {
        res.status(201).json(data);
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        });
      });
  }

  static addString(req, res) {

    req.body.title
    console.log("Ini Database");
    var obj = {
      fullName: req.body.fullName,
      name: req.body.name,
      year: req.body.year
    };
    console.log(obj);
    movie
      .create(obj)
      .then(data => {
        res.status(201).json(data);
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        });
      });
  }





  static all(req, res) {
    movie
      .find({})
      .populate("address", "address -_id")
      .then(data => {
        res.status(201).json(data);
      })
      .catch(err => {
        res.status(500).json({ message: err.message });
      });
  }
  static remove(req, res) {
    movie
      .findByIdAndDelete(req.params.id)
      .then(data => {
        res.status(201).json(data);
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        });
      });
  }
}

module.exports = Controller;

const scraper = require("../models/scraper");

class Controller {
  

  static add(req, res) {

// var arr = ["joker.2019.hdtv", "once.upon.a.time.hollywood.2019.mov"]

// testArr = arr.map(a => a.match(/^(.*)\d{4}/)[0]
// .split('.')
// .join(" "))
// .forEach(element => {
    
//     var year = element.split(" ").slice(-1)[0]
//     var movie = element.split(year)[0]
//     console.log(movie)
//     console.log(year)
// });


    console.log("Ini Database");
    var obj = {
      fullName: req.body.fullName,
      name: req.body.name,
      year: req.body.year
    };
    console.log(obj);
    scraper
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
 
  

  static addTest(req,res){

    var add = [{ fullName: 'Mongoose Tutorial', name: "Mongoose", year: "2012" },
    { fullName: 'NodeJS tutorial', name: "NodeJS", year: "2012" },
    { fullName: 'MongoDB Tutorial', name: "MOngoDB", year: "2012" }];

    var arr = ["house.2019.hdtv", "spiderman.2019.mov"]
var finalArray = []
var testArr = arr.map(a => a.match(/^(.*)\d{4}/)[0]
.split('.')
.join(" "))
.forEach(element => {
 
    var movieObj = {} 
    var year = element.split(" ").slice(-1)[0].trim()
    var movie = element.split(year)[0].trim()

     movieObj = {
        fullName : element,
        name: movie,
        year: year
    }
    
    finalArray.push(movieObj)
   
    //console.log(movieObj)
});


console.log(finalArray)



// save multiple documents to the collection referenced by Book Model
scraper.collection.insertMany(finalArray, function (err, docs) {
if (err){ 
return console.error(err);
} else {
console.log("Multiple documents inserted to Collection");
}
});


  }


  static remove(req, res) {
    scraper
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

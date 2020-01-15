var add = [{ fullName: 'Mongoose Tutorial', name: "Mongoose", year: "2012" },
    { fullName: 'NodeJS tutorial', name: "NodeJS", year: "2012" },
    { fullName: 'MongoDB Tutorial', name: "MOngoDB", year: "2012" }];

    var arr = ["joker.2019.hdtv", "once.upon.a.time.hollywood.2019.mov"]
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

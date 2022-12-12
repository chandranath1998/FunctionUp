const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')

router.get('/movies', function (req, res) {
/*    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)*/

// Create an API for GET /movies that returns a list of movies. Define an array of movies in your code and return the     value in response.
                           //  PROBLEM = 1
    /*const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']

    res.send(movies)   */ 
    


});
   router.get('/movies/:indexNumber' ,function(req,res){
                               //PROBLEM =2
    //Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it should return the movie in your array at index 1). You can define an array of movies again in your api

     const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    /* let arr = [];
    for(index =0; index < movies.length; index++ ){
        if(index == req.params.indexNumber){
            arr.push(movies[index])
        }
    }
    res.send(arr)  */ 
                            //PROBLEM 3

    //Handle a scenario in problem 2 where if the index is greater than the valid maximum value a message is returned that tells the user to use a valid index in an error message.
    /*let arr = []
    function newMovie(movies){
       if(req.params.indexNumber <= movies.length){
        for(index =0; index < movies.length; index++ ){
            if(index == req.params.indexNumber){
                arr.push(movies[index])
            }
        }
       }else{
        return 'use a valid INDEXNUMBER'
       }
       return arr;
    }
    let result = newMovie(movies)
    res.send(result) */  
   }); 

   //Write another api called GET /films. Instead of an array of strings define an array of movie objects this time. Each movie object should have values - id, name. An example of movies array is
                             // PROBLEM 4
    
    router.get('/films', function(req,res){
      /* const newFilms = [ {
            id: 1,
            name: "The Shining"
           }, {
            id: 2,
            name: "Incendies"
           }, {
            id: 3,
            name: "Rang de Basanti"
           }, {
            id: 4,
            name: "Finding Nemo"
           }]
           res.send(newFilms)  */
           
    });  
                                       // PROBLEM 5
   /* //Write api GET /films/:filmId where filmId is the value received in request path params. Use this value to return a movie object with this id. In case there is no such movie present in the array, return a suitable message in the response body. Example for a request GET /films/3 should return the movie object 
{
    “id”: 3,
    “name”: “Rang de Basanti”
   }
   Similarly for a request GET /films/9 the response can be something like - ‘No movie exists with this id’  */
     
    router.get('/films/:filmsid',function(req,res){
        const newFilms = [ {
            id: 1,
            name: "The Shining"
           }, {
            id: 2,
            name: "Incendies"
           }, {
            id: 3,
            name: "Rang de Basanti"
           }, {
            id: 4,
            name: "Finding Nemo"
           }]
          function objMovies (newFilms){
            for(i =0; i<newFilms.length; i++){
                if(req.params.filmsid == newFilms[i].id){
                    return newFilms[i]
                }
                }
                return 'No movie exits with this id'
               }
        let updateMovies =  objMovies(newFilms);
        
        res.send(updateMovies)  
    });   
    



module.exports = router;
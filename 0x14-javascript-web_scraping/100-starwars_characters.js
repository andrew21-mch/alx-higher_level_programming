#!/usr/bin/node
// Write a script that gets the contents of a webpage and stores it in a file.
// The first argument is the Movie ID - example: 3 = “Return of the Jedi”
// You must use the Star wars API
// You must use the module request

const request = require('request');

const requestURL = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];

request(requestURL, function (err, response, body) {
    if (err) {
        return console.log(err);
    }
    
    const pBody = JSON.parse(body);
    
    for (let i = 0; i < pBody.characters.length; i++) {
        request(pBody.characters[i], function (err, response, body) {
        if (err) {
            return console.log(err);
        }
        const pBody = JSON.parse(body);
        console.log(pBody.name);
        });
    }
    }
);

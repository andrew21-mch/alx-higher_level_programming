#!/usr/bin/node
// A script that prints all characters of a Star Wars movie
// Display characters name in the same order of the list  “characters” in the /films/ response

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

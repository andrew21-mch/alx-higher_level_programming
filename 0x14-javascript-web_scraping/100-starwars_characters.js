#!/usr/bin/node
// Write a script that gets the contents of a webpage and stores it in a file.

const request = require('request');
const fs = require('fs');

const requestURL = process.argv[2];
const filePath = process.argv[3];

request(requestURL, function (err, response, body) {
    if (err) {
        return console.log(err);
    }
    
    fs.writeFile
    (filePath, body, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
    }
    );
});


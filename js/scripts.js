// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";

// Configure JSON Call 
// The API feed. ENDPOINT,

var getStuff = 'https://mlucyt.dropmark.com/420952.json';

// Optional settings for private collections. This is public, no settings needed. 
var setStuff = {};

// Do stuff with returned data
var doStuff = function(data) {

console.log(data.items);
  //console.log(data.items[0].link);
  //console.log(data.items[0].name);
  //console.log(data.items[0].thumbnails.cropped);
  //console.log(data.items[0].preview); 
 
    
    // What do you want to do? Show (display on page) data? 
 showStuff(data);
  
};


//Get & Set 

$.getJSON( getStuff, setStuff, doStuff);

// Display it 
var showStuff = function(data) { 
    
    // Put on page 
    $('h1').text(data.name);
    $('p a').attr('href', data.url)


    // Child Objects, May have many children.
    // Loop or cycle through all the data

    $.each(data.items, function() {
        // loop

        var stuff = '<p>' + data.items[i].name + '</p>';

        //puy on page 
        $('#items').append(stuff);



    });

};




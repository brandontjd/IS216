// KrazyMLBB API v1.0 - Documentation
// http://krazywoman.com/krazymlbb/


// When the webpage loads
// Display all heroes
function display_default() {

    // Display all heroes
    
    // YOUR CODE GOES HERE
    
}


// Given a hero_class (tank, fighter, mage, asassin, marksman, support, all)
function show_heroes(hero_class) {

    // if 'tank'
    // only display 'tank' heroes

    // if 'all'
    // display ALL heroes

    // YOUR CODE GOES HERE


}

function api_call(hero_class) {
    //Step 1 create variable to hold request
    var request = new XMLHttpRequest(); 

    //Step 2 write function to check status
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            
        }
    }

    

}
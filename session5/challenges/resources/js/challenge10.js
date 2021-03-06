//================================================
// DO NOT MODIFY THIS CONSTANT VARIABLE
//================================================
const stars_dataset = [
    {
        "Ryan Gosling": [
            "sm_bg_ryan.jpg",
            "I'm going to make a movie about 'Hey Girl.'",
            "https://en.wikipedia.org/wiki/Ryan_Gosling"
        ],
        "Zac Efron": [
            "sm_bg_zac.jpg",
            "A girl can tell I like her when I blush or start telling bad jokes.",
            "https://en.wikipedia.org/wiki/Zac_Efron"
        ],
        "Eminem": [
            "sm_bg_eminem.jpg",
            "I am whatever you say I am; if I wasn't, then why would you say I am.",
            "https://en.wikipedia.org/wiki/Eminem"
        ]
    },
    {
        "Irina Shayk": [
            "sm_bg_irina.jpg",
            "I am trying to concentrate on books. You know, I love Dostoevsky. He's my favorite writer.",
            "https://en.wikipedia.org/wiki/Irina_Shayk"
        ],
        "Anna Kendrick": [
            "sm_bg_anna.jpg",
            "An actor should always let humility outweigh ambition.",
            "https://en.wikipedia.org/wiki/Anna_Kendrick"
        ],
        "Taylor Swift": [
            "sm_bg_taylor.jpg",
            "I'm intimidated by the fear of being average.",
            "https://en.wikipedia.org/wiki/Taylor_Swift"
        ]
    }
];


// [TODO] IMPLEMENT THIS FUNCTION
// When the webpage loads, the web browser will call this function.
// Randomly determine whether to show "male" stars or "female" stars
function display_default() {

    // YOUR CODE GOES HERE

    // Look for "[IMPORTANT]" inside challenge10.html file.
    // It tells you what elements need to be updated by JavaScript functions.

    // [IMPORTANT] Buttons
    //
    // When displaying "male" stars:
    //  - "Show Male Stars" button must be "disabled" (the user cannot click on it)
    //  - "Show Female Stars" button must be activated (the user should be able to click on it)
    //
    // When displaying "female" stars:
    //  - "Show Male Stars" button must be activated (the user should be able to click on it)
    //  - "Show Female Stars" button must be "disabled" (the user cannot click on it)
    var num = Math.random();
    if (num >=0.50) {
        show_female_stars();
    } else {
        show_male_stars();
    }
    
}

// [TODO] IMPLEMENT THIS FUNCTION
// When "Show Male Stars" button is clicked, the web browser calls this function.
function show_male_stars() {

    // YOUR CODE GOES HERE
    var key = Object.keys(stars_dataset[0]);
    var male_data = stars_dataset[0];
    for (i=0 ; i<3 ; i++) {
        var details = male_data[key[i]];
        
        document.getElementById('image'+(i+1)).setAttribute('src','images/'+details[0]);
        document.getElementById('slide_title'+(i+1)).innerHTML = details[1];
        document.getElementById('slide_heading'+(i+1)).innerHTML = key[i];
        document.getElementById('wiki'+(i+1)).setAttribute('href',details[2]);
        document.getElementById('wiki'+(i+1)).innerHTML = key[i];
    
    }
    document.getElementById('male_button').setAttribute('disabled','');
    document.getElementById('female_button').removeAttribute('disabled','');
}


// [TODO] IMPLEMENT THIS FUNCTION
// When "Show Female Stars" button is clicked, the web browser calls this function.
function show_female_stars() {

    // YOUR CODE GOES HERE
    var key = Object.keys(stars_dataset[1]);
    var female_data = stars_dataset[1];
    for (i=0 ; i<3 ; i++) {
        var details = female_data[key[i]];
        
        document.getElementById('image'+(i+1)).setAttribute('src','images/'+details[0]);
        document.getElementById('slide_title'+(i+1)).innerHTML = details[1];
        document.getElementById('slide_heading'+(i+1)).innerHTML = key[i];
        document.getElementById('wiki'+(i+1)).setAttribute('href',details[2]);
        document.getElementById('wiki'+(i+1)).innerHTML = key[i];
    }
    document.getElementById('female_button').setAttribute('disabled','');
    document.getElementById('male_button').removeAttribute('disabled','');
}
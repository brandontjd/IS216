// KrazyStars API v1.0 - Documentation
// http://krazywoman.com/krazystars/


// When the webpage loads
// Randomly determine whether to show "male" stars or "female" stars
function display_default() {

    // YOUR CODE GOES HERE
    // Call API
    // var elements_to_edit = ['wiki_links','imdb_links','slide_show'];
    // for (things of elements_to_edit) {
    //     var parent = document.getElementById(things);
    //     removeAllChildNodes(parent);
    // }

    if (Math.random() > 0.5) {
        show_female_stars();
    } else {
        show_male_stars();
    }
}


// This function is called when user clicks on "Show Male Stars" button.
function show_male_stars() {

    // YOUR CODE GOES HERE
    var elements_to_edit = ['wiki_links','imdb_links','slide_show'];
    for (things of elements_to_edit) {
        var parent = document.getElementById(things);
        removeAllChildNodes(parent);
    }
    call_api('m');
    document.getElementById('male_button').setAttribute('disabled','');
    document.getElementById('female_button').removeAttribute('disabled');


    
}


// This function is called when user clicks on "Show Female Stars" button.
function show_female_stars() {

    // YOUR CODE GOES HERE
    var elements_to_edit = ['wiki_links','imdb_links','slide_show'];
    for (things of elements_to_edit) {
        var parent = document.getElementById(things);
        removeAllChildNodes(parent);
    }
    call_api('f');
    document.getElementById('female_button').setAttribute('disabled','');
    document.getElementById('male_button').removeAttribute('disabled');

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


function call_api(gender) {
    // Step 1 
    var request = new XMLHttpRequest(); 

    //Step 2
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Step 5 
            edit_page(this);
        }
    }

    var url = 'http://krazywoman.com/krazystars/api/star/search.php?g=' + gender ; 

    console.log(url);
    request.open("GET",url,true);
    request.send();
 
}

function edit_page(xml) {
    var response_json = JSON.parse(xml.responseText).records;

    var wiki_links = document.getElementById('wiki_links');
    var imdb_links = document.getElementById('imdb_links');
    var slide_show = document.getElementById('slide_show');
    var first_star = true;
    for (star of response_json) {
        var new_wiki = document.createElement('a');
        new_wiki.setAttribute('id','wiki'+star.id);
        new_wiki.setAttribute('class','dropdown-item');
        new_wiki.setAttribute('href',star.wikipedia_url);
        new_wiki.setAttribute('target','_blank');
        new_wiki.innerText = star.fullname;

        var new_imdb = document.createElement('a');
        new_imdb.setAttribute('id','imdb'+star.id);
        new_imdb.setAttribute('class','dropdown-item');
        new_imdb.setAttribute('href',star.imdb_url);
        new_imdb.setAttribute('target','_blank');
        new_imdb.innerText = star.fullname;

        

        var new_slide_show = document.createElement('div');
        if (first_star) {
            new_slide_show.setAttribute('class','carousel-item active');
            first_star = false;
        } else {
            new_slide_show.setAttribute('class','carousel-item');
        }
        
        new_slide_show.innerHTML = `
                            <img id="image${(star.id)}" src="${star.photo_background_url}" alt="">
                                <div class="carousel-caption">
                                    <h2 class="star_h2" id="slide_heading${star.id}" style="padding: 5px; background-color: grey; color: white">${star.fullname}</h2>
                                    <p id="slide_title1" style="padding: 5px; background-color: black; color: white">${star.quote}</p>
                                </div>

                            `;

        slide_show.appendChild(new_slide_show);
        imdb_links.appendChild(new_imdb);
        wiki_links.appendChild(new_wiki);
    }
    
}
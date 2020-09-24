// KrazyMLBB API v1.0 - Documentation
// http://krazywoman.com/krazymlbb/


// When the webpage loads
// Display all heroes
function display_default() {

    // Display all heroes
    
    // YOUR CODE GOES HERE
    api_call('http://krazywoman.com/krazymlbb/api/hero/read.php');
}


// Given a hero_class (tank, fighter, mage, asassin, marksman, support, all)
function show_heroes(hero_class) {

    // if 'tank'
    // only display 'tank' heroes

    // if 'all'
    // display ALL heroes

    // YOUR CODE GOES HERE
    if (hero_class != 'all') {
        var url = 'http://krazywoman.com/krazymlbb/api/hero/search.php?c='+hero_class;
    } else {
        var url = 'http://krazywoman.com/krazymlbb/api/hero/read.php';
    }
    api_call(url);
}

function api_call(url) {
    //Step 1 create variable to hold request
    var request = new XMLHttpRequest(); 

    //Step 2 write function to check status
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            edit_page(this);
        }
    }
    
    console.log(url);
    request.open("GET",url,true);
    request.send();
}
function removeAllChildNodes(parent) {
    
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function edit_page(xml) {
    var response_json = JSON.parse(xml.responseText).records;

    // console.log(response_json);

    var parent = document.getElementsByClassName('card mb-3 mx-auto')[0];
    removeAllChildNodes(parent);

    for (hero of response_json) {
        var new_hero = document.createElement('div');
        new_hero.setAttribute('class','row no-gutters');
        new_hero.innerHTML = `
                    <div class="col-md-3">
                        <img src="${hero.img_profile_url}" class="card-img" width="100%" alt="${hero.name}">
                    </div>
                    <div class="col-md-9">
                        <!-- Hero -->
                        <div class="card-body">
                            <h5 class="card-title">${hero.name}</h5>

                            <p class="card-text">${hero.description}</p>
                            
                            <p class="text-center">
                                <button type="button" class="btn mb-1" style="background-color:#ff7002; color: white; width: 220px">
                                    Battlepoint Cost <span class="badge badge-light">${hero.purchase.battlepoint_cost}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#1326ff; color: white; width: 220px">
                                    Diamond Cost <span class="badge badge-light">${hero.purchase.diamond_cost}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    Movement Speed <span class="badge badge-light">${hero.stats.movement_speed}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    Physical Attack <span class="badge badge-light">${hero.stats.physical_attack}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    Physical Defense <span class="badge badge-light">${hero.stats.physical_defense}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    Magic Power <span class="badge badge-light">${hero.stats.magic_power}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    Armor <span class="badge badge-light">${hero.stats.armor}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    Magic Resistance <span class="badge badge-light">${hero.stats.magic_resistance}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    HP <span class="badge badge-light">${hero.stats.hp}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    Mana <span class="badge badge-light">${hero.stats.mana}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    Attack Speed <span class="badge badge-light">${hero.stats.attack_speed}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    HP Regen Rate <span class="badge badge-light">${hero.stats.hp_regen_rate}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    Mana Regen Rate <span class="badge badge-light">${hero.stats.mana_regen_rate}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#3e3b3a; color: white; width: 220px">
                                    Class <span class="badge badge-light">${hero.class}</span>
                                </button>

                            </p>
                        </div> <!-- end of card-body -->
                    </div> <!-- end of col -->`;

        parent.appendChild(new_hero);
    }


}
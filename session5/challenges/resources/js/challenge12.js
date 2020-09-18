// [IMPORTANT]
// DO NOT MODIFY challenge12.html content
// YOU MUST WORK WITH WHAT IS GIVEN TO YOU



// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function highlight_words() {

    // YOUR CODE GOES HERE
    var paragraphs = document.getElementsByTagName('p');
    var reset = paragraphs[0].getAttribute('highlight_reset');
    if (reset == 'true') {
        var user_length = -1;
        paragraphs[0].setAttribute('highlight_reset','false');
    } else {
        var user_length = Number(prompt('Enter word length:'));
        paragraphs[0].setAttribute('highlight_reset','true');
    }
    
    for (text of paragraphs) {
        var words = text.innerText.split(' ');
        var return_string = '';
        for (word of words) {
            if (word.length == user_length) {
                
                return_string += "<span style='background-color:yellow'> "  + word + "</span> ";
            } else {
                return_string += word + ' ';
            }
        }
        text.innerHTML = return_string;
    }

}


// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function show_num_words() {

    // YOUR CODE GOES HERE
    var paragraphs = document.getElementsByClassName('list-unstyled');
    var lengths = [];
    for (text of paragraphs) {
        var words = text.innerText.split(' ');
        lengths.push(words.length);
    }

    var reset = paragraphs[0].getAttribute('wordcount_reset');
    if (reset == 'true') {
        for (i = 0 ; i < lengths.length ; i++) {
            paragraphs[i].children[0].remove();
        }

        paragraphs[0].setAttribute('wordcount_reset','false');
    } else {

        for (i = 0 ; i < lengths.length ; i++) {
            var text = `(${lengths[i]} Words)`;
            var num = document.createElement('li');
            var node = document.createTextNode(text);
            num.appendChild(node);
            paragraphs[i].insertBefore(num,paragraphs[i].childNodes[0]);
        }

        paragraphs[0].setAttribute('wordcount_reset','true');
    }

    // var spans = document.getElementsByTagName('span');
    

}


// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function show_emoticons() {

    // YOUR CODE GOES HERE
    var paragraphs = document.getElementsByTagName('p');
    var reset = paragraphs[0].getAttribute('emoji_reset');
    if (reset == 'true') {
        for (text of paragraphs) {
            var words = text.innerText;
            var return_string = '';
            for (word of words) {
                if (word == '⭐') {
                    return_string +=  ',';
                } else if (word == '❓'){
                    return_string += '?';
                } else if (word == '❗'){
                    return_string += '!';
                } else {
                    return_string += word;
                }
            }
            text.innerHTML = return_string;
        }
        paragraphs[0].setAttribute('emoji_reset','false');
    } else {
        for (text of paragraphs) {
            var words = text.innerText;
            var return_string = '';
            for (word of words) {
                if (word == ',') {
                    return_string +=  '⭐';
                } else if (word == '?'){
                    return_string += '❓';
                } else if (word == '!'){
                    return_string += '❗';
                } else {
                    return_string += word;
                }
            }
            text.innerHTML = return_string;
        }
        paragraphs[0].setAttribute('emoji_reset','true');
    }

    
}
function words(words, text) {

    let splitWords = words.split(', ');
    
    for (let el of splitWords) {
        
        let template = '*'.repeat(el.length);

        text = text.replace(template, el);
    }

    console.log(text);

}
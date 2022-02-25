let TextInput = document.getElementById('floatingTextarea2');
let WordCounter = document.getElementById('wordcount');
let LetterCounter = document.getElementById('lettercount');



function getWordCount() {
    let TextInputValue = TextInput.value;
    TextInputValue = TextInputValue.replace(/[^A-Za-z']/g, " ");
    TextInputValue = TextInputValue.trim();
    let Words = TextInputValue.split(' ');
    if (Words[0] === ''){
        WordCounter.textContent = 0;
    }
    else{
        WordCounter.textContent = Words.length;
        let Chars = Words.join('');
        console.log(Chars);
        if (Chars[0] === ''){
            LetterCounter.textContent = 0;
        }
        else{
            LetterCounter.textContent = Chars.length;
        }
        
        
    }
}


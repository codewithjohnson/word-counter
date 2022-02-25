let TextInput = document.getElementById('floatingTextarea2');
let WordCounter = document.getElementById('wordcount');
let LetterCounter = document.getElementById('lettercount');



function getWordCount() {
    let TextInputValue = TextInput.value;
    TextInputValue = TextInputValue.trim();
    let Words = TextInputValue.split(' ');
    
    if (Words[0] === ''){
        WordCounter.textContent = 0;
    }
    else{
        WordCounter.textContent = Words.length;
        Chars = Words.join('');
        LetterCounter.textContent = Chars.length;
        
    }
}

// const str = 'i am here';
// let l = Array.from(str.split(' '));
// console.log(l);
// l = l.join('');
// console.log(l);
// console.log(l.length);
// console.log();

// const j = str.split('');
// console.log(j);
// console.log();

// const a = Array.from(str.split(' '));
// console.log(a);
// console.log();

// const b = Array.from(str);
// console.log(b);
// console.log();

// const p = b.join();
// console.log(p);
// console.log();
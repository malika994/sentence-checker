
function getVowelCount(sentence) {
    const vowels = "aeiou";
    let count = 0;

    for (const char of sentence.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

const vowelCount = getVowelCount("wellcome to coding world!");
console.log(`Vowel Count: ${vowelCount}`);

function getConsonantCount(sentence) {
    const consonants = "bcdfghjklmnpqrstvwxyz";
    let count = 0;

    for (const char of sentence.toLowerCase()) {
        if (consonants.includes(char)) {
            count++;
        }
    }
    return count;
}

const consonantCount = getConsonantCount("wellcome to coding world!");
console.log(`Consonant Count: ${consonantCount}`);

function getPunctuationCount(sentence) {
    const punctuations = ".,!?;:-()[]{}\"'–";
    let count = 0;

    for (const char of sentence) {
        if (punctuations.includes(char)) {
            count++;
        }
    }
    return count;
}

const punctuationCount = getPunctuationCount("wellcome to coding world!");
console.log(`Punctuation Count: ${punctuationCount}`);

function getWordCount(sentence) {
    if (sentence.trim() === '') {
        return 0;
    }

    const words = sentence.trim().split(/\s+/);
    return words.length;
}

let wordCount = getWordCount("wellcome to coding world!");
console.log(`Word Count: ${wordCount}`);




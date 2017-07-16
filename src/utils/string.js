var firstLetterOfEachWord = /(\b[a-z](?!\s))/g;
var normalizeString = (value) => value.toLowerCase().replace(firstLetterOfEachWord, x => x.toUpperCase());

export { normalizeString };

export default {
    normalizeString
}

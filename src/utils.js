export function isPalindrome(word){
    if(!word)
        return false

    if(!/^[A-Za-z]+$/.test(word))
        throw new Error('Argument is not a word!');
    else if(typeof word !== 'string')
        throw new Error('Argument is not a string!')

    const loweredWord = word.toLowerCase()
    const reverseWord = loweredWord.split('').reverse().join('')
    return loweredWord === reverseWord
}
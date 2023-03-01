function longestConsec(strarr, k) {
    // set output to string
    let output = '';
    // create array to store concats
    let concatArr = [];
    // reduce through strarr, concat and push to new array
    strarr.reduce((prev, next) => concatArr.push(prev + next + k));
    // create variable to store longest string, use for loop to find
    // create rule for returning string
    return concatArr;
}

console.log(longestConsec(['jazz', 'pal', 'whatthehell', 'mydear', 'bigballs'], 2));
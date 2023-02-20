function likes(names) {
    // set output as string
    let output = '';
    // determine length of array
    let arrLength = names.length;
    // set variable to store array count if >= 4
    // write else if statements for first 4 possibilities
    return names.length == 0 ? output = "no one likes this" :
            names.length == 1 ? output = `${names[0]} likes this` : 
            names.length == 2 ? output = `${names[0]} and ${names[1]} like this` : 
            names.length == 3 ? output = `${names[0]}, ${names[1]} and ${names[2]} like this` :
            output = `${names[0]}, ${names[1]} and ${arrLength - 2} others like this`;
    // add in nth possibility
    // return output
    console.log(output);
}

likes(['john', 'fred']);

/* THIS WORKED ON CODEWARS PROVIDING I CHANGED CONSOLE.LOG TO RETURN. I DIDN'T EVEN NEED A VARIABLE
TO STORE THE ARRAY COUNT >= 4. I JUST USED THE arrLength VARIABLE. */
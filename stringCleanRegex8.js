function stringClean(s){
    const pattern = /[0-9]/g
    return s.split("").map((char) => char.replace(pattern, "")).join("");
  }

  console.log(stringClean("java5cript 1s a pa1n 1n the a5s"));
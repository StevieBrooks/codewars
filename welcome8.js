function greet(language) {
	const langBank = {
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
  }
  let output = '';
  switch(language) {
      case 'english':
      output = langBank.english;
      break;
      case 'czech':
      output = langBank.czech;
      break;
      case 'danish':
      output = langBank.danish;
      break;
      case 'dutch':
      output = langBank.dutch;
      break;
      case 'estonian':
      output = langBank.estonian;
      break;
      case 'finnish':
      output = langBank.finnish;
      break;
      case 'flemish':
      output = langBank.flemish;
      break;
      case 'french':
      output = langBank.french;
      break;
      case 'german':
      output = langBank.german;
      break;
      case 'irish':
      output = langBank.irish;
      break;
      case 'italian':
      output = langBank.italian;
      break;
      case 'latvian':
      output = langBank.latvian;
      break;
      case 'lithuanian':
      output = langBank.lithuanian;
      break;
      case 'polish':
      output = langBank.polish;
      break;
      case 'spanish':
      output = langBank.spanish;
      break;
      case 'swedish':
      output = langBank.swedish;
      break;
      case 'welsh':
      output = langBank.welsh;
      break;
  }
  return output;
}

console.log(greet('dutch'));

// This works perfectly fine on here but doesn't work on CodeWars for some reason. Baffled!
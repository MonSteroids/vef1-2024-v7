/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á
// Heimild: https://www.freecodecamp.org/news/check-if-string-is-empty-or-null-javascript/

function longest(str) {
  if (typeof str !== 'string') {
    return null;
  }

  if (str === '') {
    return '';
  }

  const strSplit = str.split(' ');
  let longestWord = '';
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord.length) {
      longestWord = strSplit[i];
    }
  }
  return longestWord;
}
console.assert(
  longest(
    'opnið Console í DevTools vafra með t.d. Control+Shift+I á Windows eða Command+Option+I á Mac.'
  ) === 'Command+Option+I', 'longest: sýnir lengsta orðið'
);
console.assert(
  longest('') === '',
  'longest: tómur strengur'
);

function shortest(str) {
  if (typeof str !== 'string') {
    return null;
  }

  if (str === '') {
    return '';
  }

  const strSplit = str.split(' ');
  // Byrja á fyrsta orðinu.
  let shortestWord = strSplit[0];
  // Ef orð er minna en fyrsta orð, skipta út.
  for (let i = 1; i < strSplit.length; i++) {
    if (strSplit[i].length < shortestWord.length) {
      shortestWord = strSplit[i];
    }
  }
  return shortestWord;
}
console.assert(
  shortest(
    'opnið Console í DevTools vafra með t.d. Control+Shift+I á Windows eða Command+Option+I á Mac.'
  ) === 'í', 'longest: sýnir styðsta orðið'
);
console.assert(
  shortest('') === '',
  'shortest: tómur strengur'
);

function reverse(str) {
  if (typeof str !== 'string') {
    return null;
  }

  if (str === '') {
    return '';
  }

  if (isString(str)) {
    const split = str.split('');
    const reversed = split.reverse()

    return reversed.join('')
  }
  return null;
}
console.assert(
  reverse('hæ') === 'æh',
  'reverse: snýr við einföldum streng'
);
console.assert(
  reverse(false) === null,
  'reverse: ekki strengur'
);

function palindrome(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return false;
  }
  // Heimild: https://www.programiz.com/javascript/examples/palindrome
  const originalString = str.toLowerCase();
  const reverseString = originalString.split('').reverse().join('');
  return originalString === reverseString;
}
console.assert(
  palindrome('latal') === true,
  'palindrome: er palindrome'
);
console.assert(
  palindrome('hello') === false,
  'palindrome: er ekki palindrome'
);

function vowels(str) {
  // Ef ekki strengur skila 0
  if (typeof str !== 'string') {
    return 0;
  }

  // Heimild: https://www.geeksforgeeks.org/how-to-get-a-number-of-vowels-in-a-string-in-javascript/
  const vowels = 'aAeEiIoOuUyYáÁéÉýÝúÚíÍóÓöÖæÆ';
  let vowelCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelCount += 1;
    }
  }
  return vowelCount;
}
console.assert(
  vowels("halló") === 2,
  'vowels: er sérhljóð'
);
console.assert(
  vowels(12345) === 0,
  'vowels: ekki strengur'
);

function consonants(str) {
  // Ef ekki strengur skila 0
  if (typeof str !== 'string') {
    return 0;
  }

  const consonants = 'bBdDðÐfFgGhHjJkKlLmMnNpPrRsStTvVxXþÞ';
  let consonantsCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (consonants.includes(str[i])) {
      consonantsCount += 1;
    }
  }
  return consonantsCount;
}
console.assert(
  consonants("halló") === 3,
  'consonants: er samhljóða'
);
console.assert(
  consonants(12345) === 0,
  'consonants: ekki strengur'
);

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  alert(
    'Sláðu inn streng með nokkrum orðum til að fá upplýsingar um:\n' +
    '- Lengsta orðið\n' +
    '- Stysta orðið\n' +
    '- Strenginn snúið við\n' +
    '- Fjölda sérhljóða í streng\n' +
    '- Fjölda samhljóða í streng\n' +
    '- Hvort strengurinn sé samhverfur\n'
  );

  let input = prompt('Sláðu inn streng með nokkrum orðum: ');
  if (input === null || input === '') {
    return;
  }

  let longestWord = longest(input);
  let shortestWord = shortest(input);
  let reverseString = reverse(input);
  let vowelsCount = vowels(input);
  let consonantsCount = consonants(input);
  let palindromeBool = palindrome(input);

  // Fékk hjálp frá ChatGPT með þennan hluta
  alert(
    `Lengsta orðið: ${longestWord}\n` +
    `Styðsta orðið: ${shortestWord}\n` +
    `Strengurinn snúið við: ${reverseString}\n` +
    `Fjöldi sérhljóða: ${vowelsCount}\n` +
    `Fjöldi samhljóða: ${consonantsCount}\n` +
    `Samhverfur: ${palindromeBool}`
  );

  let again = confirm('Slá inn annan streng?');
  if (again) {
    start();
  }
  // að þessum hluta.
}

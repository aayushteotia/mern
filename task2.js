function alphabetizeString(inputString) {
    // Convert the string to an array of characters, sort them, and join them back into a string
    return inputString.split('').sort().join('');
  }
  
  // Example usage:
  let inputString = 'webmaster';
  let alphabetized = alphabetizeString(inputString);
  console.log(alphabetized); // Output: 'abeemrstw'
  
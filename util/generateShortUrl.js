export default function generateShortUrl(length) {
  const urlCharacters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '-', '_', '.', '~', '!', '*', '\'', '(', ')', '+', ',', ':', ';', '='
  ];

  let result = '';
  const charactersLength = urlCharacters.length;

  for (let i = 0; i < length; i++) {
    result += urlCharacters[Math.floor(Math.random() * charactersLength)];
  }

  return result;
}

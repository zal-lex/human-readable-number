module.exports = function toReadable (number) {
  const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const firstDecimal = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const decimals = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const hundred = units.map( (unit) => `${unit} hundred`);
  const dictionary = [units, decimals, hundred];
  const digitsStringsArray = number.toString().split('');
  const reversedDigits = digitsStringsArray.map((digit) => parseInt(digit)).reverse();
  let result = [];
  reversedDigits.forEach( (digit, index) => {
    if (digit === 0) {
      if (number === 0) {
        result.unshift(dictionary[index][digit]);
      }
    } else if (reversedDigits[1] === 1 && index === 0) {
      return;
    } else if (reversedDigits[1] === 1 && index === 1) {
      result.unshift(firstDecimal[reversedDigits[0]]);
    } else {
      result.unshift(dictionary[index][digit]);
    }
  })
  return result.join(' ');
}

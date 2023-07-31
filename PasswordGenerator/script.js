const clipboard = document.getElementById("clipboard");
const resultEl = document.getElementById("result");
const generateEl = document.getElementById("generate");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const lengthEl = document.getElementById("length");

clipboard.addEventListener("click", () => {
  const password = resultEl.innerText;

  if (!password) {
    return;
  }
  navigator.clipboard.writeText(password);
  alert("Password copied to clipboard!");
});

const randomFunction = {
  number: getRandomNumber,
  lower: getRandomLower,
  upper: getRandomUpper,
  symbol: getRandomSymbol,
};

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumbers = numbersEl.checked;
  const hasSymbols = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    length,
    hasLower,
    hasUpper,
    hasNumbers,
    hasSymbols
  );
});

function generatePassword(length, lower, upper, number, symbol) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  const typesArray = [{ upper }, { lower }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArray.forEach((type) => {
      const functionName = Object.keys(type)[0];
      generatedPassword += randomFunction[functionName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}

function getRandomSymbol() {
  const symbol = "#$%&/()=¡!¿?+-*{}[]<>@";
  return symbol[Math.floor(Math.random() * symbol.length)];
}

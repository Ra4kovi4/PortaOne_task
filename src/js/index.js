const form = document.querySelector('.form');
const message = document.querySelector('.form textarea');
const result = document.querySelector('.result__uniqueLetter');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  if (message.value === '') {
    return;
  }
  result.textContent = findUniqueLetter(message.value)
    ? findUniqueLetter(message.value)
    : 'no unique character';
}

//повертає унікальний символ
function findUniqueLetter(text) {
  const words = getNormilizeString(text);
  const uniqueLettersList = getUniqueLettersList(words);

  const uniqueLetter = findUniqueElent(uniqueLettersList);
  return uniqueLetter;
}

//функція для перетворення рядка у масив із виданням з рядку пробілів
function getNormilizeString(str) {
  const arrWithoutSymbols = str.split(' ').map(el => el.trim());

  //перетворюємо на масив та видаляємо пробіли, символи та цифри , залишаємо тільки букви
  console.log(arrWithoutSymbols);
  return arrWithoutSymbols;
}

//знаходить в массиву унікальний елемент па повертає його
function findElement(str) {
  const uniqueLetter = str.split('').find((el, idx, arr) => {
    if (el) {
      return arr.indexOf(el) === arr.lastIndexOf(el);
    }
  }); //перетворюємо стрічку на масив та за допомогою методу find знаходимо першу унікальну букву в стрічці
  return uniqueLetter;
}

//знаходить створює об'єкт із лічильником унікальних елементів (ключ- сам елемент, значення - кількість в масиві)
function getUniqueLettersList(arr) {
  const uniqueLettersList = arr.reduce((count, el) => {
    const uniqueLetter = findElement(el);

    if (uniqueLetter !== undefined) {
      if (count.hasOwnProperty(uniqueLetter)) {
        count[uniqueLetter] += 1;
      } else {
        count[uniqueLetter] = 1;
      }
    }

    return count;
  }, {});

  return uniqueLettersList;
}

//функція перебирає об'єкт і знаходить перше значення ключ якого дорівнює 1, або null якщо унікального елементу немає
function findUniqueElent(obj) {
  for (const el in obj) {
    if (obj[el] === 1) {
      return el || null;
    }
  }
}

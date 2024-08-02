let Celcius = prompt(
    "Скільки градусів Цельсія ви хочете перевести в Фаренгейти"
  );
  let Fahrenheit = (Celcius * 9) / 5 + 32;
  console.log(Fahrenheit);
  
  let daysInMonth = 30;
  let hoursInDay = 24;
  let minutesInHour = 60;
  console.log(daysInMonth * hoursInDay * minutesInHour);
  
  let personHealth = 500;
  let personEnergy = 200;
  console.log(personHealth - 50, "HP");
  console.log(personEnergy - 30, "Energy");
  
  let startPrice = prompt("Введіть ціну без знижки");
  let priceWithDiscount = (startPrice * 10) / 100;
  console.log(startPrice - priceWithDiscount);
  
  let number = prompt("Введіть число, щоб заоокруглити");
  let roundedNumber = Math.round(number);
  console.log(roundedNumber);
  
  let numberString = 5.34;
  let decimalNumber = parseFloat(numberString);
  console.log(decimalNumber);
  
  let taskSevenNumber = prompt("Введіть число:");
  let taskSevenValue = parseInt(taskSevenNumber);
  console.log(taskSevenValue);
  
  let startNumber = prompt("Введіть число, щоб знайти квадратний корінь");
  let sqrtNumber = Math.sqrt(startNumber);
  console.log(sqrtNumber);
  
  let normalNumber = 123;
  let stringNumber = "456";
  let pasrseIntNumber = parseInt(stringNumber);
  console.log(stringNumber);
  let numberToString = toString(normalNumber);
  console.log(numberToString);
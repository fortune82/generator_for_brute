const out = document.querySelector(".out");
const generatorDate = document.querySelector(".generatorDate");
const generatorDate2 = document.querySelector(".generatorDate2");
const generatorDate3 = document.querySelector(".generatorDate3");
const clear = document.querySelector(".clear");
const copyText = document.querySelector(".copyText");

// вывод месяцев цифрами
generatorDate.addEventListener("click", function generator() {
  /*передаем переменным значения введенные пользователем в поле input*/
  let minYear = document.querySelector(".minYear").value;
  let maxYear = document.querySelector(".maxYear").value;

  for (let year = minYear; year <= maxYear; year++) {
    for (let mounth = 1; mounth <= 9; mounth++) {
      for (let day = 1; day <= 31; day++) {
        if (day <= 9) {
          out.innerHTML += `0${day}0${mounth}${year} \n`; /*Вместо <br> в DIV для <textarea> используй \n\r для переноса новой даты на новую строчку*/
        } else {
          out.innerHTML += `${day}0${mounth}${year} \n`;
        }
      }
    }

    for (let mounth = 10; mounth <= 12; mounth++) {
      for (let day = 1; day <= 31; day++) {
        if (day <= 9) {
          out.innerHTML += `0${day}${mounth}${year} \n`;
        } else {
          out.innerHTML += `${day}${mounth}${year} \n`;
        }
      }
    }
  }

  /* прерываем вывод сгенерированных дат, если пользователь не ввел даты*/
  if (minYear === "" || maxYear === "") {
    out.innerHTML = "";
  }
});

// вывод месяцев на русском
generatorDate2.addEventListener("click", function generator2() {
  let minYear = document.querySelector(".minYear").value;
  let maxYear = document.querySelector(".maxYear").value;

  for (let year = minYear; year <= maxYear; year++) {
    for (let mounth = 1; mounth <= 9; mounth++) {
      let mounthName = mounth;
      /*вместо чисел, как месяцев года, подставляем названия месяцев словами*/
      switch (mounth) {
        case 1:
          mounthName = "января";
          break;
        case 2:
          mounthName = "февраля";
          break;
        case 3:
          mounthName = "марта";
          break;
        case 4:
          mounthName = "апреля";
          break;
        case 5:
          mounthName = "мая";
          break;
        case 6:
          mounthName = "июня";
          break;
        case 7:
          mounthName = "июля";
          break;
        case 8:
          mounthName = "августа";
          break;
        case 9:
          mounthName = "сентября";
          break;
      }
      for (let day = 1; day <= 31; day++) {
        if (day <= 9) {
          out.innerHTML += `0${day}${mounthName}${year} \n`;
        } else {
          out.innerHTML += `${day}${mounthName}${year} \n`;
        }
      }
    }

    for (let mounth = 10; mounth <= 12; mounth++) {
      let mounthName = mounth;
      switch (mounth) {
        case 10:
          mounthName = "октября";
          break;
        case 11:
          mounthName = "ноября";
          break;
        case 12:
          mounthName = "декабря";
          break;
      }
      for (let day = 1; day <= 31; day++) {
        if (day <= 9) {
          out.innerHTML += `0${day}${mounthName}${year} \n`;
        } else {
          out.innerHTML += `${day}${mounthName}${year} \n`;
        }
      }
    }
  }

  if (minYear === "" || maxYear === "") {
    /* прерываем вывод сгенерированных дат, если пользователь не ввел даты*/
    out.innerHTML = "";
  }
});

// вывод месяцеч на английском
generatorDate3.addEventListener("click", function generator3() {
  let minYear = document.querySelector(".minYear").value;
  let maxYear = document.querySelector(".maxYear").value;

  for (let year = minYear; year <= maxYear; year++) {
    for (let mounth = 1; mounth <= 9; mounth++) {
      let mounthName = mounth;
      switch (mounth) {
        case 1:
          mounthName = "january";
          break;
        case 2:
          mounthName = "february";
          break;
        case 3:
          mounthName = "march";
          break;
        case 4:
          mounthName = "april";
          break;
        case 5:
          mounthName = "may";
          break;
        case 6:
          mounthName = "june";
          break;
        case 7:
          mounthName = "july";
          break;
        case 8:
          mounthName = "august";
          break;
        case 9:
          mounthName = "september";
          break;
      }
      for (let day = 1; day <= 31; day++) {
        if (day <= 9) {
          out.innerHTML += `0${day}${mounthName}${year} \n`;
        } else {
          out.innerHTML += `${day}${mounthName}${year} \n`;
        }
      }
    }

    for (let mounth = 10; mounth <= 12; mounth++) {
      let mounthName = mounth;
      switch (mounth) {
        case 10:
          mounthName = "october";
          break;
        case 11:
          mounthName = "november";
          break;
        case 12:
          mounthName = "december";
          break;
      }
      for (let day = 1; day <= 31; day++) {
        if (day <= 9) {
          out.innerHTML += `0${day}${mounthName}${year} \n`;
        } else {
          out.innerHTML += `${day}${mounthName}${year} \n`;
        }
      }
    }
  }

  if (minYear === "" || maxYear === "") {
    /* прерываем вывод сгенерированных дат, если пользователь не ввел даты*/
    out.innerHTML = "";
  }
});

clear.onclick = function () {
  /*при нажатии кнопки очищает поле */
  out.innerHTML = "";
  document.querySelector(".minYear").value = "";
  document.querySelector(".maxYear").value = "";
};

copyText.onclick = function () {
  /*при нажатии копирует содержимое поля в буфер обмена */
  out.select();
};

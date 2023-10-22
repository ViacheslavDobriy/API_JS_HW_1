import { getLessonsData } from "./json.js";
const data = getLessonsData();

const contentElem = document.querySelector(".schedule");

data.forEach((element) => {
  const lessonElem = document.createElement("div");
  lessonElem.className = "lesson";
  contentElem.appendChild(lessonElem);

  const lessonContentElem = document.createElement("div");
  lessonContentElem.className = "lesson__content";
  lessonElem.appendChild(lessonContentElem);

  const lessonButtonsElem = document.createElement("div");
  lessonButtonsElem.className = "lesson__buttons";
  lessonElem.appendChild(lessonButtonsElem);

  const lessonButtonAddElem = document.createElement("button");
  lessonButtonAddElem.className = "lesson__button_add";
  lessonButtonAddElem.textContent = "Записаться";
  lessonButtonsElem.appendChild(lessonButtonAddElem);
  if (element.currentCapacity === element.maxCapacity) {
    lessonButtonAddElem.disabled = true;
  }

  lessonButtonAddElem.addEventListener("click", () => {
    element.currentCapacity = +element.currentCapacity + 1;
    lessonElem.querySelector(".amountOfStudents").textContent =
      element.currentCapacity + "/" + element.maxCapacity;
    lessonButtonAddElem.disabled = true;
    lessonButtonAddElem.nextSibling.disabled = false;
  });

  const lessonButtonRemoveElem = document.createElement("button");
  lessonButtonRemoveElem.className = "lesson__button_remove";
  lessonButtonRemoveElem.textContent = "Отменить запись";
  lessonButtonRemoveElem.disabled = true;
  lessonButtonsElem.appendChild(lessonButtonRemoveElem);

  lessonButtonRemoveElem.addEventListener("click", () => {
    element.currentCapacity = +element.currentCapacity - 1;
    lessonElem.querySelector(".amountOfStudents").textContent =
      element.currentCapacity + "/" + element.maxCapacity;
    lessonButtonAddElem.disabled = false;
    lessonButtonRemoveElem.disabled = true;
  });

  const lessonTitleElem = document.createElement("h2");
  lessonTitleElem.className = "lesson__title";
  lessonTitleElem.textContent = element.title;
  lessonContentElem.appendChild(lessonTitleElem);

  const lessonFooterElem = document.createElement("footer");
  lessonFooterElem.className = "lesson__footer";
  lessonContentElem.appendChild(lessonFooterElem);

  const lessonDateElem = document.createElement("div");
  lessonDateElem.className = "lesson__date";
  lessonFooterElem.appendChild(lessonDateElem);

  const lessonDayElem = document.createElement("h3");
  lessonDayElem.className = "lesson__day";
  lessonDayElem.textContent = element.day;
  lessonDateElem.appendChild(lessonDayElem);

  const lessonTimeElem = document.createElement("h3");
  lessonTimeElem.className = "lesson__time";
  lessonTimeElem.textContent = element.time;
  lessonDateElem.appendChild(lessonTimeElem);

  const amountOfStudentsElem = document.createElement("h3");
  amountOfStudentsElem.className = "amountOfStudents";
  amountOfStudentsElem.textContent =
    element.currentCapacity + "/" + element.maxCapacity;
  lessonFooterElem.appendChild(amountOfStudentsElem);
});

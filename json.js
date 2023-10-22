const lessonsData = `[
  {
    "title": "Основы танца Самба",
    "day": "Понедельник",
    "time": "19:00",
    "maxCapacity": "40",
    "currentCapacity": "40" 
  },
  {
    "title": "Основы танца Румба",
    "day": "Среда",
    "time": "19:00",
    "maxCapacity": "40",
    "currentCapacity": "24" 
  },
  {
    "title": "Основы танца Джайв",
    "day": "Пятница",
    "time": "19:00",
    "maxCapacity": "40",
    "currentCapacity": "9" 
  },
  {
    "title": "Основы танца Ча Ча Ча",
    "day": "Четверг",
    "time": "20:00",
    "maxCapacity": "40",
    "currentCapacity": "32" 
  },
  {
    "title": "Основы танца Пасодобль",
    "day": "Воскресенье",
    "time": "12:00",
    "maxCapacity": "25",
    "currentCapacity": "12" 
  }
]`;

export const getLessonsData = () => {
  return JSON.parse(lessonsData);
};

// console.log(JSON.parse(getLessonsData()));

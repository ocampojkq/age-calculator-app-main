function answer(event) {
  event.preventDefault();

  var userInputDay = document.getElementById("day").value; //  Get the user input day
  var userInputMonth = document.getElementById("month").value; //  Get the user input month
  var userInputYear = document.getElementById("year").value; // Get the user input year

  var targetDay = 12;  // The target day
  var targetMonth = 11;  // The target month
  var targetYear = 2014;  // The target year

   // Check if the user input matches the target date
  if (
    userInputDay === targetDay.toString() &&
    userInputMonth === targetMonth.toString() &&
    userInputYear === targetYear.toString()
  ) {
    document.getElementById("carmelo").style.display = "block"; // Display the hidden element
  } else {
    document.getElementById("carmelo").style.display = "none"; // Hide the element if the input doesn't match
  }

  var userInputDay1 = document.getElementById("day").value; // Get the user input day
  var userInputMonth1 = document.getElementById("month").value; // Get the user input month
  var userInputYear1 = document.getElementById("year").value; // Get the user input year

  var targetDay1 = 22; // The target day
  var targetMonth1 = 03; // The target month
  var targetYear1 = 2010; // The target year

  // Check if the user input matches the target date
  if (
    userInputDay1 === targetDay1.toString() &&
    userInputMonth1 === targetMonth1.toString() &&
    userInputYear1 === targetYear1.toString()
  ) {
    document.getElementById("keane").style.display = "block"; // Display the hidden element
  } else {
    document.getElementById("keane").style.display = "none"; // Hide the element if the input doesn't match
  }

  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;

  if (day < 1 || day > 31 || isNaN(day)) {
    document.getElementById("day").style.borderColor = "red";
    document.querySelector("#day + p").style.color = "red";
    document.querySelector("#day + p").textContent = "Invalid day";
    return;
  } else {
    document.getElementById("day").style.borderColor = "";
    document.querySelector("#day + p").style.color = "";
    document.querySelector("#day + p").textContent = "Must be valid day";
  }

  if (month < 1 || month > 12 || isNaN(month)) {
    document.getElementById("month").style.borderColor = "red";
    document.querySelector("#month + p").style.color = "red";
    document.querySelector("#month + p").textContent = "Invalid month";
    return;
  } else {
    document.getElementById("month").style.borderColor = "";
    document.querySelector("#month + p").style.color = "";
    document.querySelector("#month + p").textContent = "Must be valid month";
  }

  if (year < 1 || year > new Date().getFullYear() || isNaN(year)) {
    document.getElementById("year").style.borderColor = "red";
    document.querySelector("#year + p").style.color = "red";
    document.querySelector("#year + p").textContent = "Invalid year";
    return;
  } else {
    document.getElementById("year").style.borderColor = "";
    document.querySelector("#year + p").style.color = "";
    document.querySelector("#year + p").textContent = "Must be valid year";
  }

  const today = new Date();
  const birthdate = new Date(year, month - 1, day);
  let ageYears = today.getFullYear() - birthdate.getFullYear();
  let ageMonths = today.getMonth() - birthdate.getMonth();
  let ageDays = today.getDate() - birthdate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    ageDays += daysInMonth(birthdate.getMonth() + 1, birthdate.getFullYear());
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  document.getElementById("YY").textContent = ageYears;
  document.getElementById("MM").textContent = ageMonths;
  document.getElementById("DD").textContent = ageDays;
}

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

const createRaindrop = () => {
  const raindrop = document.createElement("div");
  raindrop.classList.add("raindrop");
  raindrop.style.left = Math.random() * window.innerWidth + "px";
  raindrop.style.backgroundColor = getRandomColor();
  document.body.appendChild(raindrop);
  startRaindropAnimation(raindrop);
};

const startRaindropAnimation = (raindrop) => {
  const animationDuration = Math.random() * 4 + 2; // Random duration between 2 and 6 seconds
  raindrop.style.animation = `raindropFall ${animationDuration}s linear infinite`;
};

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Generate raindrop elements
const numRaindrops = 200;
for (let i = 0; i < numRaindrops; i++) {
  createRaindrop();
}

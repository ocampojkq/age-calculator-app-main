function answer(event) {
  event.preventDefault();

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

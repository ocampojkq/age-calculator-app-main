function calculateAge() {
  // Get user input
  const dayInput = document.getElementById("day").value;
  const monthInput = document.getElementById("month").value;
  const yearInput = document.getElementById("year").value;

  // Validate user input
  const validDay = validateDay(dayInput);
  const validMonth = validateMonth(monthInput);
  const validYear = validateYear(yearInput);
  if (!validDay || !validMonth || !validYear) {
    return;
  }

  // Calculate age
  const birthday = new Date(`${yearInput}-${monthInput}-${dayInput}`);
  const today = new Date();
  const ageInMilliseconds = today - birthday;
  const ageInYears = Math.floor(ageInMilliseconds / 31556952000); // 31556952000 milliseconds in a year
  const ageInMonths = Math.floor(
    (ageInMilliseconds % 31556952000) / 2629746000
  ); // 2629746000 milliseconds in a month
  const ageInDays = Math.floor((ageInMilliseconds % 2629746000) / 86400000); // 86400000 milliseconds in a day

  // Display age
  document.querySelector(".span.years").textContent = ageInYears;
  document.querySelector(".span.months").textContent = ageInMonths;
  document.querySelector(".span.days").textContent = ageInDays;
}

function validateDay(day) {
  const dayInt = parseInt(day);
  if (isNaN(dayInt) || dayInt < 1 || dayInt > 31) {
    document
      .querySelectorAll(".error-message-day")
      .forEach((element) => (element.style.display = "block"));
    return false;
  }
  document
    .querySelectorAll(".error-message-day")
    .forEach((element) => (element.style.display = "none"));
  return true;
}

function validateMonth(month) {
  const monthInt = parseInt(month);
  if (isNaN(monthInt) || monthInt < 1 || monthInt > 12) {
    document
      .querySelectorAll(".error-message-month")
      .forEach((element) => (element.style.display = "block"));
    return false;
  }
  document
    .querySelectorAll(".error-message-month")
    .forEach((element) => (element.style.display = "none"));
  return true;
}

function validateYear(year) {
  const yearInt = parseInt(year);
  if (isNaN(yearInt) || yearInt < 1900 || yearInt > new Date().getFullYear()) {
    document
      .querySelectorAll(".error-message-year")
      .forEach((element) => (element.style.display = "block"));
    return false;
  }
  document
    .querySelectorAll(".error-message-year")
    .forEach((element) => (element.style.display = "none"));
  return true;
}

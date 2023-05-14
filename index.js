function calculateAge() {
  var inputDay = document.getElementById("day").value;
  var inputMonth = document.getElementById("month").value;
  var inputYear = document.getElementById("year").value;

  var isValidDay = isValidDate(inputYear, inputMonth, inputDay);

  if (!isValidDay) {
    // Show error message for day input
    document.querySelector(".error-message-day").style.display = "block";
    document.querySelector(".days").innerHTML = "";
  } else {
    // Hide error message for day input
    document.querySelector(".error-message-day").style.display = "none";
    document.querySelector(".days").innerHTML =
      getDaysBetweenDates(
        new Date(inputYear, inputMonth - 1, inputDay),
        new Date()
      ) + " days";
  }

  var isValidMonth = isValidMonth(inputYear, inputMonth);

  if (!isValidMonth) {
    // Show error message for month input
    document.querySelector(".error-message-month").style.display = "block";
    document.querySelector(".months").innerHTML = "";
  } else {
    // Hide error message for month input
    document.querySelector(".error-message-month").style.display = "none";
    document.querySelector(".months").innerHTML =
      getMonthsBetweenDates(
        new Date(inputYear, inputMonth - 1, inputDay),
        new Date()
      ) + " months";
  }

  var isValidYear = isValidYear(inputYear);

  if (!isValidYear) {
    // Show error message for year input
    document.querySelector(".error-message-year").style.display = "block";
    document.querySelector(".years").innerHTML = "";
  } else {
    // Hide error message for year input
    document.querySelector(".error-message-year").style.display = "none";
    document.querySelector(".years").innerHTML =
      getYearsBetweenDates(
        new Date(inputYear, inputMonth - 1, inputDay),
        new Date()
      ) + " years";
  }
}

function isValidDate(year, month, day) {
  if (isNaN(day) || day < 1 || day > 31) {
    return false;
  }

  if (isNaN(month) || month < 1 || month > 12) {
    return false;
  }

  if (isNaN(year) || year < 1900 || year > new Date().getFullYear()) {
    return false;
  }

  return true;
}

function isValidMonth(year, month) {
  if (isNaN(month) || month < 1 || month > 12) {
    return false;
  }

  return true;
}

function isValidYear(year) {
  if (isNaN(year) || year < 1900 || year > new Date().getFullYear()) {
    return false;
  }

  return true;
}

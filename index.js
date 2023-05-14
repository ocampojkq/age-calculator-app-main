function calculateAge() {
  // Get the user's input values for day, month, and year
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;

  // Check if the input values are valid
  if (isNaN(day) || day < 1 || day > 31) {
    document.querySelector(".days").innerHTML = "Must be a valid day";
    return;
  }

  if (isNaN(month) || month < 1 || month > 12) {
    document.querySelector(".months").innerHTML = "Must be a valid month";
    return;
  }

  if (isNaN(year) || year < 1900 || year > new Date().getFullYear()) {
    document.querySelector(".years").innerHTML = "Must be a valid year";
    return;
  }

  // Get the current date
  const currentDate = new Date();

  // Calculate the user's birth date from the input values
  const birthDate = new Date(`${year}-${month}-${day}`);

  // Calculate the user's age
  const ageInMilliseconds = currentDate - birthDate;
  const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
  const ageInMonths = ageInYears * 12;
  const ageInDays = ageInMilliseconds / (1000 * 60 * 60 * 24);

  // Display the calculated age in the UI
  document.querySelector(".years").innerHTML = Math.floor(ageInYears);
  document.querySelector(".months").innerHTML = Math.floor(ageInMonths);
  document.querySelector(".days").innerHTML = Math.floor(ageInDays);
}

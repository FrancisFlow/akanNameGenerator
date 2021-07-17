function akanNameGenerator(day, month, year, gender) {
  cC = year.slice(0, 2);
  yY = year.slice(2, 4);
  cc = parseInt(cC);
  yy = parseInt(yY);
  mm = month;
  dd = day;
  dX= (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
  d= Math.round(dX);

  let arrayMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  let arrayFemale = ["Akosua", "Adwoa", "Abenna", "Akua", "Yaa", "Afua", "Ama"];
  if (day <= 0 || day > 31 || month <= 0 || month > 12) {
    return alert("Invalid date, please enter a valid date");
  } else if (gender == Female) {
    return console.log(document.getElementById("answer").innerHTML = "Your Akan name is" + arrayFemale[d]);

  } else if (gender == Male) {
    return document.getElementById("answer").innerHTML = "Your Akan name is " + arrayMale[d];
  } else(console.log(day))

}

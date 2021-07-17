function akanNameGenerator(day, month, year, gender) {
day=document.querySelector('#day').value;
   month=document.querySelector('#month').value;
   gender=document.querySelector('#gender').value;
   year=document.querySelector('#year').value;
  cC = year.slice(0, 2);
  yY = year.slice(2, 4);
  cc = parseInt(cC);
  yy = parseInt(yY);
  mm = parseInt(month);
  dd = parseInt(day);

  d = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
  let arrayMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  let arrayFemale = ["Akosua", "Adwoa", "Abenna", "Akua", "Yaa", "Afua", "Ama"];
  if (dd <= 0 || dd > 31 || mm <= 0 || mm > 12) {
    return alert("Invalid date, please enter a valid date");
  } else if (gender == "Female") {
    return document.getElementById("answer").innerHTML = "Your Akan name is" + " " + arrayFemale[Math.round(d)];

  } else if (gender == "Male") {
    return document.getElementById("answer").innerHTML = "Your Akan name is " + " " + arrayMale[Math.round(d)];
  } else(console.log(day))

} 

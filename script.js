const url = "https://raw.githubusercontent.com/KelvinBNguyen/Data-files/main/Countries%20and%20Territories%20(1).csv";

const countryName = getColumn(url, 1);
const countryCode = getColumn(url, 2);
const countryReigon = getColumn(url, 4);
const countryPopulation = getColumn(url, 6);
const countryGDP = getColumn(url, 9);
const countryIMG = getColumn(url, 13);

//Displays to the user the country that matches the code inputted
//code {string} - a string that is the country code that identifies the country
//return {string} - a string that returns the country that cooreltates with the code
function getCode(code) {
  code = code.toUpperCase();
  for (var i in countryName) {
    if (code == countryCode[i]) {
      return (countryName[i]);
    }
  }
  return ("enter a valid country three digit code")
}


//Decides which of the two countries have a higher population
//countryOne {string} - a string that is the first country to compare population
//countryTwo {string} - a string that is the second country to compare population
//return{string} - a string that returns either countryOne or countryTwo based on which everone is higher
function getHigherPopulation(countryOne, countryTwo) {
  countryOne = capitalizeFirstLetter(countryOne);
  countryTwo = capitalizeFirstLetter(countryTwo);
  var countryOnePop;
  var countryTwoPop;
  for (var i in countryName) {
    if (countryOne == countryName[i]) {
      countryOnePop = Number(countryPopulation[i]);

    }
    if (countryTwo == countryName[i]) {
      countryTwoPop = Number(countryPopulation[i]);
    }
  }
  if (countryOnePop > countryTwoPop) {
    return (countryOne);
  } else if (countryTwoPop > countryOnePop) {
    return (countryTwo);
  } else if (countryTwoPop == countryOnePop) {
    return ("The countries have the same Population");
  } else {
    return ("enter valid countries");
  }
}

//Loops through the dataset and sees which country has the highest GDP per capita
//return {string} - returns the country with higher gdp per capita
function getHighestCapitaGDP() {
  var maxCountryGDP = 0;
  var maxCountryGDPName = "";
  for (var i in countryName) {
    if (Number(countryGDP[i]) > maxCountryGDP) {
      maxCountryGDP = Number(countryGDP[i]);
      maxCountryGDPName = countryName[i];
    }
  }
  return (maxCountryGDPName);
}

//Finds countries that match the reigon that is inputted 
//reigon {string} - a string that is the reigon of the country 
//return {list} - a list comprised of all the countries in the reigon
function getMatchingReigon(reigon) {
  reigon = capitalizeFirstLetter(reigon);
  var matchingReigons = [];
  for (var i in countryName) {
    if (countryReigon[i].includes(reigon)) {
      matchingReigons.push(countryName[i]);
    }
  }
  if (matchingReigons.length == 0) {
    return ("There are no matching reigons");
  }
  return (matchingReigons);
}


//Displays to the user the flag that matches the country inputted
//country {string} - a string that is the country to match with the flag 
//return {string} - a string that returns a link that is used to display the image of the flag
function getFlag(country) {
  country = capitalizeFirstLetter(country);
  document.getElementById("img").value = " ";
  for (var i in countryName) {
    if (country == countryName[i]) {
      document.getElementById("img").src = countryIMG[i];
      return (countryName[i]);
    }
  }
  console.log("Enter a valid Country")
}


//Takes a string from the user and makes the fisrst letter capitalized
//string {string} - any string that you want to change the first letter to uppercase
//return {string} - a string that returns is the same exact string except only the first letter is capitalized
function capitalizeFirstLetter(string) {
  string = string.toLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
}


















function getColumn(url, columnNumber) {
  var column = [];
  var table = [];
  var request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send(null);
  var csvData = new Array();
  var jsonObject = request.responseText.split(/\r?\n|\r/);
  for (var i = 0; i < jsonObject.length; i++) {
    csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
  }
  table = csvData;
  column = getCol(table, columnNumber);
  return column;
}

//returns the specified column from a 2D Array
function getCol(matrix, col) {
  var column = [];
  for (var i = 1; i < matrix.length - 1; i++) {
    column.push(matrix[i][col]);
  }
  return column;
}
    //takes 2 parameters first the url to the spreadsheet and the column number starting at 0

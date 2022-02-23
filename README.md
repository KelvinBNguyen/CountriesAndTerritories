# CountriesAndTerritories
afeafeafafe
#
#####Displays to the user the country that matches the code inputted
######code {string} - a string that is the country code that identifies the country
######return {string} - a string that returns the country that cooreltates with the code
**`function getCode(code)`**

#####Decides which of the two countries have a higher population
######countryOne {string} - a string that is the first country to compare population
######countryTwo {string} - a string that is the second country to compare population
######return{string} - a string that returns either countryOne or countryTwo based on which everone is higher.
**`function getHigherPopulation(countryOne, countryTwo)`**

######Loops through the dataset and sees which country has the highest GDP per capitantry
######return {string} - returns the country with higher gdp per capita
**`function getHighestCapitaGDP()`**

#####Finds countries that match the reigon that is inputted 
######reigon {string} - a string that is the reigon of the country 
######return {list} - a list comprised of all the countries in the reigon
**`getMatchingReigon(reigon)`**

#####Displays to the user the flag that matches the country inputted
######country {string} - a string that is the country to match with the flag 
######return {string} - a string that returns a link that is used to display the image of the flag
**`getFlag(country)`**

#####Takes a string from the user and makes the fisrst letter capitalized
######string {string} - any string that you want to change the first letter to uppercase
######return {string} - a string that returns is the same exact string except only the first letter is capitalized
**`capitalizeFirstLetter(string)`**


# CSVColumnToArray
The function getColumn() returns a single column from a csv fie as an array. The csv must be hosted online and accessed through a url.
#
##### Returns a column from a csv file at the given url as a list.
###### @param url {string} - the url to the raw csv contents
###### @param columnNumber {number} - the column you'd like as a list (the first column is 0)
###### @return column {list} - the list containing the specified column contents
**`function getColumn(url, columnNumber)`**
#

##### A helper function that returns the specified column from a 2D Array.
###### @param matrix {2D array} - the 2D array
###### @param col {number} - the desired column (the first column is 0)
###### @return column {lsit} - the desired column as a list
**`function getCol(matrix, col)`**

// Code your solution in this file
function findMatching (array, driver) {
        let foundDriver = [];
          for (const element of array) {
                  // match
              if (element.toLowerCase() === driver.toLowerCase()) {
                foundDriver.push(element);
              }

          }

          return foundDriver;
  }

function fuzzyMatch(array, driver) {
  let foundDriver = [];

    for (const element of array) {
      if (element.slice(0,2) === driver) {
          foundDriver.push(element);
      }
    }
    return foundDriver;
}


function matchName(array, driver){
  let foundDriver = [];

      for (const element of array) {

      if (element.name === driver) {
          foundDriver.push(element);
      }
      }
      return foundDriver;
}

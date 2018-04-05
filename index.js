// Code your solution here:
function driversWithRevenueOver(array,string){
 let newArray = []
  for (const driver in array){
    if (array[driver].revenue > string)
       newArray.push(array[driver])
  }
return newArray
}

function driverNamesWithRevenueOver(array, string ) {
 let newArray = []
  for (const driver in array){
    if (array[driver].revenue > string){
      newArray.push(array[driver].name)
    }

  }
return newArray
}

function exactMatch(array,argument){
  let newArray = []
  for (const driver in array){

    if (array[driver][Object.keys(argument)[0]] === Object.values(argument)[0]) {
      newArray.push(array[driver])

    }
  }
return newArray
}

function exactMatchToList(array, argument){
  let newArray = []
  for (const driver in array){

    if (array[driver][Object.keys(argument)[0]] === Object.values(argument)[0]) {
      newArray.push(array[driver]['name'])

    }
  }
return newArray
}

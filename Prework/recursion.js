/* function countdown(n){
    if (n < 1){
      return []
    }
    else {
      const countArray = countdown(n-1)
      countArray.unshift(n)
      return countArray
    }
  }
  // Only change code above this line
  
  console.log(countdown(5)); */

  function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
      return [startNum]; // this will be the first thing that gets returned to numbers, our known value
    } else {
      var numbers = rangeOfNumbers(startNum, endNum - 1); // will keep calling until it devolves into a known return value, then head back the other way
      numbers.push(endNum); // only gets ran when numbers was returned a known value
      return numbers; // this becomes the new known value for our else function
    }

  }


  var nums = rangeOfNumbers(7,9)
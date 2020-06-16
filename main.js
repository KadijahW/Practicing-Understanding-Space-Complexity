// For the following questions after arriving to a solution
// Ask yourself and answer in comments above your solution:
// What are other input cases that you should try your solution with?
// What is the time complexity?
// What is the space complexity?
// What is n for this particular question?
// Why is it O(n) or other time/space complexity? 
// What is the worst and best input case how does that relate to time/space complexity?
// Can it be done more efficient? Reduce the time or space complexity? What are the tradeoffs?

// Write a function that finds the unique character in a string
// Input: "ppiizaa", Output: "z"
//Input: "pppiizzaa", Output: "p"
// Input: "abcdeabcdoe", Output: "o"
// Time Complexity: ???
// Space complexity: ???
const findUniqueChar = (str) => {
  //create obj
  //loop through the str
  //create key for every letter
  let tracker = {};
  for (let i = 0; i < str.length; i++) {
    if (!tracker[str[i]]) {
      tracker[str[i]] = 1
    } else {
      tracker[str[i]] += 1
    }
  }

  //loop through obj
  for (let key in tracker) {
    let current = tracker[key]
    if (current % 2 === 1) {
      return key
    }
  }
}
//O(N) - time 
//constant - length of the object is relative to how many letters are in the string
console.log("Q1", findUniqueChar('abcdeabcdoe'))
console.log(findUniqueChar('pppiizzaa'))

// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
// Input: [1, 4, 1, 6, 4], Output: 6
// Time Complexity: o(n)
// Space complexity: o(n) 
const unpairedElement = (arr) => {
  let obj = {}

  for (let el of arr) {
    if (obj[el]) {
      obj[el]++
    } else {
      obj[el] = 1
    }
  }
  for (let int in obj) {
    if (obj[int] % 2 === 1) {
      // console.log(int)
      return int
    }
  }
}
console.log("Q2", unpairedElement([1, 4, 1, 6, 4]))

// Find the second smallest number in an array
// Input: [1, 2, 0, 6, 8], Output: 1
// Time Complexity: ???
// Space complexity: ???
const findSecSmallest = (arr) => {
  let smallest = arr[0]
  let secSmallest = arr[0]
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i]

    if (curr < smallest) {
      secSmallest = smallest
      smallest = curr
    }
  }
  return secSmallest

}
console.log("Q2", findSecSmallest([1, 2, 0, 6, 8]))
console.log(findSecSmallest([4, 3, 10, 2]))


// Find all even positive numbers in an array
// Input: [1, 2, 3, 6, 8], Output: [2, 6, 8]
// Time Complexity: ???
// Space complexity: ???
const findEven = (arr) => {
  // let even = arr.filter(num => num % 2 === 0)
  // return even

  let empArr = []
  for (let el of arr) {
    if (el % 2 === 0) {
      empArr.push(el)
    }
  }
  return empArr
}

console.log("Q4", findEven([1, 2, 3, 4, 8]))

// Write a function that returns all possible pairings of an array of numbers
// A number cannot be paired with itself
// All numbers are unique
// Input: [1, 2], Output: [[1, 2], [2, 1]]
// Input: [1, 2, 3], Output: [[1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2]]
const pairNumbers = (arr) => {
  //create emp array
  let pairs = []
  //nested loops
  for (let num1 of arr) {
    for (let num2 of arr) {
      if (num1 !== num2) {
        pairs.push([num1, num2])
      }
    }
  }
  return pairs
}
console.log("Q5",pairNumbers([1,2]))
console.log(pairNumbers([1,2,3]))


// The following function adds up all the numbers from 0 to n
// Time Complexity: ???
// Space complexity: ???
// How does its complexities compare to an iterative sum?
const recursiveSum = (n) => {
  if (n === 0) return n
  return n + recursiveSum(n - 1)
}

console.log("Q6",recursiveSum(25))




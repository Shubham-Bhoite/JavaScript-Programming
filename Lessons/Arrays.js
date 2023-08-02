let subjects = ["Math", "Science", "History", 43, "True", "No Subject"]  //arrays
console.log(subjects[0])                 //accessing elements of an array
console.log(subjects[1])
console.log(subjects[2])
console.log(subjects[3])
console.log(subjects[4])
console.log(subjects[5])
console.log(subjects[6]) // Will be undefined because index 6 does not exist
console.log("The length of subjects is", subjects.length)    //array length
subjects[6] = 55 // Adding a new value to the array
subjects[0] = "Hindi" // Changing the value of an array
console.log(subjects)
console.log(typeof subjects)    //type of array

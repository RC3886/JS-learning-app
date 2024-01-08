// && - a zaroven
// || - nebo

console.log("Pick an activity")


const activitiesMenu = [      // list of activities
   "Running",
   "Bike",
   "Roller blades",
   "Cross-country skying"
];



let chosenActivity = "Running" 

if (chosenActivity === "Running"){
    console.log("Running mode activated.")
}   else if(chosenActivity === "Bike"){
        console.log("Bike mode activated.")
}   else if(chosenActivity === "Roller blades"){
        console.log("Roller blades mode activated.")
}   else if(chosenActivity ==="Cross-country skying"){
        console.log("Cross-country skying mode activated.")
}   else{
    console.log("Invalid choice.")
}



// let doorCode = (num1 = 3, num2 = 6, num3 = 9) => {
//     console.log(num1, num2, num3)
// }

// doorCode()

 
let doorCode1 = (num1, num2, num3) => {             //function with num 1 2 3
    console.log(num1, num2, num3)                   //print the numbers entered
    if (num1===3 && num2===6 && num3===9){          //check the numbers
        console.log("You may enter.")               //grant access if correct
    }   
    else{console.log("Access declined.")}           //or deny access
}

doorCode1(3,6,9)




// let naDruhou = function(number){
// 	let result = number * number
// 	return result	}
// let value1 = naDruhou(5)
//     console.log(value1)

// let value2 = value1+100
//     console.log(value2)


// function displayActivities() {
//     const activitiesMenu = document.getElementById('activitiesMenu')


                                                     
//     activities.forEach(activity => {                        // Loop through the activities array and create list items
//       const listItem = document.createElement('li');
//       listItem.textContent = activity;
//       activitiesMenu.appendChild(listItem);
//     });
//   }
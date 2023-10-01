// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert("Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.");
let orderName = prompt("At what name would you like to set this order?");
// Adding this to prevent when clicking "cancel"
if (orderName == null || orderName == undefined || orderName == "") {
  orderName = "Mr. Nobody"
  alert(`
  Hi, ${orderName}, what would you like to order? 
  Pizza (1)
  Pasta (2)
  Salad (3)
  ----------------------
  Click 'OK' to continue`);
} else {
  alert(`
  Hi, ${orderName}, what would you like to order? 
  Pizza (1)
  Pasta (2)
  Salad (3)
  ----------------------
  Click 'OK' to continue`);
}

// Step 2 - Food choice
// Your code goes here
let orderType = prompt("Enter the number of the food type you like:");
let text;
let selectedType;

switch(orderType) {
  case "1":
    text = "Nice, so I will show you our Pizza options.";
    selectedType = ["Pizza", "Margherita", "Hawaian", "Salami", "10 min"];
    break;
  case "2":
    text = "Pasta, great! Today we have a special one!";
    selectedType = ["Pasta", "Carbonara", "Amatriciana", "Gricia", "15 min"];
    break;
  case "3":
    text = "Nice, we got plenty of healthy options.";
    selectedType = ["Salad", "Greek Salad", "Protein Salad", "Tuna Salad", "7 min"];
    break;
  default:
    // Adding it again, to prevent clicking "cancel" or not selecting an order, I know I could
    // terminate the JS code by using exit(), but in this way I will forcing the salad and go to the end.
    if (orderType == null || orderType == undefined || orderType == "" || orderType >= 4) {
      alert(`Since you didn't pick a valid option, we'll pick for you the fastest option, which is Salad.`)
      orderType = 3; 
      text = "Nice, we got plenty of healthy options.";
      selectedType = ["Salad", "Greek Salad", "Protein Salad", "Tuna Salad", "7 min"];
    }
  };
  alert(`${text} - Click 'OK' to continue.`);




// Step 3 - Subtype choice
// Your code goes here
let subOrderType = prompt(`
  Since you picked ${selectedType[0]}, today we offer: 
  ${selectedType[1]} (1)
  ${selectedType[2]} (2)
  ${selectedType[3]} (3)
  Which one would you like? - Enter the number below.`);

// Adding these conditionals again, to prevent the code to stop or broke if a bad value or "cancel" is being pressed.
if (subOrderType == null || subOrderType == undefined || subOrderType == "" || subOrderType >= 4) {
  alert(`You entered an invalid choice, so we'll go for the first option: ${selectedType[1]}`);
  subOrderType = 1;
};

// Step 4 - Age
// Your code goes here
let ageOrder = prompt(`You're gonna order ${selectedType[subOrderType]}. 
Now we only need your age in order to give you a normal portion or a baby one. 
Type it here below:`);

// Same conditional here, a lil bit coumbersome, maybe there's something easier that can be done. 
//Like what parameters can be accepted, or not etc.
if(ageOrder >= 18 || ageOrder == null || ageOrder == undefined || ageOrder == "") {
  alert(`You will get a normal portion size of ${selectedType[0]} ${selectedType[subOrderType]}. 
  Click OK to receive you order confirmation.`);
} else {
  alert(`You will get a baby portion size of ${selectedType[0]} ${selectedType[subOrderType]}. 
  Click OK to receive you order confirmation.`);
};

// Step 5 - Order confirmation
// Your code goes here
alert(`${orderName}, we got your order. 
You will get your ${selectedType[0]}: "${selectedType[subOrderType]}" in about ${selectedType[4]}!`);
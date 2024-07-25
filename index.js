// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta", "Bread Sticks"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara", "Peixe Pende Empanado com Batatas Fritas", "Beef Smash Burger"],
    Desserts: ["Tiramisu", "Cheesecake", "Belgian Waffles with Ice-Cream"]
};

const prices = {
    "Garlic Bread": 60,
    "Bruschetta": 50,
    "Bread Sticks": 30,
    "Margherita Pizza": 90,
    "Spaghetti Carbonara": 85,
    "Peixe Pende Empanado com Batatas Fritas": 110,
    "Beef Smash Burger": 120,
    "Tiramisu": 65,
    "Cheesecake": 70,
    "Belgian Waffles with Ice-Cream": 80,
}

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuEl = document.getElementById("menu");

    // Create div element to append each course to
    const courseDivEl = document.createElement("div");
    
    // Iterate over entries in menu object to do necessary logic with course and array item
    Object.entries(menu).forEach(([course, arr]) => {
        // Create new heading element and set text to name of respective course
        const menuHeadingEl = document.createElement("h3");
        menuHeadingEl.textContent = course;

        // Append course heading to course div
        courseDivEl.append(menuHeadingEl);

        // Create unordered list for storing food items as list items
        const foodUlEl = document.createElement("ul");

        // Iterate over items within food array, creating list item and appending list item to foodUlEl
        arr.forEach(food => {
            const foodLiEl = document.createElement("li");
            foodLiEl.addEventListener("click", () => addToOrder(food));
            foodLiEl.textContent = food;
            foodUlEl.append(foodLiEl);
        })

        // Append unordered list to course div
        courseDivEl.append(foodUlEl);
    });

    // Append the course div to the menu element
    menuEl.append(courseDivEl);            
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderEl = document.getElementById("order-items")
    const orderTotalEl = document.getElementById("order-total")

    // Create li element and set text context equal to the item name
    const orderLiEl = document.createElement("li")
    orderLiEl.textContent = itemName

    // Append the list item to the order items list
    orderEl.append(orderLiEl)

    // Calculate and update the total price

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);

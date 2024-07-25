// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta", "Bread Sticks"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara", "Peixe Pende Empanado com Batatas Fritas", "Beef Smash Burger"],
    Desserts: ["Tiramisu", "Cheesecake", "Belgian Waffles with Ice-Cream"]
};

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
            foodLiEl.addEventListener("click", () => addToOrder(food))
            foodLiEl.textContent = food;
            foodUlEl.append(foodLiEl);
        })

        // Append unordered list to course div
        courseDivEl.append(foodUlEl);
    });
    menuEl.append(courseDivEl)

    // Loop through each category and its items in the menu object

        // Create an element to represent the category

        // Set the text content of the category element to the category name

        // Append the category element to the menu container

        // Create an element to represent a list of items

        // Append a list of items element to the menu container

        // Loop through the items in the category and create list items

            // Create a list item element

            // Set the text content of the list item element to the item name

            // Attach a click event listener to the list item to add it to the order

            // Append the list item to the list of items

            
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    console.log(itemName)
    // Get the order items list and the order total element from the HTML

    // Create a list item for the order

    // Set the text content of the list item to the item name

    // Append the list item to the order items list

    // Calculate and update the total price

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    displayMenuItems(menu)
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);

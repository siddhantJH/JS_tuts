// //querySelector
// // Implementation: document.querySelector(selector) selects the first element that matches the specified CSS selector within the document.
// // Return Type: It returns either the first matching Element node or null if no matches are found.
// // Additional Details: This method is quite versatile as it accepts any valid CSS selector, allowing you to select elements based on their tag names, classes, IDs, attributes, etc.

// const parent = document.querySelector('.parent'); // Selects the first element with class 'parent'

// //querySelectorAll
// // Implementation: document.querySelectorAll(selector) selects all elements that match the specified CSS selector within the document and returns them as a static NodeList.
// // Return Type: It returns a NodeList containing all matching Element nodes or an empty NodeList if no matches are found.
// // Additional Details: The returned NodeList is static, meaning it won't automatically update if the DOM changes. It's useful for selecting multiple elements and iterating over them using methods like forEach.

// const dayOne = document.querySelector('.day'); // Selects the first element with class 'day'

// //getElementByClassName
// // Implementation: document.getElementsByClassName(className) returns a live HTMLCollection of elements that have the specified class name.
// // Return Type: It returns an HTMLCollection containing all matching Element nodes or an empty HTMLCollection if no matches are found.
// // Additional Details: Unlike querySelectorAll, this method only accepts a class name and doesn't support other CSS selectors. The HTMLCollection is live, meaning it updates automatically when the DOM changes.

// const elementsByClassName = document.getElementsByClassName('example'); // Selects elements with class 'example'

// //getElementById
// // Implementation: document.getElementById(id) returns the element that has the specified ID.
// // Return Type: It returns the matching Element node or null if no element with the specified ID is found.
// // Additional Details: IDs must be unique within the document. This method is the fastest way to select an element by its ID.

// const elementById = document.getElementById('example'); // Selects the element with id 'example'





//querySelector
//querySelectorAll
//getElementByClassName
//getElementById

// These are methods to select elements from the DOM (Document Object Model).

const parent = document.querySelector('.parent'); // Selects the first element with class 'parent'
for (let i = 0; i < parent.children.length; i++) {
    console.log(parent);
    console.log(parent.children);
    console.log(parent.children[i].innerHtml); // There's a typo here. It should be innerHTML (capital H).
}
// The loop above logs information about each child element of the parent.

// Note: the following line is outside the loop, and 'i' is not defined here.
// It will throw an error.
parent.children[i].style.color = "orange";

console.log(parent.firstElementChild); // Returns the first child element of parent

const dayOne = document.querySelector('.day'); // Selects the first element with class 'day'
console.log(dayOne);
console.log(dayOne.parentElement); // Returns the parent element of dayOne
console.log(dayOne.nextElementSibling); // Returns the next sibling element of dayOne

console.log("Nodes:", parent.childNodes); 
// It logs all the child nodes of parent, including text nodes, comments, etc..

// A detailed explanation of Node concept:

// In the DOM, every element, attribute, and piece of text in an HTML document is a node.
// Nodes form a tree-like structure where the document itself is at the top (root) and
// branches out to elements, which can have children (other elements or text nodes).

// Node Types:
// 1. Element Nodes: Represent HTML elements.
// 2. Text Nodes: Contain the actual text of the element.
// 3. Comment Nodes: Represent comments in the HTML.
// 4. Document Nodes: Represent the entire document.
// 5. Document Type Nodes: Represent the document type declaration.

// The NodeList returned by childNodes includes all types of nodes, not just elements.
// If you want to work only with element nodes, you typically use properties like children
// or methods like querySelectorAll to select elements directly without including text nodes.

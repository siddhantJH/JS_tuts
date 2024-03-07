//structure of dom
//Dom is document object model and all these is made from an object



// Console logging the window object gives us an object containing all information.
console.log(window);

// Console logging the document object gives us information about the HTML document structure.
console.log(window.document);

// Shortcut: Use console.log(document) to access the document object directly.
console.log(document);

// Using console.dir(document) provides additional hidden knowledge.
console.dir(document);

// Referencing the DOM tree: window -> document -> html -> head/body -> other elements.
// Head and body are children of the html element.
// Head has two children: title (which contains a text node) and meta.
// Body has children div and h1, and div has a child of p type. The p element contains a text node.
// For a visual representation, refer to the DOM tree in the provided image.
//every line break is considered as a text node 



// Accessing elements:
// To get all links in the document:
//using dot operator we can get a lot of things 
console.log(document.links);
// Note: document.links returns an HTML collection, not an array. 
// Therefore, array methods like map and forEach aren't directly applicable.

// To select a particular element by its ID:
// Example: document.getElementById('elementId');

// To modify the content of an element:
// Use .innerHTML to assign HTML content within quotes.
// Example: element.innerHTML = '<tag>Content</tag>';

// Additional methods and properties can be accessed using the '.' operator on the document object..
//refer the difference between innerHtsml and innerText
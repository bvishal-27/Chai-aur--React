function customRender(reactElement, container) {
    // Create a new DOM element using the type from the reactElement
    const domElement = document.createElement(reactElement.type);

    // Set the innerHTML to the children of the reactElement
    domElement.innerHTML = reactElement.children;

    // Loop through props and set attributes on the created DOM element
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    // Append the created element to the container
    container.appendChild(domElement);
}

// Define a reactElement object
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
};

// Get the container where the element will be rendered
const mainContainer = document.querySelector('#root');

// Use customRender to render the element
customRender(reactElement, mainContainer);

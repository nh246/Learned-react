// How react works under the hood 

function customRender(reactElement, container) {

    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childern
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}



// it is a structure of an element

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.youtube.com',
        target: '_blank'
    },
    childern:'Click me to visit youtube'
}


const mainContainer = document.querySelector('#root');
// custom element passing in the root div 
customRender(reactElement, mainContainer)
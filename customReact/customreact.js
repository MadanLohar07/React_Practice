const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Click me to visit Google'
}


const demo = document.getElementById("root").render(
reactElement, demo
)
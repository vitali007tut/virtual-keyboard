import { createLiter } from './addComponent.js'

// * add style in html
const style = window.document.createElement('link')
style.href = "./css/style.css"
style.rel = "stylesheet"
window.document.getElementsByTagName('head')[0].appendChild(style)

const body = document.querySelector('body')

 // * add container
const container = document.createElement('div')
container.classList.add('container')
document.body.appendChild(container)

// * add title
const title = document.createElement('p')
title.classList.add('title')
title.innerHTML = 'Виртуальная клавиатура'
container.appendChild(title)

// * add textArea
const textArea = document.createElement('textarea')
textArea.classList.add('textarea')
container.appendChild(textArea)


// test
const component = createLiter('R') // example
body.appendChild(component)
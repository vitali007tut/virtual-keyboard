import { createLiter } from './addComponent.js'

// * add style in html
const style = window.document.createElement('link')
style.href = "style.css"
style.rel = "stylesheet"
window.document.getElementsByTagName('head')[0].appendChild(style)

const body = document.querySelector('body')

const textArea = document.createElement('textarea')
textArea.style = 'display: block;width: 80vw;height: 20vh;margin: 0px auto;'
document.body.append(textArea)

const component = createLiter('R') // example
body.appendChild(component)
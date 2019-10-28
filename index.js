// Write your code here!
console.log('connected')

const main = document.getElementById('main')

main.remove()

const newHeader = document.createElement('h1')

newHeader.id = 'victory'

newHeader.innerHTML = "Jenny is the champion"
// Best practice here would be to use innerText rather than innerHTML

document.body.appendChild(newHeader)
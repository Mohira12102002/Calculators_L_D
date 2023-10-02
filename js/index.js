document.addEventListener('DOMContentLoaded', () => {

  const operationElement = document.querySelector('#operation')
  const totalElement = document.querySelector('#total')
  const keys = document.querySelectorAll('.key')

  const writeTotal = val => totalElement.innerText = val
  const writeText = text => !text ? operationElement.innerText = '' : operationElement.innerText += text
  const onDelete = () => operationElement.innerText = operationElement.innerText.slice(0, -1)
  const onClear = () => totalElement.innerText = '0'
  const onEqual = () => {
    const val = eval(operationElement.innerText)
    writeTotal(val)
    operationElement.innerText = val
  }

  const action = keyElement => {
    const { id, innerText } = keyElement
    switch (id) {
      case 'clear':
        writeText('')
        onClear()
        break;
      case 'delete':
        onDelete()
        break;
      case 'equal':
        onEqual()
        break;
      default:
        writeText(innerText)
        break;
    }
  }

  const keysListener = () => {
    keys.forEach(el => {
      el.addEventListener('click', () => action(el))
    })
  }

  const init = () => {
    keysListener()
  }

  init()
})


document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#themeInput')
  const switchTheme = ({ target: { checked } }) =>
    document.documentElement.setAttribute('data-theme', checked ? 'dark' : 'light')

  input.addEventListener('change', switchTheme)
})

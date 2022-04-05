function putMessage(text) {
    const logBox = document.querySelector('.logbox')
    const messageBox = logBox.children[0]

    const msgContainer = document.createElement('div')
    msgContainer.setAttribute('class', 'logitem')

    const msg = document.createElement('p')

    msg.setAttribute('class', 'statuslog')
    msg.innerText = text

    msgContainer.appendChild(msg)
    messageBox.appendChild(msgContainer)

    return msgContainer;
}

(() => {
    
})()

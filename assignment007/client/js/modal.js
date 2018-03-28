const initModal = () => {
    document.querySelectorAll('.close, .button-action, .button-secondary').forEach(elem => {
        elem.onclick = () => {
            document.querySelector('.modal').classList.toggle('show')
        }
    })
}

initModal()

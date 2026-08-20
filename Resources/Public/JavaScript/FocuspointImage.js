document.querySelectorAll('.focuspoint__shape[data-description-id]').forEach((shape) => {
    const description = document.getElementById(shape.dataset.descriptionId)

    if (!description) {
        return
    }

    const show = () => {
        shape.classList.add('is-active')
        shape.setAttribute('aria-expanded', 'true')
        description.classList.add('is-active')
        description.setAttribute('aria-hidden', 'false')
    }

    const hide = () => {
        shape.classList.remove('is-active')
        shape.setAttribute('aria-expanded', 'false')
        description.classList.remove('is-active')
        description.setAttribute('aria-hidden', 'true')
    }

    shape.addEventListener('mouseenter', show)
    shape.addEventListener('mouseleave', () => {
        if (document.activeElement !== shape) {
            hide()
        }
    })
    shape.addEventListener('focus', show)
    shape.addEventListener('blur', hide)
    shape.addEventListener('click', () => {
        show()
        shape.focus()
    })
    shape.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') {
            return
        }

        event.preventDefault()
        show()
    })
})

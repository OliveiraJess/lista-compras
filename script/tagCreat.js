export {TagCreat}

const TagCreat = () => {
    const element = {
        alternatives : [],

        addAlternative: (alternative) => {
            const ul = element.html.querySelector('ul')
            const li = document.createElement('li')
            
            
            if(!element.alternatives.includes(alternative)) {
                element.alternatives.push(alternative)
            }
            
            const nodeView = document.querySelectorAll('li')
            const compare = []

            nodeView.forEach(item => compare.push(item.textContent))
            for(let index = 0; index < element.alternatives.length; index++) {
                if(!element.alternatives.includes(compare[index])) {
                    li.textContent = element.alternatives[index]
                    ul.appendChild(li)

                }

            }

            li.addEventListener('click',() => {
                textArea.value = li.textContent
            })
        

        }

    }

    const area = document.querySelector('#create_tag')

    const click = document.createElement('div')
    click.classList.add('click')

    const placeholder = document.createElement('p')
    placeholder.setAttribute('activated',false)
    placeholder.textContent = 'tag'

    const button = document.createElement('button')
    button.classList.add('filter')

    const textArea = document.createElement('input')
    textArea.classList.add('text')

    const arrow = document.createElement('img')
    arrow.setAttribute('activated',false)
    arrow.setAttribute('alt','arrow')
    arrow.setAttribute('src','style/image/arrow_down.svg')

    const options = document.createElement('div')
    options.setAttribute('options','close')

    const ul = document.createElement('ul')

    area.appendChild(click)
    area.appendChild(placeholder)
    area.appendChild(button)
    button.appendChild(textArea)
    button.appendChild(arrow)
    area.appendChild(options)
    options.appendChild(ul)


    click.addEventListener('click', () => {
        if(arrow.getAttribute('activated') == 'false') {
            arrow.setAttribute('activated','true')
            options.setAttribute('options', 'open')
            textArea.focus()
            placeholder.setAttribute('activated','true')


        }
        else {
            arrow.setAttribute('activated','false')
            options.setAttribute('options', 'close')

        }
        
    })    
    
    
    element.html = area

    return element
}

export {Item}

const Item = (vTag,vItem) => {
    
    const element = {
        checked : false,
        vTag,
        vItem,
        id : '',
        
        setId : id => {
            item.setAttribute('id',id)
            element.id = id
        },

    }

    const item = document.createElement('div')
    const container = document.createElement('div')
    const checked = document.createElement('input')
    const grab = document.createElement('img')
    const textarea = document.createElement('div')
    const valueTag = document.createElement('input')
    const valueItem = document.createElement('input')
    const pencil = document.createElement('button')
    const trash = document.createElement('button')

    item.classList.add('item')
    item.setAttribute('draggable', true)

    container.classList.add('container')
    grab.setAttribute('src','style/image/grab.svg')
    textarea.classList.add('text')
    
    checked.setAttribute('type','checkbox')
    checked.setAttribute('id','checked')
    checked.classList.add('field')

    valueTag.setAttribute('type','text')
    valueTag.setAttribute('disabled',true)
    valueTag.setAttribute('value', element.vTag)
    valueTag.setAttribute('id','tag')
    valueTag.classList.add('field')
    
    valueItem.setAttribute('disabled',true)
    valueItem.setAttribute('type','text')
    valueItem.setAttribute('value', element.vItem)
    valueItem.setAttribute('id','order')
    valueItem.classList.add('field')
    
    pencil.classList.add('btn')
    pencil.setAttribute('activated',false)
    pencil.setAttribute('id','pencil')
    
    trash.classList.add('btn')
    trash.setAttribute('id','trash')

    item.appendChild(container)
    container.appendChild(grab)
    container.appendChild(checked)
    container.appendChild(textarea)
    textarea.appendChild(valueTag)
    textarea.appendChild(valueItem)
    container.appendChild(pencil)
    container.appendChild(trash)

    item.addEventListener('dragstart', event => {
        item.setAttribute('drag',true)
        event.dataTransfer.setData('itemId',event.target.id)
        
    })

    item.addEventListener('dragend', () => {
        item.removeAttribute('drag')
        
    })
  
    checked.addEventListener('click', () => {
        element.checked == false ? element.checked = true : element.checked = false 

    })

    trash.addEventListener('click', () => {
        item.setAttribute('excluding',true)

    })

    pencil.addEventListener('click', () => {        
        pencil.getAttribute('activated') == 'true' ? pencil.setAttribute('activated',false) : pencil.setAttribute('activated',true) 
        if(pencil.getAttribute('activated') == 'true') {
            valueTag.removeAttribute('disabled')
            valueItem.removeAttribute('disabled')
        }
        else {
            valueTag.setAttribute('disabled',true)
            valueItem.setAttribute('disabled',true)
        }

    })

    textarea.querySelectorAll('input').forEach(input => {
        input.addEventListener('keyup', () => {
            element.vTag = valueTag.value
            element.vItem = valueItem.value
        })

    })

    
    element.html = item

    return element

}


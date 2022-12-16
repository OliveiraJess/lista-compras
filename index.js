// create Item 
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
        console.log(element)
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








const Main = (itens) => {
   
    const main = document.querySelector('main')

    const element = {
        itens,

        removeItem : () => {
            const containers = element.html.querySelectorAll('.item_container')
            
            containers.forEach(container => {
                const itemExcluding = container.querySelector('div[excluding]')
                if(itemExcluding != null) {
                    container.setAttribute('excluding',true)
                    setTimeout(() => element.html.removeChild(container),500) 
                }

            })

            setTimeout(() => {
                const itens =  document.querySelectorAll('.item')
                const newItens = []

                for(let index1 = 0; index1 < itens.length; index1++) {
                    for(let index2 = 0; index2 < element.itens.length; index2++) {
                        if(itens[index1].id == element.itens[index2].id) {
                            newItens.push(element.itens[index2])
                        }
                    }
                }

                element.itens = newItens

            },500)

        }

    }


    for(let index in element.itens) {
        const item_container = document.createElement('div')
        item_container.classList.add('item_container')
        

        element.itens[index].setId(`item${Number(index)+1}`)

        item_container.appendChild(element.itens[index].html)
        main.appendChild(item_container)

    }

    const containers = document.querySelectorAll('.item_container')


    containers.forEach(container => {
        container.addEventListener('dragover', event => {
            event.preventDefault()

        })

        container.addEventListener('drop', event => {
            const id = event.dataTransfer.getData('itemId')
            const item = document.querySelector(`#${id}`)

            container.appendChild(item)

            const itensContainer = container.querySelectorAll('.item')

            itensContainer.forEach(newItem => {                
                if(newItem != item) {
                    containers.forEach(container => {
                        const containerNull = container.querySelector('.item') 
                        if(containerNull == null) {
                            container.appendChild(newItem)
                        }

                    })

                }
                
            })

            const itens = document.querySelectorAll('.item')



            

            
            const position = []
            const newArray = []

            for(let index = 0; index < itens.length; index++) {

                if(itens[index].id != element.itens[index].id) {
                    
                    position.push(index)
                    newArray.push(element.itens[index])

                }

            }

            position.reverse()

            for(let index = 0; index < itens.length; index++) {
                element.itens[position[index]] = newArray[index]
                
            }

        })

    })

    const trashs = document.querySelectorAll('#trash')
    trashs.forEach(trash => {
        trash.addEventListener('click', () => {
            element.removeItem()
        })

    })

    element.html = main

    return element

}


const main = Main([Item('Vegetal','Cenoura'),Item('Vegetal','Abobrinha'),Item('Carne','Picanha'),Item('Bebida','Coca')])

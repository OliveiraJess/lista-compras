export {Main}
const Main = () => {
   
    const main = document.querySelector('main')

    const element = {
        itens : [],

        addItem: (item) => {
            element.itens.push(item)
            element.itens.forEach((item, index) => item.setId(`item${Number(index)+1}`))
            
            const itemContainer = document.createElement('div')
            itemContainer.classList.add('item_container')
            itemContainer.appendChild(item.html)
            
            itemContainer.addEventListener('dragover', event => {
                event.preventDefault()
                
            })
            
            itemContainer.addEventListener('drop', event => {
                const id = event.dataTransfer.getData('itemId')
                const item = document.querySelector(`#${id}`)
                itemContainer.appendChild(item)

                const itensContainer = itemContainer.querySelectorAll('.item')
                const allContainers = element.html.querySelectorAll('.item_container')

                itensContainer.forEach(newItem => {                
                    if(newItem != item) {
                        allContainers.forEach(container => {
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
            
            
            const trash = item.html.querySelector('#trash')
            trash.addEventListener('click', () => {
                element.removeItem()
                
            })
            
            main.appendChild(itemContainer)

        },

        removeItem : () => {

            const containers = document.querySelectorAll('.item_container')

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

    element.html = main

    return element

}
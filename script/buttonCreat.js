export {ButtonCreat}
import {Item} from '/script/item.js'

const ButtonCreat = (Main,Tag) => {
    const button = document.querySelector('button.create')
    
    button.addEventListener('click', () => {
        const tag = document.querySelector('#create_tag input.text')
        const item = document.querySelector('#create_item input')
        
        const element = Item(tag.value,item.value)

        Main.addItem(element)
        Tag.addAlternative(tag.value)
        
        item.value = ''
        item.focus()
    })

}
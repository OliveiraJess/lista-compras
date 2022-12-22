import {Main} from '/script/main.js'
import {TagCreat} from '/script/tagCreat.js'
import {ButtonCreat} from '/script/buttonCreat.js'

const main = Main()
const tagCreat = TagCreat()

const create = ButtonCreat(main,tagCreat)


const creatItem = document.querySelector('#create_item')
const placeholder = creatItem.querySelector('p')

creatItem.addEventListener('click', () => {
    placeholder.setAttribute('activated',true)
    
})



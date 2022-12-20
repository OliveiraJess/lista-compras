import {Main} from '/script/main.js'
import {Item} from '/script/item.js'
import {TagCreat} from '/script/tagCreat.js'

const main = Main()
const tagCreat = TagCreat()


tagCreat.addAlternative('aaaa')
tagCreat.addAlternative('bbb')
tagCreat.addAlternative('ccc')
tagCreat.addAlternative('ddd')
tagCreat.addAlternative('ccc')


main.addItem(Item('Vegetal','Cenoura'))
main.addItem(Item('Vegetal','Abobrinha'))
main.addItem(Item('Carne','Picanha'))
main.addItem(Item('Bebida','Coca'))

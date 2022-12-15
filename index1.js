// create Item
const Item = (tag,item,checked = false) => {
    
    const item = document.createElement('div')
    item.classList.add('item')










    const element = {
        item,
        tag,
        checked,
        html: 
            `<div class='item'>
                <div class='container'>
                <img src='style/image/grab.svg' alt='grab'>
                <input type='checkbox' class='field' id='checked' value='${checked}'>
                <div class='text'>
                    <input type='text' value='${tag}' class='field' id='tag' disabled>
                    <input type='text' value='${item}' class='field' id='order' disabled>
                </div>
                <button class='btn' id='pencil'></button>
                <button class='btn' id='trash'></button>
                </div>
            </div>`

    }

    

    return item

}



// create DropDown
const drop = (placeholder,list = [],type = 1) => {

    const element = {
        placeholder,
        options: () => {
            options = []
            list.forEach(item => options.push(`<li>${item}</li>`))
            options2 = [... new Set(options)]
            console.log(options)
            console.log(options2)
            return options2.toString().replace(/,/g, '')
        }

    }

    if(type == 1) {
        const navegation = document.querySelector('#navigation #filters')
    
        navegation.innerHTML += `<div class='drop_down' id='${element.placeholder}'>
                                    <div class='click'></div>
                                    <p activated='false'>${element.placeholder}</p>
                                    <button class='filter'><img activated='false' src='style/image/arrow_down.svg' alt='arrow'></button>
    
                                    <div options='close'>
                                        <ul>
                                        ${element.options(list)}
                                        </ul>
                                    </div>
                                </div>` 
    }
    else {
        const navegation = document.querySelector('footer #create_tag')
        
        navegation.innerHTML += `<div class='click'></div>
                                    <p activated='false'>${element.placeholder}</p>
                                    <button class='filter'><input type="text" value=""><img activated='false' src='style/image/arrow_down.svg' alt='arrow'></button>

                                    <div options='close'>
                                        <ul>
                                        ${element.options(list)}
                                        </ul>
                                    </div>` 
        
    }
    
    return element

}




const HTMLmain = document.querySelector('main .container')

let main = []
let a = drop('tag',main)

let b = drop('tag',main,2)




// HTML CONTROL

// button create item
const creat = document.querySelector('.create')


creat.addEventListener('click', () => {
    const tagHTML = document.querySelector('.filter input') 
    const itemHTML = document.querySelector('#create_item input') 
    
    let myItem = item(tagHTML.value,itemHTML.value)
    
    main.push(myItem)
    HTMLmain.innerHTML += myItem.html

})






// input create item
const creatItem = document.querySelector('#create_item')
creatItem.addEventListener('click', () => {
    const areaText = creatItem.querySelector('input')
    const placeholder = creatItem.querySelector('p')
    placeholder.setAttribute('activated','true')
    areaText.focus()

})






// filters 
const drops = []
document.querySelectorAll('.drop_down').forEach(drop => drops.push(drop))
document.querySelectorAll('.drop_down2').forEach(drop => drops.push(drop))

drops.forEach(drop => {
    
    const areasClick = drop.querySelectorAll('.click')
    let arrown = drop.querySelector('img[activated]')
    const options = drop.querySelector('div[options]')
    const button = drop.querySelector('.filter')
    const placeholder = drop.querySelector('p[activated]')
    const subOptions = options.querySelectorAll('li')
    const areaButton = drop.querySelector('button input')

    areasClick.forEach(areaClick => {
        areaClick.addEventListener('click',() => {

            if(arrown.getAttribute('activated') == 'false') {
                arrown.setAttribute('activated','true')
                options.setAttribute('options', 'open')

            }
            else {
                arrown.setAttribute('activated','false')
                options.setAttribute('options', 'close')

            }
            
            if(drop.getAttribute('class') == 'drop_down2') {
                areaButton.focus()
                placeholder.setAttribute('activated','true')

            }

        })
        

        subOptions.forEach(option => {
            option.addEventListener('click',() => {
                placeholder.setAttribute('activated','true')
                if(drop.getAttribute('class') != 'drop_down2') {
                    button.innerHTML = `${option.textContent}<img activated='true' src='style/image/arrow_down.svg' alt='arrow'>`
                } 
                else {
                    areaButton.value = `${option.textContent}`
                }

                arrown = drop.querySelector('img[activated]')
            })

        })



    })

})
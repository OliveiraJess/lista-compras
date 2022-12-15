// create Item
const item = (tag,item,checked=false) => {
    const main = document.querySelector('main .container')
    
    const element = {
        item,
        tag,
        checked

    }

    main.innerHTML += `<div class='item'>
                            <div class='container'>
                            <img src='style/image/grab.svg' alt='grab'>
                            <input type='checkbox' class='field' id='checked' value='${element.checked}'>
                            <div class='text'>
                                <input type='text' value='${element.tag}' class='field' id='tag' disabled>
                                <input type='text' value='${element.item}' class='field' id='order' disabled>
                            </div>
                            <button class='btn' id='pencil'></button>
                            <button class='btn' id='trash'></button>
                            </div>
                        </div>`


    return element

}
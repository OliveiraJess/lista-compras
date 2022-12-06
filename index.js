// DROPS
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




// CREATE ITME
const creatItem = document.querySelector('#create_item')
creatItem.addEventListener('click', () => {
    const placeholder = creatItem.querySelector('p')
    placeholder.setAttribute('activated','true')

})
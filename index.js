const drops = document.querySelectorAll('.drop_down')
drops.forEach(drop => {
    const areasClick = drop.querySelectorAll('.click')
    let arrown = drop.querySelector('img[activated="false"]')
    const options = drop.querySelector('div[options="close"]')
    const button = drop.querySelector('button[filter]')
    const placeholder = drop.querySelector('p[activated="false"]')
    const subOptions = options.querySelectorAll('li')

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

        })
        
        subOptions.forEach(option => {
            option.addEventListener('click',() => {
                placeholder.setAttribute('activated','true')
                button.innerHTML = `${option.textContent}<img activated='true' src='style/image/arrow_down.svg' alt='arrow'>`

                arrown = drop.querySelector('img[activated="true"]')
            })

        })

    })

})







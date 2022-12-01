const dropDown = () => {

    const fDrops = document.createElement('div').classList.add('drop_down')
    const areasClick = document.createElement('div').classList.add('click')
    const placeholder = document.createElement('p')
    placeholder[activated='false']
    const button = document.createElement('div').classList.add('filter')
    let arrown = document.createElement('img')[activated='false'].src='style/image/arrow_down.svg'
    button.appendChild(arrown)
    const options = document.createElement('div').classList.add('filter')
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    options.appendChild(ul)
    ul.appendChild(li)

    const drops = document.querySelectorAll('.drop_down')
    drops.forEach(drop => {
        const areasClick = drop.querySelectorAll('.click')
        let arrown = drop.querySelector('img[activated]')
        const options = drop.querySelector('div[options]')
        const button = drop.querySelector('.filter')
        const placeholder = drop.querySelector('p[activated]')
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
    
                    arrown = drop.querySelector('img[activated]')
                })
    
            })
    
        })
    
    })

}
const filters = document.querySelector('.filters')
dropDown()


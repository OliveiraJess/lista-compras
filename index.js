// CREATE ITEM
const creatItem = document.querySelector('#create_item')
creatItem.addEventListener('click', () => {
    const placeholder = creatItem.querySelector('p')
    placeholder.setAttribute('activated', 'true')

})






// CREATE ITEM
const item = (tag, item, checked = false) => {
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



// Drop
const drop = (placeholder, lista = []) => {
    const navegation = document.querySelector('#navigation #filters')
    const element = {
        placeholder,
        listar: () => {
            const tagLista = []
            for (tag in lista) {
                tagLista.push(`<li>${lista[tag]}</li>`)
            }

            return tagLista.toString().replace(/,/g, '')

        }

    }

    navegation.innerHTML += `<div class='drop_down' id='situation'>
                                <div class='click'></div>
                                <p activated='false'>${element.placeholder}</p>
                                <button class='filter'><img activated='false' src='style/image/arrow_down.svg' alt='arrow'></button>

                                <div options='close'>
                                    <ul>
                                    ${element.listar(lista)}
                                    </ul>
                                </div>
                            </div>`



}

// const a = item('vegetais', 'chuchu')

// const b = item('laticinios', 'leite')

// const c = item('bbbbbbbbbbbb', 'requeijao')

// drop('tag', [a.tag, b.tag, c.tag, 'ss', 'aaaa', 'joaaa'])


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
        areaClick.addEventListener('click', () => {

            if (arrown.getAttribute('activated') == 'false') {
                arrown.setAttribute('activated', 'true')
                options.setAttribute('options', 'open')

            } else {
                arrown.setAttribute('activated', 'false')
                options.setAttribute('options', 'close')

            }

            if (drop.getAttribute('class') == 'drop_down2') {
                areaButton.focus()
                placeholder.setAttribute('activated', 'true')

            }

        })


        subOptions.forEach(option => {
            option.addEventListener('click', () => {
                placeholder.setAttribute('activated', 'true')
                if (drop.getAttribute('class') != 'drop_down2') {
                    button.innerHTML = `${option.textContent}<img activated='true' src='style/image/arrow_down.svg' alt='arrow'>`
                } else {
                    areaButton.value = `${option.textContent}`
                }

                arrown = drop.querySelector('img[activated]')
            })

        })



    })

})


////////////// jessica


const getBank = () => JSON.parse(localStorage.getItem("cardItens")) ?? [];


const setBank = () => localStorage.setItem("cardItens", JSON.stringify(bank))

//banco
const bank = getBank();

//banco de dados statico para teste
// let bank = [{
//         "label": "carnes",
//         "item": "frango",
//         "checked": "true"
//     },
//     {
//         "label": "doces",
//         "item": "chocolate",
//         "checked": ""
//     },
//     {
//         "label": "frutas",
//         "item": "banana",
//         "checked": ""
//     }
// ];


//criar lista
const createList = (label, element, checked, index) => {
    const list = document.createElement("div");
    list.classList.add('item');
    list.innerHTML = `
    <div class='container'>
    <img src='style/image/grab.svg'>
    <input type='checkbox' ${checked} data-index=${index} class='field' id='checked'>
    <div class='text'>
      <input type='text' value=${label} class='field' id='tag' disabled>
      <input type='text' value=${element} class='field' id='order' disabled>
    </div>
    <button class='btn' id='pencil' data-index=${index}></button>
    <button class='btn' id='trash' data-index=${index}></button>
  </div>
    `
    document.getElementById('cardItens').appendChild(list);
}


// criar etiqueta
const createLabel = (label, index) => {
    const optionLabel = document.createElement("li");
    optionLabel.classList.add('option');
    optionLabel.innerHTML = `
    ${label}
    `
    document.getElementById('optionsLabel').appendChild(optionLabel);
}


//limpar etiquetas para não aparecerem repetindas nas opções
const clearLabel = () => {
    const clear = document.getElementById('optionsLabel');

    while (clear.firstChild) {
        clear.removeChild(clear.lastChild)
    }
}



//limpar tarefas para não aparecerem repetindas na tela
const clearList = () => {
    const clear = document.getElementById('cardItens');

    while (clear.firstChild) {
        clear.removeChild(clear.lastChild)
    }
}

//atualizar tela
const updateListScreen = () => {
    clearList();
    clearLabel();
    bank.forEach((item, index) => createList(item.label, item.element, item.checked, index));
    bank.forEach((label) => createLabel(label.label));

}

const label = document.getElementById("criarTag");
const element = document.getElementById("criarItem");

// enviar etiqueta e elemento para a lista ao clicar no botão +
const clickAddList = () => {

    if (label.value === null || label.value === "" && element.value === null || element.value === "") {

        console.log("Campos em branco")
        alert("Você precisa preencher os campos abaixo para continuar.")

    } else {

        console.log("Clicado")

        bank.push({
            "label": label.value,
            "element": element.value,
            "checked": ""
        });

        setBank(bank);
        updateListScreen();
    }
}

document.getElementById("create").addEventListener('click', clickAddList);

updateListScreen();

//para corrigir:
//apagar valor digitado apos ser inserido
//ERRO - conferir depois pq a tag mesmo estando em branco ou nula é enviada.
//label repetida sendo add
//clicar na etiqueta

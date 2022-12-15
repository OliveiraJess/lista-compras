// create DropDown
const drop = (placeholder,list = []) => {
    const navegation = document.querySelector('#navigation #filters')
    const element = {
        placeholder,
        options: () => {
            options = []
            list.forEach(item => options.push(`<li>${item}</li>`))
            return options.toString().replace(/,/g, '')
        }
        
    }

    navegation.innerHTML += `<div class='drop_down' id='${element.placeholder}'>
                                <div class='click'></div>
                                <p activated='false'>${element.placeholder}</p>
                                <button class='filter'><img activated='false' src='style/image/arrow_down.svg' alt='arrow'></button>

                                <div options='close'>
                                    <ul>
                                    ${element.options()}
                                    </ul>
                                </div>
                            </div>` 
    
}
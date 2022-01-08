const valute_som = document.querySelector('#som')
const valute_usd = document.querySelector('#usd')


function convertor (elem,target,isTrue) {
    elem.addEventListener('input',() => {
    const request = new XMLHttpRequest()
    request.open('GET','data.json')
    request.setRequestHeader('Content-type','application/json')
    request.send()

    request.addEventListener('load', () => {
        const response = JSON.parse(request.response)
        if (isTrue) {
            target.value = (+elem.value/response.usd).toFixed(2)
        }else {
            target.value = (+elem.value*response.usd).toFixed(2)
        }
        if (elem.value === ''){
            target.value = ''
        }

        elem.value === '' ? target.value = '' : null
    })

})

}

convertor(valute_som,valute_usd,12)
convertor(valute_usd,valute_som)
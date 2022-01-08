// const title1 = document.querySelector('.block_title_1')


const request = new XMLHttpRequest()
request.open('GET','https://jsonplaceholder.typicode.com/posts')
request.setRequestHeader('Content-type','application/js')
request.send()


request.addEventListener('load',() => {
    const data = JSON.parse(request.response)
    console.log(data)
    document.querySelector('.block_title_1').innerHTML = data[0].title
    document.querySelector('.block_title_2').innerHTML = data[1].title
    document.querySelector('.block_title_3').innerHTML = data[4].title
    document.querySelector('.body_1').innerHTML = data[0].body
    document.querySelector('.body_2').innerHTML = data[3].body
    document.querySelector('.body_3').innerHTML = data[5].body
})

const workers = {
    name: 'Syimyk' ,
    salary: 8000,
    age: 18
}


const data = JSON.stringify(workers)
// console.log(data)

const btn = document.querySelector('.button')


btn.addEventListener('click', () => {
    console.log(123)
} )
console.log('after')
const form = document.querySelector('.form-test-drive')
//https://jsonplaceholder.typicode.com/posts

form.addEventListener('submit', (event) => {
    event.preventDefault()

    let data = {}
    for (let { name, value } of form) {
        if (name) {
            data[name] = value
        } if (value === undefined || value === '') {
            alert("Заполните поля формы")
            return
        }
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.status === 200 || response.status === 201) {
                return response.json()
            } else {
                throw new Error(response.status)
            }
        })
        .then(data => {
            alert("Данные ушли успешно!");
            form.reset()
        })
        .catch(error => {
            alert("Произошла ошибка, статус" + error.message)
        })
})

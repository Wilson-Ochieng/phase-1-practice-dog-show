
const baseUrl = 'http://localhost:3000/dogs'
const tableBody = document.getElementById('table-body')

const fetchPups = async () => {
    let req = await fetch(baseUrl)
    let res = await req.json()
    console.log(res)
    return res
}

const nameInput = document.getElementById('dog-name-input')
const breedInput = document.getElementById('dog-breed-input')
const sexInput = document.getElementById('dog-sex-input')

const pupInfo = async () => {
    let pupper = await fetchPups()
    pupper.forEach((pup) => {
        let row = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let editBtn = document.createElement('button')

        console.log(pup.name)

        td1.textContent = pup.name
        td2.textContent = pup.breed
        td3.textContent = pup.sex
        editBtn.textContent = 'Edit'
        td4.append(editBtn)
        row.append(td1, td2, td3, td4)
        tableBody.append(row)

        editBtn.addEventListener('click', (e) => {
            e.preventDefault()
            nameInput.value = pup.name
            breedInput.value = pup.breed
            sexInput.value = pup.sex
            const form = document.getElementById('dog-form')
            form.addEventListener('submit', (e) => {
                e.preventDefault()
                console.log(e.target)
                td1.textContent = nameInput.value
                td2.textContent = breedInput.value
                td3.textContent = sexInput.value
            })
        })


    })

}

pupInfo()
const numberOfkey = document.querySelector('.circle-key span')
const bodyEl = document.querySelector('body')
const typeOfInfor = document.querySelectorAll('.type-of-infor p')
const noneEL = document.querySelector('.presskey')
const flexEL = document.querySelector('.infor-key')


bodyEl.addEventListener('keydown', (e) => {
    noneEL.style.display = 'none'
    flexEL.style.display = 'flex'
    const numberKey = e.keyCode
    numberOfkey.textContent = numberKey
    console.log(e);
    getInformation(e)
    if (numberKey == 32) {
        typeOfInfor[0].textContent = 'Space'
    }
})


function getInformation(e) {
    const nameKey = e.key
    const codeKey = e.code
    const locationKey = e.location
    for (let i = 0; i < typeOfInfor.length; i++) {
        typeOfInfor[0].textContent = nameKey
        typeOfInfor[1].textContent = locationKey
        typeOfInfor[2].textContent = codeKey
        typeOfInfor[3].textContent = e.keyCode
    }
}
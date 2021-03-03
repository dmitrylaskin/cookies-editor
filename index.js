const homeworkContainer = document.querySelector('#app');
// текстовое поле для фильтрации cookie
const filterNameInput = homeworkContainer.querySelector('#filter-name-input');
// текстовое поле с именем cookie
const addNameInput = homeworkContainer.querySelector('#add-name-input');
// текстовое поле со значением cookie
const addValueInput = homeworkContainer.querySelector('#add-value-input');
// кнопка "добавить cookie"
const addButton = homeworkContainer.querySelector('#add-button');
// таблица со списком cookie
const listTable = homeworkContainer.querySelector('#list-table tbody');

filterNameInput.addEventListener('input', function () {
});

addButton.addEventListener('click', () => {
});

listTable.addEventListener('click', (e) => {
});

const cookiesMap = getCookies()


function getCookies() {
    const map = new Map()
    document.cookie
        .split('; ')
        .map(item => {
            let [name, value] = item.split('=')
            map.set(name, value)
        })
    return map
}

addButton.addEventListener('click', () => {
    console.log(cookiesMap.get('test'))
})

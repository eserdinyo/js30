const buttons = document.querySelectorAll('.button');
const selectbox = document.querySelector('.select');
let sortType = null;

function changeSelect(selectedItem, selectBox) {

    sortType = selectedItem;
    const options = selectBox.querySelectorAll('option');
    options.forEach(option => {
        if (option.value == sortType) {
            option.selected = true;
        }
    })


    //change class of button
    buttons.forEach(btn => {
        if (btn.classList.contains('active')) {
            btn.classList.remove('active');
        } if (btn.dataset.type == sortType) {
            btn.classList.add('active');
        }
    })

}

function changeStatus(e) {
    const type = e.target.dataset.type;


    if (type == 'name')
        sortType = 'name'
    else if (type == 'price')
        sortType = 'price'
    else
        sortType = 'relevance'

    changeSelect(sortType, selectbox);


    //change class of button
    buttons.forEach(btn => {
        if (btn.classList.contains('active')) {
            btn.classList.remove('active');
            this.classList.add('active');
        }
    })

}

buttons.forEach(button => {
    button.addEventListener('click', changeStatus);
})

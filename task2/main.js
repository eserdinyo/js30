const contents = document.querySelectorAll('.content div');
const buttons = document.querySelectorAll('.nav li a');
const input = document.querySelector('#input');

function changeFromInput() {
    const val = parseInt(input.value);
    const btn = buttons[val - 1];

    if (val < 0 || val > 3)
        alert('index is invalid')
    else {
        const name = btn.innerText.toLowerCase();

        changeContent(btn, name);

    }

    input.value = '';

}


function changeContent(btn, name) {

    contents.forEach(content => {
        //first remove all class 
        content.classList.remove('activeContent')

        buttons.forEach(button => {
            if (button != btn)
                button.classList.remove('active')
        });

        if (content.classList.contains(name)) {
            content.classList.add('activeContent')
            btn.classList.add('active');
        }
    })
}

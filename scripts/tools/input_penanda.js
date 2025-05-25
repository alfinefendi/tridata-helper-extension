let inputKeterangan = document.querySelector('#Keterangan');
let trInputKeterangan = inputKeterangan.closest('tr');



function createTdElement() {
    const td = document.createElement('td');
    td.setAttribute('style', 'position: relative;')
    return td;
}


function createButtonElement() {
    const button = document.createElement('button');
    button.innerHTML = 'click';
    button.setAttribute('style', 'padding: 5px;')
    return button;
}


function init() {
    const td = createTdElement();
    const button = createButtonElement();
    
    button.addEventListener('click', function(e){
        console.log(inputKeterangan)
        e.preventDefault();
        let value = inputKeterangan.value;
        inputKeterangan = "(a) " + value; 
        console.log(value);
    });

    td.appendChild(button);
    trInputKeterangan.appendChild(td);
}


init();
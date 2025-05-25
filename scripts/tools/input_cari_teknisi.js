let oldTeknisiSelectedValue;
let oldTeknisiSelectedIndex;

let inputSelectTeknisi = document.querySelector('#Teknisi');
let trInputSelectTeknisi = inputSelectTeknisi.closest('tr');



function createSearchInputElement() {
    const searchInput = document.createElement('input');
    searchInput.value = "";
    searchInput.placeholder = "Cari Teknisi";
    searchInput.setAttribute('style', 'padding: 5px;');
    return searchInput;
}

function createTdElement() {
    const td = document.createElement('td');
    td.setAttribute('style', 'position: relative;')
    return td;
}

function createSpanElement() {
    const span = document.createElement('span');
    span.setAttribute('style', 'color: green; position: absolute; top: -25px;')
    return span;
}   



function getAllTeknisi() {
    inputSelectTeknisi = document.querySelector('#Teknisi');
    if(inputSelectTeknisi.selectedIndex == 0) {
        oldTeknisiSelectedValue = inputSelectTeknisi.value;
        oldTeknisiSelectedIndex = inputSelectTeknisi.selectedIndex;
    }    

    const semuaTeknisi = [];

    let index = 0;
    for (const opsi of inputSelectTeknisi.options) {
        if (opsi.value) {
            semuaTeknisi.push({ value: opsi.value, selectedIndex: index });
        }
        index++;
    }
    return semuaTeknisi;
}


function init() {
    const td = createTdElement();
    const labelOldTeknisi = createSpanElement();
    const input = createSearchInputElement();
    const semuaTeknisi = getAllTeknisi();

    input.addEventListener('input', function(e){
        const keyword = this.value;
        for(const teknisi of semuaTeknisi) {
            labelOldTeknisi.innerHTML = "";
            const words = teknisi.value.toLowerCase().split(/\s+/);
            if (words.some(word => word.startsWith(keyword.toLowerCase()))) {
                inputSelectTeknisi.selectedIndex = teknisi.selectedIndex;
            }
        }
        if(keyword == "") {
            labelOldTeknisi.innerHTML = "kembali ke semula";
            inputSelectTeknisi.selectedIndex = oldTeknisiSelectedIndex;
        }
    });
    td.appendChild(labelOldTeknisi);
    td.appendChild(input);
    trInputSelectTeknisi.appendChild(td);
}


init();
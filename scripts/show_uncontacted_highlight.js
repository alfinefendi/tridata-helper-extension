const greenHighlight = [
    'internet lemot',
];

function create_highlight(observed) {
    let rows = observed.querySelectorAll("form:first-of-type > table:first-of-type > tbody > tr")
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i]
        let h3Exist = row.querySelector("h3")
        if (h3Exist) {
            break
        }

        let columns = row.getElementsByTagName('td')
        let keterangan_el = columns[7]
        let kerusakan_el = columns[9]

        if (keterangan_el) {
            let keterangan = keterangan_el.innerText
            let kerusakan = kerusakan_el ? kerusakan_el.innerText : ""
            let isContacted = !/^\([\w\s]+\)/g.test(keterangan)
            let isGreenHighlight = greenHighlight.includes(kerusakan.toLowerCase())

            if (isContacted) {
                if (isGreenHighlight) {
                    row.setAttribute("style", "background-color: #B4FA94");
                } else {
                    row.setAttribute("style", "background-color: #F0F0F0");
                }
            }
        }
    }
}

function init() {
    console.log("Show uncontacted highlight is executed")
    let main = document.querySelector("div#txtHint:has(form)")

    let table_observer = new MutationObserver(() => {
        create_highlight(main)
    })

    create_highlight(main)

    table_observer.observe(main, {
        subtree: true,
        childList: true
    })
}

init()
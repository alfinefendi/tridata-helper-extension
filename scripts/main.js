MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

const wabot_url = "http://157.15.40.69:3000"
const api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJ5YWhkaSIsImlhdCI6MTc0NzcyNTEwM30.YXHz-viVuBwJAnw6SUHBgqoildqgQtWqtg-Xpm5uiNo"
const bot_id = "cmaxg5pv30001mh1t6yij0d74"

let ext_buttons_container

function place_button(button) {
    ext_buttons_container.appendChild(button)
}

function copy_text(text) {
    if (!navigator.clipboard) {
        console.log("Clipboard not found. Using the old method")
        // text = text.replace(/(?:\r\n|\r|\n)/g, '<br>')
        let body = document.body
        let temp_copy = document.createElement("textarea")
        temp_copy.value = text
        body.appendChild(temp_copy)
        temp_copy.select()
        document.execCommand("copy")
        temp_copy.remove()
    } else {
        navigator.clipboard.writeText(text).then(() => {
            console.log("Copied to clipboard")
        }).catch((e) => {
            console.log("Failed to copy to clipboard")
        })
    }
}

function create_button(text, onclick) {
    let button = document.createElement("label")
    button.className = "btn btn-info"
    button.setAttribute("type", "button")
    button.innerText = text

    button.onclick = onclick

    return button
}

function create_ext_buttons_container() {
    let tr = document.querySelector("table.table tr")

    if (ext_buttons_container != null) return;

    ext_buttons_container = document.createElement("td")
    ext_buttons_container.id = "extension_buttons"
    ext_buttons_container.style = "display: flex; flex-direction: column; gap: 5px;"

    tr.appendChild(ext_buttons_container)
}
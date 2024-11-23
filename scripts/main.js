MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

function place_button(button) {
    let form = document.getElementsByTagName("form")[0]
    form.appendChild(button)
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
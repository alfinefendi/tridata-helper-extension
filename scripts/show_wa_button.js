function format_wa_number(number) {
    number = number.toString()
    number = number.trim()
    if (!number.startsWith("62") && number.startsWith("0")) {
        number = "62" + number.substr(1)
    }

    return number
}

function create_whatsapp_text(number) {
    let no_pel = document.getElementById("no_pel").value
    let nama = document.getElementById("Nama").value

    let website = "https://web.whatsapp.com"
    let text = `Assalamualaikum%20Bapak/Ibu%20${nama}%20No%20Pel%20:%20${no_pel}%0D%0APerkenalkan%20Kami%20dari%20Teknisi%20Wifi%0D%0AKami%20Mendapatkan%20Informasi%20bahwa%20wifinya%20mengalami%20gangguan%0D%0AMohon%20maaf,%20apakah%20sekarang%20masih%20belum%20bisa%20di%20gunakan%20nggih?`
    let end = website + `/send?phone=${number}&text=${text}&source=&data=`

    return end
}

function wa_click() {
    let telp = document.getElementById("Telp").value
    console.log("Nomor telepon: " + telp)
    let formatted_telp = format_wa_number(telp)
    console.log("Nomor telepon terformat: " + formatted_telp)
    let text = create_whatsapp_text(formatted_telp)
    copy_text(text)
}

function place_button(button) {
    let form = document.getElementsByTagName("form")[0]
    form.appendChild(button)
}

function init() {
    button = create_button('WA', wa_click)
    place_button(button)
    console.log("Show WA Button executed")
}

init()

function format_wa_number(number) {
    number = number.toString()
    number = number.trim()
    if (!number.startsWith("62") && number.startsWith("0")) {
        number = "62" + number.substr(1)
    }

    return number
}

function send_whatsapp_message(number) {
    number = "6282317424214"

    let no_pel = document.getElementById("no_pel").value
    let nama = document.getElementById("Nama").value

    let text = `Assalamualaikum Bapak/Ibu ${nama} No Pel : ${no_pel}\nPerkenalkan Kami dari Teknisi Wifi\nKami Mendapatkan Informasi bahwa wifinya mengalami gangguan\nMohon maaf, apakah sekarang masih belum bisa di gunakan nggih?`
    fetch(wabot_url + "/api/whatsapp/send-message?clientId=" + bot_id, {
        method: "POST",
        body: JSON.stringify({
            "recipient" : number,
            "message" : text
        }),
        headers: {
            "Content-Type": "application/json",
            "Authorization": api_key,
        }
    })
    .then((res) => {
        if (res.status == 200) {
            console.log("Berhasil mengirim pesan ke pelanggan")
        }
    })
    .catch((res) => {
        console.log("Gagal: " + res)
    })
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

function wa_send() {
    let konfirmasi = confirm("Apakah ingin mengirim pesan kepada pelanggan?")
    if (!konfirmasi) return;

    let telp = document.getElementById("Telp").value
    console.log("Nomor telepon: " + telp)
    let formatted_telp = format_wa_number(telp)
    console.log("Nomor telepon terformat: " + formatted_telp)
    send_whatsapp_message(formatted_telp)
}

function init() {
    create_ext_buttons_container()

    let button = create_button('WA', wa_click)
    place_button(button)

    let send_button = create_button('SEND WA', wa_send)
    place_button(send_button)

    console.log("Show WA Button executed")
}

init()

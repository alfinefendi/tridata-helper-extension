const transform_list = {
    'modem los': "Modem Loss"
}

function format_date(date) {
    let tanggal = date.getDate()
    let bulan = date.getMonth() + 1
    let tahun = date.getFullYear()
    
    return `${tanggal}/${bulan}/${tahun}`
}

function keluhan_format(keluhan) {
    keluhan = keluhan.trim()
    keluhan = keluhan.length > 0 ? keluhan : "-"
    let keluhan_key = keluhan.toLowerCase()

    if (transform_list[keluhan_key]) {
        keluhan = transform_list[keluhan_key]
    }

    return keluhan
}

function create_report_text() {
    let no_pel = document.getElementById("no_pel").value
    let nama = document.getElementById("Nama").value
    let keluhan = document.getElementById("kerusakan").value
    keluhan = keluhan_format(keluhan)   
    
    let tanggal_sekarang = format_date(new Date())

    let text = `Pekerjaan Tanggal ${tanggal_sekarang}\nNomer Pelanggan: *${no_pel}*\nNama: *${nama}*\nKeluhan: ${keluhan}\n\nPenanganan: -\nstatus: ok`;
    return text
}

function report_click() {
    let text = create_report_text()
    copy_text(text)
}

function init() {
    button = create_button('Report', report_click)
    place_button(button)
    console.log("Show Report Button executed")
}

init()
const emailReceiver = 'fikrifikri@gmail.com'

function submitForm () {
    let name = document.getElementById ('inputN').value
    let email = document.getElementById ('mail').value
    let number = document.getElementById ('noHP').value
    let message = document.getElementById ('kata1').value
    let subject = document.getElementById ('text1').value

    if (name == '') {
        alert ('Nama kamu harus diisi....')
    }
    if (email == '') {
        alert ('email kamu harus diisi....')
    }
    if (number == '') {
        alert ('no handphone kamu harus diisi....')
    }
    if (message == '') {
        alert ('masukan pesan kamu harus diisi....')
    }
    if (subject == '') {
        alert ('tulis komentar kamu harus diisi....')
    }


    // console.log(name)
    // console.log(email)
    // console.log(number)
    // console.log(message)
    // console.log(subject)

    
    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${message}&body=Hello my name ${name}, ${subject}`
    a.click()
    console.log(a)
}

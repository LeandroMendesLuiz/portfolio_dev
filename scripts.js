function enviarWhats(event) {
    event.preventDefault()

    const nome = document.getElementById('nome').value;
    const tel = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('msg').value;
    const telefone = '5541997575423'

    const texto = ` Nome: ${nome}     \n Telefone: ${tel},    \n Email: ${email} \n\n Mensagem: \n Olá, meu nome é ${nome}, ${msg}`
    const msgFormatada = encodeURIComponent(texto)

    const url = `https://api.whatsapp.com/send/?phone=${telefone}&text=${msgFormatada}`

    window.open(url, '_blank')
}

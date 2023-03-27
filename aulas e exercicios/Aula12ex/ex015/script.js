function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //É A MESMA COISA QUE COLOCAR <img id='foto'> DENTRO DO SEGUNDO DIV NO HTML
        if(fsex[0].checked) {
            gênero = 'Homem'
            if( idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'bebe_m.png')
            } else if ( idade < 21 ) {
                // jovem
                img.setAttribute('src', 'jovem_m.png')
            } else if ( idade < 50) {
                // adulto
                img.setAttribute('src', 'adulto_m.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso_m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if( idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'bebe_f.png')
            } else if ( idade < 21 ) {
                // jovem
                img.setAttribute('src', 'jovem_f.png')
            } else if ( idade < 50) {
                // adulto
                img.setAttribute('src', 'adulto_f.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso_f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}

function verificar(){
    var idade = window.document.getElementsByTagName('div')[0]
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano ){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
    }
    if(fsex[0].checked){
        gênero ='homem'
        if(idade >= 0 && idade <= 10){
            //criança
            img.setAttribute('src','crianca-homem.png')
        }else if(idade >= 10 && idade <= 21){
            //jovem
            img.setAttribute('src','jovem-homem.png')
        }else if(idade >=21 && idade <= 50){
            //adulto
            img.setAttribute('src','homem-adulto.png')
        }else{
            //idoso
            img.setAttribute('src','idoso-homem.png')
        }
        
    }else if(fsex[1].checked){
        gênero = 'mulher'
        if(idade >= 0 && idade <= 10){
            //criança
            img.setAttribute('src','crianca-mulher.png')
        }else if(idade >= 10 && idade <= 21){
            //jovem
            img.setAttribute('src','joovem-mulher.png')
        }else if(idade >=21 && idade <= 50){
            //adulto
            img.setAttribute('src','mulher-adulta.jpg')
        }else{
            //idoso
            img.setAttribute('src','idoso-mulher.png')
        }
    }
    
    res.innerHTML = `Detectamos ${gênero} de ${idade} anos`
    res.appendChild(img)
}
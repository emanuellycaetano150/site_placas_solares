let result = document.getElementById('result')

function calculo(kw, dias, efi, irradiacao) {
    return   kw * dias * efi * irradiacao / 1000
    }
    
    
    function principal(){
    
    let kw = Number(document.getElementById('kw').value)
    let dias = Number(document.getElementById('dias').value)
    let efi = Number(document.getElementById('efi').value)
    let irradiacao = Number(document.getElementById('irradiacao').value)
    
    let placas = calculo(kw, dias, efi, irradiacao)
    console.log(placas)
    
    result.innerHTML = ``
    result.innerHTML += `A quantidade de placas ideal são: ${placas.toFixed(2)} kw`
    
    }
    
    
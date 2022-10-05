function cal(){
    var tabu = document.getElementById('tab')
    var ta = Number(tabu.value)
    var resposta = document.getElementById('tabuada')
    if (ta == 0){
        window.alert('Por favor digite corretamente.')
    }else{
        var cont = 0
        resposta.innerHTML = ''
        while (cont <= 10){
            var item = document.createElement('option')
            item.text = `${ta} x ${cont} = ${cont*ta}`
            cont ++
            resposta.appendChild(item)
        }
    }
}
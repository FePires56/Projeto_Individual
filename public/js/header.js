var booleanPerfil = 0

function select_perfil() {
    if (booleanPerfil == 0) {
        booleanPerfil = 1
        id_select.classList.add('show')
        seta.classList.add('virar')
    } else {
        booleanPerfil = 0
        id_select.classList.remove('show')
        seta.classList.remove('virar')

    }
}
const vaciar = () => {
    const nombreDe = document.getElementById('nombreDe') as HTMLInputElement || null
    const nombreA = document.getElementById('nombreA') as HTMLInputElement || null
    const entDe = document.getElementById('entregaDe') as HTMLInputElement || null
    const entA = document.getElementById('entregaA') as HTMLInputElement || null
    const nombreNuevo = document.getElementById('nombreNuevo') as HTMLInputElement || null

    nombreDe.value = ''
    nombreA.value = ''
    entDe.value = ''
    entA.value = ''
    nombreNuevo.value = ''
}

export default vaciar
const copyFieldValue = () => {

    //cliente
    const nombreDe = document.getElementById('nombreDe') as HTMLInputElement | null
    const nombreA = document.getElementById('nombreA') as HTMLInputElement | null

     if (nombreDe && nombreA) {
      nombreA.value = nombreDe.value
    } else {
      console.error('No se encontró uno de los campos');
    }

    //fecha entrega
    const entDe = document.getElementById('entregaDe') as HTMLInputElement | null
    const entA = document.getElementById('entregaA') as HTMLInputElement | null

    if (entDe && entA) {
      entA.value = entDe.value;
    } else {
      console.error('No se encontró uno de los campos');
    }

  };

  export default copyFieldValue
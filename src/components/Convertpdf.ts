import jsPDF from 'jspdf'
import html2canvas from 'html2canvas-pro';

const generarPDF = async () => {
    const input = document.getElementById('tabla')
    var nombre =document.getElementById('nombreDe') as HTMLInputElement
    const nombreNuevo = document.getElementById('nombreNuevo') as HTMLInputElement || null
    var salida = nombreNuevo?.value.trim() || nombre?.value.trim() || 'factura'
   

    if(!input) {
        console.error('No se encontro el div')
        return
    }

    const canvas = await html2canvas(input)
    const imgData = canvas.toDataURL('image/png')

    const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
    })

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
   
    while (imgHeight - position > pageHeight) {
        position += pageHeight;
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    }
    
    pdf.save(salida)
    
    

}

export default generarPDF

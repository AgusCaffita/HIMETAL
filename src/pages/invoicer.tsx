import { useState, useEffect } from 'react'
import Navbar from "../components/Navbar"
import generarPDF from "../components/Convertpdf"
import copyFieldValue from '../components/Copiar'
import vaciar from '../components/Borrar'


function Invoicer() {
  const cantFilas = 10
  
  const [datos, setDatos] = useState<string[][]>(
  Array.from({ length: cantFilas }, () => ["", "", "", ""])
)

const handleChange = (i: number, j: number, value: string) => {
  const nuevosDatos = [...datos];
  nuevosDatos[i][j] = value;
  setDatos(nuevosDatos);
};


  const [fecha, setFecha] = useState('');

  useEffect(() => {
    const hoy = new Date()
    const fechaFormateada = hoy.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
    setFecha(fechaFormateada);
  }, [])

  const [contador, setContador] = useState(1);

  const incrementarContador = () => {
    setContador(contador + 1)}

  const manyFunc = () => {
    incrementarContador()
    generarPDF()
    vaciar()
    
    const nuevasFilas = Array.from({ length: cantFilas }, () => ["", "", "", ""])
    setDatos(() => nuevasFilas.map(fila => [...fila])) 
}

  const cambiarNumeroPedido = () => {
    const input = document.getElementById('numeroNuevo') as HTMLInputElement

    if (input) {
      const valor = parseInt(input.value, 10);

      if (!isNaN(valor)) {
        setContador(valor)
      } else {
        console.log('Número inválido');
      }
    } else {
      console.log('No se encontró el input');
    }

    input.value = ''
  }

 
  function openNav() {
    const sidenav = document.getElementById('mySidenav') as HTMLInputElement | null
    if(sidenav){sidenav.style.width = '250px'}
  }

  function closeNav() {
    const sidenav = document.getElementById('mySidenav') as HTMLInputElement | null
    if(sidenav){sidenav.style.width = '0'}
  }

  return (
    <>
      <Navbar></Navbar>
      <div className='w-screen h-screen p-1 mt-10'>

         {/*BOTONES*/}
        <div className='flex justify-center w-screen mt-4 text-2xl'>
          <button className='m-3 cursor-pointer hover:text-blue-600 hover:underline font-semibold' onClick={() => manyFunc()}>Descargar</button>
          <button className='m-3 cursor-pointer hover:text-violet-600 hover:underline font-semibold'  onClick={() => openNav()}>Configurar</button>
        </div>        

        {/*TABLAS*/}
        <div id='tabla' className='flex flex-col gap-[1px] items-center mx-20 mt-2 text-2xl font-bold'>

          {/* TABLA 1 */}
          <div className='grid grid-cols-1 grid-rows-[0.06fr_0.3fr_0.1fr] w-3/4 mt-4 '>
            <div className='text-black border-2 border-slate-700 pl-1 bg-blue-300'>Pedido nº {contador}</div>    
            
            <div className='grid grid-cols-2 '>
              <div className='p-1 border-l-2 border-slate-700'>Cliente:<input className='ml-1 mt-6 h-15 align-middle' id='nombreDe' type='text' onChange={copyFieldValue}></input></div>
              <div className='grid grid-rows-2 border-x-2 border-slate-700'>

                <div className='grid grid-cols-2 border-b-2 p-1 border-slate-700 bg-orange-300'>
                  <div className='max-w-[200px]'>Fecha pedido:</div>
                  <div id='hoy' >{fecha}</div>
                </div>

                <div className='grid grid-cols-2 p-1 border-slate-700 bg-orange-200'>
                  <div className='max-w-[200px]' >Fecha entrega:</div>
                  <input className='min-h-[45px] min-w-[200px] mr-40 rounded hover:border-[1px] mt-2' id='entregaDe' placeholder='-' onChange={copyFieldValue}></input>
                </div>
                
              </div>
            </div>


            <div className='border-2 border-slate-700 '>

              {/* PRODUCTOS */}
              <div className='grid grid-cols-[0.2fr_0.6fr_1fr_0.4fr] border-b-2 border-slate-700 font-semibold text-center'>
                <div className='border-r-2 border-slate-700'>cant</div>
                <div className='border-r-2 border-slate-700'>código</div>
                <div className='border-r-2 border-slate-700'>descripción</div>
                <div>precio</div>
              </div>

              {datos.map((grupo, i) => (
                 <div key={i} className='grid grid-cols-[0.2fr_0.6fr_1fr_0.4fr] border-b border-slate-400 text-center'>
                  {grupo.map((valor, j) => (
                    <input
                      key={j}
                      type="text"
                      value={valor}
                      onChange={(e) => handleChange(i, j, e.target.value)}
                      className='align-text-bottom w-full min-w-0 border-r-2 border-slate-300 p-1 min-h-15'
                    />
                  ))}
                </div>
              ))}
            </div>

          </div>

          {/*SEGUNDA TABLA*/}
          <div className='grid grid-cols-1 grid-rows-[0.06fr_0.2fr_1fr] w-3/4'>
            <div className='text-black border-2 border-slate-700 pl-1 bg-red-400'>Pedido nº {contador}</div>    
            
            <div className='grid grid-cols-2'>
              <div className='p-1 border-l-2 border-slate-700'>Cliente:<input className='ml-1 mt-6 h-15 align-middle' id='nombreA' type='text'></input></div>
              <div className='grid grid-rows-2 border-x-2 border-slate-700'>

                <div className='grid grid-cols-2 border-b-2 p-1 border-slate-700 bg-orange-300'>
                  <div className='max-w-[200px]' >Fecha pedido:</div>
                  <div id='hoy' >{fecha}</div>
                </div>

                <div className='grid grid-cols-2 p-1 border-slate-700 bg-orange-200'>
                  <div className='max-w-[200px]' >Fecha entrega:</div>
                  <input className='min-h-[45px] min-w-[200px] mr-40 rounded hover:border-[1px] mt-2' id='entregaA' placeholder='-'></input>
                </div>
                
              </div>
            </div>

            <div className='border-2 border-slate-700 '>

              {/* PRODUCTOS 2 */}
              <div className='grid grid-cols-[0.3fr_0.7fr_1fr] border-b-2 border-slate-700 font-semibold text-center'>
                <div className='border-r-2 border-slate-700'>cantidad</div>
                <div className='border-r-2 border-slate-700'>código</div>
                <div className='border-slate-700'>descripción</div>
              </div>              
              {datos.map((grupo, i) => (
                 <div key={i} className='grid grid-cols-[0.3fr_0.7fr_1fr] border-b border-slate-400'>
                  {grupo.slice(0, 3).map((valor, j) => (
                    <input
                      key={j}
                      type="text"
                      value={valor}
                      readOnly
                      className='align-text-bottom w-full min-w-0 border-r-2 border-slate-300 p-1 min-h-15'
                    />
                  ))}
                </div>
              ))}

            </div> {/*tabla de contenidos*/}
          </div> {/*segunda tabla*/}

        </div> {/*cont tablas*/}
        
        {/*SIDEBAR*/}
          <div id="mySidenav" className="h-full w-0 fixed z-10 top-0 left-0 bg-gray-100 overflow-x-hidden pt-3 ease-[1s]">
            <a href="javascript:void(0)" className="right-0 text-gray-800 block ease-[0.3s]" onClick={() => closeNav()}>&times;</a>
            <button className="mt-4 mb-2 px-4 text-gray-800 block ease-[0.3s]">Cambiar nombre del archivo</button>
            <input className='ml-4 min-h-8 pl-2 bg-gray-100 text-gray-800' type='text' id='nombreNuevo' placeholder='Nuevo nombre'></input>

            <button className="mt-4 mb-2 px-4 text-gray-800 block ease-[0.3s]">Cambiar numero de pedido</button>
            <input className='ml-4 min-h-8 pl-2 bg-gray-100 text-gray-800' type='text' placeholder='Nuevo numero' id='numeroNuevo'></input> 
            <button className='bg-gray-400 rounded ml-2 px-2 hover:bg-gray-500' type='submit' onClick={() => cambiarNumeroPedido()}>→</button>
          </div>
    
      </div> {/*contenedor grandote*/}
    </>
  )
}

export default Invoicer

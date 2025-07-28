import {useNavigate} from "react-router-dom"

import {useArticulos} from '../hooks/useArticulos';

const Invoicer = () => {
    const navigate = useNavigate();
    const handlePrint = () => {
    window.print()
    }


    return(
        <div>
            <main className="m-5 lg:max-w-xl lg: mx-auto">
                {/*HEADER*/}
                <div className="text-red-600 text-5xl font-bold">
                    <h2>HIMetal</h2>
                </div>
                <header className="flex flex-col items-center justify-center mb-5">
                
                
                <div>
                    <ul className="flex items-center justify-between flex-wrap font-bold">
                    <li><button onClick={handlePrint} className="btn btn-print p-3">Imprimir</button></li>
                    <li><button onClick={() => navigate("/")}>volver al inicio</button></li>                     {/* VER QEU CORNO ES BTN*/}                     
                    </ul>
                </div>
                </header>
                {/*HEADER END*/}

                {/*INFO PERSONAL*/}
                <section className="flex flex-col max-w-[50%] my-5">
                <h2>Client</h2>
                <input type="text" name="text" id="text" placeholder="Nombre" required></input>
                </section>
                {/*INFO PERSONAL END*/}

                {/*FECHA*/}
                <article>
                <ul>
                    <li>Fecha:</li>
                    <li>ID</li>
                    <li>algo</li>
                </ul>
                </article>
                {/*FECHA END*/}

                {/*FOOTER*/}
                <footer>
                <ul>
                    <li>numero?</li>
                    <li>mail?</li>
                    <li>nombre?</li>
                    <li>banco?</li>
                    <li>n° de cuenta?</li>
                    <li>website?</li>
                </ul>
                </footer>
                {/*FOOTER END*/}
            </main>
        </div>
    );
};

export default Invoicer;
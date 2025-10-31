import { useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(0);

    const handleIncrementar = () => {
        setContador((contadorActual) => contadorActual +1);
        setContador((contadorActual) => contadorActual +1);
        console.log("Contador no actualizado", contador);
    }
    
    const handleDecrementar = () => {
        setContador((contadorActual) => contadorActual -1);
        setContador((contadorActual) => contadorActual -1);
    }

    const handleReset = () => {
        setContador(0);
    }
    return (
        <div>
            <h2>Contador super cutre</h2>
            <div>{contador}</div>
            <button onClick={handleIncrementar}>++</button>
            <button onClick={handleDecrementar}>--</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default Contador;
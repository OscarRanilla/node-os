//Información del OS

const os = require('os');

//Funcion para obtener informacion del sistema operativo (os)

function obtenerOSInfo() {
    const totalMemoryMB = (os.totalmem() / (1024 * 1024)).toFixed(2);
    const freeMemoryMB = (os.freemem() / (1024 * 1024)).toFixed(2);
    const cpusCount = os.cpus().length;

    return {
        Name: os.platform(),
        Type: os.type(),
        Version: os.version(),
        Architecture: os.arch(),
        CPUs: cpusCount,
        TotalMemory: `${totalMemoryMB} MB`,
        FreeMemory: `${freeMemoryMB} MB`,
    };
}

// Para exportar la función 

module.exports = {obtenerOSInfo};
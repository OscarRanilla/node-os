// Información de las interfaces de Red

const os = require('os');

// Funcion para obtener info de las interfaces de red

function obtenerNetworkInfo() {
    const networkInterfaces = os.networkInterfaces();
    const resultado = {};

    for (const [interfaceName, addresses] of Object.entries(networkInterfaces)) {
        resultado[interfaceName] = addresses.map(addr => ({   
            Family: addr.family,
            Address: addr.address,
            Internal: addr.internal,
        }));
    }

    return resultado;
}

// Para exportar la funcion

module.exports = {obtenerNetworkInfo};
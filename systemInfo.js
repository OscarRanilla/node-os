//Programa Principal

const { obtenerOSInfo } = require('./osModule');
const { obtenerNetworkInfo } = require('./networkModule');

// Obtener y mostrar la información del os

console.log('Información del OS:');
const osInfo = obtenerOSInfo();
for (const [key, value] of Object.entries(osInfo)) {
    console.log(`${key}: ${value}`);
}
console.log('');

// Obtener y mostrar la información de las interfaces de red
console.log('Información de las Interfaces de Red:');
const networkInfo = obtenerNetworkInfo();
for (const [interfaceName, addresses] of Object.entries(networkInfo)) {
    console.log(`Interfaz ${interfaceName}:`);
    addresses.forEach(addr => {
        console.log(` Familia: ${addr.Family}`);
        console.log(` Dirección: ${addr.Address}`);
        console.log(` Interno: ${addr.Internal}`);
    });
    console.log('');
};

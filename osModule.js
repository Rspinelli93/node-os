const { memoryUsage } = require('node:process');
const os = require('os');
const process = require('process');

const userData = () => {
    const memoryTotal = memoryUsage().heapTotal / 1024
    const memoryFree = (process.memoryUsage().heapTotal - process.memoryUsage().heapUsed) / 1024
    
    let user = {
        Nombre: os.hostname(),
        Tipo: os.type(),
        Versión: os.release(),
        Arquitectura: process.arch,
        CPUs: process.env.NUMBER_OF_PROCESSORS,
        MemoriaTotal: `${memoryTotal.toFixed(1)} MB`,
        MemoriaLibre: `${memoryFree.toFixed(1)} MB`
    }
    console.log(user)
}

userData()

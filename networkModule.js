const os = require('os')
const interfaces = os.networkInterfaces()

const interF = () => {
    for (const interfaceName in interfaces) {
      
      console.log('**')
      console.log(`Interfaz: ${interfaceName}`)
      console.log('**')
      
      interfaces[interfaceName].forEach(details => {
        const {
          address,
          internal,
          family,
        } = details;
  
        console.log(`  Familia: ${family}`);
        console.log(`  Dirección: ${address}`);
        console.log(`  Interno: ${internal}`);
        console.log(`-----------`);

      });
    }
  };
  
  interF();
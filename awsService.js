const awsIot = require("aws-iot-device-sdk");

const device  =  awsIot.device({
  keyPath: './awsCerts/2237eeb0c77eac37225d2123740cbd2b91e5951f530e03dc01c5bcebacf6c74e-private.pem.key',
  certPath: './awsCerts/2237eeb0c77eac37225d2123740cbd2b91e5951f530e03dc01c5bcebacf6c74e-certificate.pem.crt',
  caPath: './awsCerts/AmazonRootCA1 (1).pem',
  host: 'a1xwzg4ziau5l8-ats.iot.us-east-1.amazonaws.com',
  clientId: 'electiva-IoT',
  region: 'us-east-1',
});


module.exports = { device };

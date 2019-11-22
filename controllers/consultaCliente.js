const got = require('got');

let consultaCliente = async (req, res) => {
    let body = req.body;

    const rout = 'http://codi-16-consultacliente-codi.apps.dev.openshift.multivaloresgf.local/multiva/consultaClientePorId';
    // const rout = 'http://codi-api-gateway-codi.apps.dev.openshift.multivaloresgf.local/multiva/consultaClientePorId';

    const contentType = 'application/json; charset=utf-8';
    let response = '';

    try {
        response = await got.post(rout, {
            json: true,
            body: body,
            headers: {
                'Content-Type': contentType,
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate',

            },
        });
    } catch (error) {
        response = error.message;
    }
    return res.json(response.body);
};

module.exports = consultaCliente;
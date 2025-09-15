const { VM } = require('vm2');

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const { script, context } = body;

    const vm = new VM({
      timeout: 5000, // 5 segundos
      sandbox: context || {}
    });

    const result = vm.run(script);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ result })
    };

  } catch (err) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: err.message })
    };
  }
};

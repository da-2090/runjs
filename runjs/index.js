const { VM } = require('vm2');

module.exports = async function (context, req) {
  try {
    const { script, context: vmContext } = req.body;

    const vm = new VM({
      timeout: 5000, // 5 segundos
      sandbox: vmContext || {}
    });

    const result = vm.run(script);

    context.res = {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      body: { result }
    };

  } catch (err) {
    context.res = {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
      body: { error: err.message }
    };
  }
};

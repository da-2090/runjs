const { handler } = require('./index');

const event = {
  body: JSON.stringify({
    script: 'conductores[userId]',
    context: {
      conductores: {
        "487790": "KTXX52",
        "487791": "HLDL87"
      },
      userId: "487790"
    }
  })
};

handler(event).then(res => {
  console.log("Respuesta:", res);
});

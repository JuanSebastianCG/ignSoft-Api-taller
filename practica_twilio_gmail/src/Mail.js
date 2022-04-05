const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

function sendEmailConfirmationHTML(customerName, orderNro){
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Documento</title>
  </head>
  <body>

    <div class="container section">
      <label>hola desde el api rest</label>
      <img src="https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800">
      <img src="https://www.blogdelfotografo.com/wp-content/uploads/2020/05/amanecer-playa.jpg">
    </div>

  </body>
  </html>`
}

function getMessage(emailParams){
  return{
    to:emailParams.toEmail,
    from: 'juans.cardenasg@autonoma.edu.co',
    subject: 'Confirmación orden de compra BLACKFRIDAY',
    text: `Hola ${emailParams.customerName}, te enviamos las imágenes de los productos comprados y la factura con número ${emailParams.orderNro}, Gracias por tu compra`,
    html: sendEmailConfirmationHTML(emailParams.customerName, emailParams.orderNro)
  }
}

async function sendOrder(emailParams){
  try {
    await sgMail.send(getMessage(emailParams))
    return {message: 'Confirmación de compra enviada'}
  } catch (err) {
    const message = 'No se pudo enviar la orden de compra. Valide los errores'
    console.error(message)
    console.error(err)
    if(err.response) console.error(err.response.body)
    return {message}
  }
}

module.exports={
  sendOrder
}


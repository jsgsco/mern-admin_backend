import nodemailer from "nodemailer";
import { EMAIL_USER, EMAIL_HOST, EMAIL_PASS, EMAIL_PORT, FRONTEND_URL } from '../utils'

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  // Información del email

  const info = await transport.sendMail({
    from: '"Administracion Mailer" <admin@mailer.com>',
    to: email,
    subject: "Administracion - Comprueba tu cuenta",
    text: "Comprueba tu cuenta en Administracion",
    html: `<p>Hola: ${nombre} Comprueba tu cuenta en Administracion</p>
    <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace: 

    <a href="${FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
    
    <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
    
    
    `,
  });
};

export const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  // Información del email

  const info = await transport.sendMail({
    from: '"Administracion Mailer" <admin@mailer.com>',
    to: email,
    subject: "Administracion - Reestablece tu Password",
    text: "Reestablece tu Password",
    html: `<p>Hola: ${nombre} has solicitado reestablecer tu password</p>

    <p>Sigue el siguiente enlace para generar un nuevo password: 

    <a href="${FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a>
    
    <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>
    
    
    `,
  });
};

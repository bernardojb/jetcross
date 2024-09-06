import { NextResponse, NextRequest } from "next/server";

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SG_API);

export async function POST(req, res) {
  let response;
  const body = await req.json();
  const message = `
    <div style="max-width: 580px; padding: 45px; background: #14121B; font-family:Roboto;">
    <div>
      <img alt="HOKUP" src="https://i.imgur.com/1aPbQiB.png" style="height:40px;display:block;outline:none;border:none;text-decoration:none;margin-left:auto;margin-right:auto;margin-top:0px;margin-bottom:40px"/>
        <div>
            <p style="color: #9A97A2; text-decoration: none; font-size: 14px;">REMETENTE</p>
            <p style="color: #D3D1DC; text-decoration: none; font-size: 18px; padding-bottom: 10px;">${body.name}</p>

            <p style="color: #9A97A2; text-decoration: none; font-size: 14px;">EMAIL</p>
            <p style="color: #D3D1DC; text-decoration: none; font-size: 18px; padding-bottom: 10px;">${body.email}</p>

            <p style="color: #9A97A2; text-decoration: none; font-size: 14px;">SOBRE O PROJETO</p>
            <p style="color: #D3D1DC; text-decoration: none; font-size: 18px; padding-bottom: 10px;">${body.message}</p>

            <p style="color: #9A97A2; text-decoration: none; font-size: 14px;">ONDE NOS ENCONTROU</p>
            <p style="color: #D3D1DC; text-decoration: none; font-size: 18px; padding-bottom: 10px;">${body.referal}</p>
        </div>          
        
        <a href="mailto:${body.email}" style="background-color:#1EA0FF;border-radius:5px;color:#fff;font-size:18px;text-decoration:none;text-align:center;display:inline-block;width:100%;p-y:19px;line-height:100%;max-width:100%;padding:19px 0px">
            <span style="background-color:#1EA0FF; color: #FFF; text-decoration: none; font-size: 18px; text-align: center; display:inline-block;width:100%;p-y:19px;max-width:100%;line-height:120%;text-transform:none;mso-padding-alt:0px;mso-text-raise:14.25px">Responder mensagem</span>
        </a>               

        <hr style="width:100%; border:none; border-top:1px solid #4D4C55; border-color:#4D4C55; margin:40px 20px">
        </hr>                
        
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
            <tbody>
                <tr>
                    <td>
                        <p style="color: #9A97A2; text-align: center; text-decoration: none; font-size: 14px; padding-bottom: 10px;">Mensagem entregue por <a href="https://www.hokup.com.br/" target="_blank">www.hokup.com.br</a></p>
                        <img src="https://i.imgur.com/UYTYvx2.png" alt="hokup.com.br" style="height:18px;display:block;outline:none;border:none;text-decoration:none;margin-left:auto;margin-right:auto;margin-top:0px;margin-bottom:0px"/> 
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`;

  const data = {
    to: ["bernardo@hokup.com.br", "pedro@hokup.com.br", "contato@hokup.com.br"],
    from: "hokup.com.br <mail@hokup.com.br>",
    subject: `Nova mensagem de <${body.email}>`,
    text: "hokup",
    html: message,
  };

  await sgMail
    .send(data)
    .then(() => {
      response = {
        status: "success",
        message: "Your message was sent. I'll be in contact shortly.",
      };
    })
    .catch((error) => {
      response = {
        status: "error",
        message: `Message failed to send with error, ${error}`,
      };
    });

  return NextResponse.json(response);
}

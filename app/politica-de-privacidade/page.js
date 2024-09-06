import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Animation from "@/components/animations/Animation";
import { generalData } from "@/data/general-data";
// import OpenAccount from '@/components/buttons/OpenAccount';

const Paragraph = (props) => {
  return (
    <div className="mb-10">
      <p className="text-almost-white font-manrope mb-4 font-semibold">
        {props.title}
      </p>
      <p className="font-manrope mb-6 text-sm text-gray">{props.paragraph1}</p>
      <p className="font-manrope text-sm text-gray">{props.paragraph2}</p>
      {props.children}
    </div>
  );
};

const Politica = () => {
  return (
    <>
      <section className="bg-black py-28">
        <div className="container pt-10">
          <h1 className="text-2xl text-almost-white font-manrope mb-10 font-semibold">
            Política de Privacidade
          </h1>
          <p className="font-manrope mb-10 text-base text-gray">
            Agradecemos por visitar o website da {generalData.name}. A
            privacidade dos nossos usuários é de extrema importância para nós.
            Esta Política de Privacidade descreve como coletamos, usamos,
            compartilhamos e protegemos as informações pessoais que você fornece
            ao utilizar nosso website. Leia atentamente esta política para
            compreender nossas práticas e como tratamos suas informações.
          </p>
          <Paragraph
            title="1. Informações que Coletamos"
            paragraph1="1.1 Informações Pessoais: Podemos coletar informações pessoais que você voluntariamente nos fornece ao interagir com nosso website, como nome, endereço de e-mail, número de telefone e outras informações de contato."
            paragraph2="1.2 Informações de Navegação: Podemos coletar informações sobre sua visita ao nosso website, incluindo o endereço IP, tipo de navegador, páginas visitadas, tempo gasto no site e outras estatísticas relacionadas à navegação."
          />
          <Paragraph
            title="2. Uso das Informações"
            paragraph1="2.1 Utilização Interna: Utilizamos as informações coletadas para melhorar a experiência do usuário e fornecer conteúdo personalizado, realizar análises estatísticas, monitorar o desempenho do website e administrar nossas atividades comerciais."
            paragraph2={`2.2 Comunicações: Podemos utilizar seu endereço de e-mail para enviar informações importantes sobre nossos produtos, atualizações, boletins informativos e outras comunicações relacionadas à ${generalData.name}. Você pode optar por não receber essas comunicações a qualquer momento.`}
          />
          <Paragraph
            title="3. Compartilhamento de Informações"
            paragraph1="3.1 Terceiros: Podemos compartilhar suas informações pessoais com terceiros confiáveis ​​que nos auxiliam na operação do website, prestação de serviços, análise de dados e outras atividades comerciais. Esses terceiros estão obrigados a manter a confidencialidade das suas informações e utilizá-las somente conforme necessário para cumprir suas funções."
            paragraph2="3.2 Requisitos Legais: Reservamo-nos o direito de divulgar suas informações pessoais, se exigido por lei ou se acreditarmos de boa-fé que tal divulgação é necessária para proteger nossos direitos legais, cumprir uma ordem judicial ou responder a processos judiciais."
          />
          <Paragraph
            title="4. Cookies e Tecnologias de Rastreamento"
            paragraph1="4.1 Cookies: Utilizamos cookies e outras tecnologias similares para melhorar a funcionalidade do nosso website, personalizar sua experiência e analisar o uso do site. Ao navegar em nosso site, você concorda com o uso de cookies de acordo com nossa Política de Cookies."
            paragraph2="4.2 Opções de Cookies: Você pode optar por desabilitar os cookies através das configurações do seu navegador. No entanto, observe que a desativação de cookies pode afetar a funcionalidade do site."
          />
          <Paragraph
            title="5. Alterações nesta Política de Privacidade"
            paragraph1="Podemos atualizar esta Política de Privacidade periodicamente. Quaisquer alterações serão publicadas em nosso website, com a data da última atualização indicada no início do documento. Encorajamos você a revisar regularmente esta política para se manter informado sobre como protegemos suas informações."
            paragraph2=""
          />
          <Paragraph title="6. Contato" paragraph1="" paragraph2="">
            <p className="font-manrope mb-6 text-sm text-gray">
              Se você tiver alguma dúvida, preocupação ou sugestão relacionada à
              nossa Política de Privacidade, entre em contato conosco pelo
              e-mail{" "}
              <a
                href={`mailto:${generalData.email}`}
                className="text-green font-semibold transition duration-500 ease-out hover:text-accent hover:transition hover:duration-500 hover:ease-out"
              >
                {generalData.email}
              </a>
            </p>
            <p className="font-manrope text-sm text-gray">
              Ao utilizar nosso website, você concorda com os termos desta
              Política de Privacidade.
            </p>
          </Paragraph>
          <div className="flex flex-row items-center pt-10">
            <Image
              className="mr-6 lg:mr-10"
              src="/assets/main/main-logo-icon.svg"
              height={50}
              width={50}
            />
            <p className="max-w-[260px] text-xs text-gray">
              {" "}
              {generalData.slogan} © {new Date().getFullYear()}{" "}
              {generalData.name}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Politica;

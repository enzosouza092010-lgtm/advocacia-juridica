const WHATSAPP = "https://wa.me/5518999999999";

const areas = [
  {
    number: "01",
    title: "Direito Trabalhista",
    description:
      "Orientação e atuação em questões relacionadas às relações de trabalho, com análise cuidadosa de cada situação.",
  },
  {
    number: "02",
    title: "Direito Previdenciário",
    description:
      "Acompanhamento em aposentadorias, benefícios e demais questões envolvendo o direito previdenciário.",
  },
  {
    number: "03",
    title: "Direito Civil",
    description:
      "Assessoria jurídica em contratos, obrigações, família, sucessões e conflitos de natureza civil.",
  },
];

const steps = [
  {
    number: "01",
    title: "Primeiro contato",
    text: "O atendimento começa com uma conversa para entendermos a situação e as principais necessidades.",
  },
  {
    number: "02",
    title: "Análise",
    text: "Documentos, informações e possibilidades são avaliados antes da definição dos próximos passos.",
  },
  {
    number: "03",
    title: "Orientação",
    text: "Apresentamos os caminhos jurídicos possíveis de maneira clara e objetiva.",
  },
  {
    number: "04",
    title: "Acompanhamento",
    text: "O cliente acompanha o desenvolvimento do trabalho e permanece informado durante o processo.",
  },
];

export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <header className="header">
        <div className="container headerInner">
          <a href="#inicio" className="brand">
            <div className="brandLetters">VSA</div>

            <div className="brandText">
              <strong>ADVOCACIA</strong>
              <span>Consultoria Jurídica</span>
            </div>
          </a>

          <nav className="nav">
            <a href="#inicio">Início</a>
            <a href="#escritorio">O escritório</a>
            <a href="#atuacao">Atuação</a>
            <a href="#atendimento">Atendimento</a>
            <a href="#contato">Contato</a>
          </nav>

          <a
            className="headerContact"
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale conosco
            <span>↗</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="container heroGrid">
          <div className="heroContent">
            <div className="heroLabel">
              <span />
              Advocacia & Consultoria Jurídica
            </div>

            <h1>
              Segurança jurídica
              <br />
              começa com uma
              <br />
              <em>boa orientação.</em>
            </h1>

            <p className="heroDescription">
              Atendimento jurídico responsável, próximo e conduzido com
              clareza em todas as etapas.
            </p>

            <div className="heroActions">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="primaryButton"
              >
                Agendar uma conversa
                <span>→</span>
              </a>

              <a href="#atuacao" className="textButton">
                Conheça nossa atuação
              </a>
            </div>

            <div className="heroInfo">
              <div>
                <span className="infoDot" />
                Atendimento presencial
              </div>

              <div>
                <span className="infoDot" />
                Atendimento online
              </div>
            </div>
          </div>

          <div className="heroVisual">
            <div className="heroPhoto">
              <div className="photoMessage">
                <span>Imagem institucional</span>
                <small>Foto do advogado ou escritório</small>
              </div>
            </div>

            <div className="heroStamp">
              <span>ATENDIMENTO</span>
              <strong>com clareza</strong>
              <small>e responsabilidade</small>
            </div>
          </div>
        </div>

        <div className="container heroBottom">
          <span>01</span>
          <p>
            Uma atuação jurídica construída sobre análise, diálogo e
            responsabilidade.
          </p>
          <div />
        </div>
      </section>

      {/* INTRO */}
      <section className="intro">
        <div className="container introGrid">
          <div className="sectionIndex">
            <span>02</span>
            <div />
          </div>

          <div className="introTitle">
            <span className="sectionLabel">NOSSA FORMA DE TRABALHAR</span>

            <h2>
              Direito exige técnica.
              <br />
              Atendimento exige
              <br />
              <em>proximidade.</em>
            </h2>
          </div>

          <div className="introText">
            <p>
              Cada situação possui suas particularidades. Por isso, nosso
              trabalho começa pela compreensão do caso antes de qualquer
              decisão.
            </p>

            <p>
              A orientação jurídica é apresentada de forma objetiva, permitindo
              que o cliente compreenda seus direitos, possibilidades e os
              próximos passos.
            </p>

            <a href="#escritorio">
              Sobre o escritório
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section className="practice" id="atuacao">
        <div className="container">
          <div className="practiceHeader">
            <div>
              <span className="sectionLabel light">ÁREAS DE ATUAÇÃO</span>
              <h2>
                Experiência jurídica para
                <br />
                diferentes necessidades.
              </h2>
            </div>

            <p>
              Atuação orientada por conhecimento técnico, análise individual e
              comunicação transparente.
            </p>
          </div>

          <div className="practiceList">
            {areas.map((area) => (
              <article className="practiceItem" key={area.number}>
                <span className="practiceNumber">{area.number}</span>

                <h3>{area.title}</h3>

                <p>{area.description}</p>

                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Saiba mais sobre ${area.title}`}
                >
                  ↗
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ESCRITÓRIO */}
      <section className="office" id="escritorio">
        <div className="container officeGrid">
          <div className="officeImage">
            <div className="officePlaceholder">
              <span>FOTO DO ESCRITÓRIO</span>
            </div>

            <div className="imageCaption">
              <span>01</span>
              <p>Atendimento próximo e individualizado.</p>
            </div>
          </div>

          <div className="officeContent">
            <span className="sectionLabel">O ESCRITÓRIO</span>

            <h2>
              Relações de confiança
              <br />
              também fazem parte
              <br />
              do nosso trabalho.
            </h2>

            <div className="officeCopy">
              <p>
                A advocacia vai além da interpretação da lei. Ela envolve
                compreender pessoas, contextos e decisões que podem ter impacto
                direto na vida de cada cliente.
              </p>

              <p>
                Nosso atendimento é conduzido com responsabilidade,
                transparência e atenção aos detalhes, desde a primeira conversa
                até a conclusão do trabalho.
              </p>
            </div>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="darkButton"
            >
              Conversar com o escritório
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FRASE */}
      <section className="statement">
        <div className="container statementInner">
          <span>“</span>

          <h2>
            Informação transforma
            <br />
            incerteza em direção.
          </h2>

          <p>
            Nosso compromisso é tornar cada etapa mais clara para quem confia
            seu caso ao escritório.
          </p>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="process" id="atendimento">
        <div className="container">
          <div className="processTop">
            <div>
              <span className="sectionLabel">COMO FUNCIONA</span>
              <h2>
                Do primeiro contato
                <br />
                ao acompanhamento.
              </h2>
            </div>

            <p>
              Um processo simples e transparente para que você saiba exatamente
              como o atendimento será conduzido.
            </p>
          </div>

          <div className="steps">
            {steps.map((step) => (
              <article className="step" key={step.number}>
                <div className="stepTop">
                  <span>{step.number}</span>
                  <div />
                </div>

                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contactBanner">
        <div className="container contactBannerInner">
          <div>
            <span className="sectionLabel light">FALE CONOSCO</span>

            <h2>
              Precisa de orientação
              <br />
              sobre uma questão jurídica?
            </h2>
          </div>

          <div className="bannerRight">
            <p>
              Entre em contato para conversar sobre sua situação e entender
              quais podem ser os próximos passos.
            </p>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="goldButton"
            >
              Conversar pelo WhatsApp
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="contact" id="contato">
        <div className="container contactGrid">
          <div className="contactHeading">
            <span className="sectionLabel">CONTATO</span>

            <h2>
              Estamos à
              <br />
              sua disposição.
            </h2>
          </div>

          <div className="contactDetails">
            <div className="contactRow">
              <span>Telefone</span>
              <div>
                <strong>(18) 99999-9999</strong>
                <small>WhatsApp disponível</small>
              </div>
            </div>

            <div className="contactRow">
              <span>Atendimento</span>
              <div>
                <strong>Segunda a sexta</strong>
                <small>08:00 às 18:00</small>
              </div>
            </div>

            <div className="contactRow">
              <span>Localização</span>
              <div>
                <strong>Presidente Venceslau — SP</strong>
                <small>Atendimento presencial e online</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footerTop">
          <div className="footerBrand">
            <div className="brandLetters">VSA</div>

            <div>
              <strong>ADVOCACIA</strong>
              <span>Consultoria Jurídica</span>
            </div>
          </div>

          <div className="footerNavigation">
            <span>Navegação</span>

            <a href="#inicio">Início</a>
            <a href="#escritorio">O escritório</a>
            <a href="#atuacao">Áreas de atuação</a>
            <a href="#atendimento">Atendimento</a>
          </div>

          <div className="footerContact">
            <span>Contato</span>

            <strong>(18) 99999-9999</strong>
            <p>Presidente Venceslau — SP</p>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp ↗
            </a>
          </div>
        </div>

        <div className="container footerBottom">
          <p>
            Este site possui caráter informativo e não substitui consulta
            jurídica.
          </p>

          <p>© 2026 VSA Advocacia.</p>
        </div>
      </footer>
    </main>
  );
}
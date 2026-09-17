const WHATSAPP = "https://wa.me/5518999999999";

const areas = [
  {
    icon: "§",
    title: "Direito Trabalhista",
    description:
      "Orientação e defesa em questões relacionadas às relações de trabalho, direitos e obrigações.",
  },
  {
    icon: "◉",
    title: "Direito Previdenciário",
    description:
      "Atuação em aposentadorias, benefícios, revisões e demais questões previdenciárias.",
  },
  {
    icon: "⌂",
    title: "Direito Civil",
    description:
      "Assessoria em contratos, família, sucessões e conflitos presentes nas relações civis.",
  },
];

const support = [
  {
    number: "01",
    title: "Orientação jurídica",
    text: "Esclarecimento de dúvidas e análise dos caminhos possíveis para cada situação.",
  },
  {
    number: "02",
    title: "Análise documental",
    text: "Avaliação criteriosa de contratos, documentos e informações relacionadas ao caso.",
  },
  {
    number: "03",
    title: "Atuação em processos",
    text: "Representação e acompanhamento judicial com comunicação clara durante o processo.",
  },
  {
    number: "04",
    title: "Consultoria preventiva",
    text: "Orientação para reduzir riscos e auxiliar na tomada de decisões.",
  },
];

const process = [
  {
    number: "01",
    title: "Conversa inicial",
    text: "Entendemos sua situação e ouvimos suas necessidades.",
  },
  {
    number: "02",
    title: "Análise do caso",
    text: "Avaliamos documentos, contexto e possibilidades de atuação.",
  },
  {
    number: "03",
    title: "Estratégia jurídica",
    text: "Definimos o caminho adequado e explicamos os próximos passos.",
  },
  {
    number: "04",
    title: "Acompanhamento",
    text: "Mantemos você informado durante todas as etapas.",
  },
];

const articles = [
  {
    category: "Direito Trabalhista",
    title: "Direitos nas férias: o que trabalhador e empresa precisam saber?",
    imageClass: "articleOne",
  },
  {
    category: "Direito Civil",
    title: "Contratos: quais cuidados tomar antes de assinar?",
    imageClass: "articleTwo",
  },
  {
    category: "Previdenciário",
    title: "INSS: documentos importantes antes de solicitar um benefício",
    imageClass: "articleThree",
  },
];

export default function Home() {
  return (
    <main>
      {/* CABEÇALHO */}
      <header className="header">
        <div className="container headerContent">
          <a href="#inicio" className="logo">
            <div className="logoMark">VSA</div>

            <div className="logoText">
              <strong>ADVOCACIA</strong>
              <span>CONSULTORIA JURÍDICA</span>
            </div>
          </a>

          <nav className="navigation">
            <a href="#inicio" className="active">
              Início
            </a>
            <a href="#escritorio">Escritório</a>
            <a href="#atuacao">Atuação</a>
            <a href="#conteudos">Conteúdos</a>
            <a href="#contato">Contato</a>
          </nav>

          <div className="headerRight">
            <a className="phone" href={WHATSAPP} target="_blank">
              <span>☎</span>
              (18) 99999-9999
            </a>

            <a className="headerButton" href={WHATSAPP} target="_blank">
              Fale conosco
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="container heroContainer">
          <div className="heroText">
            <span className="miniTitle">ADVOCACIA E CONSULTORIA JURÍDICA</span>

            <h1>
              Clareza jurídica
              <br />
              para decisões
              <br />
              mais seguras.
            </h1>

            <p>
              Atuação jurídica responsável, atendimento próximo e orientação
              clara para você entender seus direitos e tomar decisões com
              segurança.
            </p>

            <div className="heroButtons">
              <a href={WHATSAPP} target="_blank" className="primaryButton">
                Agendar atendimento
                <span>→</span>
              </a>

              <a href="#escritorio" className="secondaryButton">
                Conhecer o escritório
              </a>
            </div>

            <div className="serviceType">
              <span>▣</span>
              Atendimento online e presencial
            </div>
          </div>

          <div className="heroImage">
            <div className="imagePlaceholder">
              <div>
                <strong>FOTO PRINCIPAL</strong>
                <span>Imagem do profissional ou escritório</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="advantages">
        <div className="container advantagesGrid">
          <div className="advantage">
            <div className="advantageIcon">01</div>
            <div>
              <strong>Escuta atenta</strong>
              <span>Entendemos cada situação antes de orientar.</span>
            </div>
          </div>

          <div className="advantage">
            <div className="advantageIcon">02</div>
            <div>
              <strong>Orientação clara</strong>
              <span>Informação objetiva, sem complicação.</span>
            </div>
          </div>

          <div className="advantage">
            <div className="advantageIcon">03</div>
            <div>
              <strong>Atuação responsável</strong>
              <span>Cada caso é analisado individualmente.</span>
            </div>
          </div>

          <div className="advantage">
            <div className="advantageIcon">04</div>
            <div>
              <strong>Acompanhamento</strong>
              <span>Comunicação durante todas as etapas.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section className="practice" id="atuacao">
        <div className="container">
          <div className="practiceHeading">
            <div>
              <span className="miniTitle gold">ÁREAS DE ATUAÇÃO</span>
              <h2>Soluções jurídicas para diferentes momentos.</h2>
            </div>

            <p>
              Conhecimento técnico e atenção às particularidades de cada
              situação.
            </p>
          </div>

          <div className="practiceGrid">
            {areas.map((area) => (
              <article className="practiceCard" key={area.title}>
                <div className="practiceIcon">{area.icon}</div>

                <h3>{area.title}</h3>
                <p>{area.description}</p>

                <a href={WHATSAPP} target="_blank">
                  Saiba mais <span>→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ESCRITÓRIO */}
      <section className="office" id="escritorio">
        <div className="container officeGrid">
          <div className="officeText">
            <span className="miniTitle">O ESCRITÓRIO</span>

            <h2>
              Direito conduzido
              <br />
              com técnica e
              <br />
              proximidade.
            </h2>

            <p>
              Nosso trabalho é baseado em responsabilidade, transparência e
              atendimento personalizado. Cada cliente recebe orientação de
              acordo com as particularidades de sua situação.
            </p>

            <p>
              Mais do que apresentar caminhos jurídicos, buscamos tornar cada
              etapa compreensível e manter uma comunicação próxima durante todo
              o atendimento.
            </p>

            <a href={WHATSAPP} target="_blank" className="primaryButton">
              Conheça nosso atendimento
              <span>→</span>
            </a>
          </div>

          <div className="officeImage">
            <div className="officePlaceholder">
              <strong>FOTO INSTITUCIONAL</strong>
              <span>Equipe ou ambiente do escritório</span>
            </div>
          </div>

          <aside className="officeQuote">
            <div className="quoteLine" />

            <h3>
              Informação
              <br />
              transforma
              <br />
              incerteza
              <br />
              em direção.
            </h3>

            <div className="quoteSmallLine" />

            <p>
              Mais que processos,
              <br />
              pessoas.
            </p>
          </aside>
        </div>
      </section>

      {/* SUPORTE */}
      <section className="support">
        <div className="container">
          <span className="miniTitle">COMO PODEMOS AJUDAR</span>

          <h2>Suporte jurídico em cada etapa da sua necessidade.</h2>

          <div className="supportGrid">
            {support.map((item) => (
              <article key={item.number}>
                <span className="supportNumber">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="process">
        <div className="container">
          <div className="processHeading">
            <div>
              <span className="miniTitle gold">NOSSO PROCESSO</span>
              <h2>Um atendimento claro, do início ao acompanhamento.</h2>
            </div>

            <p>
              Transparência em cada etapa para você acompanhar o andamento do
              trabalho.
            </p>
          </div>

          <div className="processGrid">
            {process.map((item) => (
              <article key={item.number} className="processItem">
                <div className="processLine" />

                <strong>{item.number}</strong>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTEÚDOS */}
      <section className="articles" id="conteudos">
        <div className="container">
          <div className="articlesHeading">
            <div>
              <span className="miniTitle">CONTEÚDOS</span>
              <h2>Informação que ajuda você a conhecer seus direitos.</h2>
            </div>

            <a href="#conteudos">Ver conteúdos →</a>
          </div>

          <div className="articlesGrid">
            {articles.map((article) => (
              <article className="article" key={article.title}>
                <div className={`articleImage ${article.imageClass}`}>
                  <span>IMAGEM DO ARTIGO</span>
                </div>

                <div className="articleBody">
                  <span>{article.category}</span>
                  <h3>{article.title}</h3>
                  <a href={WHATSAPP} target="_blank">
                    Ler conteúdo →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="finalCta">
        <div className="container finalCtaContent">
          <h2>
            Toda situação começa com
            <br />
            uma boa orientação.
          </h2>

          <div className="ctaSeparator" />

          <p>
            Converse conosco para entender melhor sua situação e os próximos
            passos.
          </p>

          <a href={WHATSAPP} target="_blank">
            <span>◉</span>
            Conversar pelo WhatsApp
          </a>
        </div>
      </section>

      {/* CONTATO */}
      <section className="contact" id="contato">
        <div className="container contactGrid">
          <div className="contactInformation">
            <span className="miniTitle">CONTATO</span>
            <h2>Estamos à sua disposição.</h2>

            <div className="contactItems">
              <div>
                <span className="contactIcon">☎</span>
                <p>
                  <strong>(18) 99999-9999</strong>
                  <small>Telefone e WhatsApp</small>
                </p>
              </div>

              <div>
                <span className="contactIcon">◷</span>
                <p>
                  <strong>Segunda a sexta</strong>
                  <small>das 08:00 às 18:00</small>
                </p>
              </div>

              <div>
                <span className="contactIcon">⌖</span>
                <p>
                  <strong>Presidente Venceslau - SP</strong>
                  <small>Atendimento presencial</small>
                </p>
              </div>

              <div>
                <span className="contactIcon">▣</span>
                <p>
                  <strong>Atendimento online</strong>
                  <small>Consulte disponibilidade</small>
                </p>
              </div>
            </div>
          </div>

          <div className="mapPlaceholder">
            <span>LOCALIZAÇÃO</span>
            <strong>Presidente Venceslau</strong>
            <small>São Paulo</small>

            <div className="mapPin">●</div>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="footer">
        <div className="container footerGrid">
          <div className="footerBrand">
            <div className="logoMark">VSA</div>

            <div className="logoText">
              <strong>ADVOCACIA</strong>
              <span>CONSULTORIA JURÍDICA</span>
            </div>

            <p>
              Direito com responsabilidade.
              <br />
              Pessoas em primeiro lugar.
            </p>
          </div>

          <div className="footerColumn">
            <strong>Navegação</strong>
            <a href="#inicio">Início</a>
            <a href="#escritorio">Escritório</a>
            <a href="#atuacao">Atuação</a>
            <a href="#conteudos">Conteúdos</a>
            <a href="#contato">Contato</a>
          </div>

          <div className="footerColumn">
            <strong>Áreas de atuação</strong>
            <span>Direito Trabalhista</span>
            <span>Direito Previdenciário</span>
            <span>Direito Civil</span>
          </div>

          <div className="footerColumn">
            <strong>Contato</strong>
            <span>(18) 99999-9999</span>
            <span>Presidente Venceslau - SP</span>
            <span>Segunda a sexta</span>
            <span>08:00 às 18:00</span>
          </div>
        </div>

        <div className="container footerBottom">
          <span>
            As informações deste site possuem caráter informativo e não
            substituem consulta jurídica.
          </span>

          <span>© 2026 VSA Advocacia.</span>
        </div>
      </footer>
    </main>
  );
}
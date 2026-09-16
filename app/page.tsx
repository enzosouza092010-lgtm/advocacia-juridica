const whatsapp = "https://wa.me/5518999999999";

const areas = [
  {
    numero: "01",
    titulo: "Direito Trabalhista",
    texto: "Orientação e defesa em questões relacionadas às relações de trabalho, com atendimento próximo e estratégico.",
  },
  {
    numero: "02",
    titulo: "Direito Previdenciário",
    texto: "Planejamento e orientação sobre benefícios, aposentadorias e direitos previdenciários.",
  },
  {
    numero: "03",
    titulo: "Direito Civil",
    texto: "Assessoria em questões civis, contratos, família, sucessões e outras demandas do dia a dia.",
  },
];

const etapas = [
  ["01", "Conversa inicial", "Entendemos sua situação e suas necessidades com atenção."],
  ["02", "Análise do caso", "Avaliamos documentos, contexto e possibilidades de atuação."],
  ["03", "Estratégia jurídica", "Definimos o melhor caminho com orientação clara e objetiva."],
  ["04", "Acompanhamento", "Você permanece informado durante todas as etapas do caso."],
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <div className="container nav">
          <div className="logo">
            <span>VSA</span>
            <div>
              <strong>ADVOCACIA</strong>
              <small>Consultoria Jurídica</small>
            </div>
          </div>

          <nav>
            <a href="#inicio">Início</a>
            <a href="#escritorio">Escritório</a>
            <a href="#atuacao">Atuação</a>
            <a href="#processo">Atendimento</a>
            <a href="#contato">Contato</a>
          </nav>

          <a className="btnGold small" href={whatsapp} target="_blank">
            Fale conosco
          </a>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="container heroGrid">
          <div className="heroText">
            <span className="eyebrow">ADVOCACIA E CONSULTORIA JURÍDICA</span>

            <h1>
              Clareza jurídica
              <br />
              para decisões
              <br />
              mais seguras.
            </h1>

            <p>
              Atendimento jurídico próximo, estratégico e personalizado para
              proteger seus direitos e oferecer segurança em cada decisão.
            </p>

            <div className="heroButtons">
              <a className="btnGold" href={whatsapp} target="_blank">
                Agendar atendimento →
              </a>

              <a className="btnOutline" href="#escritorio">
                Conhecer o escritório
              </a>
            </div>

            <small className="attendance">
              ◉ Atendimento online e presencial
            </small>
          </div>

          <div className="heroImage">
            <div className="imagePlaceholder">
              <span>FOTO DO ADVOGADO</span>
              <small>Colocaremos a imagem aqui</small>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="container benefitsGrid">
          <div>
            <b>◎</b>
            <span>
              <strong>Escuta atenta</strong>
              <small>Compreendemos sua realidade.</small>
            </span>
          </div>

          <div>
            <b>◉</b>
            <span>
              <strong>Orientação clara</strong>
              <small>Linguagem objetiva e acessível.</small>
            </span>
          </div>

          <div>
            <b>◎</b>
            <span>
              <strong>Estratégia personalizada</strong>
              <small>Soluções adequadas ao seu caso.</small>
            </span>
          </div>

          <div>
            <b>◇</b>
            <span>
              <strong>Acompanhamento próximo</strong>
              <small>Você sempre informado.</small>
            </span>
          </div>
        </div>
      </section>

      <section className="areas" id="atuacao">
        <div className="container">
          <span className="eyebrow gold">ÁREAS DE ATUAÇÃO</span>

          <div className="sectionTitleRow">
            <h2>Soluções jurídicas para diferentes momentos.</h2>
            <p>
              Conhecimento técnico e visão prática para proteger o que mais
              importa.
            </p>
          </div>

          <div className="areaGrid">
            {areas.map((area) => (
              <article className="areaCard" key={area.titulo}>
                <span className="areaNumber">{area.numero}</span>
                <h3>{area.titulo}</h3>
                <p>{area.texto}</p>
                <a href={whatsapp} target="_blank">
                  Saiba mais →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about" id="escritorio">
        <div className="container aboutGrid">
          <div className="aboutText">
            <span className="eyebrow">O ESCRITÓRIO</span>
            <h2>
              Direito conduzido
              <br />
              com técnica e proximidade.
            </h2>

            <p>
              Um escritório comprometido com atendimento personalizado,
              responsabilidade e transparência. Cada situação é analisada de
              forma individual, buscando soluções jurídicas claras e seguras.
            </p>

            <p>
              Nosso propósito é tornar o direito mais acessível, oferecendo
              orientação próxima do início ao fim.
            </p>

            <a className="btnGold" href={whatsapp} target="_blank">
              Conheça nosso atendimento →
            </a>
          </div>

          <div className="aboutImage">
            <div className="imagePlaceholder dark">
              <span>FOTO DO ESCRITÓRIO</span>
              <small>Imagem institucional</small>
            </div>
          </div>

          <aside className="quote">
            <div></div>
            <h3>
              Informação
              <br />
              transforma
              <br />
              incerteza
              <br />
              em direção.
            </h3>
            <span>Mais que processos, pessoas.</span>
          </aside>
        </div>
      </section>

      <section className="help">
        <div className="container">
          <span className="eyebrow">COMO PODEMOS AJUDAR</span>
          <h2>Suporte jurídico em cada etapa da sua necessidade.</h2>

          <div className="helpGrid">
            <div>
              <span>◌</span>
              <h3>Orientação jurídica</h3>
              <p>Esclarecemos dúvidas e apresentamos os caminhos possíveis.</p>
            </div>

            <div>
              <span>▤</span>
              <h3>Análise documental</h3>
              <p>Avaliamos documentos com atenção, técnica e segurança.</p>
            </div>

            <div>
              <span>♙</span>
              <h3>Atuação em processos</h3>
              <p>Representação e defesa dos seus direitos.</p>
            </div>

            <div>
              <span>◇</span>
              <h3>Consultoria preventiva</h3>
              <p>Orientação para evitar conflitos e tomar decisões seguras.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="process" id="processo">
        <div className="container">
          <span className="eyebrow gold">NOSSO PROCESSO</span>
          <h2>Um atendimento claro, do início ao acompanhamento.</h2>

          <div className="processGrid">
            {etapas.map(([numero, titulo, texto]) => (
              <div className="processCard" key={numero}>
                <div className="line"></div>
                <strong>{numero}</strong>
                <h3>{titulo}</h3>
                <p>{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container ctaContent">
          <h2>
            Toda situação começa
            <br />
            com uma boa orientação.
          </h2>

          <p>
            Converse conosco e receba uma orientação inicial sobre sua
            necessidade.
          </p>

          <a href={whatsapp} target="_blank" className="btnGold">
            Conversar pelo WhatsApp →
          </a>
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="container">
          <span className="eyebrow">CONTATO</span>
          <h2>Estamos à sua disposição.</h2>

          <div className="contactGrid">
            <div>
              <strong>Telefone / WhatsApp</strong>
              <p>(18) 99999-9999</p>
            </div>

            <div>
              <strong>Horário</strong>
              <p>Segunda a sexta, das 08:00 às 18:00</p>
            </div>

            <div>
              <strong>Endereço</strong>
              <p>Centro • Presidente Venceslau - SP</p>
            </div>

            <div>
              <strong>Atendimento</strong>
              <p>Presencial e online</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footerContent">
          <div className="logo footerLogo">
            <span>VSA</span>
            <div>
              <strong>ADVOCACIA</strong>
              <small>Consultoria Jurídica</small>
            </div>
          </div>

          <p>
            Direito com propósito.
            <br />
            Pessoas em primeiro lugar.
          </p>

          <small>
            © 2026 Advocacia. Todos os direitos reservados.
          </small>
        </div>
      </footer>
    </main>
  );
}
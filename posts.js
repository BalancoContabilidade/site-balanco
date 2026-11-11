/* =========================================================
   CONTEÚDOS DA BALANÇO
   Para publicar um texto novo, é só copiar um bloco { ... },
   colar no topo da lista e trocar as informações.
   - categoria: "Notícias", "MEI", "Regularização", "Reforma Tributária", "Abertura de empresa"
   - cards: imagens do carrossel (opcional), salvas na pasta img/
   ========================================================= */
window.POSTS = [
  {
    id: "nfse-emissor-nacional-simples",
    titulo: "NFS-e: desde 1º de novembro, o Simples Nacional emite nota só pelo Emissor Nacional",
    categoria: "Notícias",
    data: "2026-11-02",
    leitura: "3 min",
    resumo: "Quem precisa seguir, o que vale (a data do serviço, não da emissão) e o passo a passo para entrar no Emissor Nacional.",
    cards: ["img/nfse-1.jpg","img/nfse-2.jpg","img/nfse-3.jpg","img/nfse-4.jpg","img/nfse-5.jpg","img/nfse-6.jpg","img/nfse-7.jpg","img/nfse-8.jpg","img/nfse-9.jpg","img/nfse-10.jpg","img/nfse-11.jpg"],
    corpo: `
      <p>Desde <strong>1º de novembro</strong>, as empresas do Simples Nacional emitem nota fiscal de serviço <strong>só pelo Emissor Nacional</strong>.</p>
      <h3>Quem precisa seguir</h3>
      <p>Microempresas (ME) e empresas de pequeno porte (EPP) do Simples Nacional que prestam serviço. A regra é da Resolução CGSN nº 191/2026.</p>
      <h3>O detalhe que confunde</h3>
      <p>Vale a <strong>data do serviço</strong>, e não a data em que você emite a nota. Serviço feito a partir de 01/11 sai pelo Emissor Nacional. Serviço feito até 31/10 ainda pode sair pelo sistema da prefeitura.</p>
      <h3>E os outros regimes?</h3>
      <p><strong>MEI:</strong> já usa o Emissor Nacional desde setembro de 2023, então nada muda. <strong>Lucro Presumido e Real:</strong> ainda não há data nacional; seguem a regra de cada município.</p>
      <h3>Como entrar no Emissor Nacional</h3>
      <ul>
        <li><strong>Certificado digital</strong> ou <strong>gov.br</strong> são os caminhos mais rápidos. Pelo gov.br, entre com a conta do sócio responsável e troque o perfil para o CNPJ em Procuração/Representação.</li>
        <li><strong>Usuário e senha:</strong> no primeiro acesso, informe o CNPJ, o CPF do responsável, a data de nascimento e o número do recibo das duas últimas declarações do IR. Depois cadastre e-mail e senha e confirme o código enviado por e-mail.</li>
      </ul>
      <p>E tem um lado bom: o Emissor Nacional é igual em qualquer cidade, pede menos campos e permite salvar os serviços que você mais usa.</p>
      <p><strong>Dica:</strong> faça um teste antes de precisar emitir. Se travar, chama a gente.</p>
      <p class="fonte">Fonte: gov.br/nfse, 29/10/2026 · Resolução CGSN nº 191/2026.</p>`
  },
  {
    id: "mei-em-dia",
    titulo: "Seu MEI está em dia? Como manter o MEI ativo e regularizar pendências",
    categoria: "Regularização",
    data: "2026-11-11",
    leitura: "3 min",
    resumo: "Ter um MEI vai muito além de abrir um CNPJ. Veja os cuidados que evitam multas e como o Desenrola MEI pode ajudar quem tem débitos.",
    cards: ["img/mei-1.jpg","img/mei-2.jpg","img/mei-3.jpg","img/mei-4.jpg","img/mei-5.jpg","img/mei-6.jpg","img/mei-7.jpg"],
    corpo: `
      <p>Ter um MEI vai muito além de abrir um CNPJ. Para manter a empresa regular, é importante cumprir algumas obrigações e acompanhar a situação do negócio.</p>
      <h3>Como manter o MEI ativo</h3>
      <ul>
        <li>Pagar o DAS em dia.</li>
        <li>Entregar a Declaração Anual (DASN-SIMEI) dentro do prazo.</li>
        <li>Manter os dados cadastrais atualizados.</li>
        <li>Emitir nota fiscal quando necessário.</li>
      </ul>
      <h3>Está com pendências? Conheça o Desenrola MEI</h3>
      <p>O <strong>Desenrola MEI</strong> (Edital PGDAU nº 9/2026) permite que MEIs com débitos inscritos em Dívida Ativa da União negociem suas pendências, conforme os critérios da PGFN. O prazo de adesão foi <strong>prorrogado até 29 de janeiro de 2027</strong> pelo Edital PGDAU nº 10/2026.</p>
      <p>Entre os possíveis benefícios estão o parcelamento, condições especiais de negociação e, em algumas modalidades, descontos de até 70% sobre juros, multas e encargos. Mas nem todo débito se enquadra: cada caso precisa ser analisado individualmente.</p>
      <h3>E se eu não regularizar?</h3>
      <p>As dívidas se acumulam, surgem restrições no CNPJ e fica difícil tirar certidões e conseguir crédito. E o <strong>CPF do titular também pode ser afetado</strong>, já que o MEI responde pelas obrigações da empresa. Antes de pensar em dar baixa, vale verificar se a regularização é a melhor alternativa.</p>
      <p class="fonte">Fonte: PGFN, Editais PGDAU nº 9/2026 e nº 10/2026. Informação de novembro de 2026; as condições podem mudar.</p>`
  },
  {
    id: "empresa-nao-faturou",
    titulo: "Sua empresa não faturou? Ainda precisa entregar declarações",
    categoria: "Obrigações",
    data: "2026-11-10",
    leitura: "2 min",
    resumo: "Ficar sem faturar não tira a empresa das obrigações. Em muitos casos, as declarações continuam valendo, mesmo zeradas.",
    cards: ["img/faturou-1.jpg"],
    corpo: `
      <p>Muita gente acredita que, se a empresa não faturou, não precisa fazer nada. <strong>Não é bem assim.</strong> Em muitos casos, a empresa continua obrigada a entregar declarações, mesmo sem nenhum faturamento.</p>
      <h3>Alguns exemplos</h3>
      <ul>
        <li><strong>MEI:</strong> a Declaração Anual (DASN-SIMEI) deve ser entregue mesmo que o faturamento do ano tenha sido zero.</li>
        <li><strong>Simples Nacional:</strong> a apuração mensal e a declaração anual continuam existindo, ainda que sem movimento.</li>
      </ul>
      <p>Deixar de entregar pode gerar multa e travar certidões. Como as obrigações mudam conforme o regime e a atividade, o ideal é conferir o caso da sua empresa com o seu contador.</p>`
  },
  {
    id: "formas-de-tributacao",
    titulo: "MEI, Simples, Presumido ou Real: quais são as formas de tributação e como escolher",
    categoria: "Planejamento",
    data: "2026-11-08",
    leitura: "4 min",
    resumo: "Conheça os 4 regimes mais comuns e por que escolher só pelo 'menor imposto' pode sair caro.",
    cards: ["img/trib-1.jpg","img/trib-2.jpg","img/trib-3.jpg","img/trib-4.jpg","img/trib-5.jpg","img/trib-6.jpg","img/trib-7.jpg"],
    corpo: `
      <h3>MEI</h3>
      <p>Uma modalidade simplificada para pequenos negócios, com valor mensal fixo, menos burocracia e possibilidade de ter um funcionário. Mas nem toda atividade pode ser MEI.</p>
      <h3>Simples Nacional</h3>
      <p>A tributação varia bastante conforme a atividade, o faturamento, a folha de pagamento, o anexo e o fator R. Para algumas empresas é excelente; para outras, não.</p>
      <h3>Lucro Presumido</h3>
      <p>Os tributos são calculados sobre uma margem de lucro presumida pela legislação. Pode fazer sentido para quem tem determinadas atividades, não se beneficia tanto do Simples ou tem boa margem de lucro.</p>
      <h3>Lucro Real</h3>
      <p>O IRPJ e a CSLL consideram o lucro efetivamente apurado, com os ajustes previstos na lei. Pode ser vantajoso para empresas com margens menores, determinadas despesas dedutíveis ou operações mais complexas.</p>
      <h3>E como escolher?</h3>
      <p>Não escolha pelo "menor imposto" de forma isolada. É preciso analisar faturamento, atividade, folha, margem de lucro, créditos tributários, retenções e as particularidades da empresa. <strong>Escolha tributária não é chute. É análise.</strong></p>`
  },
  {
    id: "monstros-do-empresario",
    titulo: "Monstros que assombram o empresário (e não é só no Halloween)",
    categoria: "Gestão",
    data: "2026-10-31",
    leitura: "2 min",
    resumo: "Pix pessoal, CNPJ parado, DAS atrasado, conta misturada... Qual desses mora na sua empresa?",
    cards: ["img/halloween-1.jpg","img/halloween-2.jpg","img/halloween-3.jpg","img/halloween-4.jpg","img/halloween-5.jpg","img/halloween-6.jpg","img/halloween-7.jpg","img/halloween-8.jpg","img/halloween-9.jpg"],
    corpo: `
      <ul>
        <li><strong>O zumbi do Pix pessoal:</strong> recebe tudo na conta de pessoa física e acha que ninguém vê. Spoiler: a Receita vê.</li>
        <li><strong>O fantasma do CNPJ parado:</strong> a empresa não fatura há anos, mas as obrigações continuam aparecendo… e as multas também.</li>
        <li><strong>O vampiro do DAS atrasado:</strong> multa e juros sugando o seu caixa todo santo mês.</li>
        <li><strong>A abóbora do limite do MEI:</strong> era MEI até novembro, vendeu demais em dezembro e… virou desenquadramento.</li>
        <li><strong>A aranha da conta misturada:</strong> a conta da empresa paga mercado, streaming e salão. Ninguém sabe se a empresa dá lucro.</li>
        <li><strong>A bruxa do "meu primo disse":</strong> escolheu o regime tributário porque o primo falou que era melhor. Feitiço que sai caro.</li>
        <li><strong>A caveira do "depois eu vejo":</strong> a nota, a declaração, o boleto… tudo fica para depois, até virar problema.</li>
      </ul>
      <p>Se mais de um mora na sua empresa, chama a gente que fazemos um exorcismo contábil. 😅</p>`
  },
  {
    id: "fim-da-escala-6x1",
    titulo: "Aprovado no Senado: o fim da escala 6x1",
    categoria: "Notícias",
    data: "2026-10-14",
    leitura: "2 min",
    resumo: "Jornada de 44 para 40 horas, dois dias de descanso e sem redução de salário. Veja o que muda e como se preparar.",
    cards: ["img/6x1-1.jpg","img/6x1-2.jpg","img/6x1-3.jpg","img/6x1-4.jpg","img/6x1-5.jpg","img/6x1-6.jpg"],
    corpo: `
      <p>O Senado aprovou, por 75 votos a 1, a PEC que acaba com a escala 6x1. Mais descanso para o trabalhador, sem mexer no salário.</p>
      <h3>O que muda</h3>
      <p>A jornada máxima cai de <strong>44 para 40 horas</strong> por semana, com até 8 horas por dia, e o descanso semanal passa a ser de <strong>dois dias</strong>, um deles de preferência no domingo, sem redução de salário.</p>
      <h3>Quando começa a valer</h3>
      <p>A PEC seguiu para promulgação e a redução vem em duas etapas: em dois meses, a jornada cai para 42 horas semanais, já com dois dias de repouso remunerado. Um ano depois, chega às 40 horas.</p>
      <h3>E para quem tem negócio próprio?</h3>
      <p>Quem tem funcionário vai precisar ajustar escalas, jornada e folha a cada etapa. As regras de cada setor ainda serão definidas pelo Congresso. Com planejamento, dá para fazer essa transição com tranquilidade.</p>
      <p class="fonte">Informação de outubro de 2026, a partir da aprovação no Senado em 14/10/2026.</p>`
  },
  {
    id: "prospera-mei",
    titulo: "Prospera MEI: o que pode mudar no seu negócio",
    categoria: "Notícias",
    data: "2026-10-13",
    leitura: "2 min",
    resumo: "O governo anunciou um pacote para o MEI com perdão de dívidas, PixMEI e teto maior. Mas calma: quase tudo ainda depende do Congresso.",
    cards: ["img/prospera-1.jpg", "img/prospera-2.jpg", "img/prospera-3.jpg"],
    corpo: `
      <p>Em <strong>13/10/2026</strong> o governo federal anunciou o <strong>Prospera MEI</strong>, um pacote com cinco medidas para o microempreendedor individual. Entre elas estão o perdão de dívidas, o PixMEI e um teto de faturamento maior.</p>
      <h3>O que já dá para saber</h3>
      <p>Quase tudo ainda depende de aprovação do Congresso ou está em fase de desenho. Então ainda não é hora de mudar nada na rotina da sua empresa.</p>
      <h3>Perdão de dívidas com a União</h3>
      <p>A proposta fala em cerca de <strong>R$ 12,6 bilhões</strong> em débitos de aproximadamente <strong>3,6 milhões de MEIs</strong>. Mas atenção: vale <strong>só para débitos já inscritos na PGFN</strong> (dívida ativa). O DAS atrasado que ainda não foi para a dívida ativa fica de fora. A previsão é janeiro de 2027, se o Congresso aprovar.</p>
      <h3>E agora, o que eu faço?</h3>
      <p>Não deixe de pagar o DAS esperando um perdão que ainda não existe. Se você tem pendências, o melhor caminho é saber exatamente onde elas estão. A gente faz esse diagnóstico com você.</p>
      <p class="fonte">Fonte: g1 e gov.br, 13/10/2026. Proposta em análise; as regras podem mudar até a aprovação.</p>`
  },
  {
    id: "sair-do-mei",
    titulo: "Sair do MEI: como saber se chegou a hora",
    categoria: "MEI",
    data: "2026-11-05",
    leitura: "3 min",
    resumo: "Crescer é ótimo, mas o MEI tem limites. Veja os sinais de que sua empresa já pede outro enquadramento e como fazer essa mudança sem susto.",
    cards: ["img/capa-sair-mei.jpg"],
    corpo: `
      <p>O MEI é uma ótima porta de entrada. Só que ele foi pensado para negócios pequenos, e tem regras que não acompanham quem está crescendo.</p>
      <h3>Sinais de que chegou a hora</h3>
      <ul>
        <li><strong>Seu faturamento está chegando perto do limite anual</strong> do MEI, ou já passou dele.</li>
        <li><strong>Você precisa de mais de um funcionário.</strong> O MEI só pode ter um empregado.</li>
        <li><strong>Quer ter um sócio.</strong> O MEI não permite sociedade.</li>
        <li><strong>Sua atividade não está na lista do MEI</strong>, ou você começou a oferecer um serviço que não é permitido.</li>
      </ul>
      <h3>Desenquadrar não é um bicho de sete cabeças</h3>
      <p>Sair do MEI é migrar para outro formato, normalmente uma microempresa no Simples Nacional. Com planejamento, dá para escolher o melhor momento e evitar impostos cobrados de forma retroativa.</p>
      <p>O pior cenário é passar do limite sem perceber. Por isso vale fazer as contas antes, com calma.</p>
      <p class="fonte">As regras e os limites do MEI podem mudar. Fale com a gente para analisar o seu caso com as regras em vigor.</p>`
  },
  {
    id: "cnpj-com-pendencias",
    titulo: "CNPJ com pendências? Calma, tem solução",
    categoria: "Regularização",
    data: "2026-10-28",
    leitura: "3 min",
    resumo: "Declaração atrasada, DAS em aberto ou troca de contador que deixou buracos. Veja como funciona uma regularização sem pânico.",
    cards: ["img/capa-pendencias.jpg"],
    corpo: `
      <p>Descobrir que a empresa tem pendências assusta. Mas, na maioria das vezes, o problema tem solução, e quanto antes você olhar para ele, mais barato fica.</p>
      <h3>As pendências mais comuns</h3>
      <ul>
        <li>Guias (DAS) em atraso</li>
        <li>Declarações que não foram entregues</li>
        <li>Débitos que já foram para a dívida ativa</li>
        <li>Problemas deixados por uma troca de contador mal feita</li>
      </ul>
      <h3>Como a gente trabalha</h3>
      <p><strong>1. Diagnóstico:</strong> levantamos tudo nas esferas federal, estadual e municipal.<br>
      <strong>2. Relatório claro:</strong> você entende o que existe, quanto custa e o que é prioridade.<br>
      <strong>3. Plano de regularização:</strong> parcelamentos, entregas em atraso e ajustes, em etapas que cabem no seu bolso.</p>
      <p>Regularizar é o que libera certidões, crédito e tranquilidade para crescer.</p>`
  },
  {
    id: "reforma-tributaria-sem-misterio",
    titulo: "Reforma Tributária sem mistério: o que já dá para saber",
    categoria: "Reforma Tributária",
    data: "2026-10-20",
    leitura: "4 min",
    resumo: "IBS, CBS, período de transição... Calma! Explicamos de forma simples o que muda para pequenas empresas e o que ainda está em aberto.",
    cards: ["img/capa-reforma.jpg"],
    corpo: `
      <p>A Reforma Tributária sobre o consumo vai trocar, aos poucos, vários tributos que conhecemos hoje por dois novos: a <strong>CBS</strong> (federal) e o <strong>IBS</strong> (de estados e municípios).</p>
      <h3>Não muda tudo de uma vez</h3>
      <p>A mudança acontece em um período de transição, que começou em 2026 com uma fase de testes e vai até 2033. Durante esses anos, os tributos antigos e os novos convivem.</p>
      <h3>E o Simples Nacional?</h3>
      <p>O Simples Nacional continua existindo. Mas quem vende para outras empresas pode ter que avaliar se vale a pena continuar no regime ou recolher os novos tributos por fora, para gerar crédito ao cliente. É aí que o planejamento faz diferença.</p>
      <h3>O que fazer agora</h3>
      <p>Manter cadastro, notas e documentos em dia, e acompanhar com o seu contador como a reforma afeta o seu tipo de negócio.</p>
      <p class="fonte">Informação de novembro de 2026. As regulamentações ainda estão sendo publicadas e podem mudar.</p>`
  }
];

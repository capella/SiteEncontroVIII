'use strict';

/**
 * @ngdoc service
 * @name tmpApp.palestrantes
 * @description
 * # palestrantes
 * Service in the tmpApp.
 */
angular.module('tmpApp')
    .service('Palestrantes', function() {
        var palestrantes = [{
            title: "Animação Computacional de Líquidos",
            nome_palestrante: "Prof. Afonso Paiva",
            start: new Date(2016, 7, 22, 14), // anos mes+1, dia, hora, minuto
            end: new Date(2016, 7, 22, 14, 50),
            image: "",
            text_pessoal: "Afonso Paiva é professor assistente no Instituto de Ciências Matemáticas e de Computação da Universidade de São Paulo (ICMC-USP), São Carlos, Brasil. Ele possui doutorado (2007) em Matemática Aplicada pela Pontifícia Universidade Católica do Rio de Janeiro (PUC-Rio) e mestrado (2003) em Matemática pelo Instituto Nacional de Matemática Pura e Aplicada (IMPA), Rio de Janeiro, Brasil. De 2003 a 2007, ele trabalhou em projetos de pesquisa da PUC-Rio apoiados pela Petrobras. Atualmente, ele é membro do Grupo de Processamento Visual e Geométrico do ICMC-USP e suas áreas de pesquisa compreendem animação computacional, processamento e modelagem geométrica e métodos numéricos em computação gráfica.",
            text_palesta: "Nessa palestra vamos dar uma visão geral de alguns problemas em simulação de escoamento de fluidos na área da Computação Gráfica, principalmente em animação computacional de líquidos utilizando sistema de partículas. A primeira parte da palestra é relacionada a animação de líquidos viscosos, tais como polímeros, mel e xarope. Enquanto na segunda parte serão discutidos problemas geométricos que surgem em simulações baseadas em sistema de partículas, mais especificamente em detecção de partículas na interface de um líquido.",
            id: 1
        }, {
            title: "Contornando a Criptografia",
            nome_palestrante: "Diego Aranha",
            start: new Date(2016, 7, 24, 15),
            end: new Date(2016, 7, 24, 15, 50),
            image: "images/2.jpg",
            text_pessoal: "É Professor Doutor na Universidade Estadual de Campinas (Unicamp) desde 2014. Tem experiência na área de Criptografia e Segurança Computacional, com ênfase em implementação eficiente de algoritmos criptográficos e análise de segurança de sistemas reais. Coordenou a primeira equipe de investigadores independentes capaz de detectar e explorar vulnerabilidades no software da urna eletrônica em testes controlados organizados pelo Tribunal Superior Eleitoral. É Bacharel em Ciência da Computação pela Universidade de Brasília (2005), Mestre (2007) e Doutor (2011) em Ciência da Computação pela Universidade Estadual de Campinas. Foi doutorando visitante por 1 ano na Universidade de Waterloo, Canadá, e Professor Adjunto por pouco mais de 2 anos no Departamento de Ciência da Computação da Universidade de Brasília. É membro do Comitê Consultivo da Conferência Internacional em Criptografia e Segurança da Informação na América Latina (LATINCRYPT) e da Comissão Especial de Segurança da Sociedade Brasileira de Computação (CESEG), responsável pelo Simpósio Brasileiro de Segurança da Informação e Sistemas Computacionais (SBSEG), tendo coordenado o Comitê de Programa na edição 2014 de ambos os eventos. Recebeu em 2016 os prêmios Google Latin America Research Award para pesquisa em privacidade e Inovadores com Menos de 35 Anos Brasil da MIT Technology Review por seu trabalho com o voto eletrônico.",
            text_palesta: "Atacantes racionais não atacam criptografia diretamente, buscando sempre contorná-la. Há inúmeros pontos em que técnicas criptográficas falham na prática, desde geração/distribuição insegura de chaves criptográficas e escolha inadequada de algoritmos/parâmetros, até o vazamento de informação crítica por canais laterais. Nessa palestra, serão discutidas formas de se explorar algumas dessas vulnerabilidades, ilustradas com casos reais do Brasil e do mundo.",
            id: 2
        }, {
            title: "Introdução à Teoria dos Jogos Algorítmica",
            nome_palestrante: "Prof. Rafael",
            start: new Date(2016, 7, 23, 14),
            end: new Date(2016, 7, 23, 14, 50),
            image: "images/5.png",
            text_pessoal: "Rafael C. S. Schouery é Doutor em Ciência da Computação (2014) e Bacharel em Ciência da Computação pelo Instituto de Matemática e Estatística da Universidade de São Paulo, bem como Técnico em Informática (2003) pelo Colégio Técnico Industrial da Universidade Estadual Paulista. Atualmente é Professor em Regime de Dedicação Integral à Docência e à Pesquisa no Instituto de Computação da Universidade Estadual de Campinas. Seus interesses de pesquisa se concentram na área de Teoria da Computação, com ênfase em Análise de Algoritmos e Complexidade de Computação, atuando principalmente nos seguintes temas: otimização combinatória, algoritmos de aproximação, algoritmos exatos, teoria dos jogos algorítmica e complexidade computacional. ",
            text_palesta: "A Teoria dos Jogos Algorítmica aborda questões relevantes que combinam conceitos de economia com computação. Um dos seus objetivos é abordar problemas da computação, como problemas de otimização, do ponto de vista da Teoria dos Jogos, considerando que os participantes do sistema desejam maximizar o seu ganho ou minimizar o seu custo. Outro objetivo é considerar problemas de natureza econômica (como Leilões) do ponto de vista da Teoria da Computação. Essa apresentação introduzirá conceitos básicos da Teoria dos Jogos e da Teoria dos Jogos Algorítmica.",
            id: 5
        }, {
            title: "Evolução dos computadores; do ábaco ao ENIAC ao Sunway",
            nome_palestrante: "Prof. Siang Wun Song",
            start: new Date(2016, 7, 22, 15),
            end: new Date(2016, 7, 22, 15, 50),
            image: "",
            text_pessoal: "Siang Wun Song é professor titular aposentado do Departamento de Ciência da Computação da Universidade de São Paulo, onde ele foi diretor do Instituto de Matemática e Estatística. Ele possui o título de doutor em Ciência da Computação pela Universidade Carnegie Mellon. Foi membro do corpo editorial de vários periódicos, como Parallel Computing, Parallel Processing Letters, e Journal of the Brazilian Computer Society. Ele é bolsista de produtividade em pesquisa do CNPq nível Sênior. Foi admitido em 2007 na Ordem Nacional do Mérito Científico, classe Comendador e em 2011 recebeu o Prêmio Mérito Científico da Sociedade Brasileira de Computação. Sua área de pesquisa é o projeto de algoritmos paralelos.",
            text_palesta: "Sunway é o computador mais veloz do mundo hoje com mais de 10 milhões de processadores ou núcleos (cores). Desde a invenção do ábaco quase cinco mil anos atrás, um longo percurso foi necessário até chegarmos a este estágio. Apresentamos nesta palestra alguns marcos importantes nessa evolução. Curiosamente, o sistema binário já era conhecido há mais de três mil anos, embora não no contexto para computação. Máquinas de calcular mecânicas apareceram somente no século XVII. Com a invenção da válvula, apareceram os primeiros computadores eletrônicos durante a segunda grande guerra mundial. Daí passando de válvula a transistor e, finalmente, a fantástica tecnologia de microeletrônica (VLSI), foi possível chegar ao Sunway de hoje, anunciado em junho de 2016. Faremos no final uma breve apresentação do Sunway.",
            id: 6
        }, {
            title: "A Máquina de Turing e a Essência dos Computadores",
            nome_palestrante: "Prof. Setzer",
            start: new Date(2016, 7, 24, 14),
            end: new Date(2016, 7, 24, 14, 50),
            image: "images/9.jpg",
            text_pessoal: "Valdemar Setzer foi um dos pioneiros no ensino e pesquisa em Ciência da Computação no Brasil. Formou-se em Engenharia Eletrônica no ITA e doutorou-se na USP, onde aposentou-se no cargo de Prof. Titular do Departamento de Ciência da Computação do IME. Foi professor nas Universidades do Texas em Austin, USA, e de Stuttgart na Alemanha. Exerceu inúmeros cargos de direção na USP, tendo sido o fundador do atual Centro de Computação Eletrônica (CCE) da USP e do Centro de Ensino de Computação do IME. Tem 12 livros publicados no Brasil e no exterior, destacando-se Meios Eletrônicos e Educação: uma visão alternativa (Ed. Escrituras) e Bancos de Dados: aprenda o que são, melhore seus conhecimentos, construa os seus (Ed. Edgard Blücher). Atuou como consultor em inúmeras empresas, entre elas o SERPRO, a PRODESP e a PROMON. Tem proferido inúmeras palestras sobre temas técnicos, educacionais e filosóficos.",
            text_palesta: "A Máquina de Turing (MT) foi inventada por Allan Turing em 1936 como um modelo computacional extremamente simples mas abstrato, isto é, ela existe em nossa mente, pode ser totalmente representada simbolicamente, e não pode ser construída. Nesta palestra será visto o que ela é, como \"funciona\" e como processa alguns algoritmos. Será também analisado quantos tipos de instrução ela tem e o que consegue computar com isso (tese de Church-Turing), e a motivação de Turing ao criá-la: resolver uma conjetura matemática de David Hilbert, o Entscheidugsproblem, o Problema da Decisão. Finalmente, veremos como a MT ajuda a compreender o que é um computador e suas limitações.",
            id: 9
        }, {
            title: "Compilação",
            nome_palestrante: "Ígor Bonadio",
            start: new Date(2016, 7, 22, 16, 30),
            end: new Date(2016, 7, 22, 17, 20),
            image: "images/10.jpg",
            text_pessoal: "Ígor Bonadio é aluno de doutorado do programa de pós-gradução em Ciência da Computação do Instituto de Matemática e Estatística da Universidade de São Paulo (IME-USP) onde obteve, em 2013, o título de mestre em Ciência da Computação. Em 2009, obteve o bacharelado em Ciência da Computação pela Universidade Estadual Paulista (UNESP). Atualmente pesquisa o uso de Campos Aleatórios Condicionais em predição de genes, desenvolve software de código aberto e é entusiasta sobre o desenvolvimento de linguagens de programação e compiladores.",
            text_palesta: "Nesta palestra apresentaremos os principais componentes de um compilador e algumas ferramentas que podem facilitar seu desenvolvimento. Passaremos por análise léxica, análise sintática, representação intermediária, otimização e geração de código. Apresentaremos também quais técnicas e ferramentas compiladores reais utilizam.",
            id: 10
        }, {
            title: "Visão computacional",
            nome_palestrante: "Prof. João Kogler",
            start: new Date(2016, 7, 25, 15),
            end: new Date(2016, 7, 25, 15, 50),
            image: "",
            text_pessoal: "Trabalha no Depto. de Sistemas Eletrônicos da Escola Politécnica da USP desde 1990. Área atual de pesquisa: ciência cognitiva e sistemas complexos. Áreas anteriores: Visão computacional, processamento de imagens, neurociência computacional. Formação: Engenheiro eletricista (IMT) e Bacharel em Física (USP), mestre - engenharia biomédica (Poli/USP) e doutor - visão computacional e processamento de imagens (USP/SCR,Princeton), cientista visitante do INRIA - Sophia Antipolis. Experiência profissional: docência e pesquisa (35 anos), consultoria, projeto edesenvolvimento (30 anos), direção empresarial (5 anos). Membro do IEEE, SBC, SBF e SBCC, Ex-membro da diretoria do IEEE South Brazil Section.",
            text_palesta: "Escopo, aplicações e tendências na área de visão computacional.",
            id: 11
        }, {
            title: "Criando Computadores Socialmente Inteligentes",
            nome_palestrante: "Claudio Pinhaez",
            start: new Date(2016, 7, 24, 16, 30),
            end: new Date(2016, 7, 24, 18, 20),
            image: "images/12.jpg",
            text_pessoal: "Claudio Pinhanez é cientista, professor, e inovador. É doutor pelo MIT Media Laboratory, onde estudou inteligência artificial e interfaces avançadas, e criou, em 1994, o primeiro blog da Internet em 1994. Fez bacharelado e mestrado no IME da Universidade de São Paulo. Claudio é pesquisador da IBM Research desde 1999, e hoje é o líder do grupo de pesquisa em Analítica de Dados Sociais do laboratório da IBM Research no Brasil. Claudio tem mais de 80 artigos publicados em jornais e conferências científicas, e mais de 20 patentes outorgadas nos Estados Unidos, Europa e Japão. Twitter: @cinhanez. Linkedin:",
            text_palesta: "Nesta palestra é explorada a questão de como construir computadores tenham capacidades de inteligência social. Dentro de uma abordagem de Computação Cognitiva, são apresentadas e discutidas tecnologias para o entendimento do universo de mídias sociais, da análise de redes profissionais, e para o estabelecimento de diálogos com usuários. Os desafios de construir máquinas socialmente competentes são exemplificados através de aplicações em TV e mídia, saúde, e aconselhamento financeiro.",
            id: 12
        }, {
            title: "Internet das Coisas",
            nome_palestrante: "Daniel Fuchs",
            start: new Date(2016, 7, 22, 17, 30),
            end: new Date(2016, 7, 22, 18, 20),
            image: "images/13.jpg",
            text_pessoal: "Daniel Tibor Fuchs é um empreendedor natural, como Head of Innovation & fundador da Datora Telecom, uma operadora de telecomunicações especializada em prover serviços de voz, dados e mensageria para dezenas de operadoras no Brasil e no mundo, trouxe a tecnologia de Voz sobre IP pela primeira vez no Brasil, ainda em 1996. Desde 2010, também é responsável por Inovação na primeira MVNA no Brasil, formada inicialmente como Datora Mobile e que carrega hoje o nome Vodafone no país, dentro das funções de MVNO totalmente focada no segmento de IoT.<br>Graduado em Ciência da Computação e MBA em Marketing no Insper, tendo como missão primária a busca constante pela renovação da estratégia do Grupo Datora Telecom, bem como a concepção de novos produtos e serviços com base nas mais avançadas tendências tecnológicas",
            text_palesta: "",
            id: 13
        }, {
            title: "Marco Civil",
            nome_palestrante: "Demi Getschko",
            start: new Date(2016, 7, 23, 16, 30),
            end: new Date(2016, 7, 23, 18, 20),
            image: "images/14.jpg",
            text_pessoal: "Engenheiro eletricista formado pela POLI/USP, com mestrado e doutorado em Engenharia, é Conselheiro do CGI.br (Comitê Gestor da Internet no Brasil), Diretor-Presidente do NIC.br (Núcleo de Informação e Coordenação do Ponto br) e Professor Associado da PUC (Pontifícia Universidade Católica de São Paulo).  Foi membro da diretoria da ICANN (Internet Corporation for Assigned Names and Numbers) pela ccNSO (Country Code Names Support Organization). Em abril de 2014 foi eleito para o Hall da Fama da Internet para a categoria “Conectores Globais”, com cerimônia realizada em Hong Kong. Em julho do mesmo ano foi agraciado com o prêmio “Cristina Tavares”, da Sociedade Brasileira de Computação. Em dezembro, no dia do Engenheiro, recebeu do Sindicato dos Engenheiros no Estado de São Paulo o prêmio “Personalidade da Tecnologia 2014”, na categoria “Internet”.",
            text_palesta: "",
            id: 14
        }, {
            title: "P vs. NP",
            nome_palestrante: "Prof. Paulo Feofiloff",
            start: new Date(2016, 7, 25, 14),
            end: new Date(2016, 7, 25, 14, 50),
            image: "images/15.jpg",
            text_pessoal: "Paulo Feofiloff concluiu o curso de engenharia eletrônica na Escola Politécnica da USP em 1969, concluiu o mestrado em matemática aplicada no IME em 1974, e obteve o título de Ph.D. em combinatória e otimização na Universidade de Waterloo (Canadá) em 1983. Foi professor no IME, onde lecionou disciplinas de graduação e pós-gradução em Análise de Algoritmos, Teoria dos Grafos, Estruturas de Dados, e Otimização Combinatória. Foi chefe dos Departamentos de Matemática Aplicada e Ciência da Computação do IME e diretor do Departamento de Informática da USP. Atualmente é professor sênior (mais conhecido como aposentado) no IME.",
            text_palesta: "P vs. NP é uma questão fundamental na teoria da computação. P é a classe dos problemas fáceis e NP a classe dos problemas razoáveis. Essas definições envolvem o conceito de algoritmos escaláveis (ou seja, rápidos) e a diferença entre verificar e encontrar a solução de um problema.<br>A relação entre P e NP pode ser resumida na pergunta É verdade que todo problema razoável é fácil?. Você ganha 1 milhão de dólares se provar que a resposta é SIM ou provar que a resposta é NÃO!<br>O ponto alto dessa teoria é a existência de problemas em NP que, embora pareçam simples e corriqueiros, englobam todos os outros. Quais as implicações práticas da existência desses superproblemas?",
            id: 15
        }, {
            title: "Computação Quântica",
            nome_palestrante: "Professores Cris e Gubi",
            start: new Date(2016, 7, 23, 15),
            end: new Date(2016, 7, 23, 15, 50),
            image: "",
            text_pessoal: "",
            text_palesta: "",
            id: 16
        }, {
            title: "Workshop Hackathon",
            nome_palestrante: "Renato Cordeiro Ferreira",
            start: new Date(2016, 7, 25, 16, 30),
            end: new Date(2016, 7, 25, 18, 20),
            image: "",
            text_pessoal: "",
            text_palesta: "",
            id: 17
        }, {
            title: "Conversa com os professores do DCC",
            nome_palestrante: "Alunos da Graduação e Professores",
            start: new Date(2016, 7, 26, 14),
            end: new Date(2016, 7, 26, 18),
            image: "",
            text_pessoal: ".",
            text_palesta: "Você já pensou em participar de uma roda de conversa com diversos professores e alunos de todos os anos da graduação de departamento de ciências da computação? Pensa em fazer uma iniciação científica mas o professor da sua área de interesse é um mistério e você gostaria de conhercê-lo? <br> Esse evento é feito para isso. Todos os alunos e professores estão convidados para esse debate. Oportunidade única para saber o que ambos pensam e falam.",
            id: 18
        }, {
            title: "Palestra Ensino Médio",
            nome_palestrante: "Alunos da Graduação",
            start: new Date(2016, 7, 19, 15),
            end: new Date(2016, 7, 19, 17, 20),
            image: "",
            text_pessoal: ".",
            text_palesta: "Sabe a diferença de Ciências da Computação, Sistema da Informação ou Engenharia da Computação? Se não sabe, mas tem interesse em alguns desses cursos, compareça nessa evento. Nesse dia vamos receber alunos do ensino médio e vamos apresentar o nosso curso a eles. Além disso, teremos espaço para dúvidas e uma roda de conversa. Sejam bem vindos ao IME.",
            id: 19
        }];

        return {
            all: function() {
                return palestrantes;
            },
            id: function(id) {
                var k = -1;
                angular.forEach(palestrantes, function(index) {
                    if (index.id == id) {
                        k = index;
                    }
                });
                return k;
            }
        };
    });

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
            title: "Teoria dos Jogos",
            nome_palestrante: "Prof. Rafael",
            start: new Date(2016, 7, 23, 14),
            end: new Date(2016, 7, 23, 14, 50),
            image: "",
            text_pessoal: "",
            text_palesta: "",
            id: 5
        }, {
            title: "História da Computação",
            nome_palestrante: "Prof. Siang Wun Song",
            start: new Date(2016, 7, 22, 15),
            end: new Date(2016, 7, 22, 15, 50),
            image: "",
            text_pessoal: "",
            text_palesta: "",
            id: 6
        }, {
            title: "Máquina de Turing",
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
            title: "Deep Learning",
            nome_palestrante: "Claudio Pinhaez",
            start: new Date(2016, 7, 24, 16, 30),
            end: new Date(2016, 7, 24, 18, 20),
            image: "",
            text_pessoal: "",
            text_palesta: "",
            id: 12
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

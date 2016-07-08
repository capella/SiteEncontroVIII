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
            start: new Date(2016, 7, 10, 15), // anos mes+1, dia, hora, minuto
            end: new Date(2016, 8, 10, 15, 50),
            image: "",
            text_pessoal: "Afonso Paiva é professor assistente no Instituto de Ciências Matemáticas e de Computação da Universidade de São Paulo (ICMC-USP), São Carlos, Brasil. Ele possui doutorado (2007) em Matemática Aplicada pela Pontifícia Universidade Católica do Rio de Janeiro (PUC-Rio) e mestrado (2003) em Matemática pelo Instituto Nacional de Matemática Pura e Aplicada (IMPA), Rio de Janeiro, Brasil. De 2003 a 2007, ele trabalhou em projetos de pesquisa da PUC-Rio apoiados pela Petrobras. Atualmente, ele é membro do Grupo de Processamento Visual e Geométrico do ICMC-USP e suas áreas de pesquisa compreendem animação computacional, processamento e modelagem geométrica e métodos numéricos em computação gráfica.",
            text_palesta: "Nessa palestra vamos dar uma visão geral de alguns problemas em simulação de escoamento de fluidos na área da Computação Gráfica, principalmente em animação computacional de líquidos utilizando sistema de partículas. A primeira parte da palestra é relacionada a animação de líquidos viscosos, tais como polímeros, mel e xarope. Enquanto na segunda parte serão discutidos problemas geométricos que surgem em simulações baseadas em sistema de partículas, mais especificamente em detecção de partículas na interface de um líquido.",
            id: 1
        }, {
            title: "Contornando a Criptografia",
            nome_palestrante: "Diego Aranha",
            start: new Date(2016, 7, 10, 14),
            end: new Date(2016, 7, 10, 14, 50),
            image: "",
            text_pessoal: "É Professor Doutor na Universidade Estadual de Campinas (Unicamp) desde 2014. Tem experiência na área de Criptografia e Segurança Computacional, com ênfase em implementação eficiente de algoritmos criptográficos e análise de segurança de sistemas reais. Coordenou a primeira equipe de investigadores independentes capaz de detectar e explorar vulnerabilidades no software da urna eletrônica em testes controlados organizados pelo Tribunal Superior Eleitoral. É Bacharel em Ciência da Computação pela Universidade de Brasília (2005), Mestre (2007) e Doutor (2011) em Ciência da Computação pela Universidade Estadual de Campinas. Foi doutorando visitante por 1 ano na Universidade de Waterloo, Canadá, e Professor Adjunto por pouco mais de 2 anos no Departamento de Ciência da Computação da Universidade de Brasília. É membro do Comitê Consultivo da Conferência Internacional em Criptografia e Segurança da Informação na América Latina (LATINCRYPT) e da Comissão Especial de Segurança da Sociedade Brasileira de Computação (CESEG), responsável pelo Simpósio Brasileiro de Segurança da Informação e Sistemas Computacionais (SBSEG), tendo coordenado o Comitê de Programa na edição 2014 de ambos os eventos. Recebeu em 2016 os prêmios Google Latin America Research Award para pesquisa em privacidade e Inovadores com Menos de 35 Anos Brasil da MIT Technology Review por seu trabalho com o voto eletrônico.",
            text_palesta: "Atacantes racionais não atacam criptografia diretamente, buscando sempre contorná-la. Há inúmeros pontos em que técnicas criptográficas falham na prática, desde geração/distribuição insegura de chaves criptográficas e escolha inadequada de algoritmos/parâmetros, até o vazamento de informação crítica por canais laterais. Nessa palestra, serão discutidas formas de se explorar algumas dessas vulnerabilidades, ilustradas com casos reais do Brasil e do mundo.",
            id: 2
        }, {
            title: "Teoria dos Jogos",
            nome_palestrante: "Prof. Rafael",
            start: new Date(2016, 8, 10, 14),
            end: new Date(2016, 8, 10, 14, 50),
            image: "",
            text_pessoal: "",
            text_palesta: "",
            id: 5
        }, {
            title: "História da Computação",
            nome_palestrante: "Prof. Siang Wun Song",
            start: new Date(2016, 8, 10, 14),
            end: new Date(2016, 8, 10, 14, 50),
            image: "",
            text_pessoal: "",
            text_palesta: "",
            id: 6
        }, {
            title: "Máquina de Turing",
            nome_palestrante: "Prof. Setzer",
            start: new Date(2016, 8, 10, 14),
            end: new Date(2016, 8, 10, 14, 50),
            image: "",
            text_pessoal: "Valdemar Setzer foi um dos pioneiros no ensino e pesquisa em Ciência da Computação no Brasil. Formou-se em Engenharia Eletrônica no ITA e doutorou-se na USP, onde aposentou-se no cargo de Prof. Titular do Departamento de Ciência da Computação do IME. Foi professor nas Universidades do Texas em Austin, USA, e de Stuttgart na Alemanha. Exerceu inúmeros cargos de direção na USP, tendo sido o fundador do atual Centro de Computação Eletrônica (CCE) da USP e do Centro de Ensino de Computação do IME. Tem 12 livros publicados no Brasil e no exterior, destacando-se Meios Eletrônicos e Educação: uma visão alternativa (Ed. Escrituras) e Bancos de Dados: aprenda o que são, melhore seus conhecimentos, construa os seus (Ed. Edgard Blücher). Atuou como consultor em inúmeras empresas, entre elas o SERPRO, a PRODESP e a PROMON. Tem proferido inúmeras palestras sobre temas técnicos, educacionais e filosóficos.",
            text_palesta: "A Máquina de Turing (MT) foi inventada por Allan Turing em 1936 como um modelo computacional extremamente simples mas abstrato, isto é, ela existe em nossa mente, pode ser totalmente representada simbolicamente, e não pode ser construída. Nesta palestra será visto o que ela é, como \"funciona\" e como processa alguns algoritmos. Será também analisado quantos tipos de instrução ela tem e o que consegue computar com isso (tese de Church-Turing), e a motivação de Turing ao criá-la: resolver uma conjetura matemática de David Hilbert, o Entscheidugsproblem, o Problema da Decisão. Finalmente, veremos como a MT ajuda a compreender o que é um computador e suas limitações.",
            id: 9
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

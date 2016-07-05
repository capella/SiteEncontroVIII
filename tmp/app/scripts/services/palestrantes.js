'use strict';

/**
 * @ngdoc service
 * @name tmpApp.palestrantes
 * @description
 * # palestrantes
 * Service in the tmpApp.
 */
angular.module('tmpApp')
    .service('palestrantes', function() {
        var palestrantes = [{
            title: "O que fazer depois do BCC?",
            nome_palestrante: "Sérgio Vaz",
            start: new Date(2015, 8, 10, 15),
            end: new Date(2015, 8, 10, 15, 50),
            image: "images/1.jpeg",
            local: "Auditório Jacy Monteiro",
            text_pessoal: "Sérgio Vaz, ex-aluno do BCC, turma de 1995, Gerente de Tecnologia da empresa Funcional Card, responsável por uma equipe de 30 colaboradores e sistemas focados na área de saúde. Já gerenciou equipes multidisciplinares, soluções para ERP, Sistemas em Tempo Real de dados financeiros e tratamento de notícias.",
            text_palesta: "Um bom profissional não é avaliado somente por sua capacidade técnica, mas também por muitas competências e comportamentos essenciais para o bom funcionamento e sucesso de um time e da própria corporação. Sergio Vaz, ex-BCC, discutirá algumas dicas profissionais aos alunos do BCC, baseadas em sua experiência de mais de 15 anos gerenciando equipes de desenvolvimento.",
            url: "#/info/1",
            palestra: 1,
            id: 1
        }, {
            title: "Algoritmos para compressão de dados",
            nome_palestrante: "Eduardo Sany Laber",
            start: new Date(2015, 8, 10, 14),
            end: new Date(2015, 8, 10, 14, 50),
            image: "images/2.jpg",
            local: "Auditório Jacy Monteiro",
            text_pessoal: "Eduardo Sany Laber se  formou em engenharia de computação pela PUC-RIO em 1996 e obteve seu doutorado  pela mesma instituição em 1999.  De 1999 a 2001, Eduardo foi recém-doutor na COPPE-UFRJ e desde então é professor do departamento de informática da PUC-RIO. Dentre as suas áreas de interesse em pesquisa destacam-se algoritmos, compressão de dados e aprendizado de máquina. Ao longo de sua carreira, Eduardo publicou cerca de 30 artigos em periódicos internacionais, orientou várias dissertações de mestrado e teses de doutorado, algumas delas premiadas. Além disso, realizou trabalhos de consultoria, utilizando algoritmos e métodos quantitativos, para diferentes setores da indústria como mercado financeiro, setor de óleo e gás e setor de midia digital/comércio eletrônico.",
            text_palesta: "A técnica de compressão de dados é amplamente utilizada em nosso dia a dia tanto  para reduzir o espaço necessário para armazenar dados / informações em meios digitais assim como  para aumentar a velocidade de transmissão de dados via rede.  A ideia básica é eliminar a redundância que existe no dado. Como exemplo, para codificar a a cadeia de 13 caracteres 'AAAAAAABBBBBB' de forma compacta podemos utilizar o código 7A6B de 4 caracteres.<br>Os algoritmos para   compressão  de dados podem ser divididos  em dois grandes grupos: algoritmos com perda de informação e algoritmos sem perda de informação. Nessa palestra discutimos o problema de compressão de dados e apresentamos os códigos de Huffman e a transformada de Burrows-Weeler que são componentes importantes do Bzip-2, um software bastante eficiente/eficaz para compressão sem perda.",
            url: "#/info/2",
            palestra: 1,
            id: 2
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

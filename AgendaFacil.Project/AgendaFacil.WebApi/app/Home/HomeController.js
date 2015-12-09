'use strict';
app.controller('HomeCtrl', function ($scope, $rootScope, $location, tratamentoService, profissionalService, agendaService) {


    var carregarGraficos = function ($scope) {
        //criando variaveis para carregar com as informações específicas
        var mesAno = [], ganhoMes = [], descricaoTratamentoMes = [], qtdeTratamento = [], descricaoTratamento = [], valorTratamento = [],
            profissionais = [], nomeProfi = [], qtdAgendasProfi = [], temp = 0;

        //Carregando Tratamentos
        tratamentoService.getTratamentos().then(function (results) {
            for (var i = 0; i < results.data.length; i++) {
                descricaoTratamento[i] = results.data[i].Descricao;
                valorTratamento[i] = results.data[i].Valor;
            };
        }, function (error) {
            errorBox('Erro ao Carregar Lista de Tratamento!');
        });


        // Carrega gráfico: quantidade de tratamentos do mês
        agendaService.obterAgendamentosMes().then(function (results) {

            for (var i = 0; i < results.data.length; i++) {
                descricaoTratamentoMes[i] = results.data[i].Key;
                qtdeTratamento[i] = results.data[i].Count;
            };
        }, function (error) {
            errorBox('Erro ao Carregar Grafico Tratamento Mes!');
        });

        // Carrega gráfico: Ganhos do Ano Atual
        agendaService.obterGanhosAnoAtual().then(function (results) {

            for (var i = 0; i < results.data.length; i++) {
                var valor = results.data[i].Sum;
                ganhoMes[i] = valor.toFixed(2);

                switch (results.data[i].Key) {
                    case 1: mesAno[i] = "Janeiro"; break;
                    case 2: mesAno[i] = "Fevereiro"; break;
                    case 3: mesAno[i] = "Março"; break;
                    case 4: mesAno[i] = "Abril"; break;
                    case 5: mesAno[i] = "Maio"; break;
                    case 6: mesAno[i] = "Junho"; break;
                    case 7: mesAno[i] = "Julho"; break;
                    case 8: mesAno[i] = "Agosto"; break;
                    case 9: mesAno[i] = "Setembro"; break;
                    case 10: mesAno[i] = "Outubro"; break;
                    case 11: mesAno[i] = "Novembro"; break;
                    case 12: mesAno[i] = "Dezembro"; break;
                }
            };
        }, function (error) {
            errorBox('Erro ao Carregar Grafico Ganhos Ano Atual!');
        });

        //Carregando Profissionais
        profissionalService.getProfissionaisAgendas().then(function (results) {

            //colocando a resposta do server em uma variavel            
            for (var i = 0; i < results.data.length; i++) {
                profissionais[i] = results.data[i];
            }

         

            //Ordenando serviços
            for (var i = 0; i < profissionais.length; i++) {
                for (var c = 0; c < profissionais.length - 1; c++)
                    if (profissionais[c].length < profissionais[c + 1].length) {
                        temp = profissionais[c + 1]
                        profissionais[c + 1] = profissionais[c];
                        profissionais[c] = temp;
                    }
            }
            //Pegando a informação
            for (var i = 0; i < 2; i++) {
                nomeProfi[i] = profissionais[i][0].Nome;

                qtdAgendasProfi[i] = profissionais[i].length;
            }

            temp = 2;
            for (var i = profissionais.length - 2 ; i < profissionais.length; i++) {
                nomeProfi[temp] = profissionais[i][0].Nome;
                qtdAgendasProfi[temp] = profissionais[i].length;
                temp++;
            }

        }, function (error) {
            errorBox('Erro ao Carregar Lista de Profissionais!');
        });

        $scope.labels4 = mesAno;
        $scope.data4 = [ganhoMes];

        //Adicionando as informações nos gráficos
        $rootScope.activetab = $location.path();
        $scope.labels = nomeProfi;
        $scope.data = qtdAgendasProfi;


        $scope.labels2 = descricaoTratamento;
        $scope.series2 = ['Valor dos tratamentos'];
        $scope.data2 = [valorTratamento];

        // Gráfico de tratamentos por mês
        $scope.labels3 = descricaoTratamentoMes;
        $scope.data3 = qtdeTratamento;

    };

    carregarGraficos($scope);
});
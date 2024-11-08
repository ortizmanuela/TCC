document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("horario_consulta").addEventListener("input", function () {
        let valor = this.value.replace(/\D/g, ""); // Remove caracteres não numéricos

        if (valor.length >= 3) {
            // Insere ':' após os dois primeiros dígitos
            valor = valor.replace(/^(\d{2})(\d)/, "$1:$2");
        }

        // Limita para HH:MM
        this.value = valor.slice(0, 5);
    });


    const dataAtualEl = document.querySelector(".data-atual");
    const diasEl = document.querySelector(".dias");
    const anteriorEl = document.querySelector("#anterior");
    const proximoEl = document.querySelector("#proximo");

    let data = new Date();
    let ano = data.getFullYear();
    let mes = data.getMonth();

    // Função principal para renderizar o calendário
    function renderizarCalendario() {
        data.setFullYear(ano, mes, 1);
        const ultimoDiaDoMes = new Date(ano, mes + 1, 0).getDate();
        const primeiroDiaDaSemana = data.getDay();
        const ultimoDiaDoMesAnterior = new Date(ano, mes, 0).getDate();

        dataAtualEl.innerHTML = data.toLocaleDateString("pt-br", { month: "long", year: "numeric" });

        let dias = "";

        // Dias inativos do mês anterior
        for (let x = primeiroDiaDaSemana; x > 0; x--) {
            dias += `<li class="inativo">${ultimoDiaDoMesAnterior - x + 1}</li>`;
        }

        // Dias do mês atual
        for (let i = 1; i <= ultimoDiaDoMes; i++) {
            const isToday = i === new Date().getDate() && ano === new Date().getFullYear() && mes === new Date().getMonth();
            const agendado = consultaAgendada(i, mes + 1, ano) ? "agendado" : ""; // Verifica se há consulta nesse dia

            dias += `<li class="${isToday ? 'ativo' : ''} ${agendado}" onclick="abrirDia(${i}, ${mes + 1}, ${ano})">${i}</li>`;
        }

        diasEl.innerHTML = dias;
    }

    // Função para verificar se há uma consulta agendada em um dia específico
    function consultaAgendada(dia, mes, ano) {
        const consultas = JSON.parse(localStorage.getItem("consultas")) || [];
        return consultas.some(consulta => consulta.dia === dia && consulta.mes === mes && consulta.ano === ano);
    }

    // Exibir consultas agendadas na lista
    function exibirConsultas() {
        const consultas = JSON.parse(localStorage.getItem("consultas")) || [];
        const listaConsultasEl = document.getElementById("lista_consultas");

        listaConsultasEl.innerHTML = ""; // Limpa a lista antes de adicionar

        consultas.forEach(consulta => {
            const li = document.createElement("li");
            li.innerText = `Paciente: ${consulta.nome}, Horário: ${consulta.horario}, Data: ${consulta.dia}/${consulta.mes}/${consulta.ano}, Observações: ${consulta.observacoes}`;
            listaConsultasEl.appendChild(li);
        });
    }

    // Função para abrir o dia e salvar a data no localStorage
    window.abrirDia = function(dia, mes, ano) {
        localStorage.setItem("dataSelecionada", JSON.stringify({ dia, mes, ano }));
        document.getElementById("quadro_agendamento").style.display = "block"; // Exibe o modal de agendamento
    };

    // Função para validar e enviar o agendamento
    window.enviar = function() {
        const nomePaciente = document.getElementById("nome_paciente").value;
        const horarioConsulta = document.getElementById("horario_consulta").value;
        const observacoes = document.getElementById("observacoes").value;

        if (!nomePaciente || !horarioConsulta) {
            alert("Por favor, preencha o nome do paciente e o horário da consulta.");
            return;
        }

        const regexHorario = /^([01]\d|2[0-3]):([0-5]\d)$/;
        if (!regexHorario.test(horarioConsulta)) {
            alert("Por favor, insira um horário válido no formato HH:MM.");
            return;
        }

        const dataSelecionada = JSON.parse(localStorage.getItem("dataSelecionada"));
        if (!dataSelecionada) {
            alert("Nenhuma data selecionada!");
            return;
        }

        const agendamento = {
            nome: nomePaciente,
            horario: horarioConsulta,
            observacoes: observacoes,
            dia: dataSelecionada.dia,
            mes: dataSelecionada.mes,
            ano: dataSelecionada.ano
        };

        // Armazena os agendamentos no localStorage (simulação de banco de dados)
        const consultas = JSON.parse(localStorage.getItem("consultas")) || [];
        consultas.push(agendamento);
        localStorage.setItem("consultas", JSON.stringify(consultas));

        alert("Agendamento confirmado com sucesso!");

        // Limpa os campos após o agendamento
        document.getElementById("nome_paciente").value = "";
        document.getElementById("horario_consulta").value = "";
        document.getElementById("observacoes").value = "";
        document.getElementById("quadro_agendamento").style.display = "none";

        renderizarCalendario(); // Atualiza o calendário para refletir o novo agendamento
        exibirConsultas();      // Atualiza a lista de consultas
    };

    anteriorEl.addEventListener("click", () => {
        mes--;
        if (mes < 0) {
            mes = 11;
            ano--;
        }
        renderizarCalendario();
    });

    proximoEl.addEventListener("click", () => {
        mes++;
        if (mes > 11) {
            mes = 0;
            ano++;
        }
        renderizarCalendario();
    });

    renderizarCalendario();
    exibirConsultas();
});

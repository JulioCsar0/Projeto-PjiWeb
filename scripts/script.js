// Função para carregar monitorias do localStorage
function carregarMonitorias() {
    const monitorias = JSON.parse(localStorage.getItem('monitorias')) || [];
    return monitorias;
}

// Função para salvar monitorias no localStorage
function salvarMonitorias(monitorias) {
    localStorage.setItem('monitorias', JSON.stringify(monitorias));
}

// Adiciona uma nova monitoria na página 3
function adicionarMonitoria(event) {
    event.preventDefault();

    const disciplina = document.getElementById('disciplina').value;
    const monitor = document.getElementById('monitor').value;
    const data = document.getElementById('data').value;
    const horarioInicio = document.getElementById('horarioInicio').value;
    const local = document.getElementById('local').value; // Novo campo

    const monitorias = carregarMonitorias();
    monitorias.push({ disciplina, monitor, data, horarioInicio, local });
    salvarMonitorias(monitorias);

    alert('Monitoria adicionada com sucesso!');
    window.location.href = 'page2.html'; // volta para a página 2
}

// lista de eventos para a página 3
const formMonitoria = document.getElementById('form-monitoria');
if (formMonitoria) {
    formMonitoria.addEventListener('submit', adicionarMonitoria);
}

// Atualiza a lista de monitorias na página 2
function atualizarListaMonitorias() {
    const monitorias = carregarMonitorias();
    const listaMonitorias = document.getElementById('lista-monitorias');

    if (listaMonitorias) {
        listaMonitorias.innerHTML = '';
        monitorias.forEach((monitoria, index) => {
            const li = document.createElement('li');
            li.textContent = `${monitoria.disciplina} - ${monitoria.monitor} (${monitoria.data} às ${monitoria.horarioInicio}) - Local: ${monitoria.local || ''}`; // Mostra local
            listaMonitorias.appendChild(li);
        });
    }
}

// Inicialização para a pagina 2
if (document.getElementById('lista-monitorias')) {
    atualizarListaMonitorias();
}


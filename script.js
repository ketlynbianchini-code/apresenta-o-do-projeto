// Função para expandir/recolher detalhes do impacto da descoberta
function toggleDetails(id) {
    const element = document.getElementById(id);
    element.classList.toggle('hidden');
}

// Adicionar novos insights interativamente
document.getElementById('addBtn').addEventListener('click', function() {
    const input = document.getElementById('noteInput');
    const text = input.value.trim();

    if (text !== '') {
        const list = document.getElementById('notesList');
        const li = document.createElement('li');
        
        li.innerHTML = `
            <span>💡 ${text}</span>
            <button onclick="this.parentElement.remove()" style="background:none; border:none; color:red; cursor:pointer;">❌</button>
        `;
        
        list.appendChild(li);
        input.value = '';
    }
});

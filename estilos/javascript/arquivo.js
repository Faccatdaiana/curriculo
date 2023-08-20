function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const button = document.getElementById(`show-${sectionId}`);
    
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
        button.textContent = 'Esconder';
    } else {
        section.classList.add('hidden');
        button.textContent = 'Mostrar Mais';
    }
}
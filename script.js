// Handle project card clicks
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card[data-pdf]');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const pdfFile = card.getAttribute('data-pdf');
            if (pdfFile) {
                window.open(pdfFile, '_blank');
            }
        });
    });

    // Add keyboard navigation
    projectCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
});

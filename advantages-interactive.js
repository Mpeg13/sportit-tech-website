// Простой и надежный toggle для кнопок "Подробнее"
document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.advantage-toggle');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const targetId = this.getAttribute('data-target');
            const details = document.getElementById(`details-${targetId}`);
            const card = this.closest('.advantage-card');
            
            if (!details) return;
            
            // Проверяем, открыт ли уже этот блок
            const isCurrentlyActive = details.classList.contains('active');
            
            // Закрываем ВСЕ другие блоки
            document.querySelectorAll('.advantage-details').forEach(d => {
                d.classList.remove('active');
                d.style.display = 'none';
            });
            
            // Сбрасываем ВСЕ кнопки
            document.querySelectorAll('.advantage-toggle').forEach(b => {
                b.classList.remove('active');
                const textSpan = b.querySelector('.toggle-text');
                const icon = b.querySelector('i');
                if (textSpan) textSpan.textContent = 'Подробнее';
                if (icon) {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                }
            });
            
            // Если текущий блок был закрыт - открываем его
            if (!isCurrentlyActive) {
                details.classList.add('active');
                details.style.display = 'block';
                this.classList.add('active');
                
                const textSpan = this.querySelector('.toggle-text');
                const icon = this.querySelector('i');
                if (textSpan) textSpan.textContent = 'Скрыть';
                if (icon) {
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                }
                
                card.classList.add('expanded');
            } else {
                // Если был открыт - закрываем
                card.classList.remove('expanded');
            }
        });
    });
    
    // Простая анимация при наведении
    const cards = document.querySelectorAll('.advantage-card.interactive');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('expanded')) {
                this.style.transform = 'translateY(-5px)';
                this.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('expanded')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });
});
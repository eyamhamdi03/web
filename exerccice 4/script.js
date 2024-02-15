
document.addEventListener('DOMContentLoaded', function() {
    const listeLi = document.querySelectorAll('li');
    listeLi.forEach(function(li) {
        li.addEventListener('click', function() {
            const color =getRandomColor();
            li.style.color= color;
        });

    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});

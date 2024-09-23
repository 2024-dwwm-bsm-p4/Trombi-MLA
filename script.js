
    const pin = document.getElementById('pin-philippe');
    const aside = document.querySelector('aside');

    pin.addEventListener('click', () => {
        aside.style.display = aside.style.display === 'none' || aside.style.display === '' ? 'flex' : 'none';
    });


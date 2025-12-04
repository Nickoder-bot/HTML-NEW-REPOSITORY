document.addEventListener('DOMContentLoaded', function() 
{
   
    const images = document.querySelectorAll('img[data-description]');

  
    const popup = document.createElement('div');
    popup.classList.add('image-popup');
    document.body.appendChild(popup);

    images.forEach(img => {
        img.addEventListener('click', function(e) {
            e.stopPropagation();

            
            popup.textContent = img.dataset.description;

            const rect = img.getBoundingClientRect();

            
            popup.style.top = (window.scrollY + rect.top + rect.height / 4) + 'px';
            popup.style.left = (window.scrollX + rect.right + 10) + 'px';
            popup.style.display = 'block';
        });
    });

    
    document.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});

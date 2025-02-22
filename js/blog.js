// Blog functionality
document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchInput = document.getElementById('blog-search');
    const blogPosts = document.querySelectorAll('.blog-card');

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        
        blogPosts.forEach(post => {
            const title = post.querySelector('h2').textContent.toLowerCase();
            const excerpt = post.querySelector('.blog-excerpt').textContent.toLowerCase();
            const tags = Array.from(post.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
            
            const isMatch = title.includes(searchTerm) || 
                           excerpt.includes(searchTerm) ||
                           tags.some(tag => tag.includes(searchTerm));
            
            post.style.display = isMatch ? 'block' : 'none';
        });
    });

    // Lazy loading for images
    const lazyImages = document.querySelectorAll('img.lazy-load');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy-load');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // Tag filtering
    const tagFilters = document.getElementById('tag-filters');
    const allTags = new Set();

    // Collect all unique tags
    document.querySelectorAll('.tag').forEach(tag => {
        allTags.add(tag.textContent);
    });

    // Create tag filter buttons
    allTags.forEach(tag => {
        const button = document.createElement('button');
        button.className = 'tag-filter';
        button.textContent = tag;
        button.addEventListener('click', () => filterByTag(tag));
        tagFilters.appendChild(button);
    });

    function filterByTag(tag) {
        blogPosts.forEach(post => {
            const postTags = Array.from(post.querySelectorAll('.tag')).map(t => t.textContent);
            post.style.display = postTags.includes(tag) ? 'block' : 'none';
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {

    // =====================================================
    // 24 HOLI T-SHIRT PRODUCTS DATABASE (with real images)
    // =====================================================
    const products = [
        { id: 1,  name: 'Color Splash Classic',   price: 599,  badge: 'Bestseller', emoji: '🎨', image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=600&auto=format&fit=crop' },
        { id: 2,  name: 'Neon Mandala',           price: 649,  badge: 'New',        emoji: '🌀', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600&auto=format&fit=crop' },
        { id: 3,  name: 'Vibrant Tie-Dye',        price: 699,  badge: 'Hot',        emoji: '🌈', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=600&auto=format&fit=crop' },
        { id: 4,  name: 'Rainbow Warrior',         price: 749,  badge: null,         emoji: '⚡', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=600&auto=format&fit=crop' },
        { id: 5,  name: 'Pink Powder Bomb',        price: 599,  badge: 'Sale',       emoji: '💣', image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=600&auto=format&fit=crop' },
        { id: 6,  name: 'Gulaal Galaxy',           price: 799,  badge: 'Premium',   emoji: '🌌', image: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=600&auto=format&fit=crop' },
        { id: 7,  name: 'Sunset Holi',            price: 649,  badge: 'New',        emoji: '🌅', image: 'https://images.unsplash.com/photo-1512327536842-5aa37d1ba3e3?q=80&w=600&auto=format&fit=crop' },
        { id: 8,  name: 'Ocean Color Wave',       price: 699,  badge: null,         emoji: '🌊', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=600&auto=format&fit=crop' },
        { id: 9,  name: 'UV Neon Blast',          price: 899,  badge: 'Limited',    emoji: '🔋', image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=600&auto=format&fit=crop' },
        { id: 10, name: 'Holi Warrior Classic',   price: 549,  badge: null,         emoji: '⚔️', image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=600&auto=format&fit=crop' },
        { id: 11, name: 'Magenta Storm',          price: 679,  badge: 'Hot',        emoji: '🌪️', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop' },
        { id: 12, name: 'Kesar Overload',         price: 599,  badge: null,         emoji: '🟡', image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=600&auto=format&fit=crop' },
        { id: 13, name: 'Bhaang Squad Tee',       price: 649,  badge: 'Funny',      emoji: '😂', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=600&auto=format&fit=crop' },
        { id: 14, name: 'Festival of Love',       price: 749,  badge: 'Couple',     emoji: '❤️', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=600&auto=format&fit=crop' },
        { id: 15, name: 'Indigo Splash',          price: 699,  badge: null,         emoji: '💜', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop' },
        { id: 16, name: 'Holi Minimalist',        price: 499,  badge: 'Basic',      emoji: '🤍', image: 'https://images.unsplash.com/photo-1622445272461-c6580cab8755?q=80&w=600&auto=format&fit=crop' },
        { id: 17, name: 'Riot of Colors',         price: 799,  badge: 'Premium',    emoji: '🎇', image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?q=80&w=600&auto=format&fit=crop' },
        { id: 18, name: 'Kids Holi Fun',          price: 449,  badge: 'Kids',       emoji: '🧒', image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=600&auto=format&fit=crop' },
        { id: 19, name: 'Glow in Dark Holi',      price: 999,  badge: 'UV',         emoji: '✨', image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=600&auto=format&fit=crop&sat=-100&hue-rotate=200' },
        { id: 20, name: 'Abstract Holi Art',      price: 849,  badge: 'Artist Ed.', emoji: '🎭', image: 'https://images.unsplash.com/photo-1560243563-062bfc001d68?q=80&w=600&auto=format&fit=crop' },
        // 4 New Products
        { id: 21, name: 'Powder Rush Unisex',     price: 729,  badge: 'New',        emoji: '💥', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop' },
        { id: 22, name: 'Holi Graffiti Tee',      price: 849,  badge: 'Streetwear', emoji: '🖌️', image: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?q=80&w=600&auto=format&fit=crop' },
        { id: 23, name: 'Spring Bloom Special',   price: 679,  badge: null,         emoji: '🌸', image: 'https://images.unsplash.com/photo-1602810316693-3667c854239a?q=80&w=600&auto=format&fit=crop' },
        { id: 24, name: 'Holi King Edition',      price: 1099, badge: '👑 Limited',  emoji: '👑', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600&auto=format&fit=crop' },
    ];

    // =====================================================
    // RENDER PRODUCTS INTO THE GRID
    // =====================================================
    const grid = document.getElementById('product-grid');
    if (grid) {
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-image-wrap">
                    ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                    <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy" onerror="this.parentElement.style.background='linear-gradient(135deg,#ff007f,#ff8c00)';this.style.display='none'">
                    <div class="product-img-overlay">
                        <span>${product.emoji}</span>
                    </div>
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="price">₹${product.price}</p>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // =====================================================
    // ADD TO CART LOGIC
    // =====================================================
    const cartCountElement = document.querySelector('.cart-count');
    let cartCount = 0;

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const button = e.target;
            cartCount++;
            cartCountElement.textContent = cartCount;

            const originalText = button.textContent;
            button.textContent = '✓ Added!';
            button.style.background = '#00f2fe';
            button.style.color = '#0f172a';
            button.style.borderColor = '#00f2fe';
            button.style.fontWeight = '700';

            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = 'white';
                button.style.color = 'var(--bg-color)';
                button.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                button.style.fontWeight = '';
            }, 1200);
        }
    });

    // =====================================================
    // CHATBOT TOGGLE LOGIC
    // =====================================================
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatIcon = chatbotToggle.querySelector('.chat-icon');
    const closeIcon = chatbotToggle.querySelector('.close-icon');

    chatbotToggle.addEventListener('click', () => {
        const isActive = chatbotWindow.classList.toggle('active');
        if (isActive) {
            chatIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        } else {
            chatIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    });

});

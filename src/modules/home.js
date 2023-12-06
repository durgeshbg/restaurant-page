export default function home() {
    const header = document.querySelector('.tab-header');
    const description = document.querySelector('.tab-description');
    header.textContent = 'Home';
    description.innerHTML =
        "<div class='home-section'>\
        <h2>Namaste!</h2>\
        Welcome to a culinary paradise where flavors dance on your \
        palate and every bite tells a tale of tradition and expertise. \
        Step into the world of our biryani restaurant, where we elevate \
        this timeless dish to an art form. Immerse yourself in the \
        aromatic symphony of spices, tender meat, and fragrant basmati \
        rice – a sensory journey that transcends the ordinary.\
        </div>\
        <div class='home-section'>\
        <h2>The Ambiance</h2>\
        Our biriyani restaurant offers more than just a meal; \
        it provides an immersive dining experience. The ambiance \
        is carefully crafted to transport you to the heart of \
        culinary excellence. From the warm, earthy tones to the subtle \
        aroma of spices wafting through the air, every detail is designed \
        to enhance your dining pleasure. Whether you're celebrating a \
        special occasion or simply craving a comforting meal, \
        our restaurant provides the perfect setting.\
        </div>\
        <div class='home-section'>\
        <h2>Community and Events</h2>\
        Embark on a gastronomic journey at our biryani haven, \
        where tradition meets innovation, and every meal is a \
        celebration of flavors. Whether you're a biryani \
        aficionado or a newcomer to this culinary delight, \
        our restaurant promises an experience that lingers \
        on your taste buds long after the last bite. \
        Come, savor the perfection that is biryani at its finest.\
        </div>";
}

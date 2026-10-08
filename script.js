// ==========================================
// 1. ऑटो फोटो स्लाइडर कोड
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 3000; // 3000ms = 3 सेकंड (बदलने का समय)

    // सुरक्षा के लिए: अगर पेज पर स्लाइडर न हो तो कोड आगे न बढ़े
    if (slides.length === 0) return;

    function nextSlide() {
        // वर्तमान स्लाइड से 'active' क्लास हटाएँ
        slides[currentSlide].classList.remove('active');
        
        // अगली स्लाइड पर जाएँ
        currentSlide = (currentSlide + 1) % slides.length;
        
        // अगली स्लाइड में 'active' क्लास जोड़ें
        slides[currentSlide].classList.add('active');
    }

    // हर 3 सेकंड में nextSlide फंक्शन चलाएँ
    setInterval(nextSlide, slideInterval);
});


// ==========================================
// 2. एडमिशन फॉर्म सबमिशन कोड (सुरक्षित तरीका)
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('admissionForm');

    // यह कंडीशन बहुत ज़रूरी है: कोड तभी चलेगा जब पेज पर फॉर्म मौजूद होगा
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // पेज को रीलोड होने से रोकना
            
            // फॉर्म का डेटा निकालना
            const studentName = document.getElementById('studentName').value;
            const parentName = document.getElementById('parentName').value;
            const className = document.getElementById('className').value;
            const mobileNumber = document.getElementById('mobileNumber').value;
            
            // अभिभावक को सफलता का मैसेज दिखाना
            alert(`धन्यवाद! ${studentName} का कक्षा ${className} के लिए प्रवेश आवेदन सफलतापूर्वक सबमिट हो गया है। स्कूल प्रशासन जल्द ही आपसे संपर्क करेगा।`);
            
            form.reset(); // फॉर्म को खाली करना
        });
    }
});

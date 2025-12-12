document.addEventListener('DOMContentLoaded', () => {
    // Snowfall Effect
    const snowContainer = document.getElementById('snow-container');
    const snowflakeCount = 50;
    const snowflakeChars = ['❄', '❅', '❆', '•'];

    for (let i = 0; i < snowflakeCount; i++) {
        createSnowflake();
    }

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)];
        
        // Randomize positioning and animation params
        const startLeft = Math.random() * 100;
        const animationDuration = Math.random() * 5 + 5; // 5-10s
        const animationDelay = Math.random() * 5;
        const size = Math.random() * 0.8 + 0.5; // 0.5em - 1.3em
        
        snowflake.style.left = `${startLeft}vw`;
        snowflake.style.animationDuration = `${animationDuration}s`;
        snowflake.style.animationDelay = `${animationDelay}s`;
        snowflake.style.fontSize = `${size}em`;
        
        snowContainer.appendChild(snowflake);
    }

    // Smooth Scrolling for Anchors (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Validation Enhancement
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            const grandsonCheckbox = document.getElementById('favorite');
            if (!grandsonCheckbox.checked) {
                e.preventDefault();
                // Shake animation for the unchecked box logic could go here
                // But native 'required' usually handles focus
                grandsonCheckbox.parentElement.style.animation = 'none';
                grandsonCheckbox.parentElement.offsetHeight; // trigger reflow
                grandsonCheckbox.parentElement.style.animation = 'shake 0.5s';
            }
        });
    }
});

// Add shake keyframes dynamically cause I forgot them in CSS
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}
`;
document.head.appendChild(styleSheet);

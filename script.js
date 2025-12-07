// تأثير التنقل بين الصفحات (fade)
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
        if (this.href.includes(".html")) {
            e.preventDefault();
            document.body.style.opacity = "0";
            setTimeout(() => {
                window.location = this.href;
            }, 450);
        }
    });
});

// دالة جلب السعر من PRICES
function getPrice(keyPath) {
    const parts = keyPath.split('.');
    let value = PRICES;
    for (const p of parts) {
        if (value && value.hasOwnProperty(p)) value = value[p];
        else return "غير متوفر";
    }
    return value + " جنيه";
}

// عند تحميل الصفحة: ملء كل عناصر الأسعار data-price-key
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-price-key]").forEach(el => {
        const key = el.getAttribute("data-price-key");
        el.innerText = getPrice(key);
    });
});

// Popup system
function openPopup(title, desc, price) {
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-desc").innerText = desc;
    document.getElementById("popup-price").innerText = price;
    document.getElementById("popup").style.display = "flex";
}

// Close popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

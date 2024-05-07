function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    
    var nameRegex = /^[^\d]{1,100}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;

    if (!nameRegex.test(name)) {
        alert("Por favor, insira um nome válido (sem números).");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Por favor, insira um email válido.");
        return false;
    }

    if (!phoneRegex.test(phone)) {
        alert("Por favor, insira um telefone válido (com DDD no formato (00) 00000-0000).");
        return false;
    }

    alert("Formulário válido!");
    return true;
}

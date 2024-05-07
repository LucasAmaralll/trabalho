# trabalho - Validador de Formulário com Expressões Regulares

### Campos Validados:
1. Nome: Deve conter no máximo 100 caracteres e não pode conter números.
2. Email: Deve seguir o padrão de email válido.
3. Telefone: Deve seguir o padrão brasileiro de telefone com DDD.

### Expressões Regulares Utilizadas:
- `nameRegex`: /^[^\d]+$/ - Não pode conter números.
- `emailRegex`: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ - Email válido.
- `phoneRegex`: /^\(\d{2}\) \d{5}-\d{4}$/ - Telefone com DDD (formato brasileiro).

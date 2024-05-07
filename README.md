# trabalho - Validador de Formulário com Expressões Regulares

### Campos Validados:
1. Nome: Deve conter no máximo 100 caracteres e não pode conter números.
2. Email: Deve seguir o padrão de email válido.
3. Telefone: Deve seguir o padrão brasileiro de telefone com DDD.

### Expressões Regulares Utilizadas:

1. **nameRegex**: /^[^\d]+$/ - Não pode conter números.
   - Explicação: Esta expressão regular nega qualquer dígito (\d) no campo do nome. O início (^) e o fim ($) garantem que a correspondência ocorra em toda a string, e o símbolo "+" indica que deve haver um ou mais caracteres que não são dígitos. Portanto, o campo do nome não pode conter números.

2. **emailRegex**: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ - Email válido.
   - Explicação: Esta expressão regular valida o formato básico de um endereço de email. Ela garante que o email contenha pelo menos um caractere antes do "@" e pelo menos um caractere antes e depois do ponto final no domínio. Além disso, nega espaços em branco (\s) em qualquer parte do endereço de email.

3. **phoneRegex**: /^\(\d{2}\) \d{5}-\d{4}$/ - Telefone com DDD (formato brasileiro).
   - Explicação: Esta expressão regular valida o formato brasileiro de telefone com DDD. Ela requer que o número comece com "(" seguido por dois dígitos para o DDD, então um espaço em branco, seguido por cinco dígitos para o prefixo do número, um hífen "-", e finalmente mais quatro dígitos para a parte final do número.

Essas expressões regulares são usadas para validar os campos do formulário em JavaScript antes de enviar os dados para processamento. Ao garantir que os dados inseridos pelo usuário estejam em um formato esperado, podemos melhorar a experiência do usuário e evitar erros no processamento dos dados.

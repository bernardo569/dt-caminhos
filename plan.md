# Plano — DT.CAMINHOS

## Produto e implementação

Site institucional estático, responsivo e orientado à conversão para a DT.CAMINHOS PRESTAÇÃO DE SERVIÇOS, LDA, agora posicionada na área de energia e instalações elétricas. A implementação usa HTML semântico, CSS moderno e JavaScript vanilla, sem dependências externas de runtime. O frontend é servido por um servidor Node mínimo na porta 3000, com fallback seguro para os ficheiros estáticos.

### Estrutura do projeto

- `index.html`: estrutura semântica, conteúdo, SEO, Open Graph e Schema.org.
- `styles.css`: tokens de marca, composição editorial, responsividade, estados de interação e animações.
- `script.js`: menu móvel, sticky header, acordeão acessível, IntersectionObserver, carrossel de projetos e validação do formulário.
- `server.js`: servidor estático Node compatível com a porta configurada.
- `public/`: imagens originais, favicon e `manus-routes.json`.
- `app.config.ts`: metadados do projeto.
- `TODO.md`: critérios de entrega e acompanhamento.

## Direção visual

- **Movimento:** brutalismo editorial suave / engenharia contemporânea, inspirado em websites industriais premium, com escala tipográfica grande e composição assimétrica.
- **Princípios:** precisão visual, confiança operacional, respiro generoso e conversão sem ruído.
- **Cor:** branco e cinza técnico criam sensação de limpeza; azul petróleo profundo (#0D2136) comunica segurança; amarelo elétrico (#E0A32A) é o detalhe próprio da marca, usado como pulso de energia em ações, linhas e acentos.
- **Layout:** portal institucional claro, inspirado na organização de serviços digitais do site de referência fornecido pelo utilizador, com cabeçalho informativo, faixa de destaque, pesquisa rápida, atalhos de serviço, apresentação institucional, lista de serviços, actualizações e contacto. A identidade, textos, cores e imagens permanecem próprios da DT.CAMINHOS.
- **Elementos assinatura:** monograma geométrico “D/C” atravessado por uma barra de energia, micro-rótulos em caixa alta com tracking, e linhas finas amarelas como marcadores de circuito.
- **Interação:** cada interação deve parecer uma confirmação operacional: hover curto, foco evidente, acordeão previsível, botões com seta e scroll suave.
- **Animação:** hero com revelação vertical e fade; secções entram com deslocamento de 24px; cards usam stagger discreto; imagens têm revelação sem zoom agressivo; tudo é desligado ou reduzido com `prefers-reduced-motion: reduce`.
- **Tipografia:** Inter como sans-serif institucional única para títulos, navegação, cartões e corpo; pesos 400–800, títulos firmes e compactos, texto com largura limitada e leitura confortável.
- **Essência da marca:** serviços técnicos e operacionais com execução clara para empresas e particulares em Luanda — direta, competente e próxima. Personalidade: sólida, precisa, resolutiva.
- **Voz:** objetiva, segura e humana. Exemplos: “A energia certa começa antes da instalação.” / “Fale connosco e transforme uma necessidade técnica em continuidade.”
- **Wordmark:** “DT.CAMINHOS” em caixa alta com o monograma D/C separado por uma barra diagonal, remetendo a rotas e continuidade.
- **Cor proprietária:** Amarelo Elétrico Caminhos #E0A32A.

## Conteúdo e experiência

1. Cabeçalho institucional com faixa de localização/NIF, logótipo, navegação, menu móvel e CTA de contacto.
2. Hero de portal com promessa de serviço, imagem técnica, pesquisa rápida funcional e faixa de actualização.
3. Atalhos de entrada para instalação, serviços técnicos e acompanhamento de operações.
4. Apresentação institucional com foco em diagnóstico, execução rigorosa e proximidade.
5. Lista vertical com dez serviços sem fotografias nos cartões: instalações elétricas, auditoria energética, manutenção de quadros, sistemas de backup, iluminação técnica, segurança/terra, telecomunicações com redes estruturadas, topologias, tomadas de rede e bastidores, rede de incêndio com deteção de fumaça/térmica, controlo de acesso e GTC/AVAC.
6. Bloco de compromisso com segurança, eficiência, continuidade e acompanhamento.
7. Área de actualizações com conteúdos próprios sobre energia, telecomunicações e sistemas técnicos.
8. CTA final com formulário, links `tel:` e `https://wa.me/244972707935`.
9. Rodapé com NIF 5002684187, localização ANGOLA, LUANDA, CACUACO, BOA ESPERANÇA, RUA DO BFA e contacto 972707935.

## Requisitos técnicos

- Rota declarada em `public/manus-routes.json`.
- Sem overflow horizontal em 390px.
- Formulário valida nome, telefone e mensagem; no envio mostra uma mensagem clara e oferece contacto direto sem fingir envio para um backend inexistente.
- Imagens com `loading="lazy"`, dimensões reservadas, `object-fit` e `object-position` definidos.
- Sem dependência de bases de dados, autenticação ou APIs externas.
- Configuração de build estático sem dependências privadas.
- Publicação estática: o comando copia `index.html`, `styles.css`, `script.js` e `favicon.svg` para `public/`, cujo conteúdo é publicado como saída final.

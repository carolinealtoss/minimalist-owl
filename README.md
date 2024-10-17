
# MinimalistOwl

**MinimalistOwl** é um tema minimalista desenvolvido para o gerador de sites estáticos **Pelican**. Ele oferece um layout limpo e moderno, com foco em tipografia e simplicidade, ideal para blogs de desenvolvimento, portfólios, ou qualquer site que deseje uma estética organizada e sem distrações.

## Características

- Design responsivo e minimalista.
- Tipografia limpa e de fácil leitura.
- Personalização através de variáveis no `pelicanconf.py`.
- Layout otimizado para leitura de postagens.

## Requisitos

- **Pelican** 4.x ou superior.
- Conhecimento básico em configuração de arquivos `.py` para customizar o tema.

## Instalação

1. Clone o repositório do tema no diretório `themes/` do seu projeto Pelican:

   ```bash
   cd caminho/para/seu/projeto/pelican
   git clone https://github.com/usuario/minimalist-owl.git themes/minimalist-owl
   ```

2. No arquivo `pelicanconf.py`, defina o tema como **MinimalistOwl**:

   ```python
   THEME = 'themes/minimalist-owl'
   ```

## Configurações Opcionais

O tema **MinimalistOwl** pode ser customizado através das seguintes variáveis que devem ser adicionadas ao arquivo `pelicanconf.py`:

### Cor personalizada para o tema

Você pode definir uma cor personalizada para o tema através da variável `CUSTOM_COLOR`. Por exemplo, se quiser usar uma cor específica no design:

```python
CUSTOM_COLOR = "#D98695"
```

### Exibir o ano atual automaticamente

Para mostrar o ano atual no rodapé, use a variável `CURRENT_YEAR` com o módulo `datetime` do Python:

```python
from datetime import datetime
CURRENT_YEAR = datetime.now().year
```

### Subtítulo do site

Você pode adicionar um subtítulo abaixo do nome do site, definindo a variável `SUBTITLE`:

```python
SUBTITLE = 'Desenvolvedora de Software'
```

## Customização Adicional

Além das variáveis personalizadas acima, você pode configurar outras opções no `pelicanconf.py` para ajustar o layout e a aparência do seu site.

### Exemplo Completo de Configuração no `pelicanconf.py`

```python
from datetime import datetime

AUTHOR = 'Caroline Altos'
SITENAME = 'Caroline Altos'
SITEURL = ''

THEME = 'themes/minimalist-owl'

CUSTOM_COLOR = "#D98695"
CURRENT_YEAR = datetime.now().year
SUBTITLE = 'Desenvolvedora de Software'

PATH = 'content'
TIMEZONE = 'America/Sao_Paulo'
DEFAULT_LANG = 'en'

DEFAULT_PAGINATION = 10
```

## Como Utilizar

1. Após configurar o tema no arquivo `pelicanconf.py`, gere o site normalmente:

   ```bash
   pelican content
   ```

2. Para visualizar o site localmente, use o seguinte comando:

   ```bash
   pelican --listen
   ```

3. Abra o navegador e acesse `http://localhost:8000` para ver o tema **MinimalistOwl** em ação.

## Licença

Este tema é distribuído sob a licença MIT. Sinta-se à vontade para modificá-lo e usá-lo em seus próprios projetos.

---

Se você precisar de mais informações sobre como customizar o tema ou sobre o funcionamento do Pelican, consulte a [documentação oficial do Pelican](https://docs.getpelican.com).

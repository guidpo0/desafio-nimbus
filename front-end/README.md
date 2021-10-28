### Informações Gerais

Projeto desenvolvido em grupo durante formação em desenvolvedor Web Full Stack pela Trybe.

---

# Boas vindas ao repositório do projeto de Receitas!

Essa aplicação têm a intenção de proporcionar ao(à) usuário(a) acesso à diversas receitas diferentes para que seja explorado seu potencial culinário! Após fazer seu login você será direcionado(a) à página principal de receitas de comidas, onde é possível utilizar filtros para pesquisar comidas por suas categorias, nome, ingredientes ou primeira letra.

No menu inferior é possível selecionar a página principal de bebidas que possui as mesmas funcionalidades da de comida. Também no menu inferior é possível selecionar o campo de explorar, desse modo você poderá explorar comidas ou bebidas pelos seus ingredientes ou área, ou ainda pedir para ser surpreendido(a) por uma receita aleatória!

Após selecionar uma receita você será direcionado(a) à página de detalhes dessa receita, onde poderá ver instruções e informações, caso queira realizar esta receita é só clicar no botão ao fim da página que um checklist dos ingredientes ficará a sua disposição!

No menu superior da aplicação você terá acesso ao seu perfil, onde é possível verificar seu login, suas receitas feitas e suas receitas favoritas!

Lembrando que esta aplicação corresponde aos meus esforços e dos meus colegas para melhorarmos nossas hard skills e soft skills sinta-se à vontade para explorá-la! Feedbacks construtivos são sempre bem vindos!

Abaixo você poderá encontrar mais informações técnicas sobre este projeto.

---

# Sumário

- [Habilidades](#habilidades)
- [Intruções para fazer o fork do repositório](#intruções-para-fazer-o-fork-do-repositório)
- [Informações do projeto](#informações-do-projeto)
  - [Linter](#linter)
  - [Testes](#testes)
  - [API's](#apis)
    - [TheMealDB API](#themealdb-api)
    - [The CockTailDB API](#the-cocktaildb-api)
  - [Rotas](#rotas)
  - [localStorage](#localStorage)
  - [Biblioteca clipboard-copy](#biblioteca-clipboard-copy)

---

# Habilidades

Nesse projeto, fui capaz de:

  - Utilizar a Context API do React para gerenciar estado
  - Utilizar o React Hook useState
  - Utilizar o React Hook useContext
  - Utilizar o React Hook useEffect
  - Utilizar o React Router Dom
  - Utilizar componentes funcionais
  - Utilizar RTL e Jest para escrever testes

---

# Instruções para fazer o fork do repositório

1. Faça o fork do repositório

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start`

---

# Informações do projeto

### Linter

Para garantir a qualidade do código de forma a tê-lo mais legível, de mais fácil manutenção e seguindo as boas práticas de desenvolvimento foi utilizado neste projeto o linter `ESLint`.

### Testes

Para garantir a estabilidade da aplicação foram desenvolvidos testes juntamente com a aplicação de forma que alcancem uma cobertura de 90% do código, para isso foram utilizadas as bibliotecas Jest e React Testing Library.

## APIs

### TheMealDB API

Para as receitas de comidas foi utilizado o [TheMealDB](https://www.themealdb.com/) é um banco de dados aberto, mantido pela comunidade, com receitas e ingredientes de todo o mundo.

Os end-points são bastante ricos, você pode [vê-los aqui](https://www.themealdb.com/api.php)

### The CockTailDB API

Para as receitas de bebidas foi utilizada a The CockTailDB API, banco de dados bem similar (inclusive mantida pela mesma entidade) a TheMealDB API, só que focado em bebidas.

Os end-points também são bastante ricos, você pode [vê-los aqui](https://www.thecocktaildb.com/api.php)

---

### Rotas

As rotas utilizadas na aplicação são as seguintes:

* Tela de login: `/`;
* Tela principal de receitas de comidas: `/comidas`;
* Tela principal de receitas de bebidas: `/bebidas`;
* Tela de detalhes de uma receita de comida: `/comidas/{id-da-receita}`;
* Tela de detalhes de uma receita de bebida: `/bebidas/{id-da-receita}`;
* Tela de receita em processo de comida: `/comidas/{id-da-receita}/in-progress`;
* Tela de receita em processo de bebida: `/bebidas/{id-da-receita}/in-progress`;
* Tela de explorar: `/explorar`;
* Tela de explorar comidas: `/explorar/comidas`;
* Tela de explorar bebidas: `/explorar/bebidas`;
* Tela de explorar comidas por ingrediente: `/explorar/comidas/ingredientes`;
* Tela de explorar bebidas por ingrediente: `/explorar/bebidas/ingredientes`;
* Tela de explorar comidas por local de origem: `/explorar/comidas/area`;
* Tela de perfil: `/perfil`;
* Tela de receitas feitas: `/receitas-feitas`;
* Tela de receitas favoritas: `/receitas-favoritas`.

### `localStorage`

O uso de `localStorage` é necessário para que as informações não se percam caso a pessoa atualize a página.
Neste projeto esses valores foram usados para iniciar o context da aplicação.

As seguintes informações são salvas no `localStorage` do navegador:

* a chave `mealsToken` que contém a seguinte estrutura:
```
1
```

* a chave `cocktailsToken` que contém  a seguinte estrutura:
```
1
```

* a chave `user` que contém  a seguinte estrutura:
```
{
    email: email-da-pessoa
}
```

* a chave `doneRecipes` que contém  a seguinte estrutura:
```
[{
    id: id-da-receita,
    type: comida-ou-bebida,
    area: area-da-receita-ou-texto-vazio,
    category: categoria-da-receita-ou-texto-vazio,
    alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
    name: nome-da-receita,
    image: imagem-da-receita,
    doneDate: quando-a-receita-foi-concluida,
    tags: array-de-tags-da-receita-ou-array-vazio
}]
```

* a chave `favoriteRecipes` que contém  a seguinte estrutura:
```
[{
    id: id-da-receita,
    type: comida-ou-bebida,
    area: area-da-receita-ou-texto-vazio,
    category: categoria-da-receita-ou-texto-vazio,
    alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
    name: nome-da-receita,
    image: imagem-da-receita
}]
```

* a chave `inProgressRecipes` que contém  a seguinte estrutura:
```
{
    cocktails: {
        id-da-bebida: [lista-de-ingredientes-utilizados],
        ...
    },
    meals: {
        id-da-comida: [lista-de-ingredientes-utilizados],
        ...
    }
}
```

### Biblioteca `clipboard-copy`

Para os componentes que contêm a funcionalidade de favoritar pratos ou bebidas, foi necessário utilizar a biblioteca `clipboard-copy` para copiar as informações da receita.

Para mais informações, consulte a [documentação](https://www.npmjs.com/package/clipboard-copy)

---

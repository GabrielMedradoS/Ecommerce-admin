### Ecommerce-admin

<p align='center'>
<b height="50%" width="50%"></b>
</p>

<p align="center">
    <img alt="Platform" src="https://img.shields.io/static/v1?label=Platform&message=PC&color=030712&labelColor=262626">
    <img alt="project name" src="https://img.shields.io/badge/Ecommerce-admin-030712?&labelColor=262626"></img>    
    <img alt="Repository size" src="https://img.shields.io/github/repo-size/GabrielMedradoS/Ecommerce-admin?color=030712&labelColor=262626">
    <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/gabrielmedrados/ecommerce-admin?&color=030712&labelColor=262626">    
    <a href="">
        <img alt="License" src="https://img.shields.io/static/v1?label=License&message=MIT&color=030712&labelColor=262626">
    </a>
</p>

<p align="center">
    <a href="#-layout">Layout</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-objetivo">Objetivo</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-features">Features</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-demonstração">Demonstração</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-tecnologias">Tecnologias</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-documentation">Documentation</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="licença">License</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-autor">Autor</a> 
</p>

## 🚧 Layout 

#### Screenshot:

<div align='center'>
🚧 Under construction 🚧
</div>

## 🎯 Objetivo

O objetivo é a criaçao de um site de ecommerce para **administradores** onde pode ser possivel gerenciar todas as apis do site, isso inclui a criaçao, deleçao, visualizaçao, arquivamento e disponibilidade. 

O projeto de **Ecommerce-admin** possui aplicação simples e prática para gerenciar todas as apis que incluem Stores(Lojas), Billboards(Quadros), Category(Categoria), Size(Tamanho), Color(Cor), Product(Produto), Image(Imagem), Order(Pedido), OrderItem(Item do pedido). 

## ✨ Features

- [x] Autenticaçao com Clerk;
- [x] É possivel criar, deletar, atualizar os models de: Quadros, Categorias, Tamanhos, Cores, Produtos e itens do pedido para a loja;
- [x] Disponibilidade e exibiçao das apis dos models para site externos;
- [x] Metodos de requisição HTTP: POST, GET, PATCH, DELETE

## 💻 Demonstração:

<div align='center'>
🚧 Under construction 🚧
</div>

## 🚴🏻‍♂️ Rodar o projeto 

Para baixar o código-fonte do projeto em sua máquina, primeiramente terá que ter instalado o [**Git**](https://git-scm.com/).
Com o Git instalado, em seu terminal execute o seguinte comando:

```bash
git clone https://github.com/GabrielMedradoS/Ecommerce-admin.git
```

Para instalar as dependências e executar o projeto terá que ter instalado em sua máquina o [**node.js**](https://nodejs.org/en/), que vem acompanhado do npm.

> Nesse projeto foi utilizado o [**pnpm**](https://pnpm.io/), que busca economizar espaço em disco e acelerar a instalação de pacotes devido à sua abordagem de armazenamento de dependências compartilhado.

Instale as dependências usando **pnpm** ou **npm**:

```bash
# pnpm
pnpm install

# npm
npm install
```

Crie o arquivo .env com as variáveis de ambiente necessárias:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="Next Clerk Key"
CLERK_SECRET_KEY="Clerk Key"
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

DATABASE_URL="Seu Banco de dados"
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="Cloudnary Key"
```

Rode o comando a seguir para gerar o client do Prisma:

```bash
# pnpm
pnpm prisma generate

# npm
npm prisma generate
```

Execute as migrations do banco de dados:

```bash
# pnpm
pnpm prisma migrate dev

# npm
npm prisma migrate dev
```

Execute o projeto:

```bash
# pnpm
pnpm run dev

# npm
npm run dev
```

O servidor estará disponível em http://localhost:3000.

## 🛠 Tecnologias 

<div>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" height="30" width="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
  alt="typescript" height="30" width="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="tailwind" height="30" width="40" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/>
</div>

## 📜 documentation 

<details>
    <summary>Dependencies</summary>

```json
{
  "name": "e-commerce",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@clerk/nextjs": "^4.27.2",
    "@hookform/resolvers": "^3.3.2",
    "@prisma/client": "^5.6.0",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-popover": "^1.0.7",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-slot": "^1.0.2",
    "axios": "^1.6.2",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "cmdk": "^0.2.0",
    "lucide-react": "^0.294.0",
    "next": "14.0.3",
    "react": "^18",
    "react-dom": "^18",
    "react-hook-form": "^7.48.2",
    "react-hot-toast": "^2.4.1",
    "tailwind-merge": "^2.0.0",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.22.4",
    "zustand": "^4.4.7"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.0.3",
    "postcss": "^8",
    "prisma": "^5.6.0",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
}
```

</details>

- [Next.js 13 | documentation](https://nextjs.org/docs)
- [Shadcn/ui | documentation](https://ui.shadcn.com/docs/installation/vite)
- [Tailwind | documentation](https://tailwindcss.com/docs/installation/using-postcss)
- [Clerk Authentication](https://clerk.com/)
- [Zustand | documentation](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [Zod | documentation](https://zod.dev/)
- [Prisma.io | documentation](https://www.prisma.io/docs/getting-started/quickstart)
- [PlanetScale | documentation](https://planetscale.com/)
- [React Hot Toast](https://react-hot-toast.com/)
- [Axios | documentation](https://axios-http.com/ptbr/docs/intro)
- [React Hook Form](https://www.react-hook-form.com/get-started)
- [Next Cloudinary](https://next.cloudinary.dev/installation)
- [Cloudinary | documentation](https://cloudinary.com/)
- [Date-fns | documentation](https://www.npmjs.com/package/date-fns)

## ⚖️ License 

This project is under the MIT license. See the archive [LICENSE](https://github.com/GabrielMedradoS/Ecommerce-admin/blob/master/LICENSE) for more details.

## ✍🏾 Autor

| <a href="https://github.com/gabrielmedrados/"><img src="https://user-images.githubusercontent.com/73303001/126536001-655e3cbd-facd-4de1-992f-b8d9d3656ace.jpg" width="100" alt="perfil"/><br>
| :-------------------------: |
| <a href="https://github.com/gabrielmedrados/"> Gabriel Medrado |</a> |

[![Linkedin Badge](https://img.shields.io/badge/-GabrielMedrado-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/gabriel-medrado-de-souza-9a30b3206/)
[![Gmail Badge](https://img.shields.io/badge/-gabriel.medradoo@hotmail.com-1769ff?style=flat-square&logo=Gmail&logoColor=white)](mailto:gabriel.medradoo@hotmail.com)

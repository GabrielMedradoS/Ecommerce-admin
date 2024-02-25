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
    <a href="#-objetivo">Objetivo</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-features">Features</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-demonstração">Demonstração</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-tecnologias">Tecnologias</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-documentação">Documentação</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="LICENSE">License</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-autor">Autor</a> 
</p>

## 📷 Layout

#### Screenshot:

<div align='center'>
<img src=".github/Product image admin.png">
</div>

## 🎯 Objetivo

O objetivo é a criação de um site de ecommerce para **administradores** onde pode ser possível gerenciar todas as apis do site, isso inclui a criação, deleção, visualização, arquivamento e disponibilidade. O site gerenciado pode ser encontrado no repositório
**Ecommerce-store**.

O projeto de **Ecommerce-admin** possui aplicação simples e prática para gerenciar todas as apis que incluem Stores(Lojas), Billboards(Quadros), Category(Categoria), Size(Tamanho), Color(Cor), Product(Produto), Image(Imagem), Order(Pedido), OrderItem(Item do pedido) e também consiste em gerenciar o sita da loja principal incluindo o pagamento que é atualizado na aba de pedidos, nele é possível encontrar o item do pedido, celular, Endereço, Preço do produto e se foi pago

## ✨ Features

- [x] Autenticação com Clerk
- [x] Upload de imagens usando Cloudinary
- [x] Checkout de pagamentos usando o Stripe
- [x] Banco de dados usando o PlanetScale para gravar o banco dados
- [x] É possível criar, deletar, atualizar os models de: Quadros, Categorias, Tamanhos, Cores, Produtos e itens do pedido para a loja
- [x] Geração de apis para todos os models: Billboard, Categories, Size, Colors, Product and Order
- [x] Atualização de pedidos e itens do pedido na hora do pagamento: Endereço, telefone, celular
- [x] Disponibilidade e exibição das apis dos models para site externos
- [x] Métodos de requisição HTTP: POST, GET, PATCH, DELETE
- [x] Layout de tabela para melhor visualização dos itens
- [x] Site responsivo para tablet e mobile
- [x] Dark Mode

## 💻 Demonstração:

https://github.com/GabrielMedradoS/Ecommerce-admin/assets/73303001/f3760ec3-93f0-491d-8f92-425d7a1530c4

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
```

```bash
# npm
npm install
```

Baixe a CLI [**Stripe**](https://stripe.com/docs/stripe-cli) e faça login em seu terminal usando o seguinte comando:

```bash
stripe login
```

Encaminhe eventos ao seu webhook:

```bash
stripe listen --forward-to localhost:3000/api/webhook
```

Acione eventos com a CLI:

```bash
stripe trigger payment_intent.succeeded
```

Crie o arquivo .env com as variáveis de ambiente necessárias:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="Next Clerk Key"
CLERK_SECRET_KEY="Clerk Key"
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

DATABASE_URL="Seu Banco de dados, no caso estou usando PlanetScale"
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="Cloudinary Key"
STRIPE_KEY="Sua chave secreta do Stripe"
FRONTEND_STORE_URL="URL principal da sua loja"
STRIPE_WEBHOOK_SECRET="Webhook secret key disponibilizada pelo stripe"
```

Rode o comando a seguir para gerar o client do Prisma:

```bash
# pnpm
pnpm prisma generate
```

```bash
# npm
npm prisma generate
```

Execute o comando para enviar ao PlanetScale ou outro banco:

```bash
# pnpm
pnpm prisma db push
```

```bash
# npm
npm prisma db push
```

Execute o projeto:

```bash
# pnpm
pnpm run dev
```

```bash
# npm
npm run dev
```

O servidor estará disponível em http://localhost:3000.

## 🛠 Tecnologias

![My Skills](https://skillicons.dev/icons?i=ts,react,nodejs,tailwind)

## 📜 documentação

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
    "@radix-ui/react-checkbox": "^1.0.4",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-popover": "^1.0.7",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-slot": "^1.0.2",
    "@tanstack/react-table": "^8.11.0",
    "axios": "^1.6.2",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "cmdk": "^0.2.0",
    "date-fns": "^3.0.0",
    "lucide-react": "^0.294.0",
    "next": "14.0.3",
    "next-cloudinary": "^5.11.0",
    "next-themes": "^0.2.1",
    "react": "^18",
    "react-dom": "^18",
    "react-hook-form": "^7.48.2",
    "react-hot-toast": "^2.4.1",
    "recharts": "^2.10.3",
    "stripe": "^14.10.0",
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
- [PlanetScale | documentation](https://planetscale.com/)
- [Stripe | documentation](https://stripe.com/docs/payments/checkout) -> ao usar o Webhooks é preciso Baixar a CLI do Stripe
- [Prisma.io | documentation](https://www.prisma.io/docs/getting-started/quickstart)
- [Next Cloudinary](https://next.cloudinary.dev/installation)
- [Cloudinary | documentation](https://cloudinary.com/)
- [Zustand | documentation](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [Zod | documentation](https://zod.dev/)
- [React Hot Toast](https://react-hot-toast.com/)
- [Axios | documentation](https://axios-http.com/ptbr/docs/intro)
- [React Hook Form](https://www.react-hook-form.com/get-started)
- [Date-fns | documentation](https://www.npmjs.com/package/date-fns)
- [Recharts | documentation](https://www.npmjs.com/package/recharts)

## 💡 Como contribuir

- Faça um **_fork_** desse repositório;
- Crie um **branch** para a sua feature: `git checkout -b minha-feature`;
- Faça um **commit** com suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça um **push** para o seu branch: `git push origin minha-feature`;
- Faça um **pull request** com sua feature;

Pull requests são sempre bem-vindos. Em caso de dúvidas ou sugestões, crie uma _**issue**_ ou entre em contato comigo.

## ⚖️ License

This project is under the MIT license. See the archive [LICENSE](https://github.com/GabrielMedradoS/Ecommerce-admin/blob/master/LICENSE) for more details.

## ✍🏾 Autor

| <a href="https://github.com/gabrielmedrados/"><img src="https://user-images.githubusercontent.com/73303001/126536001-655e3cbd-facd-4de1-992f-b8d9d3656ace.jpg" width="100" alt="perfil"/><br>
| :-------------------------: |
| <a href="https://github.com/gabrielmedrados/"> Gabriel Medrado |</a> |

[![Linkedin Badge](https://img.shields.io/badge/-GabrielMedrado-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/gabriel-medrado-de-souza-9a30b3206/)
[![Gmail Badge](https://img.shields.io/badge/-gabriel.medradoo@hotmail.com-1769ff?style=flat-square&logo=Gmail&logoColor=white)](mailto:gabriel.medradoo@hotmail.com)

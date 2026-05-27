# 🧠 Clinic System

Sistema SaaS para gerenciamento de clínica psicológica, desenvolvido com foco em arquitetura fullstack moderna, autenticação segura e escalabilidade.

---

## 🚀 Tecnologias

### Frontend
- React
- TypeScript
- Vite
- React Router DOM
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL

### Ferramentas
- ESLint
- Prettier
- Dotenv

---

## 📁 Estrutura do Projeto

```bash
clinic-system/
│
├── frontend/
│
└── backend/
```

---

## ⚙️ Configuração do Projeto

### Clone o repositório

```bash
git clone <repo-url>
```

---

# 🔧 Backend

## Instalar dependências

```bash
cd backend
npm install
```

---

## Configurar variáveis de ambiente

Crie um arquivo `.env`:

```env
DATABASE_URL=
JWT_SECRET=
PORT=3000
```

---

## Rodar migrations Prisma

```bash
npx prisma migrate dev
```

---

## Rodar servidor backend

```bash
npm run dev
```

Servidor disponível em:

```bash
http://localhost:3000
```

---

# 🎨 Frontend

## Instalar dependências

```bash
cd frontend
npm install
```

---

## Rodar frontend

```bash
npm run dev
```

Frontend disponível em:

```bash
http://localhost:5173
```

---

# 🔄 Fluxo Frontend ↔ Backend

O frontend utiliza Axios para comunicação com a API Express.

Exemplo:

```ts
await api.login({
  email,
  password,
});
```

---

# 📌 Roadmap

## ✅ Setup inicial
- [x] React + Vite
- [x] Express + TypeScript
- [x] Prisma ORM
- [x] PostgreSQL
- [x] ESLint + Prettier
- [x] React Router
- [x] Axios
- [x] Mock de autenticação

---

## 🚧 Próximas funcionalidades
- [ ] JWT Authentication
- [ ] Protected Routes
- [ ] Cadastro de pacientes
- [ ] Sistema de consultas
- [ ] Dashboard
- [ ] Calendário
- [ ] Upload de documentos
- [ ] Responsividade avançada

---

# 🧪 Status Atual

Projeto em desenvolvimento ativo.

Atualmente focado na construção da arquitetura base fullstack, autenticação e integração frontend/backend.

---

# 👨‍💻 Autor

Pedro Silva

🔗 LinkedIn:
https://www.linkedin.com/in/pedro-silva-576327125
# 📌 Projet Mobile et API - React Native + Node.js/Express + Sequelize

## 🚀 Description

Ce projet est composé de deux parties :

* **Frontend (mobile)** : Application développée avec **React Native**.
* **Backend (API)** : Serveur construit avec **Node.js**, **Express** et **Sequelize** (ORM pour la base de données).

---

## 📂 Structure du projet

```
/frontend     → Code de l’application mobile (React Native)
/backend      → API (Node.js, Express, Sequelize)
```

---

## ⚙️ Prérequis

Assurez-vous d’avoir installé :

* [Node.js](https://nodejs.org/) (>= 18.x recommandé)
* [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
* [Expo CLI](https://docs.expo.dev/) (si vous utilisez Expo pour React Native)
* Une base de données compatible avec Sequelize (MySQL, PostgreSQL, SQLite, etc.)

---

## 🔧 Installation

### 1️⃣ Cloner le projet

```bash
git clone https://github.com/username/shoply-app.git
cd shoply-app
```

### 2️⃣ Installation des dépendances

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

---

## ⚡ Configuration

### Backend

1. Créez un fichier `.env` dans `/backend` avec vos variables d’environnement :

   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=motdepasse
   DB_NAME=nom_de_la_base
   DB_DIALECT=mysql   # ou postgres, sqlite, mariadb...
   ```
2. Initialiser la base de données avec Sequelize :

   ```bash
   npx sequelize-cli db:create
   npx sequelize-cli db:migrate
   ```

---

## ▶️ Lancer le projet

### Backend

```bash
cd backend
npm run dev
```

Le serveur sera accessible sur : `http://localhost:5000`

### Frontend

```bash
cd frontend
npx expo start
```

Puis scanner le QR Code avec l’application **Expo Go** (Android/iOS).

---

## 📡 API Endpoints (exemple)

* `POST /api/auth/login` → Connexion utilisateur
* `GET /api/users` → Liste des utilisateurs
* `POST /api/products` → Ajouter un produit

---

## ✅ Scripts utiles

### Backend

* `npm run dev` → Lancer le serveur en mode développement
* `npm run start` → Lancer en production

### Frontend

* `npx expo start` → Démarrer le projet React Native
* `npm run android` → Lancer sur un émulateur Android
* `npm run ios` → Lancer sur un émulateur iOS

---

## 👨‍💻 Contributeurs

* **Valisoa** – Développeur Backend
* **Mirado** – Développeur Frontend

---

## 📜 Licence

Ce projet est sous licence MIT.

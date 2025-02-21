# **Manuele-Paris**

Une application e-commerce moderne et performante, développée avec **Angular 19.1.0** pour le frontend et **Next.js** pour le backend, conçue pour offrir une expérience utilisateur fluide et réactive.

---

## **Fonctionnalités**

### Pour les utilisateurs :

- **Catalogue de produits dynamique** : Parcourez, recherchez, filtrez et triez les produits facilement.
- **Panier interactif** : Ajoutez, modifiez et supprimez des articles en temps réel.
- **Gestion des commandes** : Passez des commandes, suivez leur statut et recevez des confirmations.
- **Authentification sécurisée** : Inscrivez-vous, connectez-vous et gérez votre compte.

### Pour les administrateurs :

- **Tableau de bord intuitif** : Gérez les produits et les commandes efficacement.
- **Statistiques et analyses** : Accédez à des informations détaillées sur les ventes et la performance.

---

## **Technologies Utilisées**

- **Frontend** : Angular 19.1.0, TypeScript, SCSS.
- **Backend** : Next.js (API Routes).
- **Base de données** : MongoDB ou PostgreSQL.
- **Autres** :
  - **RxJS** : Programmation réactive.
  - **JWT (JSON Web Tokens)** : Authentification sécurisée.
  - **Angular Router** : Navigation fluide.
  - **Material Design ou Bootstrap** : Interface utilisateur élégante.

---

## **Prérequis**

### Frontend :

- **Angular CLI** : `>= 19.1.0`
- **Node.js** : `>= 14.x.x` (Requis uniquement pour exécuter Angular CLI)
- **Navigateur moderne** : Chrome, Firefox ou Edge.

### Backend :

- **Node.js** : `>= 14.x.x`
- **npm** : `>= 6.x.x`
- **Base de données** : MongoDB ou PostgreSQL.

---

## **Installation**

### 1. **Clonez le dépôt**

```bash
git clone https://github.com/username/stella.git
cd stella
```

### 2. **Installation du Frontend**

1. Accédez au dossier frontend :
   ```bash
   cd frontend
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Démarrez le serveur Angular :
   ```bash
   ng serve
   ```
   L’application sera disponible à l’adresse [http://localhost:4200](http://localhost:4200).

### 3. **Installation du Backend**

1. Accédez au dossier backend :
   ```bash
   cd backend
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Configurez les variables d’environnement (par exemple dans un fichier `.env`) :
   ```env
   PORT=5000
   DB_URL=mongodb://localhost:27017/stella
   JWT_SECRET=votre_clé_secrète
   ```
4. Lancez le serveur Next.js :
   ```bash
   npm run dev
   ```
   L’API sera disponible à l’adresse [http://localhost:3000](http://localhost:3000).

---

## **Architecture du Projet**

### Frontend : Angular

```plaintext
frontend/
 ├── src/
 │   ├── app/             # Modules et composants Angular
 │   │   ├── core/        # Services et gestion globale
 │   │   ├── features/    # Modules spécifiques (produits, panier, etc.)
 │   │   └── shared/      # Composants réutilisables
 │   ├── assets/          # Images et ressources statiques
 │   ├── environments/    # Fichiers de configuration
 │   └── styles.scss      # Styles globaux
```

### Backend : Next.js

```plaintext
backend/
 ├── src/
 │   ├── pages/api/       # API Routes pour le backend
 │   ├── models/          # Schémas de la base de données
 │   ├── middleware/      # Middlewares pour la validation, l’authentification, etc.
 │   ├── config/          # Configuration (connexion DB, JWT, etc.)
 │   └── next.config.js   # Configuration de Next.js
 └── .env                 # Variables d’environnement
```

---

## **Fichier README**

Ce document sert de README pour le projet, contenant toutes les instructions nécessaires à l'installation, la configuration et l'utilisation de l'application.

---

## **Licence**

Ce projet est sous licence [MIT](LICENSE).

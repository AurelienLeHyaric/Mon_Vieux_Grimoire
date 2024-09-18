# Bienvenue ! 👋
(English version below)

L'ensemble de ce projet back-end a été réalisé avec **Express.JS** et **Node.JS**. Les données sont stockés sur une base de données **MongoDB** à l'aide de **Mongoose**.<br>
**BCRYPT** a été utilisé pour la **HASHAGE** des mots de passe et le stockage en BDD, ainsi que leurs comparaisons lors de l'authentification.<br>
**JWT** a été utilisé pour la délivrance d'un **Token** lors de l' authentification.<br>
**MULTER** a été utilisé pour la gestion de l'**UPLOAD** des fichiers images des livres.<br>
**SHARP** a été utilisé pour la **COMPRESSION** des fichiers images récupérés par **MULTER** et ainsi être conforme au **GREEN CODE**.

<img src="https://aurelienlehyaric.com/images/mon_vieux_grimoire/cover.jpg" alt="Capture du site web Mon Vieux Grimoire" />

#### Points importants du projet :
- Mise en place de l'environnement **Node JS** et création d'un serveur **Express JS**.
- Utilisation de **MONGOOSE** pour définir un **SCHEMA de données** pour **MONGODB**.
- Intialisation et connexion de la **BASE DE DONNEES MONGODB**.
- Mise en place du système d'authentification géré par **BCRYPT** et **JWT** pour sécuriser certaines routes.
- Mise en place d'un utilitaire de compression d'images à l'aide de **SHARP**.
- Implémentation des routes **CRUD** dont certaines avec **AUTH**.
- Stockage des **NOTATIONS** de livre avec contrôle en fonction du **"userId"** a été mise en place.
- Calcul de la **NOTE MOYENNE** d'un livre pour le système de notation.
- **TRIE** pour afficher les **TROIS LIVRES** les **MIEUX NOTÉS**.

##### Une attention toute particulière a été apportée aux éléments suivants :
- Le **"userId"** est **ENCODÉ** dans le **TOKEN JWT**. Ainsi, pour une **SECURITE RENFORCEÉ**, le code prend en compte celui des **REQUÊTES** et non celui envoyé par le **FRONT** qui pourrait être **USURPÉ**.
- **MONGOOSE** a été associé à **UNIQUE VALIDATOR** afin de **GARANTIR** que la **création de plusieurs comptes avec la même adresse e-mail** ne soit **PAS POSSIBLE**.
- Le **DECOUPAGE DU CODE** a été effectué de façon **MODULAIRE** afin d' **ACCROÎTRE** sa **VISIBILITÉ** et sa **MAINTENANBILITÉ**.

#### Technologies mises en oeuvre sur ce projet :

![HTML](https://img.shields.io/badge/HTML-%23FFac45.svg?&style=for-the-badge&logo=html5&logoColor=white&color=orange)
![CSS](https://img.shields.io/badge/CSS-%23FFac45.svg?&style=for-the-badge&logo=css3&logoColor=white&color=blue)
![JavaScript](https://img.shields.io/badge/JAVASCRIPT-%23FFac45.svg?&style=for-the-badge&logo=javascript&logoColor=white&color=yellow)
![EXPRESS.JS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![NODE.JS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MONGODB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![API](https://img.shields.io/badge/API-CB3837?style=for-the-badge&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)


#### Découvrez mon portfolio :
[![Mon site](https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://www.aurelienlehyaric.com)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aurelien-le-hyaric/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AurelienLeHyaric)

#### Instructions pour tester le projet :<br>
- Clonez le dépôt :<br>
**`https://github.com/AurelienLeHyaric/Mon-Vieux-Grimoire.git`**
- Renommez le fichier **`.ENV.EXAMPLE`** en **`.ENV`**
- Resenignez vos informations de connexion de **MONGODB**.
```
- DB_URL= Url de connexion à votre MongoDB
- DB_LOGIN= Login de connexion à votre MongoDB
- DB_PASSWORD= Mot de passe de connexion à votre MongoDB
- TOKEN_SECRET= Chaîne de caractère de votre choix utilisé pour la génération des Tokens via BCRYPT
``` 
- À partir du répertoire **Mon-Vieux-Grimoire** :<br>
- Faites **`NPM INSTALL`** puis **`NPM START`**, cela permettra d'installer les dépendances du projet et de démarrer celui-ci.
- Ensuite, le **Back-end** sera démarré et écoutera sur le **`PORT : 4000`** par défaut.<br>
Vous pouvez tester le projet avec **POSTMAN**.

- Si vous voulez tester le projet avec le **Front-End**, vous pouvez procéder comme suit :
- Clonez le dépôt :<br>
**`https://github.com/AurelienLeHyaric/Mon_Vieux_Grimoire_front-end.git`**
- À partir du répertoire **Mon-Vieux-Grimoire-FRONT-END** :<br>
- Faites **`NPM INSTALL`** puis **`NPM START`**, cela permettra d'installer les dépendances du projet et de démarrer celui-ci.<br>
- Ensuite, le site devrait s'ouvrir tout seul. Si ce n'est pas le cas, vous pouvez y accéder à cette URL : **http://localhost:3000**.<br>
Vous pourrez ainsi accéder à toutes les fonctionnalités.





-------------------------------------------------------------------------------------------------------------------------------------------------------------------





# Welcome! 👋

This entire back-end project was developed with **Express.JS** and **Node.JS**. The data is stored in a **MongoDB** database using **Mongoose**.<br>
**BCRYPT** was used for **PASSWORD HASHING** and storage in the database, as well as for comparison during authentication.<br>
**JWT** was used to issue a **Token** during authentication.<br>
**MULTER** was used for handling **IMAGE UPLOADS** for book images.<br>
**SHARP** was used for **IMAGE COMPRESSION** of files uploaded through **MULTER**, ensuring compliance with **GREEN CODE** standards.


#### Key Features of the Project:
- Set up the **Node JS** environment and created an **Express JS** server.
- Utilized **MONGOOSE** to define a **DATA SCHEMA** for **MONGODB**.
- Initialized and connected the **MONGODB DATABASE**.
- Implemented an authentication system using **BCRYPT** and **JWT** to secure certain routes.
- Added an image compression utility with **SHARP**.
- Implemented **CRUD ROUTES**, some of which are secured with **AUTH**.
- Stored book **RATINGS** with control based on **"userId"**.
- Calculated the **AVERAGE RATING** of a book for the rating system.
- Sorted and displayed the **THREE TOP-RATED BOOKS**.

##### Special attention has been given to the following aspects:
- The **"userId"** is **ENCODED** in the **JWT TOKEN**. Thus, for **INCREASED SECURITY**, the code checks the **REQUEST**'s **userId** rather than the one sent from the **FRONT-END**, which could be **SPOOFED**.
- **MONGOOSE** was paired with **UNIQUE VALIDATOR** to **ENSURE** that **creating multiple accounts with the same email address** is **NOT POSSIBLE**.
- The **CODE STRUCTURE** was designed to be **MODULAR**, improving its **CLARITY** and **MAINTAINABILITY**.

#### Technologies used in this project:

![HTML](https://img.shields.io/badge/HTML-%23FFac45.svg?&style=for-the-badge&logo=html5&logoColor=white&color=orange)
![CSS](https://img.shields.io/badge/CSS-%23FFac45.svg?&style=for-the-badge&logo=css3&logoColor=white&color=blue)
![JavaScript](https://img.shields.io/badge/JAVASCRIPT-%23FFac45.svg?&style=for-the-badge&logo=javascript&logoColor=white&color=yellow)
![EXPRESS.JS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![NODE.JS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MONGODB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![API](https://img.shields.io/badge/API-CB3837?style=for-the-badge&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

#### Check out my portfolio:
[![My website](https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://www.aurelienlehyaric.com)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aurelien-le-hyaric/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AurelienLeHyaric)

#### Instructions to test the project:<br>
- Clone the repository:<br>
**`https://github.com/AurelienLeHyaric/Mon-Vieux-Grimoire.git`**
- Rename the **`.ENV.EXAMPLE`** file to **`.ENV`**
- Fill in your **MONGODB** connection details.
```
- DB_URL= Your MongoDB connection URL
- DB_LOGIN= Your MongoDB login
- DB_PASSWORD= Your MongoDB password
- TOKEN_SECRET= A string of your choice used for generating Tokens via BCRYPT
```
- From the **Mon-Vieux-Grimoire** directory:<br>
- Run **`NPM INSTALL`** then **`NPM START`** to install project dependencies and start the server.
- The **Back-end** will be running on **`PORT: 4000`** by default.<br>
You can test the project with **POSTMAN**.

- If you'd like to test the project with the **Front-End**, follow these steps:
- Clone the repository:<br>
**`https://github.com/AurelienLeHyaric/Mon_Vieux_Grimoire_front-end.git`**
- From the **Mon-Vieux-Grimoire-FRONT-END** directory:<br>
- Run **`NPM INSTALL`** then **`NPM START`** to install dependencies and start the project.<br>
- The site should open automatically. If not, you can access it at: **http://localhost:3000**.<br>
This will give you access to all features.

--- 

Feel free to use this for your GitHub!

# 🚀 Automation Test Portfolio – Automation Exercise  

[🇬🇧 English](#-english-version) | [🇵🇱 Polski](#-wersja-polska)

---

# 🇬🇧 English Version  

![Playwright](https://img.shields.io/badge/Playwright-Test%20Automation-45ba4b?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Strongly%20Typed-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)

Automated end-to-end tests for the website  
👉 https://automationexercise.com/

This project is part of my automation testing portfolio and demonstrates practical experience in building a scalable and maintainable test automation framework using **Playwright** and **TypeScript**.

---

## 🛠 Tech Stack  

- Playwright  
- TypeScript  
- Node.js  
- Page Object Model (POM)  
- HTML Reports  

---

## 🧪 Test Coverage  

- User registration  
- Login / Logout  
- Product search  
- Adding products to cart  
- Removing products from cart  
- Checkout validation  

Test cases are based on:  
https://automationexercise.com/test_cases  

---

## 📂 Project Structure  

```text
├── tests/
├── pages/
├── config/
├── playwright.config.ts
└── README.md
```

---

## ⚙️ Prerequisites  

Before running the project make sure you have installed:

- Node.js (v18 or higher)  
- npm  

Verify installation:

```bash
node -v
npm -v
```

---

## ▶️ Installation & Execution  

### 1️⃣ Clone the repository  

```bash
git clone https://github.com/jonasz274/AutomationExercise.git
```

### 2️⃣ Go to the project directory  

```bash
cd AutomationExercise
```

### 3️⃣ Install dependencies  

```bash
npm install
```

### 4️⃣ Install Playwright browsers  

```bash
npx playwright install
```

### 5️⃣ Run tests  

```bash
npx playwright test
```

### 6️⃣ Open HTML report  

```bash
npx playwright show-report
```

---

## 💡 Useful Commands  

### Run tests in UI Mode  

```bash
npx playwright test --ui
```

### Run a specific test file  

```bash
npx playwright test tests/login.spec.ts
```

### Run tests in headed mode  

```bash
npx playwright test --headed
```

---

## 🎯 Project Goals  

- Build scalable automation framework  
- Apply best practices (POM, clean code)  
- Strengthen Playwright & TypeScript skills  
- Maintain professional QA portfolio  

---

# 🇵🇱 Wersja polska  

Automatyczne testy end-to-end dla strony  
👉 https://automationexercise.com/

Projekt stanowi część mojego portfolio testerskiego i prezentuje praktyczne umiejętności budowy skalowalnego oraz utrzymywalnego frameworka testowego z wykorzystaniem **Playwright** i **TypeScript**.

---

## 🛠 Technologie  

- Playwright  
- TypeScript  
- Node.js  
- Page Object Model (POM)  
- Raporty HTML  

---

## 🧪 Zakres testów  

- Rejestracja użytkownika  
- Logowanie / wylogowanie  
- Wyszukiwanie produktów  
- Dodawanie produktów do koszyka  
- Usuwanie produktów z koszyka  
- Walidacja procesu zakupowego  

Scenariusze testowe bazują na:  
https://automationexercise.com/test_cases  

---

## 📂 Struktura projektu  

```text
├── tests/
├── pages/
├── config/
├── playwright.config.ts
└── README.md
```

---

## ⚙️ Wymagania  

Przed uruchomieniem projektu upewnij się, że masz zainstalowane:

- Node.js (v18 lub nowszy)  
- npm  

Sprawdzenie instalacji:

```bash
node -v
npm -v
```

---

## ▶️ Instalacja i uruchomienie  

### 1️⃣ Sklonuj repozytorium  

```bash
git clone https://github.com/jonasz274/AutomationExercise.git
```

### 2️⃣ Przejdź do katalogu projektu  

```bash
cd AutomationExercise
```

### 3️⃣ Zainstaluj zależności  

```bash
npm install
```

### 4️⃣ Zainstaluj przeglądarki Playwright  

```bash
npx playwright install
```

### 5️⃣ Uruchom testy  

```bash
npx playwright test
```

### 6️⃣ Otwórz raport HTML  

```bash
npx playwright show-report
```

---

## 💡 Przydatne komendy  

### Uruchomienie testów w UI Mode  

```bash
npx playwright test --ui
```

### Uruchomienie konkretnego pliku testowego  

```bash
npx playwright test tests/login.spec.ts
```

### Uruchomienie testów w trybie headed  

```bash
npx playwright test --headed
```

---

## 🎯 Cele projektu  

- Budowa skalowalnego frameworka automatyzacji  
- Stosowanie dobrych praktyk (POM, clean code)  
- Rozwijanie umiejętności Playwright i TypeScript  
- Budowa profesjonalnego portfolio QA  

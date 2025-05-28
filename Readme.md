# **Project: Freelance Automation**

---

## Tech Stack

- ### Playwright with JavaScript
- ### VSCode
- ### Node JS
  ***

## Getting Started

### 1. Clone the repository

```bash
git clone <your-private-repo-url>
cd <your-project-folder>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. To Run Test

```bash
npx playwright test
```

### 4. To Run Specifc Test

```bash
npx playwright test Filename.spec.js
```

---

## Assumptions

### 1. There are two files AutomationTask.spec.js for `First Time User Registration` and LoginTask.spec.js for `Login and enrolling into course`

### 2. The male radio button is selected by default, but inside the test it is selected explicitly again.

### 3. The email used during first time registration is assumed to be new if reused again for registration can result into errors.

### 4. The inputs fields (email,password,address,phone) are assumed valid without considering frontend and backend validations.

### 5. Instead of relying on a toast notification to confirm successful registration, the test assumes that a redirect to the `/login` page is sufficient indication that the signup was successful.

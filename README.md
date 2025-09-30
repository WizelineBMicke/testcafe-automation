<div align="center">

# 🧪 TestCafe Automation Framework

[![TestCafe](https://img.shields.io/badge/TestCafe-2.6.0-blue.svg)](https://devexpress.github.io/testcafe/)
[![Node.js](https://img.shields.io/badge/Node.js-16%2B-green.svg)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

*A modern, scalable TestCafe automation framework using the Page Object Model (POM) pattern*

[🚀 Quick Start](#-quick-start) • [📁 Project Structure](#-project-structure) • [⚙️ Configuration](#️-configuration) • [📝 Examples](#-examples) • [📊 Reports](#-reports)

</div>

---

## 🌟 Features

<div align="center">

| ✨ Feature | 📝 Description |
|------------|----------------|
| 🏗️ **Page Object Model** | Clean, maintainable test architecture |
| 🔧 **Environment Config** | Easy configuration across different environments |
| 📊 **Rich Reporting** | HTML reports with screenshots and detailed logs |
| 🎯 **Data-Driven Testing** | JSON-based test data management |
| 🚀 **Cross-Browser Support** | Chrome, Firefox, Safari, Edge compatibility |
| 📱 **Responsive Testing** | Mobile and desktop viewport testing |
| 🔍 **Smart Selectors** | Robust element selection strategies |

</div>

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 16+ 
- **npm** 8+
- **Git**

### Installation

<details>
<summary><b>📋 Step-by-step setup</b></summary>

1. **Clone the repository**
   ```bash
   git clone https://github.com/WizelineBMicke/testcafe-automation.git
   cd testcafe-automation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install TestCafe globally** (optional)
   ```bash
   npm install -g testcafe
   ```

4. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

</details>

---

## 📁 Project Structure

```
testcafepractice/
├── 📂 data/                    # Test data files
│   ├── 📄 homeData.json        # Home page test data
│   └── 📄 loginData.json       # Login test data
├── 📂 pages/                   # Page Object Models
│   ├── 📄 home.page.js         # Home page object
│   └── 📄 login.page.js        # Login page object
├── 📂 tests/                   # Test suites
│   ├── 📄 home.test.js         # Home page tests
│   └── 📄 login.test.js        # Login tests
├── 📂 utils/                   # Utility functions
├── 📂 reports/                 # Test reports & screenshots
├── 📄 package.json             # Dependencies & scripts
└── 📄 README.md               # This file
```

<details>
<summary><b>🔍 Detailed structure breakdown</b></summary>

| Directory | Purpose | Key Files |
|-----------|---------|-----------|
| `data/` | Test data storage | JSON files with test inputs |
| `pages/` | Page Object Models | Reusable page interactions |
| `tests/` | Test suites | Individual test files |
| `utils/` | Helper functions | Common utilities & helpers |
| `reports/` | Output directory | HTML reports & screenshots |

</details>

---

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Application URLs
PAGE_URL=https://practicesoftwaretesting.com/
BASE_URL=https://practicesoftwaretesting.com/

# Browser Configuration
BROWSER=chrome
HEADLESS=false

# Test Configuration
TIMEOUT=30000
SCREENSHOT_PATH=reports/screenshots

# User Credentials
USERNAME=your-username
PASSWORD=your-password
```

### Browser Options

| Browser | Command | Notes |
|---------|---------|-------|
| Chrome | `chrome` | Default, fastest |
| Firefox | `firefox` | Good for debugging |
| Safari | `safari` | macOS only |
| Edge | `edge` | Windows/Linux |

---

## 📝 Examples

### Basic Test Structure

```javascript
import { Selector, t } from 'testcafe';
import dotenv from 'dotenv';
import LoginPage from '../pages/login.page.js';
import HomePage from '../pages/home.page.js';
import loginData from '../data/loginData.json';

dotenv.config();

fixture`Login Tests`
    .page(process.env.PAGE_URL);

test('Valid Login Flow', async t => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();

    // Perform login
    await loginPage.login(
        loginData.validUser.email, 
        loginData.validUser.password
    );
    
    // Verify success
    await homePage.verifyUserLoggedIn();
});
```

### Page Object Example

```javascript
// pages/login.page.js
import { Selector, t } from 'testcafe';

class LoginPage {
    constructor() {
        this.emailInput = Selector('#email');
        this.passwordInput = Selector('#password');
        this.loginButton = Selector('button[data-test="login-submit"]');
        this.errorMessage = Selector('.alert-danger');
    }

    async login(email, password) {
        await t
            .typeText(this.emailInput, email)
            .typeText(this.passwordInput, password)
            .click(this.loginButton);
    }

    async verifyErrorMessage() {
        await t.expect(this.errorMessage.exists).ok();
    }
}

export default LoginPage;
```

---

## 📊 Reports & Screenshots

### Generate HTML Reports

```bash
# Basic report
npx testcafe chrome tests/ --reporter html:reports/report.html

# With screenshots
npx testcafe chrome tests/ \
  --reporter html:reports/report.html \
  --screenshots reports/screenshots \
  --screenshots-on-fails
```

### Report Features

<div align="center">

| 📊 Feature | ✨ Description |
|------------|----------------|
| 📈 **Test Results** | Pass/fail statistics with timing |
| 🖼️ **Screenshots** | Visual evidence of test execution |
| 📝 **Detailed Logs** | Step-by-step execution details |
| 🎨 **Modern UI** | Clean, responsive report interface |
| 📱 **Mobile Friendly** | View reports on any device |

</div>

---

## 🚀 Running Tests

### Available Scripts

```bash
# Run all tests
npm test

# Run specific test file
npm run test:login
npm run test:home

# Run with different browsers
npm run test:chrome
npm run test:firefox

# Run in headless mode
npm run test:headless

# Generate reports
npm run test:report
```

### Command Line Options

| Option | Description | Example |
|--------|-------------|---------|
| `--reporter` | Report format | `--reporter html` |
| `--screenshots` | Screenshot directory | `--screenshots reports/` |
| `--concurrency` | Parallel execution | `--concurrency 3` |
| `--selector-timeout` | Element wait time | `--selector-timeout 10000` |

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm test`
5. Commit changes: `git commit -m 'Add amazing feature'`
6. Push to branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

### 🌟 Star this repository if you found it helpful!

[![GitHub stars](https://img.shields.io/github/stars/WizelineBMicke/testcafe-automation?style=social)](https://github.com/WizelineBMicke/testcafe-automation)
[![GitHub forks](https://img.shields.io/github/forks/WizelineBMicke/testcafe-automation?style=social)](https://github.com/WizelineBMicke/testcafe-automation)

**Made with ❤️ by Mike**

</div>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>🧪 TestCafe Automation Framework</title>
  <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css">
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #f9f9fb;
      color: #333;
      line-height: 1.6;
      margin: 0;
      padding: 0;
    }
    header {
      background: linear-gradient(90deg, #00b4d8, #0077b6);
      color: white;
      padding: 30px;
      text-align: center;
    }
    header h1 {
      margin: 0;
      font-size: 2.5rem;
    }
    header p {
      font-size: 1.2rem;
      opacity: 0.9;
    }
    section {
      padding: 30px 60px;
      max-width: 1000px;
      margin: auto;
    }
    h2 {
      color: #0077b6;
      margin-top: 40px;
    }
    pre {
      margin: 15px 0;
      border-radius: 6px;
      overflow-x: auto;
    }
    code {
      font-size: 0.9rem;
    }
    ul {
      list-style-type: "✅ ";
      margin-left: 20px;
    }
    .tree {
      background: #f1f5f9;
      padding: 15px;
      border-radius: 6px;
      font-family: monospace;
      font-size: 0.95rem;
      color: #1e293b;
    }
    .highlight {
      background: #e0f7fa;
      padding: 5px 10px;
      border-radius: 4px;
    }
    footer {
      text-align: center;
      padding: 20px;
      margin-top: 40px;
      background: #0077b6;
      color: white;
    }
  </style>
</head>
<body>

<header>
  <h1>🧪 TestCafe Automation Framework</h1>
  <p>A basic TestCafe framework using Page Object Model (POM)</p>
</header>

<section>
  <h2>📂 Project Structure</h2>
  <div class="tree">
    testcafe-automation/<br>
    ├── data/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Test data files (JSON, CSV, etc.)<br>
    │   └── loginData.json<br>
    ├── pages/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Page Objects (POM)<br>
    │   ├── basePage.js<br>
    │   ├── homePage.js<br>
    │   └── loginPage.js<br>
    ├── tests/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Test files<br>
    │   └── login.test.js<br>
    ├── utils/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Utilities (helpers, reporting, etc.)<br>
    │   └── testUtils.js<br>
    ├── .env &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Environment variables<br>
    ├── .gitignore<br>
    ├── package.json<br>
    └── README.md
  </div>

  <h2>⚙️ Installation</h2>
  <ol>
    <li>Clone the repository:</li>
    <pre><code class="bash">git clone https://github.com/WizelineBMicke/testcafe-automation.git
cd testcafe-automation</code></pre>

    <li>Install dependencies:</li>
    <pre><code class="bash">npm install</code></pre>

    <li>Install TestCafe (if not installed globally):</li>
    <pre><code class="bash">npm install -D testcafe dotenv</code></pre>
  </ol>

  <h2>🌍 Environment Configuration</h2>
  <p>We use a <span class="highlight">.env</span> file to manage environment variables.</p>
  <pre><code class="env">PAGE_URL=https://practicesoftwaretesting.com/
BROWSER=chrome</code></pre>
  <p>You can add more variables like <code>USERNAME</code> and <code>PASSWORD</code> if needed.</p>

  <h2>📝 Writing Tests with POM</h2>
  <p>
    - Page Objects are stored in <span class="highlight">/pages/</span> folder.<br>
    - Test data is stored in <span class="highlight">/data/</span> folder.<br>
    - Tests are in <span class="highlight">/tests/</span> folder.<br>
  </p>
  <p>Example test (<code>tests/login.test.js</code>):</p>
  <pre><code class="javascript">import { Selector, t } from 'testcafe';
import dotenv from 'dotenv';
import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';
import loginData from '../data/loginData.json';

dotenv.config();

fixture`Login Tests`
    .page(process.env.PAGE_URL);

test('Valid Login', async t =&gt; {
    const loginPage = new LoginPage();
    const homePage = new HomePage();

    await loginPage.login(loginData.validUser.email, loginData.validUser.password);
    await homePage.verifyUserLoggedIn();
});</code></pre>

  <h2>📊 Reports & Screenshots</h2>
  <p>You can generate reports with:</p>
  <pre><code class="bash">npx testcafe chrome tests/login.test.js --reporter html:reports/report.html --screenshots reports/screenshots --screenshots-on-fails</code></pre>

  <h2>🚀 Running Tests</h2>
  <pre><code class="bash">npm run testLogin</code></pre>
</section>

<footer>
  <p>🚀 Built with TestCafe | Following POM Best Practices</p>
</footer>

<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

</body>
</html>

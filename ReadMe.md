# What is Testing

- Software testing is a process of finding errors in a software product before its launch

# Types of testing (developer)

- **Manual & Automatic**

- **Automatic**
  - **Unit Testing** – Testing one component in isolation (separately)
  - **Integration Testing** – Testing integration of components
  - **End to End (E2E) Testing** – Verifies that all components of a system can run under real-world scenarios. The goal is to simulate a user experience from start to finish, check dependencies, validate data integrity, and ensure integrations work.

---

# Setting up Testing in our App

### Steps I followed (Day-1):

- Initialized project with **npm init**
- Installed **React + ReactDOM**
- Installed **Parcel** as bundler
- Installed **React Testing Library**
- Installed **Jest**
- Installed **Babel dependencies**
- Configured **Babel**
- Configured **Parcel** (disabled default Babel transpilation)
- Initialized Jest config → `npx create-jest@latest`
- Installed **jsdom** library (for DOM environment in tests)
- Installed **@babel/preset-react** (to make JSX work in tests)
- Added **@testing-library/jest-dom** for extra matchers

---

# Configurations

### `babel.config.js`

```js
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
```

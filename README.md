# React TypeScript Vite Template

![React](https://img.shields.io/badge/React-18.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-blue)
![Vite](https://img.shields.io/badge/Vite-4.4.5-brightgreen)
![Vitest](https://img.shields.io/badge/Vitest-0.34-yellow)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.3-blueviolet)

Kickstart your web development projects with this ready-to-use template that leverages the latest and greatest technologies.

## Features

- [React](https://reactjs.org/) for building modern user interfaces.
- [TypeScript](https://www.typescriptlang.org/) for safer and more maintainable development.
- [Vite](https://vitejs.dev/) as the lightning-fast development environment.
- [Vitest](https://github.com/vitejs/vitest) for unit testing with Vite.
- [Tailwind CSS](https://tailwindcss.com/) for fast and customizable styling.
- [Husky](https://typicode.github.io/husky/#/) with precommit hooks to ensure code quality.
- Absolute imports `"import Test from @/components/test"` configured for better code organization.

## Prerequisites

Make sure you have Node.js and [Yarn](https://www.npmjs.com/package/yarn) installed on your system before getting started.

## Getting Started

1. Clone this repository: `npx degit lucerojulian/react-vite-template#master projectName`.
2. Navigate to the project directory: `cd projectName`.
3. Install the dependencies: `yarn`.
4. Start building your app!

## Usage

- Run the Vite development server: `yarn dev`.
- Run unit tests: `yarn test`.
- Generate a production build: `yarn build`.

## Directory Structure

```plaintext
/.husky
/public
/src
  /__tests__
  /assets
  /components
  /hooks
  /pages
  /router
  /shared
  /test
  /utilities
  App.tsx
  main.tsx

index.html
package.json
README.md
tailwind.config.js
tsconfig.json
vite.config.ts
```

Adjust the directory structure to fit the needs of your project.

## Contribution

Contributions are welcome! If you find any issues or want to improve this template, feel free to create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

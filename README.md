# React + Typescript + Jest Boilerplate

> A Single Page Application (SPA) Quiz built with Vue, TypeScript and Tailwind. An integrated Leaderboard API developed with Firebase / GCP.

## Prerequisites

This project requires NodeJS (version 16 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
8.1.2
v16.13.2
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
git clone https://github.com/ORG/PROJECT.git
cd PROJECT
```

To install, run:

```sh
npm install
```

## Usage

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Test, watch, coverage

```sh
npm run test
npm run testw
npm run testc
```

## Steps taken to get this boilerplate

This can be ignored if you are using the whole thing as a boilerplate however, if you have an existing React+Typescript project you want to add JEST to, follow these instructions.

### Create Vite project with React and Typescript

```sh
npm create vite@latest
```

### Install jest, jest-environment-jsdom, @types/jest, ts-jest

```sh
npm install --save-dev jest @types/jest ts-jest
```

### Init our jest config

```sh
npx ts-jest config:init
```

### Update jest.config.js file

```sh
/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset: 'ts-jest',
  moduleNameMapper: {

    // if your using tsconfig.paths thers is no harm in telling jest
    '@components/(.*)$': '<rootDir>/src/components/$1',
    '@/(.*)$': '<rootDir>/src/$1',

    // mocking assests and styling
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/mocks/fileMock.ts',
    '^.+\\.(css|less|scss|sass)$': '<rootDir>/tests/mocks/styleMock.ts',
    /* mock models and services folder */
    '(assets|models|services)': '<rootDir>/tests/mocks/fileMock.ts',
  },
  // to obtain access to the matchers.
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: ['<rootDir>'],
  testEnvironment: 'jsdom',
};
```

### Create test folder and mocks

#### fileMock.ts

```sh
export {} //coment this if you ts-node to start complaining again
module.exports = 'test-file-stub';
```

#### styleMock.ts

```sh
module.exports = {};
```

### Add jest.setup.ts file

```sh
import '@testing-library/jest-dom/extend-expect';
```

### Install testing libraries for react

```sh
npm install -D @testing-library/dom @testing-library/jest-dom @testing-library/react
```

### Add script to package.json

```sh
"test": "jest",
"testw": "jest --watch",
"testc": "jest --coverage"
```

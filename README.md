<h1 align="center">Marvel Magazines</h1>
<div align="center">

[![Demo Website](https://img.shields.io/static/v1?label=vercel&message=Demo&color=000000&style=for-the-badge&logo=vercel)](https://chr-marvel.vercel.app/)
</div>

![Next.js](https://img.shields.io/static/v1?label=Next.js&message=framework&color=000000&style=for-the-badge&logo=Next.js)
![React Framework](https://img.shields.io/static/v1?label=react&message=framework&color=61DAFB&style=for-the-badge&logo=REACT)
![React Framework](https://img.shields.io/static/v1?label=styled-component&message=Framework&color=DB7093&style=for-the-badge&logo=styled-components)

This project is a simple application made in React using the [Marvel API](https://developer.marvel.com/), its goal is to apply the best pathics for the development of an application in React

The application displays the marvel comics, being paginated every 100. It is to filter the comics by the search bar, where the characters are researched and after selecting a filter in the comics is performed



## Preview

| Desktop                   | Tablet                           | Mobile                           |
| ------------------------- | -------------------------------- | -------------------------------- |
| ![empty](./docs/Desk.gif) | ![screenshot](./docs/Tablet.gif) | ![screenshot](./docs/Mobile.gif) |

## Installation

You need the [node](https://nodejs.org/en/download/) to run this project, this example was created for the version `v12.18.3`.

### Run as dev
```bash
npm install
npm dev
```

### Run as prod
```bash
npm install
npm build
npm start
```

## Folder structure
```
|__components - UI components
|__containers - UI components that have business rules
|__docs - Documentation and documentation assets
|__helpers - Functions helpers
|__layout - UI components that are displayed on all pages of the site
|__mock - Files used in testing
|__pages - Pages that reflect the browser address
|__pages/api - Apis for translation/connection with other endpoints
|__public - Static file serving
|__reducers - Reducer/Actions 
|__store - Store manager
```
## Licença

The [MIT License]() (MIT)

Copyright :copyright: 2020

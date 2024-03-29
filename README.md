<h1 align="center">Marvel Magazines</h1>
<div align="center">

[![Demo Website](https://img.shields.io/static/v1?label=vercel&message=Demo&color=000000&style=for-the-badge&logo=vercel)](https://chr-marvel.vercel.app/)
</div>
<div align="center">

![Next.js](https://img.shields.io/static/v1?label=Next.js&message=framework&color=000000&style=for-the-badge&logo=Next.js)
![React Framework](https://img.shields.io/static/v1?label=react&message=framework&color=61DAFB&style=for-the-badge&logo=REACT)
![Styled Components](https://img.shields.io/static/v1?label=styled-component&message=Framework&color=DB7093&style=for-the-badge&logo=styled-components)
</div>

This project is a simple application made in React using the [Marvel API](https://developer.marvel.com/), its goal is to apply the best practices for the development of an application in React.

The application displays the marvel comics, being paginated every 100. It is to filter the comics by the search bar, where the characters are researched and after selecting a filter in the comics is performed. This app has a demo deployed into Vercel [https://chr-marvel.vercel.app/](https://chr-marvel.vercel.app/)

## Preview

| Desktop                   | Tablet                           | Mobile                           |
| ------------------------- | -------------------------------- | -------------------------------- |
| ![empty](./docs/Desk.gif) | ![screenshot](./docs/Tablet.gif) | ![screenshot](./docs/Mobile.gif) |

## Installation

You need the [node](https://nodejs.org/en/download/) to run this project, this example was created for the version `v12.18.3`.

### Run application
To run this application you need to put keys into `.env` file, this project have a `.env.example` with the variables, but you need to get the keys into [marvel site](https://developer.marvel.com/account)

### Dev

```bash
npm install
npm dev
```

#### Prod

```bash
npm install
npm build
npm start
```

## Folder structure

```
┏━╾📂 components - UI components
┣━╾📂 containers - UI components that have business rules
┣━╾📂 docs - Documentation and documentation assets
┣━╾📂 helpers - Functions helpers
┣━╾📂 layout - UI components that are displayed on all pages of the site
┣━╾📂 mock - Files used in testing
┣━╾📂 pages - Pages that reflect the browser address
┃  ┗━╾📂 api - Apis for translation/connection with other endpoints
┣━╾📂 public - Static file serving
┣━╾📂 reducers - Reducer/Actions
┗━╾📂 store - Store manager
```

## Licença

The [MIT License]() (MIT)

Copyright :copyright: 2020

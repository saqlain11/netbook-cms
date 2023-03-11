
# NetBook CMS

A netbook is open sorce platform the serve the community E-learning courses

## Approach & Technical choice

### UI Library
In this Project i have used **antd** for the components to get the benefits of css in js and for custom css, I have used **sass**
I'm using module scss for specific styling and for color and spacing, I have created global files and getting color and spacing from these files to maitain the consistancy of theme system.

### VITE
This project is created by the vite template with typescript, with vite we just HMR (hot module replacement) and change any env on runtime, also it provide tree-shaking by default just like webpack-5 but under the hood it's using rollup as a bundler

### Design System:
For this netbook-cms, the design system i have chosen is **Atomic design**

So that can help me to build this project scalable.

In this principle we have :

- Atoms
- Molecules
- Organisms
- Templates
- Pages

![App Screenshot](https://i.morioh.com/201118/4f0e4fed.webp)

As i have created a abstraction layer on antd by exporting them from my components so every component would be use from **@netbook/components**
For this @netbook prefix, I have resolve the src path to **netbook** in **tsconfig**

### UI Animation
For UI animation have use majorly AOS (Animate on scroll library) and some animation are on @keyframes

### State Management
In this project we mainly don't need to maintain states but for the sake of scalability and to avoid from prop drilling , I have used **context** and we need to manage the complex state instead of **useState**, I have used **useReducer** to maintainability.

As it is a lethal combination when consume **context** with **useReducer**
 
### Contentful 

For contentful implementation, i have installed the contentful client to get the job done easily and created the class for client the is responsible to create connection with the contentful dashboard.

[Contentful-Netbook-CMS](https://app.contentful.com/spaces/0hdacipw488j/home)



Here is the Folder structure for the netbook:

```
├── __Fixtures__
│   └── ui-static-text.ts
├── assets
│   ├── about-us-img-1.png
│   ├── about-us-img-2.png
│   ├── facebook.svg.tsx
│   ├── instagram.svg.tsx
│   ├── linkedin.svg.tsx
│   ├── netbook-logo.svg.tsx
│   ├── react.svg
│   ├── socializing.png
│   └── twitter.svg.tsx
├── components
│   ├── organisms
│   │   ├── about-us.module.scss
│   │   ├── about-us.tsx
│   │   ├── achievement.module.scss
│   │   ├── achievement.tsx
│   │   ├── base-layout.tsx
│   │   ├── community-banner.module.scss
│   │   ├── community-banner.tsx
│   │   ├── index.ts
│   │   ├── loader.module.scss
│   │   ├── loader.tsx
│   │   ├── primary-footer.module.scss
│   │   ├── primary-footer.tsx
│   │   ├── secondary-footer.module.scss
│   │   ├── secondary-footer.tsx
│   │   ├── sticky-header.module.scss
│   │   └── sticky-header.tsx
│   └── index.ts
├── contentful-client
│   └── client.ts
├── contexts
│   ├── home-context.tsx
│   ├── index.ts
│   └── layout-context.tsx
├── hooks
├── middleware
│   ├── error-boundary.tsx
│   └── index.ts
├── model
│   ├── about-us.ts
│   ├── achievement.ts
│   ├── community.ts
│   ├── footer.ts
│   ├── index.ts
│   ├── navigation.ts
│   └── static-text.ts
├── pages
│   ├── home.tsx
│   ├── not-found.module.scss
│   └── not-found.tsx
├── reducers
│   ├── home-reducer.ts
│   ├── index.ts
│   └── layout-reducer.ts
├── services
│   ├── home.ts
│   ├── index.ts
│   └── layout.ts
├── theme
│   ├── color.scss
│   └── spacing.scss
├── utils
│   ├── helpers.ts
│   └── index.ts
├── .DS_Store
├── a.json
├── App.tsx
├── index.scss
├── main.tsx
└── vite-env.d.ts
```
In **components** folder all the atom/molecule and organism that we use on pages level it's a kind of DSM (Design system Management)

In **reducer** all the reducers lies and can be consume by the context and dispatch actions from the contexts

In **contexts** all the context lies that can be provider and and consume bt the components

In **page** where all the organisms and molecules consume and make it a page/feature

In **services** all the contentful client and API exist that return **contentful<promise>** purpose to separate in the service is to decouple call from any functions and easy to write test cases

In **them**e all the reuseable color and defined spacing and make sure about to only consume these classes instead of hardcoding to maintain consistency of styles

In **model** all the API schema is defined on contentful as this project is on typescript so we are just make sure about the type and type safety
also we reusee these modal to define variable of the specific types.

In **util** all the helpers function that can be use throughout the project and for the sake of reusability
## Deployment & VCS

Netbook is deployed on Netlify.

Deployed Site: [Netbook-cms](https://netbook-cms.netlify.app/)

So basically we have two branches on github 
- **netbook-static** (deployment configured on this branch whenever any commit will push on the branch netlify webhooks will make a dist and deploy on the about URL, This branch consist of all the static text and images)
- **main** (This branch has the dynamic UI with implementation of contentful client)
For branch switching
```
git checkout netbook-static
```

```
git checkout main
```



## Run Locally


### Install dependencies


```bash
nvm use (to set version, avoid from incompatibility of peer dependencies)
npm install
```

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file
```bash
VITE_CONTENTFUL_SPACE=0hdacipw488j
VITE_CONTENTFUL_ENVIRONMENT=master
VITE_CONTENTFUL_ACCESS_TOKEN=vKFubvegKsOtpfdJbq25nmhgZ2DdaNUNw2yXMl-g6R0
VITE_CONTENTFUL_BASE_URL=https://cdn.contentful.com/

```

### Start the project
```bash
  npm run dev
```

### Format & linting of code

To format & lint, run the following command

```bash
  npm run format (this command will prettify your code)
  npm run lint (this will find lint error in your code)
```

### Test cases & code coverage

To run test cases and code coverage, run the following command

```bash
  npm run test (for all test to run)
  npm run test RelativePath/to/testfile (for specific test file to run)
  npm run coverage (to get the commutative report of code coverage also can see code coverage UI by open the index.html file from coverage folder)
```
## API Reference

This is managed by the Headless CMS **(Contentful)**

These all content model have created from their dashboard mentioned API base URL is exposed to get these data.
### Base URL
```http
  GET https://cdn.contentful.com/spaces/{{space}}/environments/{{environments}}/entries?content_type={{content_type}}&access_token={{access_token}}&select=fields&order={{sorter}}
```
**Space**: Defined in **.env**

**environments**: Defined in **.env**

**access_token**: Defined in **.env**

#### Get all Static Text


| Parameter | Type     | value   | Description             |
| :-------- | :------- |  :------- | :------------------------- |
| `access_token` | `string` | mentioned in **.env** | **Required**. Your contentful token
| `content_type` | `string` | staticText |**Required**. Your content_type to fetch specific data
| `select` | `string` | fields | Will get the items only which we feed on contentul

#### Get all Navigation
| Parameter | Type     | value   | Description             |
| :-------- | :------- |  :------- | :------------------------- |
| `access_token` | `string` | mentioned in **.env** | **Required**. Your contentful token
| `content_type` | `string` | navigation |**Required**. Your content_type to fetch specific data
| `select` | `string` | fields | Will get the items only which we feed on contentul

#### Get all FooterLink
| Parameter | Type     | value   | Description             |
| :-------- | :------- |  :------- | :------------------------- |
| `access_token` | `string` | mentioned in **.env** | **Required**. Your contentful token
| `content_type` | `string` | footerLink |**Required**. Your content_type to fetch specific data
| `select` | `string` | fields | Will get the items only which we feed on contentul


#### Get Community text and images
| Parameter | Type     | value   | Description             |
| :-------- | :------- |  :------- | :------------------------- |
| `access_token` | `string` | mentioned in **.env** | **Required**. Your contentful token
| `content_type` | `string` | community |**Required**. Your content_type to fetch specific data
| `select` | `string` | fields | Will get the items only which we feed on contentul

#### Get About us text and images
| Parameter | Type     | value   | Description             |
| :-------- | :------- |  :------- | :------------------------- |
| `access_token` | `string` | mentioned in **.env** | **Required**. Your contentful token
| `content_type` | `string` | aboutUs |**Required**. Your content_type to fetch specific data
| `select` | `string` | fields | Will get the items only which we feed on contentul

#### Get achievement text and images
| Parameter | Type     | value   | Description             |
| :-------- | :------- |  :------- | :------------------------- |
| `access_token` | `string` | mentioned in **.env** | **Required**. Your contentful token
| `content_type` | `string` | achievement |**Required**. Your content_type to fetch specific data
| `select` | `string` | fields | Will get the items only which we feed on contentul|

## Tech Stack

**Client:** `React`, `vite (HMR)`, `antd`, `typescript`, `context with reducer`, `eslint & prettier`, `AOS`, `contentful client`, `vitest with RTL`



**Server:** `Contentful dashboard for headless CMS`
## Authors

- [@saqlain11](https://www.github.com/saqlain11)


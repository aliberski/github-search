# Github Search

This is my recruitment task for a certain company :)

## Getting started

Install dependencies:

```
yarn install
```

Run on iOS:

```
yarn ios
```

Run on Android:

```
yarn android
```

---

## Tech stack

- `typesctipt`
- `prettier` and `eslint`
- `react-navigation`
- `redux`, `redux-saga` (middleware), `redux-persist` (cache redux store), `reselect` (select redux data)
- `axios` (handle requests)
- `i18next`
- `react-native-svg` (and `react-native-svg-transformer` to enable importing svg images)
- `react-native-dotenv` (enable using `.env` file)
- `babel-plugin-module-resolver` (enable absolute imports - configured in `babel.config.js` file)

---

## Files structure

- `api` - all available API calls
- `assets` - assets used in the app (e.g. images)
- `components` - reusable components
- `constants`
  - `commonStyle` - common styles used globally in the app
  - `types` - common types
- `controllers` - main application logic, everything related to the redux state including:
  - `actions`
  - `reducers`
  - `saga` files
  - `selectors`
  - `mappers`
  - `types`
- `navigation` - all navigators used in the app
  - `AppNavigator` - main app navigator
  - `routes` - constant routes names
- `screens` - screens responsible for connecting with redux store and displaying components populated with data
- `store`
  - `createStore` - redux store and redux-persist configuration
  - `index` - root reducer
  - `saga` - root saga
- `translation` - translations files and `i18n` config

`.env` file at the root level - sensitive data (e.g. API keys / urls) and some app configuration

---

## Github login

1. First the application opens `${OAUTH_BASE_URL}/login/oauth/authorize` url using `Linking` library. It opens a browser and allows to login via github including 2FA (NOTE: I checked 2FA via SMS).
2. After login success github redirect back to the app via deep link `githubsearch://auth`. It navigates to AuthScreen and returns `code` in the URL parameters.
3. Second request is `${OAUTH_BASE_URL}/login/oauth/access_token`. It requires the `code` returned from the first to be sent. The request returns `access_token`
4. The `access_token` can be used to call any github requests that require user authorization, e.g. `${API_BASE_URL}/user/repos` to get logged in user repositories data.

---

## Application flow

1. The app starts on `LoadingScreen`. It's a placeholder displayed when authorization state is unknown.
2. If the user is logged in it navigates to `HomeScreen`
3. If not - `AuthScreen`
4. `AuthScreen` handles Github login flow, but resolving navigation state (authorized or not) is handled on a higher level in the `AppNavigator`
5. Authorization state is cached so once we receive `access_token` we will be logged in.

---

## Search

It contains:

- ability to search repositories by name
- ability to sort records by cretain field
- pagination
- ability to change rows displayed per page
- cache previous search results (currently the application caches last 10 resutls, but it can be changed in `.env` file)

Search event is fired in `onEndEditing` method and on search button press.

# Github Search

## Checklist

### Required

- ~~Render a list with rows containing "repository ID", "title", "owner", "stars" and "created at" timestamp~~
- Render an input element to [search for repositories](https://developer.github.com/v3/search/) by name
- Cache the results of every search (or have a limit) - do not make an API request if the results are already stored
- Do not fire requests as long as the user is typing - use throttle or debounce
- Implement pagination (locally, not by using API queries)
- Add ability to control number of rows rendered per page (5 - default/10/15/20)
- Implement ASC/DESC sorting by every field
- Add GitHub authentication mechanism (eg: _Log in with GitHub_ button) and highlight the row of repository of the logged-in user - please note that some users have 2FA enabled

### Optional (bonus points)

- ~~Use linting and/or formatting tool - ESLint, Prettier (if you use [@callstack/eslint-config](https://github.com/callstack/eslint-config-callstack-io) you should be good to go)~~
- ~~Use a type checker - Flow or Typescript~~
- Write test suites - for example with Jest
- Write a good README to make reviewers lives easier

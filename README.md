# Ng Clean Architecture

## Useful commands

### Install

- `yarn` - install dependencies
> requires yarn v2 for proper functionality of nested workspaces

### Basic commands

- `yarn workspace web run start` - start web application
- `yarn workspace web run start:cs` - start web application with cs locale
- `yarn workspace desktop run start` - start desktop application
- `yarn workspace desktop run start:cs` - start desktop application with cs locale

### Tests

- `yarn test` - run jest unit tests
- `yarn workspace web-e2e run start` - open cypress (note: it needs dev server running)

### Code quality

- `yarn run lint:format` - Typescript type check
- `yarn run lint:ts` - Typescript type check
- `yarn run lint:css` - Stylelint css code style
- `yarn run lint:code` - Eslint code best practices

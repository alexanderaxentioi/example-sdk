# My SDK

## Installation

```bash
npm install @alexanderaxentioi/example-sdk
```

## Usage

```javascript
const mySDK = require('@alexanderaxentioi/example-sdk');

mySDK.getPokemons();
```

## Notes

- The SDK is not published to npm, so you can't install it directly.
- NPM wants a pro membership for it to be published privately
- We can upload it on github privately by using @alexandru.axentioi/my-sdk - or something similar
- We can make it typesafe by using typescript exports
- We can make it more robust by adding tests
- How do we document the SDK? (Postman, Swagger, etc.) <https://github.com/Redocly/redoc>
- How do we version the SDK? (Semver) <https://semver.org/> - force to update version (major, minor, patch)
- Add rollup for building the SDK with <https://rollupjs.org/guide/en/>
- Add Zod for validation <https://zod.dev/>
- Add axios
- Add jest
- Add eslint airbnb
- Add prettier
- Add github actions for building, testing and publishing
- Add sonarcloud
- TDD?

├── src/
│   ├── index.ts
│   ├── api/
│   │   └── apiClient.ts
│   ├── services/
│   │   └── basketService.ts
│   │   └── productService.ts
│   │   └── wishlistService.ts
│   │   └── authService.ts
│   │   └── accountService.ts
│   ├── types/
│   │   └── apiTypes.ts
├── package.json
├── tsconfig.json
├── rollup.config.js

## Storefront API

### Basket

- Add item to basket :check_mark:
- Add multiple items to basket consecutively :check_mark:
- Add set item :check_mark:
- Add surcharge item :check_mark:
- Add deposit item :check_mark:
- Error handling (retry with update) :check_mark:
- Remove basket item :check_mark:
- Remove multiple items from basket consecutively :check_mark:
- Remove set item :check_mark:
- Remove surcharge item :check_mark:
- Remove deposit item :check_mark:
- Update basket item :check_mark:
- Update multiple items in basket consecutively :check_mark:
- Update surcharge item :check_mark:
- Update deposit item :check_mark:
- Update set item :check_mark:
- Merge remote and local basket :check_mark:

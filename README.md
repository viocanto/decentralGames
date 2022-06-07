## Decentral Games Test Suite
### Setting Up

update the value of `FAKE_RECOVERY_PHRASE` in 'src/utils/_consts.ts' with a production ready **burner** wallet.


npm and yarn are required.
```shell
yarn install 
npm test
```

### Project Overview
#### POM structure
1. pages
    1. page
        1. actions.ts (find functions, click functions)
        2. elements.ts (selectors)
2. tests
    1. test.ts (Mocha tests)
# GraphQL Codegen issue reproduction

Steps to reproduce:

1. Install dependencies with `yarn`
2. Generate types with `yarn generate`

Observe the following issue:

```
  × generated.ts
    Failed to load schema from graphql/**/*.ts:

        Unable to load from file "C:/Development/codegen/graphql/user/index.ts": Cannot use import statement outside a module
        Error: Unable to load from file "C:/Development/codegen/graphql/user/index.ts": Cannot use import statement outside a module
    at tryToLoadFromExport (C:\Development\codegen\node_modules\@graphql-tools\code-file-loader\index.cjs.js:143:15)
    at async CodeFileLoader.load (C:\Development\codegen\node_modules\@graphql-tools\code-file-loader\index.cjs.js:243:32)
    at async loadFile (C:\Development\codegen\node_modules\@graphql-tools\load\index.cjs.js:48:37)
    at async C:\Development\codegen\node_modules\@graphql-tools\load\index.cjs.js:426:24

        GraphQL Code Generator supports:
          - ES Modules and CommonJS exports (export as default or named export "schema")
          - Introspection JSON File
          - URL of GraphQL endpoint
          - Multiple files with type definitions (glob expression)
          - String in config file

        Try to use one of above options and run codegen again.
```

3. Uncomment `"!**/index.ts"` in `codegen.yml`
4. Generate types with `yarn generate`

Observe generating types now works.

I am using Windows 10 and Node v14.16.0. 

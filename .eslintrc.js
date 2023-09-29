module.exports = {
  "env": {
      "browser": true,
      "es2021": true,
      "jest": true
  },
  "ignorePatterns": [".eslintrc.js"],
  "extends": ["standard-with-typescript", "plugin:react/recommended"],
  "overrides": [{
      "env": {
          "node": true
      },
      "files": [".eslintrc.{js,cjs}"],
      "parserOptions": {
          "sourceType": "script"
      }
  }],
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module",
      "project": ["./tsconfig.json"]
  },
  "plugins": ["react"],
  "rules": {
      "@typescript-eslint/strict-boolean-expressions": "off",
      "react/jsx-indent": [2, 2],
      "react/jsx-indent-props": [2, 2],
      "react/jsx-filename-extension": [2, {
          extensions: [".js", ".jsx", ".tsx"]
      }],
      "array-callback-return": "off",
      "@typescript-eslint/no-for-in-array": "off",
      "import/no-unresolved": "off",
      "import/prefer-default-export": "off",
      "react/require-default-props": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-props-no-spreading": "off",
      "react/function-component-definition": "off",
      "no-shadow": "off",
      "import/extensions": "off",
      "import/no-extraneous-dependencies": "off",
      "no-underscore-dangle": "off",
      "@typescript-eslint/quotes": [2, "double"],
      "@typescript-eslint/semi": [2, "always"],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/space-before-function-paren": "off",
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/restrict-template-expressions": "warn",
      "@typescript-eslint/consistent-indexed-object-style": "warn",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/member-delimiter-style": ["error", {
          multiline: {
              delimiter: "semi",
              requireLast: true
          },
          singleline: {
              delimiter: "semi",
              requireLast: false
          }
      }],
      "eol-last": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "no-mixed-operators": "off",
      "multiline-ternary": "off",
      "@typescript-eslint/no-dynamic-delete": "off"
  }
};
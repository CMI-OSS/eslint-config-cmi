module.exports = {
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint",
        "jsx-a11y",
        "import"
    ],
    "ignorePatterns": [
        "build/**"
    ],
    "extends": [
        "airbnb",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "rules": {
        "arrow-body-style": ["error", "always"],
        "linebreak-style": 0,
        "import/prefer-default-export": 0,
        "import/extensions": 0,
        "no-use-before-define": 0,
        "import/no-unresolved": 0,
        "no-useless-constructor": 0,
        "@typescript-eslint/no-useless-constructor": 0,
        "import/no-extraneous-dependencies": 0,
        "no-shadow": 0,
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 0,
        "react/self-closing-comp": 0,
        "react/jsx-pascal-case": 0,
        "class-methods-use-this": 0,
        "max-classes-per-file": 0,
        "react/jsx-filename-extension": [
            2,
            {
                "extensions": [
                    ".js",
                    ".jsx",
                    ".ts",
                    ".tsx"
                ]
            }
        ],
        "react/require-default-props": 0,
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "array-bracket-spacing": [
            "error",
            "always"
        ],
        "lines-between-class-members": [
            "error",
            "always",
            {
                "exceptAfterSingleLine": true
            }
        ],
        "import/order": [
            "error",
            {
                "groups": [
                    "builtin",
                    "external",
                    "internal",
                    [
                        "parent",
                        "sibling"
                    ],
                    "index"
                ],
                "pathGroups": [
                    {
                        "pattern": "react*/*",
                        "group": "builtin",
                        "patternOptions": {
                            "partial": true
                        },
                        "position": "before"
                    },
                    {
                        "pattern": "@nest",
                        "group": "builtin",
                        "position": "before"
                    },
                    {
                        "pattern": "*.[s]css",
                        "group": "index",
                        "position": "after"
                    }
                ],
                "alphabetize": {
                    "order": "asc",
                    "caseInsensitive": true
                },
                "pathGroupsExcludedImportTypes": [
                    "react",
                    "@nest"
                ],
                "newlines-between": "always"
            }
        ],
    },
    "parserOptions": {
        "ecmaVersion": 2017
    },
    "env": {
        "es6": true
    }
}

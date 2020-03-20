module.exports = {
    root: true,
  
    env: {
      node: true
    },
  
    extends: [
      "plugin:vue/essential",
      "plugin:vue/strongly-recommended"
    ],
  
    rules: {
      "vue/this-in-template": "error"
    },
  
    parserOptions: {
      parser: "babel-eslint"
    },
  
    overrides: [
      {
        files: [
          "**/__tests__/*.{j,t}s?(x)",
          "**/tests/unit/**/*.spec.{j,t}s?(x)"
        ]
      }
    ]
  };
  
module.exports = {
    rules: {
      "block-closing-brace-empty-line-before": "never",
      "block-closing-brace-newline-after": "always",
      "block-opening-brace-space-before": "always",
      "block-opening-brace-newline-after": "always",
      "block-no-empty": null,
      "color-no-invalid-hex": true,
      "comment-empty-line-before": [
        "always",
        {
          ignore: ["stylelint-commands", "after-comment"]
        }
      ],
      "declaration-colon-space-after": "always",
      indentation: [
        2,
        {
          except: ["value"]
        }
      ],
      "max-empty-lines": 2,
      "max-line-length": 80,
      "max-nesting-depth": 3,
      "rule-empty-line-before": [
        "always",
        {
          except: ["first-nested"],
          ignore: ["after-comment"]
        }
      ],
      "selector-list-comma-newline-after": "always",
      "unit-whitelist": ["em", "rem", "%", "s", "px", "deg", "ms", "vh", "vw"]
    }
  };
  
export default {
  singleQuote: true,
  printWidth: 80,
  trailingComma: "es5",
  tabWidth: 2,
  semi: false,
  bracketSpacing: true,
  arrowParens: "always",
  endOfLine: "lf",
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};

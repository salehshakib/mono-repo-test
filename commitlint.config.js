// Two-tier commit message validation
// - First tries strict conventional commits (Standard A)
// - Falls back to relaxed descriptive commits (Standard B)

// Standard A: Conventional Commits (strict)
const strictConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-min-length": [2, "always", 10],
    "header-max-length": [2, "always", 72],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "test",
        "chore",
        "perf",
        "ci",
        "build",
        "revert",
      ],
    ],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "scope-case": [2, "always", "lower-case"],
    "subject-case": [
      2,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "body-leading-blank": [1, "always"],
    "body-max-line-length": [2, "always", 100],
  },
};

// Standard B: Simple Descriptive Commits (relaxed)
const relaxedConfig = {
  rules: {
    // Only validate that the message has content and is descriptive
    "header-min-length": [2, "always", 10],
    "header-max-length": [2, "always", 100],
    "header-full-stop": [2, "never", "."],
    "body-leading-blank": [1, "always"],
    "body-max-line-length": [2, "always", 100],
  },
};

// Check which mode to use
const useStrictMode = process.env.COMMITLINT_STRICT === "2";

export default useStrictMode ? strictConfig : relaxedConfig;

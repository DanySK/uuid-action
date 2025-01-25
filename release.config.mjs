import config from 'semantic-release-preconfigured-conventional-commits' with { type: "json" }

config.plugins.push(
    "@semantic-release/github",
    [ "@semantic-release/git", {
        assets: [
            "dist/**/*.{js,css}",
            "CHANGELOG.md",
            "package.json",
            "package-lock.json"
        ]
    } ]
)

export default config;

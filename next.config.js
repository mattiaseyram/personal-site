//next.config.js
const withCSS = require("@zeit/next-css");

const config = {
    webpack: (config) => {
        config.module.rules.push(
            {
                test: /\.md$/,
                use: 'frontmatter-markdown-loader'
            });
        return config;
    }
};

module.exports = withCSS(config);
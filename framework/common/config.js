

const path = require("path");
const fs = require("fs")
const merge = require("deepmerge");
const prettier = require('prettier')

const ALLOWED_FW = ['shopify', 'bigcommerce', 'shopify_local']
const FALLBACK_FW = 'shopify'


function withFrameworkConfig(defaultConfig = {}) {
    let framework = defaultConfig?.framework?.name;

    if (!framework) {
      throw new Error("The api framework is missing, please add a valid provider");
    }
    
    if (!ALLOWED_FW.includes(framework)) {
      throw new Error(
        `The api framework: ${framework} can not be found, please use one of ${ALLOWED_FW.join(", ")}`
      );
    }

    if (framework === 'shopify_local') {
      framework = FALLBACK_FW;
    }
    // const framework = 'shopify'

    const frameworkNextConfig = require(path.join("../", framework, "next.config"));
    const config = merge(defaultConfig, frameworkNextConfig)

  const tsPath = path.join(process.cwd(), "tsconfig.json")
  const tsConfig = require(tsPath)

  tsConfig.compilerOptions.paths["@framework"] = [`framework/${framework}`]
  tsConfig.compilerOptions.paths["@framework/*"] = [`framework/${framework}/*`]

  fs.writeFileSync(
    tsPath,
    prettier.format(
      JSON.stringify(
        tsConfig, null, 2
      ), { parser: 'json'}
    )
  )
    return config
}

module.exports = { withFrameworkConfig }
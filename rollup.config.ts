import { defineConfig } from "rollup"
import terser from "@rollup/plugin-terser"
import typescript from "@rollup/plugin-typescript"
import remove from "rollup-plugin-delete"

export default defineConfig({
    input: "sources/index.tsx",
    external: [
        "react",
        "@mui/material"
    ],
    plugins: [
        remove({
            verbose: true,
            targets: "build/*"
        }),
        typescript(),
        terser()
    ],
    output: [
        {
            file: "build/index.module.js",
            format: "esm"
        },
        {
            file: "build/index.common.js",
            format: "cjs"
        }
    ]
})
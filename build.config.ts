import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
    rollup: {
        emitCJS: true,
        inlineDependencies: true
    },
    clean: true,
    entries: [
        "./src/index",
        "./src/init"
    ],
    outDir: "dist",
    declaration: true,
    failOnWarn: false,
    externals: ['node-scp', 'prompt-sync']
})
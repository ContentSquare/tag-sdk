module.exports = function (config) {
    config.set({
        basePath: "./",
        tsConfigPath: "tsconfig.json",
        frameworks: ["webpack", "jasmine"],
        specReporter: { suppressSkipped: true, suppressPassed: true },
        mime: { "text/x-typescript": ["ts"] },
        exclude: ["*/**/*.d.ts"],
        preprocessors: {
            "*/**/*.ts": ["webpack", "sourcemap"],
        },
        browsers: ["Chrome"],
        resolve: { extensions: [".ts", ".js"] },
        webpack: {
            module: {
                rules: [
                    {
                        test: /\.ts$/,
                        use: [
                            {
                                loader: "ts-loader",
                                options: {
                                    configFile: "tsconfig.json",
                                    transpileOnly: true,
                                    compilerOptions: {
                                        sourceMap: true,
                                    },
                                    useCaseSensitiveFileNames: true,
                                    experimentalFileCaching: true,
                                },
                            },
                        ],
                    },
                ],
            },
            devtool: "inline-source-map",
            optimization: {
                runtimeChunk: false,
                splitChunks: false,
            },
            target: ["web", "es5"],
            resolve: {
                extensions: [".ts", ".js"],
            },
        },
        webpackMiddleware: { stats: "errors-only", logLevel: "warn" },
        singleRun: true,
        files: [
          "./src/**/*.ts"
        ]
    });
};

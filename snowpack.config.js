module.exports = {
    mount: {
        "src": "/",
        "public": "/"
    },
    plugins: [
        ['@snowpack/plugin-sass', { style: 'compressed'}],
        [
            'snowpack-plugin-imagemin',
            {
              include: ['**/*.jpg', '**/*.png'],
              plugins: [
                require('imagemin-mozjpeg')({quality: 90, progressive: true}),
                require('imagemin-optipng')({optimizationLevel: 7}),
              ],
            },
        ],
    ],
    buildOptions: {
        clean: true,
        minify: true,
    },
    exclude: [
        "**/node_modules/**/*",
    ],
    optimize: {
        /* Use built-in esbuild bundling for build */
        bundle: true,
        minify: true,
        target: "es2020",
        treeshake: true,
        splitting: true,
    },
  };
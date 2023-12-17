export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxt/ui',
        '@pinia/nuxt',
        '@nuxtjs/eslint-module',
        '@nuxt/image',
        '@nuxtjs/google-fonts',
        'nuxt-typed-router',
        '@vueuse/nuxt',
        '@pinia/nuxt'
    ],
    pinia: {
        storesDirs:['~/stores/**'],
    },
    eslint: {
        lintOnStart: false,
    },
    googleFonts: {
        families: {
            Roboto: true,
        },
        download: true,
        outputDir: 'assets',
        fontsDir: 'fonts',
        stylePath: 'css/fonts.css',
    },
    ui: {
        global: true,
        icons: ['logos', 'tabler'],
    },
    runtimeConfig: {
        public: {}
    }
});

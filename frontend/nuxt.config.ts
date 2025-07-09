import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/icon'
  ],

  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
        tailwindcss(),
    ],
  },

  icon: {
    aliases: {
      'add': 'heroicons:plus',
      'delete': 'heroicons:trash',
      'setting': 'heroicons:cog-6-tooth',
      'arrow': 'heroicons:arrow-long-right'
    }
  }
})

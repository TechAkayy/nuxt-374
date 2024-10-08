export default defineNuxtConfig({
  modules: [
    function (inlineOptions, nuxt) {
      nuxt.hook('ready', async (nuxt) => {
        // Restart in 12 secs
        setTimeout(() => {
          console.log('Restarting in the 12 secs..')
          nuxt.callHook('restart', {hard: true})
        }, 12000)
      })

      nuxt.hook('listen', async (server, listener) => {
        const url = listener.url
        // console.log(url)
        const urls = await listener.getURLs()
        // console.log(urls)
      })
    },
  ],
})

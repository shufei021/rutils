// import rutils from './lib'

export default ({ router, Vue }) => {
    if (typeof process === 'undefined' || process.env.VUE_ENV !== 'server') {
        router.onReady(() => {
            const { app } = router
            app.$once('hook:mounted', () => {
                setTimeout(() => {
                    const { hash } = document.location
                    if (hash.length > 1) {
                        const id = decodeURIComponent(hash.substring(1))
                        const element = document.getElementById(id)
                        if (element) element.scrollIntoView()
                    }
                    import('./lib/index.js')
                        .then(module => {
                            window.rutils = module.default
                        })
                        .catch(e => {
                            console.log(e)
                        })
                    import('./lib/data.js')
                        .then(module => {
                            window.cityList = module.default
                        })
                        .catch(e => {
                            console.log(e)
                        })
                }, 500)
            })
        })
    }
}

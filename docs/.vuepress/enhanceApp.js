// import rutils from './lib'
const print = function (){
    Array.from(arguments).forEach(item=>{
        if( Object.prototype.toString.call(item).slice(8,-1) === 'Object'){
            let e = [
                `%c ${item.title} %c ${item.content} `,
                `padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060;`,
                `padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: ${item.backgroundColor?item.backgroundColor:'#1475b2'};`
            ]
            let fun = function(){
                return window.console && "function" === typeof window.console.log &&(item = console).log.apply(e, arguments)
            }
            fun.apply(null,e)
        }
    })
  }
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
                            print({
                                title: "Name",
                                content: 'rutils',
                                backgroundColor:"#42c02e"
                            },{
                                title: "Version",
                                content: '1.0.0',
                                backgroundColor:"#1475b2"
                            },{
                                title: "Build Date",
                                content: new Date().toLocaleString()
                            })
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

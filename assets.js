// assets to be used by the 'hapi-assets' module based on process.env.NODE_ENV
module.exports = {
    development: {
        js: ['js/application.js'
        ],
        css: ['css/application.css'
        ]
    },
    production: {
        js: ['js/scripts.js'],
        css: ['css/styles.css']
    }
}

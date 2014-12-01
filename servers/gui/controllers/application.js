var fs = require('fs');
// This is the base controller. Used for base routes, such as the default index/root path, 404 error pages, and others.
module.exports = {
    index: {
        handler: function(request, reply){
            var scripts = "";
            var page = 'dashboard';
            
            // Render the view with the custom greeting
            reply.view('index', {
                title: 'MyApp',
                scripts: scripts,
                page: page,
                text: 'Hello MyApp'
            });
        },
        app: {
            name: 'index'
        },
        auth: {
            strategy: 'session'
        }
    },
    page: {
        handler: function(request, reply){
            var page = request.params.path;
            // Custom page specific scripts
            var scripts = "";    
            switch(page) {
                default:
                    scripts += "<script>$(function(){ console.log('Hello MyApp') });</script>";
            } 

            if(fs.existsSync(__dirname +'/../views/'+page+'.html')) {
                reply.view(page, {
                    title: 'Dashboard',
                    scripts: scripts,
                    page: page
                });
            } else {
                reply.view('404', {
                    title: 'No page found!'
                }).code(404);
            }  
        },
        app: {
            name: 'about'
        },
        auth: {
            strategy: 'session'
        }
    }
}

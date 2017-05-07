package grails.angular.seed

class UrlMappings {

    static excludes = [
            "/app/images/**",
            "/app/*.js",
            "/app/*.css",
            "/app/*.map",
            "/app/index.html"
    ]

    static mappings = {
        delete "/api/$controller/$id(.$format)?"(action:"delete")
        get "/api/$controller(.$format)?"(action:"index")
        get "/api/$controller/$id(.$format)?"(action:"show")
        post "/api/$controller(.$format)?"(action:"save")
        put "/api/$controller/$id(.$format)?"(action:"update")
        patch "/api/$controller/$id(.$format)?"(action:"patch")

        "/app/**"(uri: '/app/index.html')
        "/"(controller: 'application', action: 'index')
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}

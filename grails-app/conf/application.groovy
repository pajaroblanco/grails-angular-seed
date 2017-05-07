
grails.controllers.upload.maxFileSize=10000000000000
grails.controllers.upload.maxRequestSize=10000000000000
grails.databinding.dateFormats = ["yyyy-MM-dd'T'hh:mm:ss.S'Z'", 'MM/dd/yyyy', 'yyyy-MM-dd HH:mm:ss']

/**
 * Mail plugin setup
 */
grails {
    mail {
        host = "smtp.ucr.edu"
        port = 25
    }
}

/**
 * Database Migration plugin setup
 */
grails.plugin.databasemigration.updateOnStart = true
grails.plugin.databasemigration.updateOnStartFileNames = ['changelog.groovy']

environments {
    development {
        serverUrl = 'http://localhost:8080/'
        grails.plugin.databasemigration.updateOnStart = false

        //override mail plugin to always send to developer
        grails.mail.overrideAddress = 'youremailaddress@ucr.edu' //todo: update this with your email address
    }
    test {
        serverUrl = 'https://apptest.yourdomain.com/' //todo: update with your URL

        //override mail plugin to always send to developer
        grails.mail.overrideAddress = 'youremailaddress@ucr.edu' //todo: update this with your email address
    }
    production {
        serverUrl = 'https://app.yourdomain.com/' //todo: update with your URL
    }
}
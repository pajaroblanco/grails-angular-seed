import ch.qos.logback.classic.encoder.PatternLayoutEncoder
import ch.qos.logback.core.ConsoleAppender
import ch.qos.logback.core.FileAppender
import grails.util.BuildSettings
import grails.util.Environment
import org.springframework.boot.logging.logback.ColorConverter
import org.springframework.boot.logging.logback.WhitespaceThrowableProxyConverter

import java.nio.charset.Charset

conversionRule 'clr', ColorConverter
conversionRule 'wex', WhitespaceThrowableProxyConverter

// See http://logback.qos.ch/manual/groovy.html for details on configuration
appender('STDOUT', ConsoleAppender) {
    encoder(PatternLayoutEncoder) {
        charset = Charset.forName('UTF-8')

        pattern =
                '%clr(%d{yyyy-MM-dd HH:mm:ss.SSS}){faint} ' + // Date
                        '%clr(%5p) ' + // Log level
                        '%clr(---){faint} %clr([%15.15t]){faint} ' + // Thread
                        '%clr(%-40.40logger{39}){cyan} %clr(:){faint} ' + // Logger
                        '%m%n%wex' // Message
    }
}

def targetDir = BuildSettings.TARGET_DIR
if (Environment.isDevelopmentMode() && targetDir != null) {
    appender("FULL_STACKTRACE", FileAppender) {
        file = "${targetDir}/stacktrace.log"
        append = true
        encoder(PatternLayoutEncoder) {
            pattern = "%level %logger - %msg%n"
        }
    }

    logger("StackTrace", ERROR, ['FULL_STACKTRACE'], false)

    /*Application artifact logging*/
    logger("grails.app.controllers", DEBUG, ['STDOUT'], false)
    logger("grails.app.services", DEBUG, ['STDOUT'], false)
    logger("org.springframework.security", ERROR, ['STDOUT'], false)
    logger("grails.plugin.springsecurity", ERROR, ['STDOUT'], false)
    logger("org.pac4j", ERROR, ['STDOUT'], false)

    root(ERROR, ['STDOUT', 'FULL_STACKTRACE'])
}
else {
    appender("FULL_STACKTRACE", FileAppender) {
        file = "${targetDir}/stacktrace.log"
        append = true
        encoder(PatternLayoutEncoder) {
            pattern = "%level %logger - %msg%n"
        }
    }

    logger("StackTrace", ERROR, ['FULL_STACKTRACE'], false)

    /*Application artifact logging*/
    logger("grails.app.controllers", INFO, ['STDOUT'], false)
    logger("grails.app.services", INFO, ['STDOUT'], false)
    logger("org.springframework.security", ERROR, ['STDOUT'], false)
    logger("grails.plugin.springsecurity", ERROR, ['STDOUT'], false)
    logger("org.pac4j", ERROR, ['STDOUT'], false)

    root(ERROR, ['STDOUT'])
}

package grails.angular.seed

class Employee {

    String firstName
    String lastName

    Date dateCreated
    Date lastUpdated

    static constraints = {
        firstName nullable: false, maxSize: 100
        lastName nullable: false, maxSize: 100
    }

    static belongsTo = [
            department: Department
    ]
}

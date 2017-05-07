package grails.angular.seed

class Department {

    String departmentName

    Date dateCreated
    Date lastUpdated

    static constraints = {
        departmentName nullable: false, maxSize: 100
    }

    static hasMany = [
            employees: Employee
    ]
}

package grails.angular.seed

import grails.converters.JSON

class DepartmentController {
	static responseFormats = ['json', 'xml']

    def index() {
        def depts = Department.list(fetch: [employees: 'eager'], sort: 'departmentName', order: 'asc')
        def results = depts.collect { Department dept ->
            [
                    id: dept.id,
                    name: dept.departmentName,
                    employees: dept.employees.collect { Employee employee ->
                        [
                                id: employee.id,
                                firstName: employee.firstName,
                                lastName: employee.lastName
                        ]
                    }
            ]
        }
        render results as JSON
    }
}

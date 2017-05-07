package grails.angular.seed

class BootStrap {

    def init = { servletContext ->
        environments {
            production {
                populateLookupData()
            }
            test {
                populateLookupData()
            }
            development {
                populateLookupData()
                populateTestData()
            }
        }
    }

    def populateLookupData() {

    }

    def populateTestData() {
        10.times {
            def newDept = new Department(departmentName: "Department $it")
            newDept.save(failOnError: true)

            5.times {
                newDept.addToEmployees(firstName: 'John', lastName: "Smith $it")
            }
        }
    }

    def destroy = {
    }
}

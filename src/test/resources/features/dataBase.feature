@CN-215
Feature:


#  @CN-220 @CN-216 @CN-217
#  Scenario: Deleting Teacher Name with Grid-View
#    Given user is on homepage
#    When user clicks on Teacher button
#    Then user should be able to see All Teacher and Add Teacher options
#    When user clicks on All Teacher Button
#    Then user should see profile widgets
#    When user clicks on three dot dropdown
#    Then user should see Edit and Delete options
#    And user clicks on Delete button
#    Then user should see HTML Alert
#    When user clicks on Delete
#    Then System should delete it from database


#  @CN-221 @CN-216 @CN-217
#  Scenario: Deleting Teacher name with  List-View
#    Given user is on homepage
#    When user clicks on Teacher button
#    Then user should be able to see All Teacher and Add Teacher options
#    When user clicks on All Teacher Button
#    And user clicks on list-view button
#    Then user should see Edit and Delete options
#    When user clicks on Delete button
#    Then user should see HTML Alert
#    When user clicks on Delete
#    Then System should delete it from database
#


  @CN-226 @CN-216 @CN-217
  Scenario: Verify User Can Change email address, phone number and salary
    Given user is on homepage
    When user clicks on Teacher button
    Then user should be able to see All Teacher and Add Teacher options
    When user clicks on All Teacher Button
    Then user should see profile widgets
    When user clicks on three dot dropdown
    Then user should see Edit and Delete options
    And user clicks on Edit button
    Then the user enters first name, email, mobileNumber and salary
      | kanye@xmail.com | 3128888888 | 15000|
    Then verify teacher's new information on web
    Then verify teacher's new information on database


  @CN-224 @CN-216 @CN-217
  Scenario: Verify User Can Change First Name and Last Name
    Given user is on homepage
    When user clicks on Teacher button
    Then user should be able to see All Teacher and Add Teacher options
    When user clicks on All Teacher Button
    Then user should see profile widgets
    When user clicks on three dot dropdown
    Then user should see Edit and Delete options
    And user clicks on Edit button
    And the user enters fistname and lastname
      | Kanye | West |
    Then verify teacher's new information on web
    Then verify teacher's new information on database


  @CN-219 @CN-216 @CN-217
  Scenario: As a user I should be able to delete students
    Given the user is on the dashboard module
    When the user clicks on Students module
    Then All students link should be displayed on the page
    When user clicks All student link
    Then user should be navigated to new page with students information
    And User clicks to student entry from database
    And User navigate.back
    When user clicks three sign button
    Then user should be able to to see delete button
    Then Delete employee button should be pop up
    Then user should be able to delete students info
    Then The information should be deleted from data



  @CN-227 @CN-216 @CN-217
  Scenario: Create teacher on web
    When user clicks on teacher tab
    And user clicks add teacher button
    Given teacher value
      | FirstName        | JohnJunior1            |
      | LastName         | WickBond               |
      | Email            | j.wick@gmail.com       |
      | Subject          | Java                   |
      | Joining Date     | 01/01/2020             |
      | Mobile Number    | 3128969636             |
      | Department       | Computer               |
      | Password         | 123456$                |
      | Gender           | Female                 |
      | Birth Date       | 01/01/1991             |
      | Batch            | 11                     |
      | Address          | 856 S. Palin, CA 50096 |
      | Section          | 3                      |
      | Password Confirm | 123456$                |
      | Salary           | 115000                 |
    And user enter personal information
    Then user click submit button
    When user is on the new page enter created user name
    And user is clicking search button
    Then create name will be present on list of names
    When user open created teacher
    And user check check phone number
    And user check email
    And user check batch
    And user check birthday
    And user check join date
    And user check address
    And user check gender
    And user check salary
    And user check section
    And user check subject

    Then verify teacher on database


  @CN-228 @CN-216 @CN-217
  Scenario: Verify User Can Change Student's email address, phone number and major
    Given user is on homepage
    When user clicks on Student button
    Then user should be able to see All Student and Add Student options
    When user clicks on All Student Button
    When user clicks on three dot dropdown
    Then user should see Edit and Delete options
    And user clicks on Edit button
    Then the user enters first name, email, mobileNumber and major
      | Taylor | taylor@xmail.com | 3128888888 | psychology |
    Then verify student's new information on web
    Then verify student's new information on database




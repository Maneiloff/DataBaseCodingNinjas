@CN-215
Feature:


  @CN-220 @CN-216 @CN-217
  Scenario: Deleting Teacher Name with Grid-View
    Given user is on homepage
    When user clicks on Teacher button
    Then user should be able to see All Teacher and Add Teacher options
    When user clicks on All Teacher Button
    And user clicks on Grid-Wiew button
    Then user should see profile widgets
    When user clicks on three dot dropdown
    Then user should see Edit and Delete options
    And user clicks on Delete button
    Then user should see HTML Alert
    When user clicks on Delete
    Then System should delete it from database


  @CN-221 @CN-216 @CN-217
  Scenario: Deleting Teacher name with  List-View
    Given user is on homepage
    When user clicks on Teacher button
    Then user should be able to see All Teacher and Add Teacher options
    When user clicks on All Teacher Button
    And user clicks on list-view button
    Then user should see Edit and Delete options
    When user clicks on Delete button
    Then user should see HTML Alert
    When user clicks on Delete
    Then System should delete it from database


  @CN-223 @CN-216 @CN-217
  Scenario: Create a student from Add Student Button
    Given User is in Dashboard page
    When User clicks on Student button
    When User clicks on Add Student button
    Then Add Student Information Page should be dislayed
    When User enters keyword FirstName
    And Lastname
    And Email
    And Joining date
    And Password
    And ConfirmPassword
    And Subject
    And MobileNumber
    And Gender
    And AdmissionNo
    And BirthDate
    And Major
    And Batch
    And Section
    And Permanent Address
    And Company name
    And Title
    And Start Date
    And City
    And Street
    And Zip code
    And State
    Then User should be able to submit


  @CN-225 @CN-216 @CN-217
  Scenario: Add a student using Add Student Button
    Given User is in Dashboard page
    When User clicks on Student button
    When User clicks on Add Student button
     When User enters keyword FirstName
    And Lastname
    And Email
    And Joining date
    And Password
    And ConfirmPassword
    And Subject
    And MobileNumber
    And Gender
    And AdmissionNo
    And BirthDate
    And Major
    And Batch
    And Section
    And Permanent Address
    And Company name
    And Title
    And Start Date
    And City
    And Street
    And Zip code
    And State
    Then User should be able to submit
    Then Verify user can see the created student in All Students module
    And Verify the created student is in the DataBase
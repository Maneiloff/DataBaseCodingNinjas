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
    Then User should be able to see dropdown options
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
		
			

	#Given User is in Dashboard page
	#When User clicks on Student button
	#Then User should be able to see dropdown options
	#When User clicks on Add Student button 
	#Then Add Student Information Page should be dislayed
	#When User enters keyword FirstName
	#And Lastname
	#And Email
	#And Joining date
	#
	#Then User should be able to see pop up calendar
	#
	#When user selects a date 
	#
	#Then User should be able to see the selected date.
	#And Password
	#And ConfirmPassword
	#And Subject
	#And MobileNumber
	#And Gender
	#And AdmissionNo
	#And BirthDate
	#And Major
	#And Batch
	#And Section
	#And Permanent Address
	#And Company name
	#And Title
	#And Start Date
	#And City
	#And Street 
	#And Zip code
	#And State
	#Then User should be able to submit
  @CN-225 @CN-216 @CN-217
  Scenario: Add a student using Add Student Button
    Given User is in Dashboard page
    When User clicks on Student button
    Then User should be able to see dropdown options
    When User clicks on Add Student button
    Then Add Student Information Page should be dislayed
    When User enters keyword FirstName
    And Lastname
    And Email
    And Joining date
    Then Pop up calendar should appear
    When User selects a date
    Then User should be able to see the selected date
    And Password
    And ConfirmPassword
    And Subject
    And MobileNumber
    And Gender
    Then User should be able to see dropdown
    And AdmissionNo
    And BirthDate
    Then Calendar should appear
    When User selects the date
    Then User should be able to see the selected date
    And Major
    And Batch
    Then User should see the dropdown
    When User should select date
    Then User should be able to see date
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
    Then the user enters email, mobileNumber and salary
      | kanye@xmail.com | 3128888888 | 15000 |
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
		
			

	#*Given* the user is on the dashboard module 
	#
	#*When* the user clicks on Students module
	#
	#*Then*  All students link should be displayed on the page
	#*When* user clicks  All student link
	#
	#*Then* user should be navigated to new page with students information
	#*When*  user clicks three sign button
	#
	#Then user should be able to to see delete button
	#
	#*When* user clicks delete button
	#*Then* Delete employee button should be pop up
	#*When* user clicks delete button 
	#*Then* user should be able to delete students info
  @CN-219 @CN-216
  Scenario: As a user I should be able to delete students
    Given the user is on the dashboard module
    When the user clicks on Students module
    Then All students link should be displayed on the page
    When user clicks All student link
    Then user should be navigated to new page with students information
    When user clicks three sign button
    Then user should be able to to see delete button
    When user clicks delete button
    Then Delete employee button should be pop up
    When user clicks delete button
    Then user should be able to delete students info


  @CN-227 @CN-216 @CN-217 @ser
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
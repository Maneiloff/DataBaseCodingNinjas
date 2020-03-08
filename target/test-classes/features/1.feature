Feature: 

	
	@CN-229 @CN-216 @CN-217
	Scenario: User Should Be Able To Add A Student From Student Button
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
		
Feature: 

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
		And User clicks to student entry from database
		And User navigate.back
		When user clicks three sign button
		Then user should be able to to see delete button
		Then Delete employee button should be pop up
		Then user should be able to delete students info
		Then The information should be deleted from data












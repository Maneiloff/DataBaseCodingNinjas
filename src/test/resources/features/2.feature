Feature:
  @Sergei
  Scenario: Creating a teacher user
Given teacher value
| First Nme | JohnJunior |
| Last Name | WickBond |
| Email     | j.wick@gmail.com|
| Subject   | Java |
| Joining Date | 03/02/2018 |
| Mobile Number   | 312-896-9636|
| Department | IT |
| Password | 123456$ |
| Gender | Male |
| Birth Date | 01/01/1991 |
| Batch | 11 |
| Address | 856 S. Palin, CA 50096 |
| Section | 3 |
| Password Confirm | 123456$ |
| Salary | 115,000 |
    And user enter first name
    And user enter last name
    And user enter email
    And user enter joined date
    And user enter a password
    And user enter a subject
    And user choose the gender
    And user enter the phone number
    And user enter the birthday date
    And user enter salary
    And user choose department
    And user enter salary
    And user enter section
    And user enter address
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
    And first name is verified
    And last name is verified
    And email is verified
    And batch is verified
    And birthday is verified
    And join date is verified
    And address is verified
    And gender is verified
    And salary is verified
    And section is verified
    And subject is verified

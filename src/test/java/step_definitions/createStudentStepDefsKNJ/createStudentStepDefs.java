package step_definitions.createStudentStepDefsKNJ;

import com.github.javafaker.Faker;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;
import pages.CreateStudent;
import utilities.utilities.Config;
import utilities.utilities.Driver;
import utilities.utilities.SeleniumUtils;

import java.sql.*;

public class createStudentStepDefs {

    CreateStudent createStudent = new CreateStudent();
    Faker faker = new Faker();

    @Given("User is in Dashboard page")
    public void user_is_in_Dashboard_page() {
        Driver.getDriver().get(Config.getProperty("cybertektrainingURL"));
    }

    @When("User clicks on Student button")
    public void user_clicks_on_Student_button() {
        createStudent.StudentTab.click();
    }

    @When("User clicks on Add Student button")
    public void userClicksOnAddStudentButton() {
        createStudent.addStudent.click();
    }



    @When("User enters keyword FirstName")
    public void user_enters_keyword_FirstName() throws Exception {
        Thread.sleep(5000);
        //SeleniumUtils.waitForVisibility(createStudent.studentFirstName, 15);
    createStudent.studentFirstName.sendKeys("Java");
    }

    @When("Lastname")
    public void lastname() {
    createStudent.studentLastName.sendKeys(faker.name().lastName());
    }

    @When("Email")
    public void email() {
     createStudent.studentEmail.sendKeys(faker.internet().emailAddress());
    }

    @When("Joining date")
    public void joining_date() {
    createStudent.studentJoiningDate.sendKeys("10/10/2010");
    }

    @Then("Password")
    public void password() {
        createStudent.studentPassword.sendKeys(faker.name().fullName());
    }

    @Then("ConfirmPassword")
    public void confirmpassword() {
        createStudent.studentConfirmPassword.sendKeys(faker.name().fullName());
    }

    @Then("Subject")
    public void subject() {
        createStudent.studentSubject.sendKeys(faker.educator().course());
    }

    @Then("MobileNumber")
    public void mobilenumber() {
        createStudent.studentMobileNumber.sendKeys("34343543");
    }

    @Then("Gender")
    public void gender() {
        Select select=new Select(createStudent.studentGender);
        select.getFirstSelectedOption();
    }

    @Then("AdmissionNo")
    public void admissionno() {
        createStudent.studentAdmissionNo.sendKeys(faker.number().digit());
    }

    @Then("BirthDate")
    public void birthdate() {
        createStudent.studentBirthDate.sendKeys("02/02/2000");
    }

    @Then("Major")
    public void major() {
        createStudent.studentMajor.sendKeys(faker.educator().course());
    }

    @Then("Batch")
    public void batch() {
        Select select = new Select(createStudent.studentBatch);
        select.selectByIndex(3);
    }

    @Then("Section")
    public void section() {
        createStudent.studentSection.sendKeys(faker.educator().course());
    }

    @Then("Permanent Address")
    public void permanent_Address() {
        createStudent.studentPermanentAddress.sendKeys(faker.address().city());
    }

    @Then("Company name")
    public void company_name() {
        createStudent.studentCompanyName.sendKeys(faker.company().name());
    }

    @Then("Title")
    public void title() {
        createStudent.studentTitle.sendKeys(faker.educator().course());
    }

    @Then("Start Date")
    public void start_Date() {
        createStudent.studentStartDate.sendKeys("10/10/2010");
    }

    @Then("City")
    public void city() {
        createStudent.studentCity.sendKeys(faker.address().city());
    }

    @Then("Street")
    public void street() {
       createStudent.studentStreet.sendKeys(faker.address().streetAddress());
    }

    @Then("Zip code")
    public void zip_code() {
        createStudent.studentZipCode.sendKeys(faker.address().zipCodeByState("IL"));
    }

    @Then("State")
    public void state() {
        createStudent.studentState.sendKeys(faker.address().state());
    }


    @Then("User should be able to submit")
    public void userShouldBeAbleToSubmit() {
        createStudent.studentSubmit.click();
    }

    @Then("Verify user can see the created student in All Students module")
    public void verifyUserCanSeeTheCreatedStudentInAllStudentsModule() {
        createStudent.studentnameUI.sendKeys("Java");
        createStudent.searchButtonUI.click();
        Assert.assertTrue(createStudent.JavaStudent.isDisplayed());
    }

    @And("Verify the created student is in the DataBase")
    public void verifyTheCreatedStudentIsInTheDataBase() {

        String url = "jdbc:oracle:thin:@cybertekschooldb.ckgvmy6l4fr7.us-east-2.rds.amazonaws.com:1521:ORCL";
        String username = "cybertekschooldb";
        String password = "cybertekschooldb1234%";

        try {
            Connection connection = DriverManager.getConnection(url, username, password);
            Statement statement = connection.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
            ResultSet resultSet = statement.executeQuery("select * from teacher;");
//            ResultSet resultSet = statement.executeQuery("select first_name, last_name from employees");

            resultSet.next();
            System.out.println(resultSet.getObject(1));

            System.out.println("Connection successful!");
            connection.close();

        } catch (SQLException e) {
            System.out.println("Connection Failed!");
        }
    }



}

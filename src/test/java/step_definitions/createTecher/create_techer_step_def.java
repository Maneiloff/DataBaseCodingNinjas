package step_definitions.createTecher;

import Pages.createTeacher.AllTeachersPage;
import Pages.createTeacher.Calendar;
import Pages.createTeacher.CreateTeacherPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.eo.Se;
import io.cucumber.datatable.DataTable;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import utilities.utilities.DBUtility;
import utilities.utilities.Driver;
import utilities.utilities.SeleniumUtils;

import java.net.MalformedURLException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class create_techer_step_def {

    Map<String, String> data;
    CreateTeacherPage createTeacherPage = new CreateTeacherPage();
    AllTeachersPage allTeachersPage = new AllTeachersPage();
    String id;
    List<Map<Object, Object>> dataList;

    public create_techer_step_def() throws MalformedURLException {
    }


    @Given("teacher value")
    public void teacher_value(DataTable dataTable) {
    data = dataTable.asMap(String.class,String.class);

}
    @When("user clicks on teacher tab")
    public void user_clicks_on_teacher_tab() {
        createTeacherPage.teacherBtn.click();

    }

    @When("user clicks add teacher button")
    public void user_clicks_add_teacher_button() throws MalformedURLException {
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(), 10);
        wait.until(ExpectedConditions.elementToBeClickable(createTeacherPage.addTeacherSideBar)).click();

    }

    @Given("user enter personal information")
    public void user_enter_personal_information() {
        SeleniumUtils.pause(3);
        createTeacherPage.firstName.sendKeys(data.get("FirstName"));

        createTeacherPage.lastName.sendKeys(data.get("LastName"));

        createTeacherPage.email.sendKeys(data.get("Email"));

        createTeacherPage.joiningDate.sendKeys(data.get("Joining Date"));

        createTeacherPage.password.sendKeys(data.get("Password"));

        createTeacherPage.passwordConfirm.sendKeys(data.get("Password Confirm"));

        createTeacherPage.subject.sendKeys(data.get("Subject"));

        createTeacherPage.mobileNumber.sendKeys(data.get("Mobile Number"));

        Select selectGender = new Select(createTeacherPage.gender);
        selectGender.selectByVisibleText(data.get("Gender"));

        Select selectDepartment = new Select(createTeacherPage.department);
        selectDepartment.selectByVisibleText(data.get("Department"));

        createTeacherPage.birthDate.sendKeys(data.get("Birth Date"));

        createTeacherPage.salary.click();
        createTeacherPage.salary.clear();
        createTeacherPage.salary.sendKeys(data.get("Salary"));

        Select selectBatch = new Select(createTeacherPage.batch);
        selectBatch.selectByVisibleText(data.get("Batch"));

        createTeacherPage.section.sendKeys(data.get("Section"));

        createTeacherPage.address.sendKeys(data.get("Address"));

    }


    @Then("user click submit button")
    public void user_click_submit_button() {
        createTeacherPage.submitBtn.click();
    }

    @When("user is on the new page enter created user name")
    public void user_is_on_the_new_page_enter_created_user_name() {
        SeleniumUtils.pause(3);
        allTeachersPage.teacherName.click();
        allTeachersPage.teacherName.sendKeys(data.get("FirstName"));
    }

    @When("user is clicking search button")
    public void user_is_clicking_search_button() {
        allTeachersPage.searchBtn.click();
    }

    @Then("create name will be present on list of names")
    public void create_name_will_be_present_on_list_of_names() {
        SeleniumUtils.pause(2);
        Assert.assertEquals("name is not in the list in user interface",allTeachersPage.nameOfUser.getText(),(data.get("FirstName")));

    }

    @When("user open created teacher")
    public void user_open_created_teacher() {
        allTeachersPage.avatar.click();

    }

    @When("user check check phone number")
    public void user_check_check_phone_number() {
        id=allTeachersPage.teacherId.getText();
        Assert.assertEquals("number is different",allTeachersPage.phoneNumber.getText(),data.get("Mobile Number"));
    }

    @When("user check email")
    public void user_check_email() {
        Assert.assertEquals("email is wrong",allTeachersPage.email.getText(),data.get("Email"));
    }

    @When("user check batch")
    public void user_check_batch() {
        Assert.assertEquals("batch is wrong",allTeachersPage.batch.getText(),data.get("Batch"));
    }

    @When("user check birthday")
    public void user_check_birthday() {
        Assert.assertEquals("birthday is wrong",allTeachersPage.birthday.getText(),data.get("Birth Date"));
    }

    @When("user check join date")
    public void user_check_join_date() {
        Assert.assertEquals("joined date is wrong",allTeachersPage.joinDate.getText(),data.get("Joining Date"));

    }

    @When("user check address")
    public void user_check_address() {
        Assert.assertEquals(allTeachersPage.address.getText(),data.get("Address"));

    }

    @When("user check gender")
    public void user_check_gender() {
        Assert.assertEquals("gender is not equal",allTeachersPage.gender.getText(),data.get("Gender"));
    }

    @When("user check salary")
    public void user_check_salary() {
        Assert.assertEquals("salary is different",allTeachersPage.salary.getText(),data.get("Salary"));
    }

    @When("user check section")
    public void user_check_section() {
        Assert.assertEquals("section is correct",allTeachersPage.section.getText(), data.get("Section"));
    }

    @When("user check subject")
    public void user_check_subject() {
        Assert.assertEquals("subject is not as expected",allTeachersPage.subject.getText(), data.get("Subject"));

    }

    @Then("verify teacher on database")
    public void verify_teacher_on_database() throws SQLException {
    DBUtility.createConnection();
        dataList = DBUtility.executeQuery("select* from teacher where teacher_id="+id);
        System.out.println(dataList);

        for(Map<Object, Object> map: dataList){
                Assert.assertEquals((map.get("TEACHER_ID")).toString(),id);
                Assert.assertEquals(map.get("FIRST_NAME").toString(),data.get("FirstName"));
                Assert.assertEquals(map.get("PHONE").toString(),data.get("Mobile Number"));
                Assert.assertEquals(map.get("DEPARTMENT").toString(),data.get("Department"));
                Assert.assertEquals(map.get("LAST_NAME").toString(),data.get("LastName"));
                Assert.assertEquals(map.get("PREMANENT_ADDRESS").toString(),data.get("Address"));
                Assert.assertEquals(map.get("SALARY").toString(),data.get("Salary"));
                Assert.assertEquals(map.get("EMAIL_ADDRESS").toString(), data.get("Email"));
//                Assert.assertEquals(map.get("BIRTH_DATE").toString(), data.get("Birth Date"));
                Assert.assertEquals(map.get("GENDER").toString(), data.get("Gender"));
                Assert.assertEquals(map.get("SUBJECT").toString(), data.get("Subject"));
                Assert.assertEquals(map.get("BATCH").toString(),data.get("Batch"));
                Assert.assertEquals(map.get("SECTION").toString(), data.get("Section"));

        }

    }




}

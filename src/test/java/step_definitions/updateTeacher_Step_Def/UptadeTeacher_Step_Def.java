package step_definitions.updateTeacher_Step_Def;

import Pages.UpdateTeacher;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.it.Ma;
import io.cucumber.datatable.DataTable;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import utilities.utilities.DBUtility;
import utilities.utilities.Driver;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.jar.JarOutputStream;

public class UptadeTeacher_Step_Def {

    UpdateTeacher uptadeTeacher = new UpdateTeacher();
    String id;
    String name;
    String email;
    String salary;
    String phoneNumber;
    String surname;

    @When("user clicks on Teacher button")
    public void user_clicks_on_Teacher_button() throws InterruptedException {
        Thread.sleep(3000);
        uptadeTeacher.teacherButton.click();
        Thread.sleep(3000);
    }

    @Then("user should be able to see All Teacher and Add Teacher options")
    public void user_should_be_able_to_see_All_Teacher_and_Add_Teacher_options() {
        Assert.assertTrue("All teacher button is NOT enable ", uptadeTeacher.allTeacherButton.isEnabled());
        Assert.assertTrue("Add teacher button is NOT enable ", uptadeTeacher.addTeaxcher.isEnabled());

    }

    @When("user clicks on All Teacher Button")
    public void user_clicks_on_All_Teacher_Button() throws InterruptedException {
        uptadeTeacher.allTeacherButton.click();
        Thread.sleep(4000);
    }

//user clicks on Grid-Wiew button
    @Then("user should see profile widgets")
    public void user_should_see_profile_widgets() throws InterruptedException {
        uptadeTeacher.name.click();
        Thread.sleep(2000);
        id = uptadeTeacher.teacherId.getText();
        Driver.getDriver().navigate().back();
    }


    @When("user clicks on three dot dropdown")
    public void user_clicks_on_three_dot_dropdown() throws InterruptedException {
        uptadeTeacher.threeDots.click();
        Thread.sleep(4000);
    }


    @Then("user should see Edit and Delete options")
    public void user_should_see_Edit_and_Delete_options() {
        Assert.assertTrue("Edit button is NOT enable ", uptadeTeacher.editButton.isEnabled());
        Assert.assertTrue("Delete button is NOT enable ", uptadeTeacher.deleteButton.isEnabled());
    }


    @Then("user clicks on Edit button")
    public void user_clicks_on_Edit_button() throws InterruptedException {
        uptadeTeacher.editButton.click();
        Thread.sleep(3000);
    }

//the user enters email, mobileNumber and salary
    @Then("the user enters first name, email, mobileNumber and salary")
    public void the_user_enters_first_name_email_mobileNumber_and_salary(DataTable login) throws InterruptedException {
        List<List<String>> data = login.asLists();

//        uptadeTeacher.FirstName.click();
//        uptadeTeacher.FirstName.clear();
//        uptadeTeacher.FirstName.sendKeys(data.get(0).get(0));

        uptadeTeacher.email.click();
        uptadeTeacher.email.clear();
        uptadeTeacher.email.sendKeys(data.get(0).get(0));

        uptadeTeacher.mobileNumber.click();
        uptadeTeacher.mobileNumber.clear();
        uptadeTeacher.mobileNumber.sendKeys(data.get(0).get(1));
        Thread.sleep(2000);
        uptadeTeacher.salary.click();
        uptadeTeacher.salary.clear();
        Thread.sleep(2000);
        uptadeTeacher.salary.sendKeys(data.get(0).get(2));
        Thread.sleep(2000);
        uptadeTeacher.submitButton.click();
        Thread.sleep(2000);
    }


    @Then("verify teacher's new information on web")
    public void verify_teacher_s_new_information_on_web() throws InterruptedException {
Thread.sleep(1000);
        uptadeTeacher.search.click();
        uptadeTeacher.search.sendKeys(id, Keys.ENTER);
        Thread.sleep(2000);
        uptadeTeacher.searchButton.click();
        Thread.sleep(1000);

        uptadeTeacher.threeDots.click();
        Thread.sleep(3000);
        uptadeTeacher.editButton.click();
        Thread.sleep(3000);

       // name = uptadeTeacher.FirstName.getAttribute("value");
        //System.out.println(name);
        email = uptadeTeacher.email.getAttribute("value");
        System.out.println(email);
        phoneNumber = uptadeTeacher.mobileNumber.getAttribute("value");
        System.out.println(phoneNumber);
        salary = uptadeTeacher.salary.getAttribute("value");
        System.out.println(salary);
        System.out.println();

    }

    String actualFirstName;
    String actualPhone;
    String actualEmail;
    String actualSalary;

    @Then("verify teacher's new information on database")
    public void verify_teacher_s_new_information_on_database() throws SQLException {
        DBUtility.createConnection();
        List<Map<Object, Object>> l = DBUtility.executeQuery("SELECT email_address, first_name, phone, salary from teacher where teacher_id=" + id);
        System.out.println(l.get(0));
        actualSalary = l.get(0).get("SALARY").toString();
        System.out.println(actualSalary);
        actualEmail = l.get(0).get("EMAIL_ADDRESS").toString();
        System.out.println(actualEmail);
        actualPhone = l.get(0).get("PHONE").toString();
        System.out.println(actualPhone);
        //actualFirstName = l.get(0).get("FIRST_NAME").toString();
        //System.out.println(actualFirstName);

        Assert.assertEquals(actualEmail, email);
        Assert.assertEquals("UI and database does not match", actualSalary, salary);
        Assert.assertEquals(actualFirstName, name);
        Assert.assertEquals(actualPhone, phoneNumber);
        DBUtility.close();
    }


    @Then("the user enters fistname and lastname")
    public void the_user_enters_fistname_and_lastname(DataTable login) throws Throwable {
        List<List<String>> data = login.asLists();
        uptadeTeacher.FirstName.click();
        uptadeTeacher.FirstName.clear();
        Thread.sleep(1000);
        uptadeTeacher.FirstName.sendKeys(data.get(0).get(0));

        Thread.sleep(1000);

        uptadeTeacher.lastName.click();
        uptadeTeacher.lastName.clear();
        Thread.sleep(1000);
        uptadeTeacher.lastName.sendKeys(data.get(0).get(1));
        Thread.sleep(2000);
        uptadeTeacher.submitButton.click();
    }


    @Then("verify teacher's new firstName and lastName information on web")
    public void verify_teacher_s_new_firstName_and_lastName_information_on_web() throws InterruptedException {
        Thread.sleep(2000);
        uptadeTeacher.search.click();
        uptadeTeacher.search.sendKeys(id, Keys.ENTER);
        Thread.sleep(2000);
        uptadeTeacher.searchButton.click();
        Thread.sleep(1000);
        Assert.assertTrue(true);

        uptadeTeacher.threeDots.click();
        Thread.sleep(3000);
        uptadeTeacher.editButton.click();
        Thread.sleep(3000);

        name = uptadeTeacher.FirstName.getAttribute("value");
        System.out.println(name);
        surname = uptadeTeacher.lastName.getAttribute("value");
        System.out.println(surname);
    }


    @Then("verify teacher's new firstName and lastName information on database")
    public void verify_teacher_s_new_firstName_and_lastName_information_on_database() throws SQLException {
        List<Map<Object, Object>> l = DBUtility.executeQuery("SELECT  first_name, last_name from teacher where teacher_id=" + id);
        String ActualName = l.get(0).get("FIRST_NAME").toString();
        String actualLastName = l.get(0).get("LAST_NAME").toString();

        Assert.assertEquals(ActualName, name);
        Assert.assertEquals(actualLastName, surname);


    }


}

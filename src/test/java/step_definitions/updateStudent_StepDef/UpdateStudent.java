package step_definitions.updateStudent_StepDef;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import utilities.utilities.DBUtility;
import utilities.utilities.Driver;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;
public class UpdateStudent {
    Pages.updateStudent.UpdateStudent updateStudent = new Pages.updateStudent.UpdateStudent();
    String id;
    String name;
    String email;
    String major;
    String phoneNumber;
    String actualFirstName;
    String actualPhone;
    String actualEmail;
    String actualSalary;

    @When("user clicks on Student button")
    public void user_clicks_on_Student_button() throws InterruptedException {
        Thread.sleep(10000);
        updateStudent.teacherButton.click();
        Thread.sleep(3000);
    }
    @Then("user should be able to see All Student and Add Student options")
    public void user_should_be_able_to_see_All_Student_and_Add_Student_options() {
        Assert.assertTrue("All teacher button is NOT enable ", updateStudent.allTeacherButton.isEnabled());
//        Assert.assertTrue("Add teacher button is NOT enable ", updateStudent.addTeaxcher.isEnabled());
    }
    @When("user clicks on All Student Button")
    public void user_clicks_on_All_Student_Button() throws InterruptedException {
        updateStudent.allTeacherButton.click();
        Thread.sleep(4000);
        updateStudent.name.click();
        Thread.sleep(2000);
        id = updateStudent.studentId.getText();
        Driver.getDriver().navigate().back();
    }


    @Then("the user enters first name, email, mobileNumber and major")
    public void the_user_enters_first_name_email_mobileNumber_and_major(DataTable login) throws InterruptedException {
        List<List<String>> data = login.asLists();
        updateStudent.FirstName.click();
        updateStudent.FirstName.clear();
        updateStudent.FirstName.sendKeys(data.get(0).get(0));
        updateStudent.email.click();
        updateStudent.email.clear();
        updateStudent.email.sendKeys(data.get(0).get(1));
        updateStudent.mobileNumber.click();
        updateStudent.mobileNumber.clear();
        updateStudent.mobileNumber.sendKeys(data.get(0).get(2));
        Thread.sleep(2000);
        updateStudent.major.click();
        updateStudent.major.clear();
        Thread.sleep(2000);
        updateStudent.major.sendKeys(data.get(0).get(3));
        Thread.sleep(2000);
        updateStudent.submitButton.click();
        Thread.sleep(2000);
    }
    @Then("verify student's new information on web")
    public void verify_student_s_new_information_on_web() throws InterruptedException {
        updateStudent.search.click();
        updateStudent.search.sendKeys(id, Keys.ENTER);
        Thread.sleep(2000);
        updateStudent.searchButton.click();
        Thread.sleep(1000);
        updateStudent.threeDots.click();
        Thread.sleep(3000);
        updateStudent.editButton.click();
        Thread.sleep(3000);
        name = updateStudent.FirstName.getAttribute("value");
        System.out.println(name);
        email = updateStudent.email.getAttribute("value");
        System.out.println(email);
        phoneNumber = updateStudent.mobileNumber.getAttribute("value");
        System.out.println(phoneNumber);
        major = updateStudent.major.getAttribute("value");
        System.out.println(major);
        System.out.println();
    }
    @Then("verify student's new information on database")
    public void verify_student_s_new_information_on_database() throws SQLException {
        List<Map<Object, Object>> l = DBUtility.executeQuery("select s.first_name, s.major, c.phone, c.email_address from STUDENT s left join contact c on c.student_id=s.student_id where s.student_id=" + id);
        System.out.println(l.get(0));
        actualSalary = l.get(0).get("MAJOR").toString();
        System.out.println(actualSalary);
        actualEmail = l.get(0).get("EMAIL_ADDRESS").toString();
        System.out.println(actualEmail);
        actualPhone = l.get(0).get("PHONE").toString();
        System.out.println(actualPhone);
        actualFirstName = l.get(0).get("FIRST_NAME").toString();
        System.out.println(actualFirstName);
        Assert.assertEquals(actualEmail, email);
        Assert.assertEquals("UI and database does not match", actualSalary, major);
        Assert.assertEquals(actualFirstName, name);
        Assert.assertEquals(actualPhone, phoneNumber);

    }
}
package step_definitions.DeletingStudent_StepDefinitions_Makmal;

import PagesMakmal.DeleteStudentsMakmal;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.eo.Se;
import org.junit.Assert;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import utilities.utilities.Config;
import utilities.utilities.DBUtility;
import utilities.utilities.Driver;
import utilities.utilities.SeleniumUtils;

import java.net.MalformedURLException;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public class DeletingStudent {
    DeleteStudentsMakmal deleteStudentsMakmal=new DeleteStudentsMakmal();
    WebDriverWait wait = new WebDriverWait(Driver.getDriver(),30);
   private static String idStudent;

    public DeletingStudent() throws MalformedURLException {
    }

    @Given("the user is on the dashboard module")
    public void the_user_is_on_the_dashboard_module() throws MalformedURLException {
SeleniumUtils.waitForVisibility(deleteStudentsMakmal.StudentsButton,3);
        Assert.assertEquals(" not matching","Students",deleteStudentsMakmal.StudentsButton.getText());


    }

    @When("the user clicks on Students module")
    public void the_user_clicks_on_Students_module() {
       deleteStudentsMakmal.StudentsButton.click();
    }

    @Then("All students link should be displayed on the page")
    public void all_students_link_should_be_displayed_on_the_page() {
        wait.until(ExpectedConditions.visibilityOf(deleteStudentsMakmal.allstudentsrButton));
        Assert.assertEquals("not matching","All Students",deleteStudentsMakmal.allstudentsrButton.getText());

    }

    @When("user clicks All student link")
    public void user_clicks_All_student_link() {
        wait.until(ExpectedConditions.visibilityOf(deleteStudentsMakmal.allstudentsrButton));
        deleteStudentsMakmal.allstudentsrButton.click();
    }

    @Then("user should be navigated to new page with students information")
    public void user_should_be_navigated_to_new_page_with_students_information() throws InterruptedException, MalformedURLException {

        Thread.sleep(3000);
        Assert.assertEquals("not matching","School",Driver.getDriver().getTitle());


    }

    @Then("User clicks to student entry from database")
    public void user_clicks_to_student_entry_from_database() {
  deleteStudentsMakmal.anyfirstStudent.click();
  wait.until(ExpectedConditions.visibilityOf(deleteStudentsMakmal.idofStudent));
  idStudent=deleteStudentsMakmal.idofStudent.getText();
        System.out.println(idStudent);
    }

    @Then("User navigate.back")
    public void user_navigate_back() throws MalformedURLException {
      Driver.getDriver().navigate().back();
    }


    @When("user clicks three sign button")
    public void user_clicks_three_sign_button() {
        deleteStudentsMakmal.threeDotButton.click();
    }

    @Then("user should be able to to see delete button")
    public void user_should_be_able_to_to_see_delete_button() throws InterruptedException {
        wait.until(ExpectedConditions.visibilityOf(deleteStudentsMakmal.deleteButton));
        deleteStudentsMakmal.deleteButton.click();

    }



    @Then("Delete employee button should be pop up")
    public void delete_employee_button_should_be_pop_up() {
        wait.until(ExpectedConditions.visibilityOf(deleteStudentsMakmal.popupDelete));


    }

    @Then("user should be able to delete students info")
    public void user_should_be_able_to_delete_students_info() {
        deleteStudentsMakmal.popupDelete.click();

    }

    @Then("The information should be deleted from data")
    public void the_information_should_be_deleted_from_data() throws SQLException {
        DBUtility.createConnection();
        List<Map<Object, Object>> mydata = DBUtility.executeQuery("select * from student");
        DBUtility.close();
        boolean check=true;
        for (Map<Object, Object> map : mydata) {
            if (map.get("STUDENT_ID").toString().equalsIgnoreCase(idStudent )) {
                check= false;
            }
            else{
                check = true;
                System.out.println("Successfully deleted from database student with id number "+idStudent);
                break;

            }
        }
        Assert.assertTrue("To delete student test verification has been failed", check);

    }


}

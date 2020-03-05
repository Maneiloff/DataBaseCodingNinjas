package step_definitions.Deletingteacher_StepDefinitions_Ulku;

import Pages.DeletinTeacherUlku;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import utilities.utilities.Driver;

public class DeletingTeacherwithGridview {


DeletinTeacherUlku deletinTeacherUlku=new DeletinTeacherUlku();
    WebDriverWait wait = new WebDriverWait(Driver.getDriver(),30);

    @Given("user is on homepage")
    public void user_is_on_homepage() {
        Assert.assertTrue(true);
    }

    @When("user clicks on teacher button")
    public void user_clicks_on_teacher_button() {
       wait.until(ExpectedConditions.elementToBeClickable(deletinTeacherUlku.teacherButton)).click();
      wait.until(ExpectedConditions.elementToBeClickable(deletinTeacherUlku.allteacherButton)) .click();
    }


}

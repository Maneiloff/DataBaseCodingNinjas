package step_definitions.Deletingteacher_StepDefinitions_Ulku;

import Pages.DeletinTeacherUlku;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import utilities.utilities.Driver;

import java.net.MalformedURLException;

public class DeletingTeacherwithGridview {


DeletinTeacherUlku deletinTeacherUlku=new DeletinTeacherUlku();
    WebDriverWait wait = new WebDriverWait(Driver.getDriver(),30);

    public DeletingTeacherwithGridview() throws MalformedURLException {
    }

    @Given("user is on homepage")
    public void user_is_on_homepage() {
        Assert.assertTrue(true);
    }

    @When("user clicks on teacher button")
    public void user_clicks_on_teacher_button() {

    }
    @When("user clicks on list-view button")
    public void user_clicks_on_list_view_button() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @When("user clicks on Delete button")
    public void user_clicks_on_Delete_button() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @Then("user should see HTML Alert")
    public void user_should_see_HTML_Alert() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @When("user clicks on Delete")
    public void user_clicks_on_Delete() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @Then("System should delete it from database")
    public void system_should_delete_it_from_database() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }


}

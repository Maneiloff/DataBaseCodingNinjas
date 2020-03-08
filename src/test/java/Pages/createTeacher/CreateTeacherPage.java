package Pages.createTeacher;

import cucumber.api.java.en.When;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.utilities.Driver;

import java.net.MalformedURLException;

public class CreateTeacherPage {

    public CreateTeacherPage() throws MalformedURLException {
        PageFactory.initElements(Driver.getDriver(), this);
    }
    @When("user clicks on teacher tab")
    public void user_clicks_on_teacher_tab() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @When("user clicks add teacher button")
    public void user_clicks_add_teacher_button() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }


    @FindBy(xpath = "(//span[contains(text(), 'Teachers')])[1]")
    public WebElement teacherBtn;

    @FindBy(xpath = "//a[contains(text(), 'Add Teacher')]")
    public WebElement addTeacherSideBar;

    @FindBy(xpath = "//label[contains(text(), 'Firstname')]/preceding-sibling::*")
    public WebElement firstName;

    @FindBy(xpath = "//label[contains(text(), 'Email')]/preceding-sibling::*")
    public WebElement email;

    @FindBy(xpath = "//label[contains(text(), 'Subject')]/preceding-sibling::*")
    public WebElement subject;

    @FindBy(xpath = "//label[contains(text(), 'Lastname')]/preceding-sibling::*")
    public WebElement lastName;

    @FindBy(xpath = "//label[contains(text(), 'Joining Date')]/preceding-sibling::*")
    public WebElement joiningDate;

    @FindBy(xpath = "//label[contains(text(), 'Mobile number')]/preceding-sibling::*")
    public WebElement mobileNumber;

    @FindBy(xpath = "//label[contains(text(), 'Department')]/preceding-sibling::*")
    public WebElement department;

    @FindBy(xpath = "//label[contains(text(), 'Salary')]/preceding-sibling::*")
    public WebElement salary;

    @FindBy(xpath = "(//label[contains(text(), 'Password')]/preceding-sibling::*)[1]")
    public WebElement password;

    @FindBy(xpath = "(//label[contains(text(), 'Password')]/preceding-sibling::*)[2]")
    public WebElement passwordConfirm;

    @FindBy(xpath = "//label[contains(text(), 'Gender')]/preceding-sibling::*")
    public WebElement gender;

    @FindBy(xpath = "//label[contains(text(), 'Birth Date')]/preceding-sibling::*")
    public WebElement birthDate;

    @FindBy(xpath = "//label[contains(text(), 'Batch')]/preceding-sibling::*")
    public WebElement batch;

    @FindBy(xpath = "//label[contains(text(), 'Section')]/preceding-sibling::*")
    public WebElement section;

    @FindBy(id = "message")
    public WebElement address;

    @FindBy(css = "[type='submit']")
    public WebElement submitBtn;


}

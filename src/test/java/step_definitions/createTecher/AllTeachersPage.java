package step_definitions.createTecher;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.utilities.Driver;

public class AllTeachersPage {

    public AllTeachersPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }
    @FindBy(xpath = "//label[contains(text(),'Teacher Name')]")
    public WebElement teacherName;
    @FindBy(partialLinkText = "Search ")
    public WebElement searchBtn;

    @FindBy(xpath = "(//h3)[2]")
    public WebElement fullName;

    @FindBy(xpath = "//span[contains(text(), 'Phone')]/following-sibling::*/a*")
    public  WebElement phoneNumber;

    @FindBy(xpath = "//span[contains(text(), 'Email')]/following-sibling::*/a")
    public  WebElement email;

    @FindBy(xpath = "//span[contains(text(), 'Batch')]/following-sibling::*/a")
    public  WebElement batch;

    @FindBy(xpath = "//span[contains(text(), 'Birthday:')]/following-sibling::*")
    public WebElement birthday;

    @FindBy(xpath = "//span[contains(text(), 'Join Date:')]/following-sibling::*")
    public WebElement joinDate;

    @FindBy(xpath = "//span[contains(text(), 'Address:')]/following-sibling::*")
    public WebElement address;

    @FindBy(xpath = "//span[contains(text(), 'Gender:')]/following-sibling::*")
    public WebElement gender;

    @FindBy(xpath = "//span[contains(text(), 'Section:')]/following-sibling::*")
    public WebElement section;

    @FindBy(xpath = "//span[contains(text(), 'Salary:')]/following-sibling::*")
    public WebElement salary;

    @FindBy(xpath = "//span[contains(text(), 'Subject:')]/following-sibling::*")
    public WebElement subject;




}

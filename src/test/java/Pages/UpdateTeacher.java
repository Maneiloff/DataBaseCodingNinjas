package Pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.utilities.Driver;

import java.net.MalformedURLException;

public class UpdateTeacher {

    public UpdateTeacher() throws MalformedURLException {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "(//div[@class='profile-widget']")
    public WebElement profileWidget;

    @FindBy(xpath = "(//div[@id='sidebar-menu']//a)[2]")
    public WebElement teacherButton;

    @FindBy(xpath = "(//div[@id='sidebar-menu']//a)[3]")
    public WebElement allTeacherButton;

    @FindBy(xpath = "//a[.='Add Teacher']")
    public WebElement addTeaxcher;

    @FindBy(xpath = "(//i[@class='fa fa-ellipsis-v'])[2]")
    public WebElement threeDots;

    @FindBy(xpath = "(//div[@class='dropdown-menu dropdown-menu-right show'] //a[@class='dropdown-item'])[2]")
    public WebElement deleteButton;

    @FindBy(xpath = "(//div[@class='dropdown-menu dropdown-menu-right show'] //a[@class='dropdown-item'])[1]")
    public WebElement editButton;

    @FindBy(xpath = ("//button[.='Submit']"))
    public WebElement submitButton;

    @FindBy(xpath = "//button[.='Cancel']")
    public WebElement cancelButton;

    @FindBy(xpath = "(//div[@class='form-group custom-mt-form-group'])[1]//input")
    public WebElement FirstName;

    @FindBy(xpath = "(//div[@class='form-group custom-mt-form-group'])[2]//input")
    public WebElement email;

    @FindBy(xpath = "(//div[@class='form-group custom-mt-form-group'])[3]//input")
    public WebElement password;

    @FindBy(xpath = "(//div[@class='form-group custom-mt-form-group'])[4]//input")
    public WebElement subject;

    @FindBy(xpath = "(//div[@class='form-group custom-mt-form-group'])[5]//select")
    public WebElement genderDropdownButton;

    @FindBy(xpath = "(//div[@class='form-group custom-mt-form-group'])[6]//input")
    public WebElement birthday;

    @FindBy(xpath = "(//div[@class='form-group custom-mt-form-group'])[7]//input")
    public WebElement batch;

    @FindBy(xpath = "(//div[@class='form-group custom-mt-form-group'])[8]//input")
    public WebElement lastName;

    @FindBy(xpath = "(//div[@class='form-group custom-mt-form-group'])[9]//input")
    public WebElement joiningDate;

    @FindBy(xpath = "(//div[@class='form-group custom-mt-form-group'])[10]//input")
    public WebElement confirmPassword;

    @FindBy(xpath = "(//div[@class='form-group custom-mt-form-group'])[11]//input")
    public WebElement mobileNumber;

    @FindBy(xpath = ("//div[@class='form-group custom-mt-form-group'])[12]//select"))
    public WebElement department;

    @FindBy(xpath = "(//div[@class='form-group custom-mt-form-group'])[13]//input")
    public WebElement salary;

    @FindBy(xpath = "(//div[@class='form-group custom-mt-form-group'])[14]//input")
    public WebElement section;

    @FindBy(xpath = "(//div[@class='form-group custom-mt-form-group']//input)[1]")
    public WebElement search;

    @FindBy(xpath = "//a[@class ='btn btn-success btn-block mt-4 mb-2']")
    public WebElement searchButton;

    @FindBy(xpath = "(//h4[@class='user-name m-t-10 m-b-0 text-ellipsis'])[1]")
    public WebElement name;


    @FindBy(xpath = "//span[@class='text']//a")
    public WebElement teacherId;

    //span[@class='text']//a

}

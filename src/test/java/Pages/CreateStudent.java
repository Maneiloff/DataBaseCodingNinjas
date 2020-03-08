package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.utilities.Driver;

import java.net.MalformedURLException;

public class CreateStudent {
    public CreateStudent() throws MalformedURLException {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy (xpath = "//span[.=' Students']")
    public WebElement StudentTab;

    @FindBy (xpath = "//a[.='Add Student']")
    public WebElement addStudent;

    @FindBy (xpath = "//label[.='Firstname']/../input")
    public WebElement studentFirstName;

    @FindBy (xpath = "//label[.='Lastname']/../input")
    public WebElement studentLastName;

    @FindBy (xpath = "//label[.='Email']/../input")
    public WebElement studentEmail;

    @FindBy (xpath = "//label[.='Joining Date']/../input")
    public WebElement studentJoiningDate;

    @FindBy (xpath = "//label[.='Password']/../input")
    public WebElement studentPassword;


    @FindBy (xpath = "//label[.='Comfirm Password']/../input")
    public WebElement studentConfirmPassword;

    @FindBy (xpath = "//label[.='Subject']/../input")
    public WebElement studentSubject;

    @FindBy (xpath = "//label[.='Mobile number']/../input")
    public WebElement studentMobileNumber;

    @FindBy (xpath = "//label[.='Gender']/../select")
    public WebElement studentGender;

    @FindBy (xpath = "//label[.='Admission No']/../input")
    public WebElement studentAdmissionNo;

    @FindBy (xpath = "//label[.='Birth Date']/../input")
    public WebElement studentBirthDate;

    @FindBy (xpath = "//label[.='Major']/../input")
    public WebElement studentMajor;

    @FindBy (xpath = "//label[.='Batch']/../select")
    public WebElement studentBatch;

    @FindBy (xpath = "//label[.='Section']/../input")
    public WebElement studentSection;

    @FindBy (xpath = "//textarea[@id='message']")
    public WebElement studentPermanentAddress;

    @FindBy (xpath = "//label[.='Company Name']/../input")
    public WebElement studentCompanyName;

    @FindBy (xpath = "//label[.='Title']/../input")
    public WebElement studentTitle;

    @FindBy (xpath = "//label[.='Start Date']/../input")
    public WebElement studentStartDate;

    @FindBy (xpath = "//label[.='City']/../input")
    public WebElement studentCity;

    @FindBy (xpath = "//label[.='Street (123 N. California, Apt 1)']/../input")
    public WebElement studentStreet;

    @FindBy (xpath = "//label[.='ZipCode']/../input")
    public WebElement studentZipCode;

    @FindBy (xpath = "//label[.='State']/../input")
    public WebElement studentState;

    @FindBy (xpath = "//button[.='Submit']")
    public WebElement studentSubmit;

    @FindBy (xpath = "//label[.='Student Name']/../input")
    public WebElement studentnameUI;

    @FindBy (xpath = "//a[@class='btn btn-success btn-block mt-4 mb-2']")
    public WebElement searchButtonUI;

    @FindBy (xpath = "//a[.='Java']")
    public WebElement JavaStudent;

}

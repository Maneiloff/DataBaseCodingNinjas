package PagesMakmal;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.utilities.Driver;

import java.net.MalformedURLException;

public class DeleteStudentsMakmal {
    public DeleteStudentsMakmal() throws MalformedURLException {
        PageFactory.initElements(Driver.getDriver(),this);}

     @FindBy(linkText = "Students")
    public WebElement StudentsButton;

        @FindBy(linkText="All Students")
        public WebElement allstudentsrButton;

        @FindBy(xpath = "//*[@id='app']/div/div[3]/div/div[2]/div/div/div[2]/a/i")
        public WebElement threeDotButton;

       @FindBy(xpath = "(//*[@id='app']/div/div[3]/div/div[2]/div/div/div/a)[1]")
       public WebElement anyfirstStudent;

        @FindBy(xpath = "//*[@class='dropdown-menu dropdown-menu-right show']/a[2]")
        public WebElement deleteButton;

        @FindBy(xpath = "(//div[@class='col-md-5']//span//a)[1]")
        public WebElement idofStudent;

       @FindBy(xpath = "//*[@class='btn btn-danger']")
        public WebElement popupDelete;




    }


package Pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.utilities.Driver;

import java.net.MalformedURLException;

public class DeletinTeacher {

   public DeletinTeacher() throws MalformedURLException {
       PageFactory.initElements(Driver.getDriver(),this);

   }

   @FindBy(xpath="//*[@id='sidebar-menu']/ul/li[3]/a/span[1]")
    public WebElement teacherButton;

   @FindBy(xpath="//*[@id='sidebar-menu']/ul/li[3]/ul/li[1]/a")
    public WebElement allteacherButton;

   @FindBy(xpath="/html/body/div[1]/div[3]/div/div[2]/div[2]/div/a[1]")
    public WebElement gridViewButton;

   @FindBy(xpath = "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/a[2]/i")
    public WebElement listViewButton;

   @FindBy(xpath = "//*[@id='app']/div/div/div[2]/div[1]/div/div[2]/a/i")
    public WebElement threeDotButton;

   @FindBy(xpath = "//*[@id='app']/div/div/div[2]/div[1]/div/div[2]/div/a[2]")
    public WebElement deleteButton;

}

package Pages.createTeacher;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.utilities.Driver;

import java.util.List;

public class Calendar {

    public Calendar(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//label[contains(text(), 'Birth Date')]/preceding-sibling::*")
    public WebElement datePicker;

    @FindBy(css = "[class='datepicker']  [title= 'Select Month'] ")
    public WebElement monthAndYearPicker;

    @FindBy(xpath = "(//*[@class='picker-switch']/following-sibling::th[@class='next'])[1]")
    public WebElement nextMonth;

    @FindBy(xpath = "(//*[@data-action='previous'])[1]")
    public WebElement previousMonth;

    @FindBy(css="*.day")
    public List<WebElement> dayInCalendar;




}

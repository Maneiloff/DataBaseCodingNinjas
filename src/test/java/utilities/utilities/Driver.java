package utilities.utilities;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.MutableCapabilities;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.safari.SafariDriver;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class Driver {

   private static WebDriver driver;

//https://wiki.saucelabs.com/display/DOCS/Getting+Started+with+Selenium+for+Automated+Website+Testing
    public static final String USERNAME = "oytunpiren";
    public static final String ACCESS_KEY = "762b8030-4f45-4ca6-aa53-e9750601a9c3";
    public static final String URL = "http://" + USERNAME + ":" + ACCESS_KEY + "@ondemand.saucelabs.com:80/wd/hub";


    private Driver() {

    }

    public static WebDriver getDriver() throws MalformedURLException {

        if(driver == null) {

           switch (Config.getProperty("browser")) {
               case "chrome":
                   WebDriverManager.chromedriver().setup();
                   driver = new ChromeDriver();
                   break;
               case "saucelab":
//https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
                   DesiredCapabilities caps = DesiredCapabilities.chrome();
                   MutableCapabilities sauceOptions = new MutableCapabilities();
                   ChromeOptions browserOptions = new ChromeOptions();
                   browserOptions.setExperimentalOption("w3c", true);
                   browserOptions.setCapability("platformName", "macOS 10.15");
                   browserOptions.setCapability("browserVersion", "latest");
                   browserOptions.setCapability("sauce:options", sauceOptions);

                   driver = new RemoteWebDriver(new URL(URL),caps);
                   break;

               case "firefox":
                   WebDriverManager.firefoxdriver().setup();
                   driver = new FirefoxDriver();
                   break;
               case "safari":
                   if(System.getProperty("os.name").toLowerCase().contains("windows")){
                       throw new WebDriverException("Windows OS does not support safari");
                   }
                   WebDriverManager.getInstance(SafariDriver.class).setup();
                   driver = new SafariDriver();
                   break;

           }

            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            driver.manage().window().maximize();


        }

        return driver;

    }

    public static void quitDriver(){
        if(driver != null) {
            driver.quit();
            driver = null;
        }
    }

}

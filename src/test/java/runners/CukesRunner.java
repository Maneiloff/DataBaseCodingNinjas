package runners;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import utilities.utilities.Config;
import utilities.utilities.Driver;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:target/cucumber-reports", "json:target/cucumber.json"},
        features="src/test/resources/features",
        glue="step_definitions",
        dryRun= false,
        tags = "@march"


)

public class CukesRunner {

    @BeforeClass
    public static void  setUp(){
        Driver.getDriver().get(Config.getProperty("url"));
    }
}

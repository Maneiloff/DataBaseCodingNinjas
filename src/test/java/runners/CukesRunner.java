package runners;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import utilities.utilities.Config;
import utilities.utilities.DBUtility;
import utilities.utilities.Driver;

import java.sql.SQLException;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:target/cucumber-reports", "json:target/cucumber.json"},
        features="src/test/resources/features/1.feature-Makmal.feature",
        glue="step_definitions",
        dryRun= false,
        tags = "@ser"


)

public class CukesRunner {

    @BeforeClass
    public static void  setUp()throws SQLException {

        Driver.getDriver().get(Config.getProperty("url"));
        DBUtility.createConnection();
    }

    @AfterClass
    public static void tearDown() throws  SQLException{
        DBUtility.close();
    }

}

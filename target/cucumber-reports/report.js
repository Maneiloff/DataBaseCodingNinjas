$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/databaseCN.feature");
formatter.feature({
  "name": "DatabaseConnection",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CN-215"
    }
  ]
});
formatter.scenario({
  "name": "Verify User Can Change email address, phone number and salary",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CN-215"
    },
    {
      "name": "@CN-226"
    },
    {
      "name": "@CN-216"
    },
    {
      "name": "@CN-217"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "DeletingTeacherwithGridview.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Teacher button",
  "keyword": "When "
});
formatter.match({
  "location": "UptadeTeacher_Step_Def.user_clicks_on_Teacher_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to see All Teacher and Add Teacher options",
  "keyword": "Then "
});
formatter.match({
  "location": "UptadeTeacher_Step_Def.user_should_be_able_to_see_All_Teacher_and_Add_Teacher_options()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on All Teacher Button",
  "keyword": "When "
});
formatter.match({
  "location": "UptadeTeacher_Step_Def.user_clicks_on_All_Teacher_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see profile widgets",
  "keyword": "Then "
});
formatter.match({
  "location": "UptadeTeacher_Step_Def.user_should_see_profile_widgets()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on three dot dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "UptadeTeacher_Step_Def.user_clicks_on_three_dot_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see Edit and Delete options",
  "keyword": "Then "
});
formatter.match({
  "location": "UptadeTeacher_Step_Def.user_should_see_Edit_and_Delete_options()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Edit button",
  "keyword": "And "
});
formatter.match({
  "location": "UptadeTeacher_Step_Def.user_clicks_on_Edit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters first name, email, mobileNumber and salary",
  "rows": [
    {
      "cells": [
        "kanye@xmail.com",
        "3128888888",
        "15000"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UptadeTeacher_Step_Def.the_user_enters_first_name_email_mobileNumber_and_salary(DataTable)"
});
formatter.result({
  "error_message": "java.lang.IndexOutOfBoundsException: Index 3 out of bounds for length 3\r\n\tat java.base/jdk.internal.util.Preconditions.outOfBounds(Preconditions.java:64)\r\n\tat java.base/jdk.internal.util.Preconditions.outOfBoundsCheckIndex(Preconditions.java:70)\r\n\tat java.base/jdk.internal.util.Preconditions.checkIndex(Preconditions.java:248)\r\n\tat java.base/java.util.Objects.checkIndex(Objects.java:372)\r\n\tat java.base/java.util.ArrayList.get(ArrayList.java:458)\r\n\tat java.base/java.util.Collections$UnmodifiableList.get(Collections.java:1310)\r\n\tat step_definitions.updateTeacher_Step_Def.UptadeTeacher_Step_Def.the_user_enters_first_name_email_mobileNumber_and_salary(UptadeTeacher_Step_Def.java:102)\r\n\tat ✽.the user enters first name, email, mobileNumber and salary(src/test/resources/features/databaseCN.feature:15)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify teacher\u0027s new information on web",
  "keyword": "Then "
});
formatter.match({
  "location": "UptadeTeacher_Step_Def.verify_teacher_s_new_information_on_web()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify teacher\u0027s new information on database",
  "keyword": "Then "
});
formatter.match({
  "location": "UptadeTeacher_Step_Def.verify_teacher_s_new_information_on_database()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify User Can Change First Name and Last Name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CN-215"
    },
    {
      "name": "@CN-224"
    },
    {
      "name": "@CN-216"
    },
    {
      "name": "@CN-217"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "DeletingTeacherwithGridview.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Teacher button",
  "keyword": "When "
});
formatter.match({
  "location": "UptadeTeacher_Step_Def.user_clicks_on_Teacher_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to see All Teacher and Add Teacher options",
  "keyword": "Then "
});
formatter.match({
  "location": "UptadeTeacher_Step_Def.user_should_be_able_to_see_All_Teacher_and_Add_Teacher_options()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on All Teacher Button",
  "keyword": "When "
});
formatter.match({
  "location": "UptadeTeacher_Step_Def.user_clicks_on_All_Teacher_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see profile widgets",
  "keyword": "Then "
});
formatter.match({
  "location": "UptadeTeacher_Step_Def.user_should_see_profile_widgets()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on three dot dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "UptadeTeacher_Step_Def.user_clicks_on_three_dot_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see Edit and Delete options",
  "keyword": "Then "
});
formatter.match({
  "location": "UptadeTeacher_Step_Def.user_should_see_Edit_and_Delete_options()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Edit button",
  "keyword": "And "
});
formatter.match({
  "location": "UptadeTeacher_Step_Def.user_clicks_on_Edit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters fistname and lastname",
  "rows": [
    {
      "cells": [
        "Kanye",
        "West"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "UptadeTeacher_Step_Def.the_user_enters_fistname_and_lastname(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify teacher\u0027s new information on web",
  "keyword": "Then "
});
formatter.match({
  "location": "UptadeTeacher_Step_Def.verify_teacher_s_new_information_on_web()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify teacher\u0027s new information on database",
  "keyword": "Then "
});
formatter.match({
  "location": "UptadeTeacher_Step_Def.verify_teacher_s_new_information_on_database()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I should be able to delete students",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CN-215"
    },
    {
      "name": "@CN-219"
    },
    {
      "name": "@CN-216"
    },
    {
      "name": "@CN-217"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the dashboard module",
  "keyword": "Given "
});
formatter.match({
  "location": "DeletingStudent.the_user_is_on_the_dashboard_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on Students module",
  "keyword": "When "
});
formatter.match({
  "location": "DeletingStudent.the_user_clicks_on_Students_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "All students link should be displayed on the page",
  "keyword": "Then "
});
formatter.match({
  "location": "DeletingStudent.all_students_link_should_be_displayed_on_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks All student link",
  "keyword": "When "
});
formatter.match({
  "location": "DeletingStudent.user_clicks_All_student_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to new page with students information",
  "keyword": "Then "
});
formatter.match({
  "location": "DeletingStudent.user_should_be_navigated_to_new_page_with_students_information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to student entry from database",
  "keyword": "And "
});
formatter.match({
  "location": "DeletingStudent.user_clicks_to_student_entry_from_database()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigate.back",
  "keyword": "And "
});
formatter.match({
  "location": "DeletingStudent.user_navigate_back()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks three sign button",
  "keyword": "When "
});
formatter.match({
  "location": "DeletingStudent.user_clicks_three_sign_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to to see delete button",
  "keyword": "Then "
});
formatter.match({
  "location": "DeletingStudent.user_should_be_able_to_to_see_delete_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: //*[@class\u003d\u0027dropdown-menu dropdown-menu-right show\u0027]/a[2]\u0027 (tried for 30 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat step_definitions.DeletingStudent_StepDefinitions_Makmal.DeletingStudent.user_should_be_able_to_to_see_delete_button(DeletingStudent.java:81)\r\n\tat ✽.user should be able to to see delete button(src/test/resources/features/databaseCN.feature:64)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027dropdown-menu dropdown-menu-right show\u0027]/a[2]\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-LTKT5Q0T\u0027, ip: \u002710.1.10.165\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\Serghei\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:60506}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: c4ff324b3a2e18371f7f777f6be02330\n*** Element info: {Using\u003dxpath, value\u003d//*[@class\u003d\u0027dropdown-menu dropdown-menu-right show\u0027]/a[2]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat step_definitions.DeletingStudent_StepDefinitions_Makmal.DeletingStudent.user_should_be_able_to_to_see_delete_button(DeletingStudent.java:81)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Delete employee button should be pop up",
  "keyword": "Then "
});
formatter.match({
  "location": "DeletingStudent.delete_employee_button_should_be_pop_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to delete students info",
  "keyword": "Then "
});
formatter.match({
  "location": "DeletingStudent.user_should_be_able_to_delete_students_info()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The information should be deleted from data",
  "keyword": "Then "
});
formatter.match({
  "location": "DeletingStudent.the_information_should_be_deleted_from_data()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Create teacher on web",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CN-215"
    },
    {
      "name": "@CN-227"
    },
    {
      "name": "@CN-216"
    },
    {
      "name": "@CN-217"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on teacher tab",
  "keyword": "When "
});
formatter.match({
  "location": "create_techer_step_def.user_clicks_on_teacher_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks add teacher button",
  "keyword": "And "
});
formatter.match({
  "location": "create_techer_step_def.user_clicks_add_teacher_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "teacher value",
  "rows": [
    {
      "cells": [
        "FirstName",
        "JohnJunior1"
      ]
    },
    {
      "cells": [
        "LastName",
        "WickBond"
      ]
    },
    {
      "cells": [
        "Email",
        "j.wick@gmail.com"
      ]
    },
    {
      "cells": [
        "Subject",
        "Java"
      ]
    },
    {
      "cells": [
        "Joining Date",
        "01/01/2020"
      ]
    },
    {
      "cells": [
        "Mobile Number",
        "3128969636"
      ]
    },
    {
      "cells": [
        "Department",
        "Computer"
      ]
    },
    {
      "cells": [
        "Password",
        "123456$"
      ]
    },
    {
      "cells": [
        "Gender",
        "Female"
      ]
    },
    {
      "cells": [
        "Birth Date",
        "01/01/1991"
      ]
    },
    {
      "cells": [
        "Batch",
        "11"
      ]
    },
    {
      "cells": [
        "Address",
        "856 S. Palin, CA 50096"
      ]
    },
    {
      "cells": [
        "Section",
        "3"
      ]
    },
    {
      "cells": [
        "Password Confirm",
        "123456$"
      ]
    },
    {
      "cells": [
        "Salary",
        "115000"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "create_techer_step_def.teacher_value(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter personal information",
  "keyword": "And "
});
formatter.match({
  "location": "create_techer_step_def.user_enter_personal_information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "create_techer_step_def.user_click_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the new page enter created user name",
  "keyword": "When "
});
formatter.match({
  "location": "create_techer_step_def.user_is_on_the_new_page_enter_created_user_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is clicking search button",
  "keyword": "And "
});
formatter.match({
  "location": "create_techer_step_def.user_is_clicking_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "create name will be present on list of names",
  "keyword": "Then "
});
formatter.match({
  "location": "create_techer_step_def.create_name_will_be_present_on_list_of_names()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user open created teacher",
  "keyword": "When "
});
formatter.match({
  "location": "create_techer_step_def.user_open_created_teacher()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user check check phone number",
  "keyword": "And "
});
formatter.match({
  "location": "create_techer_step_def.user_check_check_phone_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user check email",
  "keyword": "And "
});
formatter.match({
  "location": "create_techer_step_def.user_check_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user check batch",
  "keyword": "And "
});
formatter.match({
  "location": "create_techer_step_def.user_check_batch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user check birthday",
  "keyword": "And "
});
formatter.match({
  "location": "create_techer_step_def.user_check_birthday()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user check join date",
  "keyword": "And "
});
formatter.match({
  "location": "create_techer_step_def.user_check_join_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user check address",
  "keyword": "And "
});
formatter.match({
  "location": "create_techer_step_def.user_check_address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user check gender",
  "keyword": "And "
});
formatter.match({
  "location": "create_techer_step_def.user_check_gender()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user check salary",
  "keyword": "And "
});
formatter.match({
  "location": "create_techer_step_def.user_check_salary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user check section",
  "keyword": "And "
});
formatter.match({
  "location": "create_techer_step_def.user_check_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user check subject",
  "keyword": "And "
});
formatter.match({
  "location": "create_techer_step_def.user_check_subject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify teacher on database",
  "keyword": "Then "
});
formatter.match({
  "location": "create_techer_step_def.verify_teacher_on_database()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify User Can Change Student\u0027s email address, phone number and major",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CN-215"
    },
    {
      "name": "@CN-228"
    },
    {
      "name": "@CN-216"
    },
    {
      "name": "@CN-217"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "DeletingTeacherwithGridview.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Student button",
  "keyword": "When "
});
formatter.match({
  "location": "UpdateStudent.user_clicks_on_Student_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to see All Student and Add Student options",
  "keyword": "Then "
});
formatter.match({
  "location": "UpdateStudent.user_should_be_able_to_see_All_Student_and_Add_Student_options()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on All Student Button",
  "keyword": "When "
});
formatter.match({
  "location": "UpdateStudent.user_clicks_on_All_Student_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on three dot dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "UptadeTeacher_Step_Def.user_clicks_on_three_dot_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see Edit and Delete options",
  "keyword": "Then "
});
formatter.match({
  "location": "UptadeTeacher_Step_Def.user_should_see_Edit_and_Delete_options()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//div[@class\u003d\u0027dropdown-menu dropdown-menu-right show\u0027] //a[@class\u003d\u0027dropdown-item\u0027])[1]\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-LTKT5Q0T\u0027, ip: \u002710.1.10.165\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\Serghei\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:60506}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: c4ff324b3a2e18371f7f777f6be02330\n*** Element info: {Using\u003dxpath, value\u003d(//div[@class\u003d\u0027dropdown-menu dropdown-menu-right show\u0027] //a[@class\u003d\u0027dropdown-item\u0027])[1]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.isEnabled(Unknown Source)\r\n\tat step_definitions.updateTeacher_Step_Def.UptadeTeacher_Step_Def.user_should_see_Edit_and_Delete_options(UptadeTeacher_Step_Def.java:71)\r\n\tat ✽.user should see Edit and Delete options(src/test/resources/features/databaseCN.feature:118)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on Edit button",
  "keyword": "And "
});
formatter.match({
  "location": "UptadeTeacher_Step_Def.user_clicks_on_Edit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters first name, email, mobileNumber and major",
  "rows": [
    {
      "cells": [
        "Taylor",
        "taylor@xmail.com",
        "3128888888",
        "psychology"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UpdateStudent.the_user_enters_first_name_email_mobileNumber_and_major(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify student\u0027s new information on web",
  "keyword": "Then "
});
formatter.match({
  "location": "UpdateStudent.verify_student_s_new_information_on_web()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify student\u0027s new information on database",
  "keyword": "Then "
});
formatter.match({
  "location": "UpdateStudent.verify_student_s_new_information_on_database()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Add a student using Add Student Button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CN-215"
    },
    {
      "name": "@CN-225"
    },
    {
      "name": "@CN-216"
    },
    {
      "name": "@CN-217"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is in Dashboard page",
  "keyword": "Given "
});
formatter.match({
  "location": "createStudentStepDefs.user_is_in_Dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Student button",
  "keyword": "When "
});
formatter.match({
  "location": "createStudentStepDefs.user_clicks_on_Student_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Add Student button",
  "keyword": "When "
});
formatter.match({
  "location": "createStudentStepDefs.userClicksOnAddStudentButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters keyword FirstName",
  "keyword": "When "
});
formatter.match({
  "location": "createStudentStepDefs.user_enters_keyword_FirstName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Lastname",
  "keyword": "And "
});
formatter.match({
  "location": "createStudentStepDefs.lastname()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Email",
  "keyword": "And "
});
formatter.match({
  "location": "createStudentStepDefs.email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Joining date",
  "keyword": "And "
});
formatter.match({
  "location": "createStudentStepDefs.joining_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Password",
  "keyword": "And "
});
formatter.match({
  "location": "createStudentStepDefs.password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ConfirmPassword",
  "keyword": "And "
});
formatter.match({
  "location": "createStudentStepDefs.confirmpassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Subject",
  "keyword": "And "
});
formatter.match({
  "location": "createStudentStepDefs.subject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "MobileNumber",
  "keyword": "And "
});
formatter.match({
  "location": "createStudentStepDefs.mobilenumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Gender",
  "keyword": "And "
});
formatter.match({
  "location": "createStudentStepDefs.gender()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "AdmissionNo",
  "keyword": "And "
});
formatter.match({
  "location": "createStudentStepDefs.admissionno()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "BirthDate",
  "keyword": "And "
});
formatter.match({
  "location": "createStudentStepDefs.birthdate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Major",
  "keyword": "And "
});
formatter.match({
  "location": "createStudentStepDefs.major()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Batch",
  "keyword": "And "
});
formatter.match({
  "location": "createStudentStepDefs.batch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Section",
  "keyword": "And "
});
formatter.match({
  "location": "createStudentStepDefs.section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Permanent Address",
  "keyword": "And "
});
formatter.match({
  "location": "createStudentStepDefs.permanent_Address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Company name",
  "keyword": "And "
});
formatter.match({
  "location": "createStudentStepDefs.company_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Title",
  "keyword": "And "
});
formatter.match({
  "location": "createStudentStepDefs.title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Start Date",
  "keyword": "And "
});
formatter.match({
  "location": "createStudentStepDefs.start_Date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "City",
  "keyword": "And "
});
formatter.match({
  "location": "createStudentStepDefs.city()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Street",
  "keyword": "And "
});
formatter.match({
  "location": "createStudentStepDefs.street()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Zip code",
  "keyword": "And "
});
formatter.match({
  "location": "createStudentStepDefs.zip_code()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "State",
  "keyword": "And "
});
formatter.match({
  "location": "createStudentStepDefs.state()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to submit",
  "keyword": "Then "
});
formatter.match({
  "location": "createStudentStepDefs.userShouldBeAbleToSubmit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify user can see the created student in All Students module",
  "keyword": "Then "
});
formatter.match({
  "location": "createStudentStepDefs.verifyUserCanSeeTheCreatedStudentInAllStudentsModule()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the created student is in the DataBase",
  "keyword": "And "
});
formatter.match({
  "location": "createStudentStepDefs.verifyTheCreatedStudentIsInTheDataBase()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
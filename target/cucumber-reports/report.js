$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/dataBase.feature");
formatter.feature({
  "name": "",
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
  "error_message": "java.lang.IndexOutOfBoundsException: Index 3 out of bounds for length 3\r\n\tat java.base/jdk.internal.util.Preconditions.outOfBounds(Preconditions.java:64)\r\n\tat java.base/jdk.internal.util.Preconditions.outOfBoundsCheckIndex(Preconditions.java:70)\r\n\tat java.base/jdk.internal.util.Preconditions.checkIndex(Preconditions.java:248)\r\n\tat java.base/java.util.Objects.checkIndex(Objects.java:372)\r\n\tat java.base/java.util.ArrayList.get(ArrayList.java:458)\r\n\tat java.base/java.util.Collections$UnmodifiableList.get(Collections.java:1310)\r\n\tat step_definitions.updateTeacher_Step_Def.UptadeTeacher_Step_Def.the_user_enters_first_name_email_mobileNumber_and_salary(UptadeTeacher_Step_Def.java:102)\r\n\tat ✽.the user enters first name, email, mobileNumber and salary(src/test/resources/features/dataBase.feature:45)\r\n",
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
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-LTKT5Q0T\u0027, ip: \u0027192.168.1.31\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\Serghei\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:58059}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 7980acc400fcf12c3958aaa2d1d034df\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\r\n\tat step_definitions.updateTeacher_Step_Def.UptadeTeacher_Step_Def.verify_teacher_s_new_information_on_web(UptadeTeacher_Step_Def.java:113)\r\n\tat ✽.verify teacher\u0027s new information on web(src/test/resources/features/dataBase.feature:63)\r\n",
  "status": "failed"
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
formatter.embedding("image/png", "embedded1.png");
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
  "status": "passed"
});
formatter.step({
  "name": "Delete employee button should be pop up",
  "keyword": "Then "
});
formatter.match({
  "location": "DeletingStudent.delete_employee_button_should_be_pop_up()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to delete students info",
  "keyword": "Then "
});
formatter.match({
  "location": "DeletingStudent.user_should_be_able_to_delete_students_info()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The information should be deleted from data",
  "keyword": "Then "
});
formatter.match({
  "location": "DeletingStudent.the_information_should_be_deleted_from_data()"
});
formatter.result({
  "status": "passed"
});
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
  "status": "passed"
});
formatter.step({
  "name": "verify student\u0027s new information on web",
  "keyword": "Then "
});
formatter.match({
  "location": "UpdateStudent.verify_student_s_new_information_on_web()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify student\u0027s new information on database",
  "keyword": "Then "
});
formatter.match({
  "location": "UpdateStudent.verify_student_s_new_information_on_database()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
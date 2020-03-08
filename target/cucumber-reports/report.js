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
  "error_message": "org.junit.ComparisonFailure: UI and database does not match expected:\u003c1[5]000\u003e but was:\u003c1[00]000\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat step_definitions.updateTeacher_Step_Def.UptadeTeacher_Step_Def.verify_teacher_s_new_information_on_database(UptadeTeacher_Step_Def.java:156)\n\tat ✽.verify teacher\u0027s new information on database(src/test/resources/features/databaseCN.feature:18)\n",
  "status": "failed"
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
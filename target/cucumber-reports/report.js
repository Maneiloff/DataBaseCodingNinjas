$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/1.feature-Makmal.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "As a user I should be able to delete students",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CN-219"
    },
    {
      "name": "@CN-216"
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
});
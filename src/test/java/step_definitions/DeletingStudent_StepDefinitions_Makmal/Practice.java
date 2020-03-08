package step_definitions.DeletingStudent_StepDefinitions_Makmal;

import utilities.utilities.Config;
import utilities.utilities.DBUtility;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class Practice {
    public static void main(String[] args) throws SQLException {

        System.out.println();
        DBUtility.createConnection();
        List<Map<Object, Object>> data = new ArrayList<>();
        DBUtility.executeQuery("select first_name from student where student_id = 5718");
        System.out.println(DBUtility.executeQuery("select first_name from student where student_id = 5718"));

//        data.add(DBUtility.executeQuery("select first_name from student where student_id = 5718"));

    }

}

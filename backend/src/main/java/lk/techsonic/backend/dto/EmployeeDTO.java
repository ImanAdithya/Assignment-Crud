package lk.techsonic.backend.dto;

import jakarta.persistence.*;
import lk.techsonic.backend.entity.Designation;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;


@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class EmployeeDTO {

    private Integer employee_id;

    private String full_name;

    private Date dateOfJoining;

    private int isManager;

    private String designationName;
}

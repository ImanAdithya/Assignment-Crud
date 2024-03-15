package lk.techsonic.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer employee_id;

    private String fullName;

    private Date dateOfJoining;

    private int isManager;

    @ManyToOne
    @JoinColumn(name = "designation_id",referencedColumnName = "designation_id")
    private Designation designation;
}

package lk.techsonic.backend.service;

import lk.techsonic.backend.dto.DesignationDTO;
import lk.techsonic.backend.dto.EmployeeDTO;
import lk.techsonic.backend.entity.Designation;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EmployeeService {
    void  saveEmployee (EmployeeDTO employeeDTO);
    Designation getDesignation(String name);
    List<EmployeeDTO> getAllEmployee();
    void deleteEmployee(String id);
    int getLastIndex();
}

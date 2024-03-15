package lk.techsonic.backend.service.impl;

import jakarta.transaction.Transactional;
import lk.techsonic.backend.dto.EmployeeDTO;
import lk.techsonic.backend.entity.Designation;
import lk.techsonic.backend.entity.Employee;
import lk.techsonic.backend.repo.DesignationRepository;
import lk.techsonic.backend.repo.EmployeeRepository;
import lk.techsonic.backend.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private DesignationRepository designationRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public void saveEmployee(EmployeeDTO employeeDTO) {
        Designation designation = getDesignation (employeeDTO.getDesignationName ());
        employeeRepository.save (new Employee (
            0,
                employeeDTO.getFullName (),
                employeeDTO.getDateOfJoining (),
                employeeDTO.getIsManager (),
                designation

        ));
    }

    @Override
    public Designation getDesignation(String name) {
      return designationRepository.getDesignation (name);
    }

    @Override
    public List<EmployeeDTO> getAllEmployee() {
        List<Employee> all = employeeRepository.findAll ();
        ArrayList<EmployeeDTO> getAllEmployees=new ArrayList<> ();

        for (Employee employee : all) {
            getAllEmployees.add (new EmployeeDTO (employee.getEmployee_id (), employee.getFullName (),employee.getDateOfJoining (),employee.getIsManager (),employee.getDesignation ().getName ()));
        }

        return getAllEmployees;
    }
}

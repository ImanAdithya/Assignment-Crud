package lk.techsonic.backend.controller;


import lk.techsonic.backend.dto.EmployeeDTO;
import lk.techsonic.backend.service.EmployeeService;
import lk.techsonic.backend.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @PostMapping("saveEmployee")
    public ResponseUtil saveEmployee(@RequestBody EmployeeDTO employeeDTO){
        employeeService.saveEmployee (employeeDTO);
        return new ResponseUtil ("OK","Employee Added Succuss",employeeDTO.getFull_name ());
    }

    @GetMapping("getAllEmployee")
    public List<EmployeeDTO> getAllEmployee(){
        List<EmployeeDTO> allEmployee = employeeService.getAllEmployee ();
        //return new ResponseUtil ("OK","Employee Loaded Succuss",allEmployee);
        return allEmployee;
    }

    @DeleteMapping(params = {"employee_id"})
    public ResponseUtil deleteEmployee(String employee_id){
        System.out.println ("____________"+employee_id);
        employeeService.deleteEmployee (employee_id);
        return new ResponseUtil ("OK","Employee Deleted Success",employee_id);
    }

    @GetMapping("getLastIndex")
    public int getLastIndex(){
        return employeeService.getLastIndex ();
    }
}

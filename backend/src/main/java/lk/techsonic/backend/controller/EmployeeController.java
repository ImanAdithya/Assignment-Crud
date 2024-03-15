package lk.techsonic.backend.controller;


import lk.techsonic.backend.dto.EmployeeDTO;
import lk.techsonic.backend.service.EmployeeService;
import lk.techsonic.backend.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
        return new ResponseUtil ("OK","Employee Added Succuss",employeeDTO.getFullName ());
    }

    @GetMapping("getAllEmployee")
    public ResponseUtil getAllEmployee(){
        List<EmployeeDTO> allEmployee = employeeService.getAllEmployee ();
        return new ResponseUtil ("OK","Employee Loaded Succuss",allEmployee);
    }
}

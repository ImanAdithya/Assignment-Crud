package lk.techsonic.backend.controller;

import lk.techsonic.backend.dto.DesignationDTO;
import lk.techsonic.backend.service.DesignationService;
import lk.techsonic.backend.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/designation")
public class DesignationController {

    @Autowired
    DesignationService designationService;

    @PostMapping("/saveDesignation")
    public ResponseUtil saveDestination(@RequestBody DesignationDTO designationDTO){
        designationService.saveDesignation (designationDTO);
        return new ResponseUtil ("OK","Save Destination Succuss",designationDTO.getName ());
    }

    @GetMapping("/getDesignation")
    public ResponseUtil getDestination(){
        List<DesignationDTO> allDestination = designationService.getAllDestination ();
        return new ResponseUtil ("OK","Get Destination Succuss",allDestination);
    }

}

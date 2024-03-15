package lk.techsonic.backend.service;

import lk.techsonic.backend.dto.DesignationDTO;
import lk.techsonic.backend.entity.Designation;

import java.util.List;

public interface DesignationService {
    void  saveDesignation (DesignationDTO designationDTO);
    List<DesignationDTO> getAllDestination();
}

package lk.techsonic.backend.service.impl;

import jakarta.transaction.Transactional;
import lk.techsonic.backend.dto.DesignationDTO;
import lk.techsonic.backend.entity.Designation;
import lk.techsonic.backend.repo.DesignationRepository;
import lk.techsonic.backend.service.DesignationService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class DesignationServiceImpl implements DesignationService {

    @Autowired
    private DesignationRepository designationRepository;

    @Override
    public void saveDesignation(DesignationDTO designationDTO) {
        designationRepository.save (new Designation (0,designationDTO.getName (),designationDTO.getRemark ()));

    }

    @Override
    public List<DesignationDTO> getAllDestination() {
        List<Designation> all = designationRepository.findAll ();
        ArrayList<DesignationDTO> desAll=new ArrayList<> ();

        for (Designation designation : all) {
            desAll.add (new DesignationDTO (designation.getDesignation_id (), designation.getName (), designation.getRemark ()));
        }

        return desAll;

    }

}

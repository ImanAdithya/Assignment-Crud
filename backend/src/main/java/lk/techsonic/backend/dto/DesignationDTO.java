package lk.techsonic.backend.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class DesignationDTO {

    private Integer designation_id;

    private String name;

    private String remark;
}

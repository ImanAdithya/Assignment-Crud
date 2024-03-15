package lk.techsonic.backend.repo;

import lk.techsonic.backend.entity.Designation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface DesignationRepository extends JpaRepository<Designation,String> {
    @Query(value = "SELECT *  FROM Designation where name=:name", nativeQuery = true)
    Designation getDesignation(@Param("name") String name);
}

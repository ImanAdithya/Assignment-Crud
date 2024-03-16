package lk.techsonic.backend.repo;

import lk.techsonic.backend.entity.Designation;
import lk.techsonic.backend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface EmployeeRepository extends JpaRepository<Employee,String> {
    @Query(value = "SELECT employee_id FROM Employee ORDER BY employee_id DESC LIMIT 1", nativeQuery = true)
    int getLastIndex();
}

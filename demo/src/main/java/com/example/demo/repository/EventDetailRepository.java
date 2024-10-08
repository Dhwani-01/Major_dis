// package com.example.demo.repository;

// public class EventDetailRepository {
    
// }

package com.example.demo.repository;

// import com.example.eventservice.model.EventDetail;
import com.example.demo.model.EventDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventDetailRepository extends JpaRepository<EventDetail, Long> {

    EventDetail findByName(String name);
    
}

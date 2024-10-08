package com.example.demo.service;

import com.example.demo.model.EventDetail;
import com.example.demo.repository.EventDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class EventDetailService {

    @Autowired
    private EventDetailRepository eventDetailRepository;

    public EventDetail saveEventDetail(String name, String date, String time, String venue, String description, 
                                       String facultyCoordinator, int totalRegistrations,
                                       MultipartFile logo, MultipartFile eventImages) throws IOException {
        EventDetail eventDetail = new EventDetail();
        eventDetail.setName(name);

        java.sql.Date sqlDate = java.sql.Date.valueOf(date); // Assuming the date is in 'yyyy-MM-dd' format
        eventDetail.setDate(sqlDate);

      //  eventDetail.setDate(new java.sql.Date(System.currentTimeMillis())); // Handle date parsing as needed
        eventDetail.setTime(time);
        eventDetail.setVenue(venue);
        eventDetail.setDescription(description);
        eventDetail.setFacultyCoordinator(facultyCoordinator);
        eventDetail.setTotalRegistrations(totalRegistrations);
        eventDetail.setLogo(logo.getBytes());
        eventDetail.setEventImages(eventImages.getBytes());

        return eventDetailRepository.save(eventDetail);
    }

    public List<EventDetail> getAllEvents() {
        return eventDetailRepository.findAll();
    }

    public EventDetail getEventById(Long id) {
        return eventDetailRepository.findById(id).orElse(null);
    }

    public EventDetail getEventByName(String name) {
        return eventDetailRepository.findByName(name); // Assuming you have a method in your repository
    }
}

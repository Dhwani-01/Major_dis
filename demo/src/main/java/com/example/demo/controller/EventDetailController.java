
package com.example.demo.controller;

import com.example.demo.model.EventDetail;
import com.example.demo.service.EventDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/event_detail")
public class EventDetailController {

    @Autowired
    private EventDetailService eventDetailService;

    @PostMapping
    public ResponseEntity<EventDetail> createEventDetail(
            @RequestParam("name") String name,
            @RequestParam("date") String date,
            @RequestParam("time") String time,
            @RequestParam("venue") String venue,
            @RequestParam("description") String description,
            @RequestParam("facultyCoordinator") String facultyCoordinator,
            @RequestParam("totalRegistrations") int totalRegistrations,
            @RequestParam("logo") MultipartFile logo,
            @RequestParam("eventImages") MultipartFile eventImages) {

        try {
            EventDetail eventDetail = eventDetailService.saveEventDetail(name, date, time, venue, description, 
                                                                          facultyCoordinator, totalRegistrations, 
                                                                          logo, eventImages);
            return ResponseEntity.ok(eventDetail);
        } catch (IOException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping
    public List<EventDetail> getAllEventDetails() {
        return eventDetailService.getAllEvents();
    }

    @GetMapping("/{id}")
    public ResponseEntity<EventDetail> getEventDetailById(@PathVariable Long id) {
        EventDetail eventDetail = eventDetailService.getEventById(id);
        if (eventDetail != null) {
            return ResponseEntity.ok(eventDetail);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // @GetMapping
    // public ResponseEntity<EventDetail> getEventByName(@RequestParam("name") String name) {
    //     System.out.println("EVENT NAME"+name);
    //     EventDetail event = eventDetailService.getEventByName(name);
    //     if (event != null) {
    //         return ResponseEntity.ok(event);
    //     } else {
    //         return ResponseEntity.notFound().build(); // Change to notFound() if the event isn't found
    //     }
    // }
    @GetMapping("/events") // Unique path for getting event by name
    public ResponseEntity<EventDetail> getEventByName(@RequestParam("name") String name) {
        System.out.println("EVENT NAME: " + name);
        EventDetail event = eventDetailService.getEventByName(name);
        if (event != null) {
            return ResponseEntity.ok(event);
        } else {
            return ResponseEntity.notFound().build(); // Change to notFound() if the event isn't found
        }
    }
}

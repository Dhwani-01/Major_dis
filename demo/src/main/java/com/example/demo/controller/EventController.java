package com.example.demo.controller;

import com.example.demo.model.Event;
import com.example.demo.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//import org.springframework.web.bind.annotation.CrossOrigin;

//@CrossOrigin(origins = "http://localhost:4200") // Replace with your Angular app's URL
@RestController
@RequestMapping("/event")
public class EventController {

    @Autowired
    private EventService eventService;

    // Create a new event
    // @PostMapping
    // public Event createEvent(@RequestBody Event event) {
    //     return eventService.saveEvent(event);
    // }

    // Get all events
    @GetMapping
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }

    // Get an event by ID
    // @GetMapping("/{id}")
    // public Event getEventById(@PathVariable Long id) {
    //     return eventService.getEventById(id);
    // }
}

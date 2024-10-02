// package com.example.demo.controller;

// import com.example.demo.model.Event;
// import com.example.demo.service.EventService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;
// //import org.springframework.web.bind.annotation.CrossOrigin;

// //@CrossOrigin(origins = "http://localhost:4200") // Replace with your Angular app's URL
// @RestController
// @RequestMapping("/event")
// public class EventController {

//     @Autowired
//     private EventService eventService;

//     // Create a new event
//     // @PostMapping
//     // public Event createEvent(@RequestBody Event event) {
//     //     return eventService.saveEvent(event);
//     // }

//     // Get all events
//     @GetMapping
//     public List<Event> getAllEvents() {
//         return eventService.getAllEvents();
//     }

//     // Get an event by ID
//     // @GetMapping("/{id}")
//     // public Event getEventById(@PathVariable Long id) {
//     //     return eventService.getEventById(id);
//     // }
// }

package com.example.demo.controller;

import com.example.demo.model.Event;
import com.example.demo.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.MediaType;


import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("/event")
public class EventController {

    @Autowired
    private EventService eventService;

    // Get all events
    @GetMapping
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }

    // Get all certificates for students
    @GetMapping("/certificates")
    public List<Event> getAllCertificates() {
        return eventService.getAllEvents(); // Assuming all events have associated certificates
    }

    // Download certificate PDF for a specific event by name
    // @GetMapping("/download-certificate/{name}")
    // public ResponseEntity<Resource> downloadCertificate(@PathVariable String name) {
    //     List<Event> events = eventService.getAllEvents();
        
    //     // Find the event with the matching name
    //     Event event = events.stream()
    //             .filter(e -> e.getName().equalsIgnoreCase(name))
    //             .findFirst()
    //             .orElse(null);

    //     if (event == null) {
    //         return ResponseEntity.notFound().build(); // Return 404 if the event is not found
    //     }

    //     //Path filePath = Paths.get(event.getCertificate());
    //     Path filePath = Paths.get("src/main/resources/certificates/" + event.getCertificate());

    //     try {
    //         Resource resource = new UrlResource(filePath.toUri());
    //         if (resource.exists() || resource.isReadable()) {
    //             return ResponseEntity.ok()
    //                     .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filePath.getFileName().toString() + "\"")
    //                     .contentType(MediaType.APPLICATION_PDF)
    //                     .body(resource);
    //         } else {
    //             return ResponseEntity.notFound().build(); // Return 404 if the file does not exist
    //         }
    //     } catch (Exception e) {
    //         return ResponseEntity.status(500).body(null); // Return 500 for internal server errors
    //     }
    // }
    @GetMapping("/download-certificate/{fileName}")
public ResponseEntity<Resource> downloadCertificate(@PathVariable String fileName) {
    System.out.println("Received request to download certificate: " + fileName);

    // The file path for certificates
    Path filePath = Paths.get("src/main/resources/certificates/" + fileName);

    try {
        Resource resource = new UrlResource(filePath.toUri());
        if (resource.exists() || resource.isReadable()) {
            System.out.println("Certificate found and is readable: " + filePath.toString());
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + filePath.getFileName().toString() + "\"")
                    .contentType(MediaType.APPLICATION_PDF)
                    .body(resource);
        } else {
            System.out.println("Certificate file does not exist or is not readable: " + filePath.toString());
            return ResponseEntity.notFound().build();
        }
    } catch (Exception e) {
        System.out.println("Error occurred while reading the certificate file: " + e.getMessage());
        return ResponseEntity.status(500).body(null);
    }
}

}

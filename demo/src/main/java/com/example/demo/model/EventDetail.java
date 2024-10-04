// package com.example.demo.model;

// public class EventDetail {
    
// }

package com.example.demo.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "event_detail")
public class EventDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private Date date;
    private String time;
    private String venue;
    private String description;
    private String facultyCoordinator;
    private int totalRegistrations;

    @Lob
    private byte[] logo;

    private String logoFilename; // Store logo filename

    @Lob
    private byte[] eventImages;

    private String eventImagesFilename; // Store event images filename

    // Getters and Setters
    // Constructors
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getVenue() {
        return venue;
    }

    public void setVenue(String venue) {
        this.venue = venue;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getFacultyCoordinator() {
        return facultyCoordinator;
    }

    public void setFacultyCoordinator(String facultyCoordinator) {
        this.facultyCoordinator = facultyCoordinator;
    }

    public int getTotalRegistrations() {
        return totalRegistrations;
    }

    public void setTotalRegistrations(int totalRegistrations) {
        this.totalRegistrations = totalRegistrations;
    }

    public byte[] getLogo() {
        return logo;
    }

    public void setLogo(byte[] logo) {
        this.logo = logo;
    }

    public String getLogoFilename() {
        return logoFilename;
    }

    public void setLogoFilename(String logoFilename) {
        this.logoFilename = logoFilename;
    }

    public byte[] getEventImages() {
        return eventImages;
    }

    public void setEventImages(byte[] eventImages) {
        this.eventImages = eventImages;
    }

    public String getEventImagesFilename() {
        return eventImagesFilename;
    }

    public void setEventImagesFilename(String eventImagesFilename) {
        this.eventImagesFilename = eventImagesFilename;
    }
}

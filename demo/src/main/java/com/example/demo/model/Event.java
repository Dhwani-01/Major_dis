package com.example.demo.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "event")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "student_id")
    private int studentId;

    private String name;

    @Column(name = "event_date")
    private Date eventDate;

    private String status;
    private String role;
    // private String certificate;

       // Update the certificate field to store the file path
    @Column(name = "certificate", length = 255)
    private String certificate;

    // Getters and Setters
    // ...
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public int getStudentId() { return studentId; }
    public void setStudentId(int studentId) { this.studentId = studentId; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Date getEventDate() { return eventDate; }
    public void setEventDate(Date eventDate) { this.eventDate = eventDate; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    // public String getCertificate() { return certificate; }
    // public void setCertificate(String certificate) { this.certificate = certificate; }
    // Modified getter and setter for the certificate field
    public String getCertificate() { return certificate; }
    public void setCertificate(String certificate) { this.certificate = certificate; }
}

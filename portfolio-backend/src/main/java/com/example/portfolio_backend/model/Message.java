package com.example.portfolio_backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data   // Lombok: generates getters/setters
@Table(name = "messages")
@NoArgsConstructor
@AllArgsConstructor
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;

    @Column(length = 1000)
    private String message;
}

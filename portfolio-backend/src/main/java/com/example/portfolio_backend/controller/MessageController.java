package com.example.portfolio_backend.controller;

import com.example.portfolio_backend.model.Message;
import com.example.portfolio_backend.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = {
    "https://thamu0309.github.io"
})
@RestController
@RequestMapping("/api/messages")
public class MessageController {

    @Autowired
    private MessageRepository messageRepository;

    @PostMapping
    public ResponseEntity<String> saveMessage(@RequestBody Message message) {
        System.out.println("Received message: " + message);
        try {
            messageRepository.save(message);
            return ResponseEntity.ok("Message sent successfully!");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Failed to send message.");
        }
    }

    // Get all messages (GET)
    @GetMapping
    public List<Message> getAllMessages() {
        return messageRepository.findAll();
    }
}

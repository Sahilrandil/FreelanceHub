package com.FreeLanceHub.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FreeLanceHub.Dto.UserDto;
import com.FreeLanceHub.Service.ClientService;

@RestController
@RequestMapping("/client")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @PostMapping("/proposals/{proposalId}/accept")
    public ResponseEntity<String> acceptProposal(
            @PathVariable Long proposalId,
            @RequestBody UserDto user) {

        clientService.acceptProposal(user.getId(), proposalId);
        return ResponseEntity.ok("Proposal accepted");
    }

    @PostMapping("/proposals/{proposalId}/reject")
    public ResponseEntity<String> rejectProposal(
            @PathVariable Long proposalId,
            @RequestBody UserDto user) {

        clientService.rejectProposal(user.getId(), proposalId);
        return ResponseEntity.ok("Proposal rejected");
    }
}
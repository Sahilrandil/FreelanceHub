package com.FreeLanceHub.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
 
@Entity
@Table(name = "free_lancer_profile")
public class FreeLancerProfile extends BaseEntity {
    @OneToOne
    private User user;
    private String skills;
    private Double hourlyRate;
}
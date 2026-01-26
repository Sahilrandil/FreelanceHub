package com.FreeLanceHub.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.FreeLanceHub.Entity.User;

public interface ClientRepo extends JpaRepository<User, Long> {

}

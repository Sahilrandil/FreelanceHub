package com.FreeLanceHub.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.FreeLanceHub.Entity.Job;
import com.FreeLanceHub.Entity.JobStatus;
@Repository
public interface JobRepo extends JpaRepository<Job, Long> {

    List<Job> findByStatus(JobStatus status);

    List<Job> findByAssignedFreelancerId(Long freelancerId);

    List<Job> findByTitleContainingIgnoreCaseOrDescriptionContainingIgnoreCase(
            String titleKeyword,
            String descriptionKeyword
    );
}
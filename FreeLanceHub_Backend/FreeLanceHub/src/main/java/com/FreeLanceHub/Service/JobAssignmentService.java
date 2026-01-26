package com.FreeLanceHub.Service;

import com.FreeLanceHub.Entity.JobStatus;

public interface JobAssignmentService {

	void assignJobToFreelancer(Long proposalId);

	void updateJobStatus(Long jobId, JobStatus status);
}

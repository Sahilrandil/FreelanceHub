package com.FreeLanceHub.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.FreeLanceHub.Dto.JobDto;
import com.FreeLanceHub.Entity.Job;
import com.FreeLanceHub.Entity.JobStatus;

@Service
public interface JobService {
	
	public JobDto saveJob(Job job);

	// Update an existing job
	public JobDto updateJob(Long jobId, JobDto jobDto);

	// Delete a job by ID
	public void deleteJob(Long jobId);

	// Get a job by ID
	public JobDto getJobById(Long jobId);

	// Get all jobs with a specific status
	public List<JobDto> getJobsByStatus(JobStatus status);

	// Search jobs by title or description
	public List<JobDto> searchJobs(String keyword);
}

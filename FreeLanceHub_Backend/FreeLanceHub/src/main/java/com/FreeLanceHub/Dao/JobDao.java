package com.FreeLanceHub.Dao;

import java.util.List;

import com.FreeLanceHub.Dto.JobDto;
import com.FreeLanceHub.Entity.Job;
import com.FreeLanceHub.Entity.JobStatus;

public interface JobDao {
	
	public Boolean saveJob(Job job);

	// Update an existing job
	public Boolean updateJob(Long jobId, JobDto jobDto);

	// Delete a job by ID
	public Boolean deleteJob(Long jobId);

	// Get a job by ID
	public Job getJobById(Long jobId);

	// Get all jobs with a specific status
	public List<Job> getJobsByStatus(JobStatus status);

	// Search jobs by title or description
	public List<Job> searchJobs(String keyword);

}

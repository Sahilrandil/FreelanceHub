package com.FreeLanceHub.Dao;

import java.util.List;

import com.FreeLanceHub.Dto.JobDto;
import com.FreeLanceHub.Entity.FreeLancerProfile;
import com.FreeLanceHub.Entity.JobStatus;

public interface FreeLancerDao {
	
	public List<JobDto> browseJobs();

	// Proposal submitProposal(Long freelancerId, ProposalRequest request);

	public List<JobDto> getAssignedJobs(Long freelancerId);

	public void updateJobStatus(Long freelancerId, Long jobId, JobStatus status);

	public FreeLancerProfile saveOrUpdateProfile(Long freelancerId, FreeLancerProfile request);

	public List<FreeLancerProfile> searchFreelancersBySkills(String skills);

}

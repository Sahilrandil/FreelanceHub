package com.FreeLanceHub.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.FreeLanceHub.Dto.JobDto;
import com.FreeLanceHub.Entity.FreeLancerProfile;
import com.FreeLanceHub.Entity.JobStatus;

@Service
public interface FreeLancerService {

	public List<JobDto> browseJobs();

	// Proposal submitProposal(Long freelancerId, ProposalRequest request);
	//search freelancer by skills

	public List<JobDto> getAssignedJobs(Long freelancerId);

	public void updateJobStatus(Long freelancerId, Long jobId, JobStatus status);

	public FreeLancerProfile saveOrUpdateProfile(Long freelancerId, FreeLancerProfile request);

	public List<FreeLancerProfile> searchFreelancersBySkills(String skills);
}

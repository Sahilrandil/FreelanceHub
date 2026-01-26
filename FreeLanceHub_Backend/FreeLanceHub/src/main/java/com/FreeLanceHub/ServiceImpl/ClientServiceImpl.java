package com.FreeLanceHub.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FreeLanceHub.Entity.Job;
import com.FreeLanceHub.Entity.JobStatus;
import com.FreeLanceHub.Entity.Proposal;
import com.FreeLanceHub.Entity.ProposalStatus;
import com.FreeLanceHub.Repository.JobRepo;
import com.FreeLanceHub.Repository.ProposalRepo;
import com.FreeLanceHub.Repository.UserRepo;
import com.FreeLanceHub.Service.ClientService;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class ClientServiceImpl implements ClientService {

    @Autowired
    private JobRepo jobRepository;

    @Autowired
    private ProposalRepo proposalRepository;

    @Autowired
    private UserRepo userRepository;

    /**
     * View all proposals for a job posted by the client
     */
    @Override
    public List<Proposal> viewJobProposals(Long clientId, Long jobId) {

        Job job = jobRepository.findById(jobId)
                .orElseThrow(() -> new RuntimeException("Job not found"));

        // Authorization check
        if (!job.getClient().getId().equals(clientId)) {
            throw new RuntimeException("You are not authorized to view proposals for this job");
        }

        return proposalRepository.findByJobId(jobId);
    }

    /**
     * Accept a freelancer proposal
     */
    @Override
    public void acceptProposal(Long clientId, Long proposalId) {

        Proposal proposal = proposalRepository.findById(proposalId)
                .orElseThrow(() -> new RuntimeException("Proposal not found"));

        Job job = proposal.getJob();

        // Authorization check
        if (!job.getClient().getId().equals(clientId)) {
            throw new RuntimeException("You are not authorized to accept this proposal");
        }

        // Accept selected proposal
        proposal.setStatus(ProposalStatus.ACCEPTED);
        job.setAssignedFreelancer(proposal.getFreelancer());
        job.setStatus(JobStatus.IN_PROGRESS);

        // Reject all other proposals
        List<Proposal> allProposals = proposalRepository.findByJobId(job.getId());
        for (Proposal p : allProposals) {
            if (!p.getId().equals(proposalId)) {
                p.setStatus(ProposalStatus.REJECTED);
            }
        }

        proposalRepository.saveAll(allProposals);
        jobRepository.save(job);
    }

    /**
     * Reject a freelancer proposal
     */
    @Override
    public void rejectProposal(Long clientId, Long proposalId) {

        Proposal proposal = proposalRepository.findById(proposalId)
                .orElseThrow(() -> new RuntimeException("Proposal not found"));

        Job job = proposal.getJob();

        // Authorization check
        if (!job.getClient().getId().equals(clientId)) {
            throw new RuntimeException("You are not authorized to reject this proposal");
        }

        proposal.setStatus(ProposalStatus.REJECTED);
        proposalRepository.save(proposal);
    }
}

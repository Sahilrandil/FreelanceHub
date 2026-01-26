package com.FreeLanceHub.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.FreeLanceHub.Entity.Proposal;

 
public interface ClientService {

	public List<Proposal> viewJobProposals(Long clientId, Long jobId);

	public void acceptProposal(Long clientId, Long proposalId);

	public void rejectProposal(Long clientId, Long proposalId);
}

package com.FreeLanceHub.Dao;

public interface ClientDao {

//public List<Proposal> viewJobProposals(Long clientId, Long jobId);

public void acceptProposal(Long clientId, Long proposalId);

public void rejectProposal(Long clientId, Long proposalId);

}

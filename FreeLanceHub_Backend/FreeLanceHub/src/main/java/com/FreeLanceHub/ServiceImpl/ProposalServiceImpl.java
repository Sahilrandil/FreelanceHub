package com.FreeLanceHub.ServiceImpl;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery.FetchableFluentQuery;

import com.FreeLanceHub.Dto.ProposalDto;
import com.FreeLanceHub.Entity.Proposal;
import com.FreeLanceHub.Entity.ProposalStatus;
import com.FreeLanceHub.Repository.ProposalRepo;
import com.FreeLanceHub.Service.ProposalService;

public class ProposalServiceImpl implements ProposalService {
	
	@Autowired
	ProposalRepo proposalRepo;

	@Override
	public Proposal submitProposal(Long freelancerId, ProposalDto proposalDto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Proposal> getProposalsByJob(Long jobId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Proposal getProposalById(Long proposalId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void updateProposalStatus(Long proposalId, ProposalStatus status) {
		// TODO Auto-generated method stub
		
	}

	 

}

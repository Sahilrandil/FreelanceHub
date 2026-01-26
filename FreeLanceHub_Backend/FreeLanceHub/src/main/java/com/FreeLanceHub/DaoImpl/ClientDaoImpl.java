package com.FreeLanceHub.DaoImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.FreeLanceHub.Dao.ClientDao;
import com.FreeLanceHub.Repository.ClientRepo;

@Repository
public class ClientDaoImpl implements ClientDao{
	
	@Autowired
	ClientRepo clientRepo;
	
	@Override
	public void acceptProposal(Long clientId, Long proposalId) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void rejectProposal(Long clientId, Long proposalId) {
		// TODO Auto-generated method stub
		
	}

}

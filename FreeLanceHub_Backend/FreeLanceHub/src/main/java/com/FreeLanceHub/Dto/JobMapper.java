package com.FreeLanceHub.Dto;

import com.FreeLanceHub.Entity.Job;
import com.FreeLanceHub.Entity.User;

public class JobMapper {
	 

	    public static JobDto toDto(Job job) {
	        JobDto dto = new JobDto();
	        dto.setId(job.getId());
	        dto.setTitle(job.getTitle());
	        dto.setDescription(job.getDescription());
	        dto.setBudget(job.getBudget());
	        dto.setStatus(job.getStatus());
	        dto.setClientName(job.getClient().getName());
	        return dto;
	    }

	    public static Job toEntity(JobDto dto, User client) {
	        Job job = new Job();
	        job.setTitle(dto.getTitle());
	        job.setDescription(dto.getDescription());
	        job.setBudget(dto.getBudget());
	        job.setStatus(dto.getStatus());
	        job.setClient(client);
	        return job;
	    }
	


}

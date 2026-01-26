package com.FreeLanceHub.Dto;

import com.FreeLanceHub.Entity.BaseEntity;
import com.FreeLanceHub.Entity.Job;
import com.FreeLanceHub.Entity.JobStatus;
import com.FreeLanceHub.Entity.User;

import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

public class JobAssignmentDto extends BaseEntity {

	private Job job;
	private User freelancer;
	private JobStatus status;

	public JobAssignmentDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public JobAssignmentDto(Job job, User freelancer, JobStatus status) {
		super();
		this.job = job;
		this.freelancer = freelancer;
		this.status = status;
	}

	public Job getJob() {
		return job;
	}

	public void setJob(Job job) {
		this.job = job;
	}

	public User getFreelancer() {
		return freelancer;
	}

	public void setFreelancer(User freelancer) {
		this.freelancer = freelancer;
	}

	public JobStatus getStatus() {
		return status;
	}

	public void setStatus(JobStatus status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "JobAssignment [job=" + job + ", freelancer=" + freelancer + ", status=" + status + "]";
	}

}

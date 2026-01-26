package com.FreeLanceHub.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

@Entity
public class JobAssignment extends BaseEntity {
	@OneToOne
	private Job job;
	@ManyToOne
	private User freelancer;
	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private JobStatus status;

	public JobAssignment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public JobAssignment(Job job, User freelancer, JobStatus status) {
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
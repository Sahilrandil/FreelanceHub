package com.FreeLanceHub.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.ManyToOne;

@Entity
public class Proposal extends BaseEntity {
	@ManyToOne
	private Job job;
	@ManyToOne
	private User freelancer;
	private Double bidAmount;
	private String message;
	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private ProposalStatus status;

	public Proposal() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Proposal(Job job, User freelancer, Double bidAmount, String message, ProposalStatus status) {
		super();
		this.job = job;
		this.freelancer = freelancer;
		this.bidAmount = bidAmount;
		this.message = message;
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

	public Double getBidAmount() {
		return bidAmount;
	}

	public void setBidAmount(Double bidAmount) {
		this.bidAmount = bidAmount;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public ProposalStatus getStatus() {
		return status;
	}

	public void setStatus(ProposalStatus status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Proposal [job=" + job + ", freelancer=" + freelancer + ", bidAmount=" + bidAmount + ", message="
				+ message + ", status=" + status + "]";
	}

}
package com.FreeLanceHub.Dto;

import com.FreeLanceHub.Entity.BaseEntity;
import com.FreeLanceHub.Entity.Job;
import com.FreeLanceHub.Entity.ProposalStatus;
import com.FreeLanceHub.Entity.User;

import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.ManyToOne;

public class PaymentDto extends BaseEntity {

	private Job job;
	private User freelancer;
	private Double bidAmount;
	private String message;
	private ProposalStatus status;

	public PaymentDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PaymentDto(Job job, User freelancer, Double bidAmount, String message, ProposalStatus status) {
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

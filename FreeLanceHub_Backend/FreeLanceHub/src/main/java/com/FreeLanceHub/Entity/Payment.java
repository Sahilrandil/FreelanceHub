package com.FreeLanceHub.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.ManyToOne;

@Entity
public class Payment extends BaseEntity {
	@ManyToOne
	private Job job;
	@ManyToOne
	private User client;
	@ManyToOne
	private User freelancer;
	private Double amount;
	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private PaymentStatus status;

	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Payment(Job job, User client, User freelancer, Double amount, PaymentStatus status) {
		super();
		this.job = job;
		this.client = client;
		this.freelancer = freelancer;
		this.amount = amount;
		this.status = status;
	}

	public Job getJob() {
		return job;
	}

	public void setJob(Job job) {
		this.job = job;
	}

	public User getClient() {
		return client;
	}

	public void setClient(User client) {
		this.client = client;
	}

	public User getFreelancer() {
		return freelancer;
	}

	public void setFreelancer(User freelancer) {
		this.freelancer = freelancer;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public PaymentStatus getStatus() {
		return status;
	}

	public void setStatus(PaymentStatus status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Payment [job=" + job + ", client=" + client + ", freelancer=" + freelancer + ", amount=" + amount
				+ ", status=" + status + "]";
	}

}
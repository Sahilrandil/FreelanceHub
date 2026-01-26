package com.FreeLanceHub.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

@Entity
public class Chat extends BaseEntity {
	@OneToOne
	private Job job;
	@ManyToOne
	private User client;
	@ManyToOne
	private User freelancer;

	public Chat() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Chat(Job job, User client, User freelancer) {
		super();
		this.job = job;
		this.client = client;
		this.freelancer = freelancer;
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

	@Override
	public String toString() {
		return "Chat [job=" + job + ", client=" + client + ", freelancer=" + freelancer + "]";
	}

}
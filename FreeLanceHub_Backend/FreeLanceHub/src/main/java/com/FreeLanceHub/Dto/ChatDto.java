package com.FreeLanceHub.Dto;

import com.FreeLanceHub.Entity.BaseEntity;
import com.FreeLanceHub.Entity.Job;
import com.FreeLanceHub.Entity.User;

import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

public class ChatDto extends BaseEntity {

	private Job job;
	private User client;
	private User freelancer;

	public ChatDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ChatDto(Job job, User client, User freelancer) {
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

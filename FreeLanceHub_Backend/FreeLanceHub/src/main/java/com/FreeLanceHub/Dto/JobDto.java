package com.FreeLanceHub.Dto;

import com.FreeLanceHub.Entity.BaseEntity;

public class JobDto extends BaseEntity {

	private String title;

	private String description;

	private Double budget;

	private String requiredSkills; // Optional

	public JobDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public JobDto(String title, String description, Double budget, String requiredSkills) {
		super();
		this.title = title;
		this.description = description;
		this.budget = budget;
		this.requiredSkills = requiredSkills;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Double getBudget() {
		return budget;
	}

	public void setBudget(Double budget) {
		this.budget = budget;
	}

	public String getRequiredSkills() {
		return requiredSkills;
	}

	public void setRequiredSkills(String requiredSkills) {
		this.requiredSkills = requiredSkills;
	}
	
	
}
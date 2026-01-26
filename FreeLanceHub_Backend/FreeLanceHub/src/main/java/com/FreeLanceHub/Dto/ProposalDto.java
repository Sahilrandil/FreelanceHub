package com.FreeLanceHub.Dto;

import com.FreeLanceHub.Entity.BaseEntity;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class ProposalDto extends BaseEntity {

	@NotNull
	private Long jobId;

	@NotNull
	private Double bidAmount;

	@NotBlank
	private String message;

	public ProposalDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ProposalDto(@NotNull Long jobId, @NotNull Double bidAmount, @NotBlank String message) {
		super();
		this.jobId = jobId;
		this.bidAmount = bidAmount;
		this.message = message;
	}

	public Long getJobId() {
		return jobId;
	}

	public void setJobId(Long jobId) {
		this.jobId = jobId;
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

	@Override
	public String toString() {
		return "ProposalDto [jobId=" + jobId + ", bidAmount=" + bidAmount + ", message=" + message + "]";
	}

}

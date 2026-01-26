package com.FreeLanceHub.Dto;

import com.FreeLanceHub.Entity.BaseEntity;
import com.FreeLanceHub.Entity.User;

import jakarta.persistence.ManyToOne;

public class NotificationDto extends BaseEntity {

	private User user;
	private String type;
	private String message;
	private boolean read;

	public NotificationDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public NotificationDto(User user, String type, String message, boolean read) {
		super();
		this.user = user;
		this.type = type;
		this.message = message;
		this.read = read;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public boolean isRead() {
		return read;
	}

	public void setRead(boolean read) {
		this.read = read;
	}

	@Override
	public String toString() {
		return "Notification [user=" + user + ", type=" + type + ", message=" + message + ", read=" + read + "]";
	}

}

package com.FreeLanceHub.Dto;

import com.FreeLanceHub.Entity.BaseEntity;
import com.FreeLanceHub.Entity.Chat;
import com.FreeLanceHub.Entity.User;

import jakarta.persistence.ManyToOne;

public class MessageDto extends BaseEntity {

	private Chat chat;
	private User sender;
	private String content;

	public MessageDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public MessageDto(Chat chat, User sender, String content) {
		super();
		this.chat = chat;
		this.sender = sender;
		this.content = content;
	}

	public Chat getChat() {
		return chat;
	}

	public void setChat(Chat chat) {
		this.chat = chat;
	}

	public User getSender() {
		return sender;
	}

	public void setSender(User sender) {
		this.sender = sender;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	@Override
	public String toString() {
		return "Message [chat=" + chat + ", sender=" + sender + ", content=" + content + "]";
	}

}

package com.FreeLanceHub.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;

@Entity
public class Message extends BaseEntity {
	@ManyToOne
	private Chat chat;
	@ManyToOne
	private User sender;
	private String content;

	public Message() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Message(Chat chat, User sender, String content) {
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
package com.FreeLanceHub.Service;

import java.util.List;

import com.FreeLanceHub.Dto.ChatDto;
import com.FreeLanceHub.Entity.Chat;

public interface ChatService {
	
	Chat sendMessage(Long senderId, ChatDto dto);

	List<Chat> getChatHistory(Long jobId);
}

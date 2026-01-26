package com.FreeLanceHub.Service;

import java.util.List;

import com.FreeLanceHub.Entity.Notification;

public interface NotificationService {
	
	 void sendNotification(Long userId, String message);

	    List<Notification> getUserNotifications(Long userId);
}

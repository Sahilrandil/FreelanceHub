package com.FreeLanceHub.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FreeLanceHub.Dao.UserDao;
import com.FreeLanceHub.Dto.UserDto;
import com.FreeLanceHub.Entity.User;
import com.FreeLanceHub.Service.UserService;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;

	@Override
	public List<UserDto> getAllUser() {
		return userDao.getAllUser().stream().map(this::mapToDto).toList();
	}

	@Override
	public User getUserByUserName(String userName) {
		return userDao.getUserByUserName(userName);
	}

	@Override
	public User getUserByEmail(String email) {
		return userDao.getUserByEmail(email);
	}

	@Override
	public void updateUserStatus(Long userId, boolean enabled) {
		userDao.updateUserStatus(userId, enabled);
	}

	@Override
	public boolean saveUser(User user) {
		return userDao.saveUser(user);
	}

	// ---------- helper ----------
	private UserDto mapToDto(User user) {
		UserDto dto = new UserDto();

		dto.setName(user.getName());
		dto.setEmail(user.getEmail());
		dto.setRole(user.getRole());
		return dto;
	}
}

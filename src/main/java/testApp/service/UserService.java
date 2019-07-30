package testApp.service;

import testApp.model.User;

import java.util.List;

public interface UserService {
    List<User> allUsers();

    User getById(int id);
}
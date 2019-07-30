package testApp.dao;

import testApp.model.User;

import java.util.List;

public interface UserDAO {
    List<User> allUsers();

    User getById(int id);
}
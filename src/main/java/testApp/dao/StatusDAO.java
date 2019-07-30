package testApp.dao;

import testApp.model.Status;

import java.util.List;

public interface StatusDAO {
    List<Status> allStatuses();

    Status getById(int id);
}
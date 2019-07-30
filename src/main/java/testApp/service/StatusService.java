package testApp.service;

import testApp.model.Status;

import java.util.List;

public interface StatusService {
    List<Status> allStatuses();

    Status getById(int id);
}
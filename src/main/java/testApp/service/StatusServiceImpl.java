package testApp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import testApp.dao.StatusDAO;
import testApp.model.Status;

import java.util.List;

@Service
public class StatusServiceImpl implements StatusService {

    private StatusDAO statusDAO;

    @Autowired
    public void setStatusDAO(StatusDAO statusDAO) {
        this.statusDAO = statusDAO;
    }

    @Override
    @Transactional
    public List<Status> allStatuses() {
        return statusDAO.allStatuses();
    }

    @Override
    @Transactional
    public Status getById(int id) {
        return statusDAO.getById(id);
    }
}
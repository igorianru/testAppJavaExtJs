package testApp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import testApp.dao.TaskDAO;
import testApp.model.Task;

import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {

    private TaskDAO taskDAO;

    @Autowired
    public void setTaskDAO(TaskDAO taskDAO) {
        this.taskDAO = taskDAO;
    }

    @Override
    @Transactional
    public List<Task> allTasks() {
        return taskDAO.allTasks();
    }

    @Override
    @Transactional
    public void add(Task task) {
        taskDAO.add(task);
    }

    @Override
    @Transactional
    public void delete(Task task) {
        taskDAO.delete(task);
    }

    @Override
    @Transactional
    public void edit(Task task) {
        taskDAO.edit(task);
    }

    @Override
    @Transactional
    public Task getById(int id) {
        return taskDAO.getById(id);
    }
}
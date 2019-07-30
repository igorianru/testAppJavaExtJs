package testApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import testApp.model.Status;
import testApp.model.Task;
import testApp.model.User;
import testApp.service.StatusService;
import testApp.service.TaskService;
import testApp.service.UserService;
import testApp.util.Util;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.List;

@Controller
public class TaskController {

    private TaskService taskService;
//    private UserService userService;
//    private StatusService statusService;

    @Autowired
    public void setTaskService(TaskService taskService) {
        this.taskService = taskService;
    }

    @RequestMapping(value = {"/tasks", "/"}, method = {RequestMethod.GET, RequestMethod.POST, RequestMethod.OPTIONS})
    public void allTasks(HttpServletResponse response) throws IOException {
        List<Task> tasks = taskService.allTasks();

        Util.printJson(tasks, response);
    }

    @RequestMapping(value = "/task/add", method = RequestMethod.POST)
    public void addTask(HttpServletRequest request, HttpServletResponse response) throws IOException {
        Task task = new Task();
//        User from = userService.getById(Integer.parseInt(request.getParameter("fromId")));
//        User to = userService.getById(Integer.parseInt(request.getParameter("toId")));
//        Status status = statusService.getById(Integer.parseInt(request.getParameter("statusId")));

        task.setNumber(Integer.parseInt(request.getParameter("number")));
        task.setName(request.getParameter("name"));
//        task.setFrom(from);
//        task.setTo(to);
//        task.setStatus(status);

        task.setFromId(Integer.parseInt(request.getParameter("fromId")));
        task.setToId(Integer.parseInt(request.getParameter("toId")));
        task.setStatusId(Integer.parseInt(request.getParameter("statusId")));

        taskService.add(task);

        List<Task> tasks = taskService.allTasks();
        Util.printJson(tasks, response);
    }

    @RequestMapping(value = "/task/edit", method = RequestMethod.POST)
    public void editTask(@ModelAttribute("task") Task task) {
        if (taskService.getById(task.getId()).getName().equals(task.getName())) {
            taskService.edit(task);
        }
    }

    @RequestMapping(value = "/task/{id}", method = RequestMethod.GET)
    public void task(@PathVariable("id") int id, HttpServletResponse response) throws IOException {
        Task task = taskService.getById(id);

        Util.printJson(task, response);
    }

    @RequestMapping(value = "/task/delete/{id}", method = {RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST})
    public void deleteTask(@PathVariable("id") int id, HttpServletResponse response) throws IOException {
        Task task = taskService.getById(id);
        taskService.delete(task);

        List<Task> tasks = taskService.allTasks();
        Util.printJson(tasks, response);
    }
}
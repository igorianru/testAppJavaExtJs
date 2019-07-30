package testApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import testApp.model.User;
import testApp.service.UserService;
import testApp.util.Util;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Controller
public class UserController {

    private UserService userService;

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(value = "/users", method = {RequestMethod.GET, RequestMethod.POST})
    public void allUsers(HttpServletResponse response) throws IOException {
        List<User> users = userService.allUsers();

        Util.printJson(users, response);
    }
}

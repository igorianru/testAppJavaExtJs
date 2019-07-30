package testApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import testApp.model.Status;
import testApp.service.StatusService;
import testApp.util.Util;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Controller
public class StatusController {

    private StatusService statusService;

    @Autowired
    public void setStatusService(StatusService statusService) {
        this.statusService = statusService;
    }

    @RequestMapping(value = "/statuses", method = {RequestMethod.GET, RequestMethod.POST})
    public void allStatuses(HttpServletResponse response) throws IOException {
        List<Status> statuses = statusService.allStatuses();

        Util.printJson(statuses, response);
    }
}

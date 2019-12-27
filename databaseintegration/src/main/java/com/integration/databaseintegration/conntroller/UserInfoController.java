package com.integration.databaseintegration.conntroller;

import com.integration.databaseintegration.entity.Users;
import com.integration.databaseintegration.services.UserInfoServiceImpl;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import java.util.List;

@Controller
@RequestMapping(value = "/sba/api/")
public class UserInfoController {


    @Resource
    UserInfoServiceImpl userInfoService;



    @PostMapping("signupUser")
    public ResponseEntity<Users>  signup(@RequestBody Users user) {

        Users bean = userInfoService.save(user);

        return new ResponseEntity<>(bean, HttpStatus.OK);

    }

    @PostMapping("editUser")
    public ResponseEntity<Users>  editUser(@RequestBody Users user) {

        Users bean = userInfoService.editUser(user);

        return new ResponseEntity<>(bean, HttpStatus.OK);

    }

    @GetMapping("getUserList")
    public ResponseEntity<List>  getUserList() {

        List<Users>  listBean = userInfoService.getUserList();

        return new ResponseEntity<>(listBean, HttpStatus.OK);

    }

    @GetMapping("getUser")
    public ResponseEntity<Users>  getUser(@Param("id") int id) {

        Users bean = userInfoService.getUser(id);

        return new ResponseEntity<>(bean, HttpStatus.OK);

    }



}

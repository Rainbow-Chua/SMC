package com.integration.databaseintegration.services;

import com.integration.databaseintegration.entity.Users;
import com.integration.databaseintegration.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserInfoServiceImpl {

    @Autowired
    private UserRepository userInfoRepository;

    public Users save(Users user){
        int icount=1;
        Users bean = new Users();
        Users userDB = userInfoRepository.queryUserInfo();
        if(userDB != null){
            icount = userDB.getId()+1;
        }
        user.setId(icount);
        bean = userInfoRepository.save(user);
        return bean;
    }

    public Users editUser(Users user){

       Users userBean = userInfoRepository.save(user);
        return userBean;
    }

    public Users query(String userName, String passWord){
       Users user = userInfoRepository.findByUserNameAndPassWord(userName,passWord);
        return user;
    }

    public List<Users> getUserList(){
        List<Users> user = userInfoRepository.getUserList();
        return user;
    }

    public Users getUser(int id){
        Users user = userInfoRepository.queryUserInfoById(id);
        return user;
    }

}

package com.integration.databaseintegration.repository;

import com.integration.databaseintegration.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<Users, Integer > {


    @Query(nativeQuery = true, value = " select *  from users where userName =:userName  and passWord =:passWord")
    Users queryUserInfo(@Param("userName") String userName, @Param("passWord") String passWord);

    @Query(nativeQuery = true, value = " select *  from users  where 1=1  order by id DESC limit 1")
    Users queryUserInfo();

    @Query(nativeQuery = true, value = " select *  from users  where 1=1  and id = :id order by id  limit 1")
    Users queryUserInfoById(int id);

    @Query(nativeQuery = true, value = " select *  from users  where 1=1  order by id ")
    List<Users> getUserList();

    Users findByUserNameAndPassWord(String userName, String passWord);

}

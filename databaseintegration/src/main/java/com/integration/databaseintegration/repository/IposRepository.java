package com.integration.databaseintegration.repository;

import com.integration.databaseintegration.entity.Ipodetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IposRepository extends JpaRepository<Ipodetails, Integer > {


    @Query( nativeQuery = true, value = " select *  from ipodetails  where 1=1   order by id DESC limit 1 ")
    Ipodetails queryIposById();

    @Query( nativeQuery = true, value = " select *  from ipodetails  where 1=1   order by id  limit 100 ")
    List<Ipodetails> queryIposList();
}

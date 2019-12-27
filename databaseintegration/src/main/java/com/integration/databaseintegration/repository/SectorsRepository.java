package com.integration.databaseintegration.repository;

import com.integration.databaseintegration.entity.Sectors;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface SectorsRepository extends JpaRepository<Sectors, Integer > {
    @Query( nativeQuery = true, value = " select *  from sectors  where 1=1  order by id DESC limit 1")
    Sectors querySectors();

    @Query( nativeQuery = true, value = " select *  from sectors  where 1=1  and id= :id order by id DESC limit 1")
    Sectors querySectorsById(@Param("id") String id );
}

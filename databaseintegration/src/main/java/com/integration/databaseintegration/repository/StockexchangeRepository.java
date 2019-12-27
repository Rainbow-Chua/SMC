package com.integration.databaseintegration.repository;

import com.integration.databaseintegration.entity.Company;
import com.integration.databaseintegration.entity.Stockexchange;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface StockexchangeRepository extends JpaRepository<Stockexchange, Integer > {
    @Query( nativeQuery = true, value = " select *  from stockexchange  where 1=1  order by id DESC limit 1")
    Stockexchange queryStockexchange();

    @Query( nativeQuery = true, value = " select *  from stockexchange  where 1=1  and id= :id order by id ")
    Stockexchange queryStockexchangeById(@Param("id") String id );
}


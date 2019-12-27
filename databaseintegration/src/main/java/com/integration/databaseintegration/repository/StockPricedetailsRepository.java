package com.integration.databaseintegration.repository;

import com.integration.databaseintegration.entity.Stockprice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StockPricedetailsRepository extends JpaRepository<Stockprice, Integer > {
    @Query( nativeQuery = true, value = " select *  from stockprice  where 1=1   order by id DESC limit 1 ")
    Stockprice queryStockpricedetailsById();

    @Query( nativeQuery = true, value = " select *  from stockprice  where 1=1  and companyCode= :companyCode and stockExchang = :stockExchang order by id ")
    List<Stockprice> queryStockpriceByCompanyCode(@Param("companyCode") String companyCode,@Param("stockExchang") String stockExchang);
}

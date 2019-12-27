package com.integration.databaseintegration.repository;


import com.integration.databaseintegration.entity.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Integer > {
    @Query( nativeQuery = true, value = " select * from company  where 1=1  order by id DESC limit 1")
    Company queryCompany();

    @Query( nativeQuery = true, value = " select * from company  where 1=1  and id= :id order by id DESC limit 1")
    Company queryCompanyById(@Param("id") String id );


    @Query( nativeQuery = true, value = " select * from company  where 1=1  and companyName= :companyName order by id DESC limit 1")
    Company queryCompanyByName(@Param("companyName") String companyName );
}

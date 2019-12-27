package com.integration.databaseintegration.services;

import com.integration.databaseintegration.domain.ParamCompany;
import com.integration.databaseintegration.entity.Company;
import com.integration.databaseintegration.entity.Stockprice;
import com.integration.databaseintegration.repository.CompanyRepository;
import com.integration.databaseintegration.repository.StockPricedetailsRepository;
import com.integration.databaseintegration.util.DateUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StockPriceDetailsServiceImpl {


    @Autowired
    private StockPricedetailsRepository stockPricedetailsRepository;


    @Autowired
    private CompanyRepository companyRepository;

    public ParamCompany getCompareCompany(ParamCompany paramCompany){
        List<String> priceList = new ArrayList<>();
        List<String> dateList = new ArrayList<>();
        Company company = companyRepository.queryCompanyByName(paramCompany.companyName);
        if(company != null){
            List<Stockprice>  list = stockPricedetailsRepository.queryStockpriceByCompanyCode(company.getId()+"", paramCompany.getStockExchange());
            for(Stockprice stockprice: list){
                String strDate = DateUtil.instantDateToString(stockprice.getDate());
                String strPrice = String.valueOf(stockprice.getCurrentPrice());
                dateList.add(strDate);
                priceList.add(strPrice);
            }
        }
        paramCompany.setDateList(dateList);
        paramCompany.setPriceList(priceList);
        return  paramCompany;
    }

}

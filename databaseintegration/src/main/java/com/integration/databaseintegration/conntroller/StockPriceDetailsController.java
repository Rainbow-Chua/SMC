package com.integration.databaseintegration.conntroller;


import com.integration.databaseintegration.domain.ParamCompany;
import com.integration.databaseintegration.services.StockPriceDetailsServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;

@Controller
@RequestMapping(value = "/sba/api")
public class StockPriceDetailsController {


    @Resource
    StockPriceDetailsServiceImpl stockPriceDetailsServiceImpl;

    @GetMapping("getCompareCompany")
    public ResponseEntity<ParamCompany> getCompareCompany( ParamCompany paramCompany) {
         paramCompany  = stockPriceDetailsServiceImpl.getCompareCompany(paramCompany);
        return new ResponseEntity<>(paramCompany, HttpStatus.OK);
    }
}

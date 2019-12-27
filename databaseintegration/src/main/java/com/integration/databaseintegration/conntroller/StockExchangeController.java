package com.integration.databaseintegration.conntroller;


import com.integration.databaseintegration.entity.Company;
import com.integration.databaseintegration.entity.Stockexchange;
import com.integration.databaseintegration.services.CompanyServicelmpl;
import com.integration.databaseintegration.services.StockexChangeServiceImpl;
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
@RequestMapping(value = "/sba/api")
public class StockExchangeController {

    @Resource
    StockexChangeServiceImpl stockexChangeServiceImpl;

    @PostMapping("createExchange")
    public ResponseEntity<Stockexchange> createExchange(@RequestBody Stockexchange stockexchange) {
        stockexchange = stockexChangeServiceImpl.createExchange(stockexchange);
        return new ResponseEntity<>(stockexchange, HttpStatus.OK);
    }

    @GetMapping("searchExchange")
    public ResponseEntity<List> searchExchange(@Param("stockExchange") String stockExchange) {
        List<Stockexchange> list = stockexChangeServiceImpl.searchExchange();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }


    @GetMapping("getExchange")
    public ResponseEntity<Stockexchange> getExchange(@Param("id") String id) {
        Stockexchange bean = stockexChangeServiceImpl.getExchange(id);
        return new ResponseEntity<>(bean, HttpStatus.OK);
    }

    @PostMapping("editExchange")
    public ResponseEntity<Stockexchange> editExchange(@RequestBody  Stockexchange stockexchange) {
        stockexchange = stockexChangeServiceImpl.editExchange(stockexchange);
        return new ResponseEntity<>(stockexchange, HttpStatus.OK);
    }
}

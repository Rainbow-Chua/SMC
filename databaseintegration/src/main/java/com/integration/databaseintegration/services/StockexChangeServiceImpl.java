package com.integration.databaseintegration.services;

import com.integration.databaseintegration.entity.Stockexchange;
import com.integration.databaseintegration.repository.StockexchangeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockexChangeServiceImpl {


    @Autowired
    private StockexchangeRepository stockexchangeRepository;

    public Stockexchange createExchange(Stockexchange pBean) {
        int icount = 1;
        Stockexchange DBbean = stockexchangeRepository.queryStockexchange();
        if (DBbean != null) {
            icount = DBbean.getId() + 1;
        }
        pBean.setId(icount);
        Stockexchange  bean = stockexchangeRepository.save(pBean);
        return bean;
    }

    public List<Stockexchange> searchExchange() {
        List<Stockexchange>  list = stockexchangeRepository.findAll();
        return list;
    }


    public Stockexchange getExchange(String id) {
        Stockexchange companyDB = stockexchangeRepository.queryStockexchangeById(id);
        return companyDB;
    }

    public Stockexchange editExchange(Stockexchange company) {

        Stockexchange  bean = stockexchangeRepository.saveAndFlush(company);
        return bean;
    }
}

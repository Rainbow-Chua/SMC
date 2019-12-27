package com.integration.databaseintegration.services;

import com.integration.databaseintegration.entity.Company;
import com.integration.databaseintegration.entity.Sectors;
import com.integration.databaseintegration.repository.CompanyRepository;
import com.integration.databaseintegration.repository.SectorsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CompanyServicelmpl {

    @Autowired
    private CompanyRepository companyRepository;

    @Autowired
    private SectorsRepository sectorsRepository;

    public Company createCompany(Company company) {
        int icount = 1;
        int intsectors = 1;
        Company bean = new Company();
        Sectors sectorsBean = new Sectors();
        if (company.getId() == 0) {
            icount = this.getCount();
        } else {
            Company company1 = companyRepository.queryCompanyById(company.getId() + "");
            if(company1 == null) {
                icount = company.getId();
            }else{
                icount = this.getCount();
            }
        }
        Sectors sectors = sectorsRepository.querySectors();
        if (sectors != null) {
            intsectors = sectors.getId() + 1;
        }

        sectorsBean.setId(intsectors);
        sectorsBean.setBrief(company.getBoardOfDirectors());
        sectorsBean.setSectorName(company.getSector());
        sectorsRepository.save(sectorsBean);
        company.setId(icount);
        company.setSector(intsectors + "");
        bean = companyRepository.save(company);
        return bean;
    }

    public  int getCount() {
        int icount = 1;
        Company companyDB = companyRepository.queryCompany();
        if (companyDB != null) {
            icount = companyDB.getId() + 1;
        }
        return  icount;
    }

    public List<Company> queryCompany() {
        List<Company> listBean = new ArrayList<Company>();
        List<Company> list = companyRepository.findAll();
        for (Company bean : list) {
            Sectors sectors = sectorsRepository.querySectorsById(bean.getSector());
            bean.setSector(sectors.getSectorName());
            listBean.add(bean);
        }
        return listBean;
    }


    public Company getCompany(String id) {
        Company companyDB = companyRepository.queryCompanyById(id);
        Sectors sectors = sectorsRepository.querySectorsById(companyDB.getSector());
        companyDB.setSector(sectors.getSectorName());
        return companyDB;
    }

    public Company editCompany(Company company) {
        Company companyDB = companyRepository.queryCompanyById(company.getId() + "");
        Sectors sectorsBean = new Sectors();
        sectorsBean.setId(Integer.parseInt(companyDB.getSector()));
        sectorsBean.setSectorName(company.getSector());
        sectorsBean.setBrief(company.getBoardOfDirectors());
        sectorsRepository.save(sectorsBean);
        company.setSector(companyDB.getSector());
        Company bean = companyRepository.saveAndFlush(company);
        return bean;
    }

    public void deleteCompany(Company company) {

        companyRepository.delete(company);

    }
}

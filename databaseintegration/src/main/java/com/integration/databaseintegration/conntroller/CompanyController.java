package com.integration.databaseintegration.conntroller;


import com.integration.databaseintegration.domain.ParamCompany;
import com.integration.databaseintegration.entity.Company;
import com.integration.databaseintegration.response.ResponseOK;
import com.integration.databaseintegration.services.CompanyServicelmpl;
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
@RequestMapping(value = "/sba/api/")
public class CompanyController {

    @Resource
    CompanyServicelmpl companyServicelmpl;

    @PostMapping("createCompany")
    public ResponseEntity<Company> createCompany(@RequestBody Company company) {
        company = companyServicelmpl.createCompany(company);
        return new ResponseEntity<>(company, HttpStatus.OK);
    }

    @GetMapping("searchCompany")
    public ResponseEntity<List> searchCompany(@Param("companyName") String companyName) {
        List<Company> list = companyServicelmpl.queryCompany();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }


    @GetMapping("getCompany")
    public ResponseEntity<Company> getCompany(@Param("id") String id) {
        Company company = companyServicelmpl.getCompany(id);
        return new ResponseEntity<>(company, HttpStatus.OK);
    }

    @PostMapping("editCompany")
    public ResponseEntity<Company> editCompany(@RequestBody Company company) {
        company = companyServicelmpl.editCompany(company);
        return new ResponseEntity<>(company, HttpStatus.OK);
    }

    @PostMapping("deleteCompany")
    public ResponseEntity<ResponseOK> deleteCompany(@RequestBody Company company) {
        companyServicelmpl.deleteCompany(company);
        return new ResponseEntity<>(new ResponseOK(), HttpStatus.OK);
    }



}

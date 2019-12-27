package com.integration.databaseintegration.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "company")
public class Company implements Serializable {
    private static final long serialVersionUID = 1L;
    private int id;
    private String companyName;
    private Integer turnover;
    private String boardOfDirectors;
    private String stockExchanges;
    private String sector;
    private String ceo;
    private String briefWriteu;
    private String stockCode;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "companyName")
    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    @Basic
    @Column(name = "turnover")
    public Integer getTurnover() {
        return turnover;
    }

    public void setTurnover(Integer turnover) {
        this.turnover = turnover;
    }

    @Basic
    @Column(name = "boardOFDirectors")
    public String getBoardOfDirectors() {
        return boardOfDirectors;
    }

    public void setBoardOfDirectors(String boardOfDirectors) {
        this.boardOfDirectors = boardOfDirectors;
    }

    @Basic
    @Column(name = "stockExchanges")
    public String getStockExchanges() {
        return stockExchanges;
    }

    public void setStockExchanges(String stockExchanges) {
        this.stockExchanges = stockExchanges;
    }

    @Basic
    @Column(name = "sector")
    public String getSector() {
        return sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    @Basic
    @Column(name = "CEO")
    public String getCeo() {
        return ceo;
    }

    public void setCeo(String ceo) {
        this.ceo = ceo;
    }

    @Basic
    @Column(name = "briefWriteu")
    public String getBriefWriteu() {
        return briefWriteu;
    }

    public void setBriefWriteu(String briefWriteu) {
        this.briefWriteu = briefWriteu;
    }

    @Basic
    @Column(name = "stockCode")
    public String getStockCode() {
        return stockCode;
    }

    public void setStockCode(String stockCode) {
        this.stockCode = stockCode;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Company company = (Company) o;
        return id == company.id &&
                Objects.equals(companyName, company.companyName) &&
                Objects.equals(turnover, company.turnover) &&
                Objects.equals(boardOfDirectors, company.boardOfDirectors) &&
                Objects.equals(stockExchanges, company.stockExchanges) &&
                Objects.equals(sector, company.sector) &&
                Objects.equals(ceo, company.ceo) &&
                Objects.equals(briefWriteu, company.briefWriteu) &&
                Objects.equals(stockCode, company.stockCode);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, companyName, turnover, boardOfDirectors, stockExchanges, sector, ceo, briefWriteu, stockCode);
    }
}

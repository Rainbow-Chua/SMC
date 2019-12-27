package com.integration.databaseintegration.entity;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;
import java.time.Instant;
import java.util.Objects;

@Entity
@Table(name = "stockprice")
public class Stockprice {
    private int id;
    private String companyCode;
    private String stockExchang;
    private BigDecimal currentPrice;
    private Instant date;
    private String time;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "companyCode")
    public String getCompanyCode() {
        return companyCode;
    }

    public void setCompanyCode(String companyCode) {
        this.companyCode = companyCode;
    }

    @Basic
    @Column(name = "stockExchang")
    public String getStockExchang() {
        return stockExchang;
    }

    public void setStockExchang(String stockExchang) {
        this.stockExchang = stockExchang;
    }

    @Basic
    @Column(name = "currentPrice")
    public BigDecimal getCurrentPrice() {
        return currentPrice;
    }

    public void setCurrentPrice(BigDecimal currentPrice) {
        this.currentPrice = currentPrice;
    }

    @Basic
    @Column(name = "Date")
    public Instant getDate() {
        return date;
    }

    public void setDate(Instant date) {
        this.date = date;
    }

    @Basic
    @Column(name = "Time")
    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Stockprice that = (Stockprice) o;
        return id == that.id &&
                Objects.equals(companyCode, that.companyCode) &&
                Objects.equals(stockExchang, that.stockExchang) &&
                Objects.equals(currentPrice, that.currentPrice) &&
                Objects.equals(date, that.date) &&
                Objects.equals(time, that.time);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, companyCode, stockExchang, currentPrice, date, time);
    }
}

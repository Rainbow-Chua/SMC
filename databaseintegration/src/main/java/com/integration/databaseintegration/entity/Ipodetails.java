package com.integration.databaseintegration.entity;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.Instant;
import java.util.Objects;

@Entity
@Table(name = "ipodetails")
public class Ipodetails implements Serializable {
    private int id;
    private String companyName;
    private String stockExchange;
    private BigDecimal pricePerShare;
    private Integer totalShares;
    private Instant openDateTime;
    private String remarks;

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
    @Column(name = "stockExchange")
    public String getStockExchange() {
        return stockExchange;
    }

    public void setStockExchange(String stockExchange) {
        this.stockExchange = stockExchange;
    }

    @Basic
    @Column(name = "pricePerShare")
    public BigDecimal getPricePerShare() {
        return pricePerShare;
    }

    public void setPricePerShare(BigDecimal pricePerShare) {
        this.pricePerShare = pricePerShare;
    }

    @Basic
    @Column(name = "totalShares")
    public Integer getTotalShares() {
        return totalShares;
    }

    public void setTotalShares(Integer totalShares) {
        this.totalShares = totalShares;
    }

    @Basic
    @Column(name = "openDateTime")
    public Instant getOpenDateTime() {
        return openDateTime;
    }

    public void setOpenDateTime(Instant openDateTime) {
        this.openDateTime = openDateTime;
    }

    @Basic
    @Column(name = "remarks")
    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Ipodetails ipos = (Ipodetails) o;
        return id == ipos.id &&
                Objects.equals(companyName, ipos.companyName) &&
                Objects.equals(stockExchange, ipos.stockExchange) &&
                Objects.equals(pricePerShare, ipos.pricePerShare) &&
                Objects.equals(totalShares, ipos.totalShares) &&
                Objects.equals(openDateTime, ipos.openDateTime) &&
                Objects.equals(remarks, ipos.remarks);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, companyName, stockExchange, pricePerShare, totalShares, openDateTime, remarks);
    }
}

package com.integration.databaseintegration.entity;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Objects;

@Entity
@Table(name = "sectors")
public class Sectors {
    private int id;
    private String sectorName;
    private String brief;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "sectorName")
    public String getSectorName() {
        return sectorName;
    }

    public void setSectorName(String sectorName) {
        this.sectorName = sectorName;
    }

    @Basic
    @Column(name = "brief")
    public String getBrief() {
        return brief;
    }

    public void setBrief(String brief) {
        this.brief = brief;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Sectors sectors = (Sectors) o;
        return id == sectors.id &&
                Objects.equals(sectorName, sectors.sectorName) &&
                Objects.equals(brief, sectors.brief);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, sectorName, brief);
    }
}

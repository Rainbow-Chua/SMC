package com.integration.databaseintegration.services;

import com.integration.databaseintegration.entity.Ipodetails;
import com.integration.databaseintegration.entity.Stockprice;
import com.integration.databaseintegration.repository.IposRepository;
import com.integration.databaseintegration.repository.StockPricedetailsRepository;
import com.integration.databaseintegration.util.DateUtil;
import com.integration.databaseintegration.util.StringUtil;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Service
public class IposServiceImpl {

    @Autowired
    private IposRepository iposRepository;

    @Autowired
    private StockPricedetailsRepository  stockPricedetailsRepository;

    public Ipodetails getIPODetail(String id) {
        Ipodetails ipoBean = iposRepository.queryIposById();
        return ipoBean;
    }

    public List<Ipodetails> getIPOList() {
        List<Ipodetails> listIpoBean = iposRepository.queryIposList();
        return listIpoBean;
    }

    public Ipodetails importer(List<List<String>> listob) {
        List<Ipodetails> ListBean = new ArrayList<Ipodetails>();
        Ipodetails ipoBean = new Ipodetails();
        //该处可调用service相应方法进行数据保存到数据库中，现只对数据输出
        for (int i = 0; i < listob.size(); i++) {
            Ipodetails bean = new Ipodetails();
            Stockprice stockPrice =new Stockprice();
            List<String> lo = listob.get(i);
            bean.setCompanyName(lo.get(0));
            bean.setStockExchange(lo.get(1));
            stockPrice.setCompanyCode(lo.get(0));
            stockPrice.setStockExchang(lo.get(1));
            BigDecimal bd = new BigDecimal(StringUtil.filterIsNull(lo.get(2)));
            //设置小数位数，第一个变量是小数位数，第二个变量是取舍方法(四舍五入)
            bd = bd.setScale(2, BigDecimal.ROUND_HALF_UP);
            bean.setPricePerShare(bd);
            stockPrice.setCurrentPrice(bd);

            if (StringUtils.isEmpty(lo.get(3)) || StringUtils.isEmpty(lo.get(4))) {
                bean.setOpenDateTime(null);
                stockPrice.setDate(null);
            } else {
                String dateTime = lo.get(3) +" "+ lo.get(4).trim();
                bean.setOpenDateTime(DateUtil.strToDate(dateTime));
                stockPrice.setDate(DateUtil.strToDate(dateTime));
                stockPrice.setTime(lo.get(4));
            }
            Ipodetails getIpos = iposRepository.queryIposById();
            if(getIpos==null){
                bean.setId(1);
            }else {
                bean.setId(getIpos.getId()+1);
            }
            Stockprice stockBean = stockPricedetailsRepository.queryStockpricedetailsById();
            if(stockBean == null){
                stockPrice.setId(1);
            }else {
                stockPrice.setId(stockBean.getId()+1);
            }
            stockPricedetailsRepository.save(stockPrice);
            ipoBean = iposRepository.save(bean);
        }

        return ipoBean;
    }
}

package com.integration.databaseintegration.conntroller;


import com.integration.databaseintegration.entity.Ipodetails;
import com.integration.databaseintegration.services.IposServiceImpl;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import java.io.IOException;
import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping(value = "/sba/api")
public class IposController {

    @Resource
    IposServiceImpl iposServiceImpl;

    @GetMapping("getIPODetails")
    public ResponseEntity<Ipodetails> getExchange(@Param("id") String id) {
        Ipodetails bean = iposServiceImpl.getIPODetail(id);
        return new ResponseEntity<>(bean, HttpStatus.OK);
    }


    @GetMapping("getIPOList")
    public ResponseEntity<List> getIPOList() {
       List<Ipodetails> ListBean = iposServiceImpl.getIPOList();
        return new ResponseEntity<>(ListBean, HttpStatus.OK);
    }

    @PostMapping("fileUpload")
    public ResponseEntity<Ipodetails> fileUpload(@RequestPart List<MultipartFile> files) {
        //读取excel文件
        MultipartFile file = files.get(0);
        InputStream in = null;
        List<List<String>> listob = new ArrayList<List<String>>();

        if (file.isEmpty()) {
            System.out.println("文件不存在！");
        }
        try {
            in = file.getInputStream();
            //获取工作薄
            Workbook wb = null;
            if (file.getOriginalFilename().toLowerCase().endsWith("xls")) {
                wb = new HSSFWorkbook(in);
            } else if (file.getOriginalFilename().toLowerCase().endsWith("xlsx")) {
                wb = new XSSFWorkbook(in);
            } else {
                return null;
            }
            //读取第一个工作页sheet
            Sheet sheet = wb.getSheetAt(0);
            //第一行为标题
            int totalRow = sheet.getLastRowNum();// 得到excel的总记录条数
            for (int i = 1; i <= totalRow; i++) {// 遍历行
                Row row = sheet.getRow(i);
                ArrayList<String> list = new ArrayList<String>();
//                for (Cell cell : row) {
                for (int j = 0; j < row.getLastCellNum(); j++) {
                    Cell cell = row.getCell(j);
                    //根据不同类型转化成字符串
                    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
                    if (3 == j) {
                        cell.getDateCellValue();
                        String cellValue = sdf.format(cell.getDateCellValue());// 日期
                        list.add(cellValue);
                    } else {
                        cell.setCellType(Cell.CELL_TYPE_STRING);
                        list.add(cell.getStringCellValue());
                    }
                }
                listob.add(list);
            }
            in.close();
        } catch (IOException ex) {
            System.out.println("IOException" + ex.getMessage());
        }
       Ipodetails bean= iposServiceImpl.importer(listob);

//        System.out.println("IposController.fileUpload" + file.getOriginalFilename());
//        System.out.println("String.valueOf(file.getSize())" + String.valueOf(file.getSize()));

        ResponseEntity<Ipodetails> responseEntity = null;
        responseEntity = new ResponseEntity(bean, HttpStatus.OK);
        return responseEntity;
    }


}

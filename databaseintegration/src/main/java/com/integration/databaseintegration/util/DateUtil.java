package com.integration.databaseintegration.util;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;

public class DateUtil {

    /**
     * @param dateStr
     * @return String
     */
    public static Instant strToDate(String dateStr) {
        // 将字符串转化为时间
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        LocalDateTime date = LocalDateTime.parse(dateStr, formatter);
        return date.toInstant(ZoneOffset.UTC);
    }

    /**
     * @param dateStr
     * @return String
     */
    public static LocalDate strToDateYYYYMMDD(String dateStr) {
        // 将字符串转化为时间
        DateTimeFormatter formatterHH = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDateTime dateTime = LocalDateTime.parse(dateStr, formatterHH);
        dateTime.toInstant(ZoneOffset.UTC);
        LocalDate date = LocalDate.from(dateTime);
        return date;
    }

    /**
     * @param dateTime
     * @return String
     */
    public static String instantDateToString(Instant dateTime) {
        // 将dateTime转化为字符串
        if(null == dateTime){
            return  "";
        }
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd");
        dateTime.atOffset(ZoneOffset.UTC).format(formatter);
        return dateTime.atOffset(ZoneOffset.UTC).format(formatter);
    }

    public static void main(String[] args) {
        String date = "2019-10-01 10:20:20";
        System.out.println(strToDateYYYYMMDD(date));
    }
}

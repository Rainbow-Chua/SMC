package com.integration.databaseintegration.util;

public class StringUtil {

    /**
     * @param str
     * @return String
     */
    public static String filterIsNull( String str) {
        String strIsBlank ="0";
        if(str != null && !"".equals(str)){
            strIsBlank = str ;
        }
        return strIsBlank;
    }
}

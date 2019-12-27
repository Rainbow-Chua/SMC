package com.integration.databaseintegration.util;

import org.springframework.stereotype.Service;

import java.sql.*;

@Service
public class H2DBTest {
    //数据库连接URL，通过使用TCP/IP的服务器模式（远程连接）
    private static final String JDBC_URL = "jdbc:h2:tcp://localhost/~/test";
    //连接数据库时使用的用户名
    private static final String USER = "sa";
    //连接数据库时使用的密码
    private static final String PASSWORD = "sa";
    //连接H2数据库时使用的驱动类，org.h2.Driver这个类是由H2数据库自己提供的，在H2数据库的jar包中可以找到
    private static final String DRIVER_CLASS = "org.h2.Driver";

    public  Connection dbConnect() throws ClassNotFoundException, SQLException {
        // 加载H2数据库驱动
        Class.forName(DRIVER_CLASS);
        // 根据连接URL，用户名，密码获取数据库连接
        Connection conn = DriverManager.getConnection(JDBC_URL, USER, PASSWORD);
        //新增数据测试
//        insertTest(conn);
        return conn;
    }


    public void insertTest(Connection conn)  throws ClassNotFoundException, SQLException{
        //如果存在USER_INFO表就先删除USER_INFO表
        Statement stmt = conn.createStatement();
        //创建TEST表
        // stmt.execute("DROP IF EXISTS TABLE TEST");
        //新增

        stmt.executeUpdate("INSERT INTO TESTUSER (id , name ,sex, email ,uaccount ,pasword, code ) VALUES(1,'h2','男','test@d1ee123.com','test123','123','po')");
        stmt.executeUpdate("INSERT INTO TESTUSER (id , name ,sex, email ,uaccount  ,pasword, code )  VALUES(2,'bb','男','test@d11s23.com','test123','123','po')");
        stmt.executeUpdate("INSERT INTO TESTUSER (id , name ,sex, email ,uaccount  ,pasword, code )  VALUES(3,'nn','女','test@d112dsf3.com','test123','123','po')");

//        //删除
//        stmt.executeUpdate("DELETE FROM TEST WHERE name='大日如来'");
//        //修改
//        stmt.executeUpdate("UPDATE TEST SET name='孤傲苍狼' WHERE name='青龙'");
        //查询
        ResultSet rs = stmt.executeQuery("SELECT * FROM TESTUSER");
        //遍历结果集
        while (rs.next()) {
            System.out.println(rs.getString("id") + "," + rs.getString("name") + "," + rs.getString("sex"));
        }
        //释放资源
        stmt.close();
        //关闭连接
        conn.close();
    }

}

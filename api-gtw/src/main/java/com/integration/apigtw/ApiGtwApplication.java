package com.integration.apigtw;

import com.integration.apigtw.zuul.TokenFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;

@EnableZuulProxy
@SpringBootApplication
public class ApiGtwApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiGtwApplication.class, args);
	}

	@Bean
	public TokenFilter tokenFilter(){
		return new TokenFilter();
	}

}

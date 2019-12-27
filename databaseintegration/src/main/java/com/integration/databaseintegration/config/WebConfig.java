package com.integration.databaseintegration.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

@Configuration
@EnableWebSecurity
public class WebConfig extends WebSecurityConfigurerAdapter {


    @Value("${sba.frontend.url}")
    private String frontendUrl;

    /**
     * close the security basic auth
     *
     * @param http
     * @throws Exception
     */
    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.csrf()
            .disable()
            .headers()
            .xssProtection()
            .and()
            .httpStrictTransportSecurity()
            .includeSubDomains(true)
            .maxAgeInSeconds(31536000);

    }

    /**
     * cors
     *
     * @return
     */
    private CorsConfiguration buildConfig() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        String[] allowDomain = frontendUrl.split(",");
        Set<String> allowedOrigins = new HashSet<String>(Arrays.asList(allowDomain));
        allowedOrigins.forEach(
                allowedOrigin -> {
                    corsConfiguration.addAllowedOrigin(allowedOrigin);
                }
        );
        corsConfiguration.addAllowedHeader("*");
        corsConfiguration.addAllowedMethod("*");
        corsConfiguration.setAllowCredentials(true);
        //corsConfiguration.addAllowedMethod(H);
        return corsConfiguration;
    }

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", buildConfig());
        return new CorsFilter(source);
    }
}

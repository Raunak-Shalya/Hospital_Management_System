package com.example.backend.demo.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
public class WebMvcConfiguration implements WebMvcConfigurer {
    @Value("#{'${endpoints.cors.allowed-origins}'.split(',')}")
    private List<String> corsAllowedEndpoints;

    @Value("#{'${endpoints.cors.allowed-methods}'.split(',')}")
    private List<String> corsAllowedMethods;

    @Value("#{'${endpoints.cors.allowed-headers}'.split(',')}")
    private List<String> corsAllowedHeader;

    @Value("#{'${cors.exposed-headers}'.split(',')}")
    private List<String> exposedHeaders;

    @Value("${endpoints.cors.allow-credentials}")
    private boolean allowCredentials;

    @Value("${endpoints.cors.maxage}")
    private long endpointCorsMaxAge;

    public void addCorsMappings(CorsRegistry corsRegistry) {
        corsRegistry.addMapping("/**")
                .allowedOrigins(corsAllowedEndpoints.toArray(new String[corsAllowedEndpoints.size()]))
                .allowedMethods(corsAllowedMethods.toArray(new String[corsAllowedMethods.size()]))
                .maxAge(endpointCorsMaxAge)
                .allowedHeaders(corsAllowedHeader.toArray(new String[corsAllowedHeader.size()]))
                .allowCredentials(allowCredentials)
                .exposedHeaders(exposedHeaders.toArray(new String[exposedHeaders.size()]));
    }

}

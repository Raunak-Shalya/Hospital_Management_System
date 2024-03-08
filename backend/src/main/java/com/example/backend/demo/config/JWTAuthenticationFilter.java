package com.example.backend.demo.config;

import com.example.backend.demo.services.JWTService;
import com.example.backend.demo.services.UserService;
import io.micrometer.common.util.StringUtils;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JWTAuthenticationFilter extends OncePerRequestFilter {

    private final JWTService jwtService;

    private final UserService userService;

    String getTokenFromRequest(HttpServletRequest request){
        Cookie[] cookies=request.getCookies();
        for(Cookie c:cookies){
//            System.out.println(c.getName());
//            System.out.println(c.getValue());
            if("jwt-token".equals(c.getName())){
                return c.getValue();
            }
        }
        return null;
    }
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        final String authHeader = request.getHeader("Authorization");
        String jwt=null;
        if(!(request.getRequestURI().startsWith("/auth") || request.getRequestURI().startsWith("/dicom"))) {
            jwt = getTokenFromRequest(request);
        }
        String username="";

//        if(StringUtils.isEmpty(jwt)) {
//            filterChain.doFilter(request, response);
//            return;
//        }


        if(jwt!=null) username = jwtService.extractUsername(jwt);

        if(StringUtils.isNotEmpty(username) && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = userService.userDetailsService().loadUserByUsername(username);

//            System.out.println(jwtService.isTokenValid(jwt, userDetails));
            if(jwtService.isTokenValid(jwt, userDetails)) {
                SecurityContext securityContext = SecurityContextHolder.createEmptyContext();

                UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities()
                );

                token.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                securityContext.setAuthentication(token);
                SecurityContextHolder.setContext(securityContext);
            }
        }

        filterChain.doFilter(request, response);
    }
}

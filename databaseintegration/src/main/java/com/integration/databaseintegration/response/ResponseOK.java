package com.integration.databaseintegration.response;


import com.fasterxml.jackson.annotation.JsonProperty;

import java.io.Serializable;

public class ResponseOK implements Serializable {

    private static final long serialVersionUID = 20190605L;

    public static final String KEY_COMPLETED = "message";

    @JsonProperty(KEY_COMPLETED)
    private String message = "ok";
}

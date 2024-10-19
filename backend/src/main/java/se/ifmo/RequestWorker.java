package se.ifmo;

import com.fastcgi.FCGIInterface;
import lombok.extern.log4j.Log4j2;

import java.util.ArrayList;
import java.util.Arrays;

@Log4j2
public class RequestWorker {

    public boolean handle() {
        boolean result = new Validator().checkArea(parseRequest());
        if (result) {
            return true;
        } else {
            log.info("Invalid format of values in some parameters. Please, change these values and try again.");
            return false;
        }
    }

    private ArrayList<String> parseRequest() {
        String[] reformedString = FCGIInterface.request.params.getProperty("QUERY_STRING").replaceAll("[a-z][A-Z]=", "").split("&");
        return new ArrayList<>(Arrays.asList(reformedString));
    }


}

package se.ifmo;

import com.fastcgi.FCGIInterface;

import java.nio.charset.StandardCharsets;
import java.time.Duration;
import java.time.LocalDateTime;

public class ResponseWorker {
    private final RequestWorker requestWorker = new RequestWorker();

    public void send() {
        var fcgiInterface = new FCGIInterface();
        while (fcgiInterface.FCGIaccept() >= 0) {
            LocalDateTime startTime = LocalDateTime.now();

            boolean result = requestWorker.handle();

            LocalDateTime endTime = LocalDateTime.now();

            double totalTime = Duration.between(startTime, endTime).toNanos();

            String httpResponse = getHttpResponse(result, totalTime);

            System.out.println(httpResponse);
        }
    }

    private String getHttpResponse(boolean result, double totalTime) {
        var content = """
                {
                "result": %s,
                "executionTime": %s ns
                }
                """.formatted(result ? "Попал" : "Промахнулся", String.valueOf(totalTime));
        return """
                HTTP/1.1 200 OK
                Content-Type: application/json
                Content-Length: %d
                                
                %s
                """.formatted(content.getBytes(StandardCharsets.UTF_8).length, content);
    }
}

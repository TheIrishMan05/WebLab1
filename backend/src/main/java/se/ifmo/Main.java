package se.ifmo;


import lombok.extern.log4j.Log4j2;

@Log4j2
public class Main {
    public static void main(String[] args) {
        ResponseWorker rw = new ResponseWorker();

        while (true) {
            try {
                rw.send();
            } catch (Exception e) {
                log.error(e);
            }
        }

    }

}
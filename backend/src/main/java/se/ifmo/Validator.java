package se.ifmo;

import lombok.Getter;
import lombok.Setter;
import lombok.extern.log4j.Log4j2;

import java.util.ArrayList;

@Getter
@Setter
@Log4j2
public class Validator {
    private final int scaleConst = 15;
    private double x;
    private double y;
    private double r;

    private boolean validateR(String input) {
        try {
            double r = Double.parseDouble(input);
            setR(r);
            return r >= 1 && r <= 5;
        } catch (NumberFormatException e) {
            log.error("error of r validation: {}", e.getMessage());
            return false;
        }
    }

    private boolean validateY(String input) {
        try {
            double y = Double.parseDouble(input);
            setY(y);
            return y >= -3 && y <= 5;
        } catch (NumberFormatException e) {
            log.error("error of y validation: {}", e.getMessage());
            return false;
        }
    }

    private boolean validateX(String input) {
        try {
            double x = Double.parseDouble(input);
            setX(x);
            return x >= -4 && x <= 4;
        } catch (NumberFormatException e) {
            log.error("error of x validation: {}", e.getMessage());
            return false;
        }
    }

    private boolean validateAll(ArrayList<String> params) {
        return validateX(params.get(0)) && validateY(params.get(1)) && validateR(params.get(2));
    }

    public boolean checkArea(ArrayList<String> params) {
        if (getX() >= 0 && getY() >= 0) {
            return checkRectangle(params);
        } else if (getX() <= 0 && getY() >= 0) {
            return checkCircle(params);
        } else if (getX() >= 0 && getY() < 0) {
            return checkTriangle(params);
        } else {
            return false;
        }

    }

    private boolean checkRectangle(ArrayList<String> params) {
        if (validateAll(params)) {
            return getX() <= 2 * scaleConst * getR() && getY() <= 2 * scaleConst * getR();
        } else {
            return false;
        }
    }

    private boolean checkCircle(ArrayList<String> params) {
        if (validateAll(params)) {
            return Math.pow(getX(), 2) + Math.pow(getY(), 2) <= Math.pow(-scaleConst * getR() / 2, 2);
        } else {
            return false;
        }
    }

    private boolean checkTriangle(ArrayList<String> params) {
        if (validateAll(params)) {
            return getY() <= -getX() / 2;
        } else {
            return false;
        }
    }


}

package se.ifmo;

import lombok.Getter;
import lombok.Setter;
import lombok.extern.log4j.Log4j2;

import java.util.ArrayList;

@Getter
@Setter
@Log4j2
public class Validator {
    private int x;
    private double y;
    private int r;

    private boolean validateR(String input) {
        try {
            int r = Integer.parseInt(input);
            setR(r);
            return r >= 1 && r <= 5;
        } catch (NumberFormatException e) {
            log.error("Invalid format of R.");
            return false;
        }
    }

    private boolean validateY(String input) {
        try {
            double y = Double.parseDouble(input);
            setY(y);
            return y >= -3 && y <= 5;
        } catch (NumberFormatException e) {
            log.error("Invalid format of Y.");
            return false;
        }
    }

    private boolean validateX(String input) {
        try {
            int x = Integer.parseInt(input);
            setX(x);
            return x >= -4 && x <= 4;
        } catch (NumberFormatException e) {
            log.error("Invalid format of X.");
            return false;
        }
    }

    private boolean validateAll(ArrayList<String> params) {
        return validateX(params.get(0)) && validateY(params.get(1)) && validateR(params.get(2));
    }

    public boolean checkArea(ArrayList<String> params) {
        if (getX() >= 0 && getY() >= 0) {
            return checkRectangle(params);
        } else if (getX() < 0 && getY() >= 0) {
            return checkCircle(params);
        } else if (getX() >= 0 && getY() < 0) {
            return checkTriangle(params);
        } else {
            return false;
        }

    }

    private boolean checkRectangle(ArrayList<String> params) {
        if (validateAll(params)) {
            return getX() <= getR() && getY() <= getR();
        } else {
            return false;
        }
    }

    private boolean checkCircle(ArrayList<String> params) {
        if (validateAll(params)) {
            return Math.pow(getX(), 2) + Math.pow(getY(), 2) <= Math.pow((float) -getR() / 2, 2);
        } else {
            return false;
        }
    }

    private boolean checkTriangle(ArrayList<String> params) {
        if (validateAll(params)) {
            return Math.pow(getX(), 2) + Math.pow(getY(), 2) <= Math.pow((float) -getR() / 2, 2);
        } else {
            return false;
        }
    }


}

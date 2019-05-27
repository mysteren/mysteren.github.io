<?php

/**
 * Работает начиная с версии  PHP 7.1
 *  
 */  
class Calc {

    /**
     * Сложение больших положительных целых чисел 
     */
    public static function bigSum(string $num1, string $num2): string
    {
        $result = '';
        $offset = -1;
        $buffer = 0;

        while (true) {

            $ch1 = $num1[$offset];
            $ch2 = $num2[$offset];
            
            if ($ch1 === '' && $ch2 === '' && !$buffer) {
                break 1;
            }

            $chSum = (int)$ch1 + (int)$ch2 + $buffer;
        
            $result = ($chSum % 10) . $result;
            $buffer = (int) ($chSum / 10);

            $offset--;
        } 

        return $result; 
    }
}

$num1 = $argv[1] ?? '';
$num2 = $argv[2] ?? '';

var_dump(Calc::bigSum((string)$num1, (string)$num2));


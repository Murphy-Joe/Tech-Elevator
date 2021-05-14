using System;

namespace TempConvert
{
    class Program
    {
        static void Main(string[] args)
        {
           
            // ask the user if they want to convert F to C or C to F.  
           

            // ask the user for a temperature to convert.  Parse the string response to an int.
 


               
        }

        public static double FToC(double temp)
        {
            return (temp - 32) / 1.8;
        }

        public static double CToF(double temp)
        {
            return temp * 1.8 + 32;
        }
    }
}
using System;
namespace Points.Models
{
    public class Point
    {
        public string TravellerName {get; set;}
        public int BudgetGiven {get; set;}
        public int DurOfStay {get; set;}
        public double Distancecov {get; set;}
    }

   public class Coordinates {
       public double lon {get;set;}
        public double lat {get;set;}
   }
}
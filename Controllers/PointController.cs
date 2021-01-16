

using Microsoft.AspNetCore.Mvc;
using Points.Models;
using Points.Data;
using System;
using System.Collections.Generic;
//using Microsoft.AspNetCore.Http;
//using System.Text.Encodings.Web;


namespace Points.Controllers
{
    [Route("api/points/[action]")]
    [ApiController]
    [ResponseCache(NoStore = true, Location = ResponseCacheLocation.None)]
    public class PointController : ControllerBase
    {

        public static double distance;
        private static readonly object locker = new object();
        
        [HttpGet]
        [ActionName("get")]
        public ActionResult<List<Point>> Get()
        {
            
            lock (locker)
            {
                try
                {
                    return Ok(PointData.points);
                }
                catch (System.Exception)
                {

                    throw;
                }
            }

        }


        //private static int GeneratedID = 0;
        public double GetDistance(double longitude, double latitude, double otherLongitude, double otherLatitude)
        {
            var d1 = latitude * (Math.PI / 180.0);
            var num1 = longitude * (Math.PI / 180.0);
            var d2 = otherLatitude * (Math.PI / 180.0);
            var num2 = otherLongitude * (Math.PI / 180.0) - num1;
            var d3 = Math.Pow(Math.Sin((d2 - d1) / 2.0), 2.0) + Math.Cos(d1) * Math.Cos(d2) * Math.Pow(Math.Sin(num2 / 2.0), 2.0);
            
            return 6376500.0 * (2.0 * Math.Atan2(Math.Sqrt(d3), Math.Sqrt(1.0 - d3)))/100000;
        }

        [HttpPost]
        [ActionName("posts")]
       public ActionResult Posts(Coordinates[] p)
        {
            //p.ID = GeneratedID++;
            double sum=0;
            lock (locker)
            {
                //PointData.coordpoints.Add(p);
                //System.Console.WriteLine($"{p.lon} {p.lat}");
                foreach(var coord in p)
                {
                    System.Console.WriteLine($"{coord.lon},{coord.lat}");
                    sum += GetDistance(coord.lon,coord.lat,coord.lon+1,coord.lat+1);
                }
                //return Ok(p);
                distance = sum;
                System.Console.WriteLine($"This is distance: {distance} km");
                return Ok(distance);
            }

            
        }
        
        
        [HttpPost]
        [ActionName("post")]
        public IActionResult Post([FromForm] string travgivenname, [FromForm] int budgetgiven,[FromForm] int durofstaygiven)
        {
            Point p = new Point 
            {
                TravellerName=travgivenname,
                BudgetGiven=budgetgiven,
                DurOfStay=durofstaygiven,
                Distancecov=distance
            };
            lock (locker)
            {
                PointData.points.Add(p);
                System.Console.WriteLine($"{p.TravellerName} {p.BudgetGiven} {p.DurOfStay} {p.Distancecov}");
            }

            return NoContent();

        }

    }
}


using Microsoft.AspNetCore.Mvc;
using Points.Models;
using Points.Data;
using System.Collections.Generic;

namespace Points.Controllers
{
    [Route("api/points")]
    [ApiController]
    //[ResponseCache(NoStore = true, Location = ResponseCacheLocation.None)]
    public class PointController : ControllerBase
    {

        private static readonly object locker = new object();
        
        [HttpGet]
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

        [HttpPost]
        public ActionResult Post(Point p)
        {
            //p.ID = GeneratedID++;
            Point museumdulovre = new Point{ID=1,Lat=48.8566m, Lng=2.3522m, Info="This is Museuem Du Lovre"};
            Point dorsemuse = new Point{ID=2,Lat=48.8600m, Lng=2.3266m, Info="This is Museuem Dorse"};
            Point palaisgarnier = new Point{ID=3,Lat=48.8720m, Lng=2.3216m, Info="This is Palai garnier"};
            lock (locker)
            {

                PointData.points.Add(p);
                PointData.points.Add(museumdulovre);
                PointData.points.Add(dorsemuse);
                PointData.points.Add(palaisgarnier);
                System.Console.WriteLine($"{p.ID} {p.Lat} {p.Lng}");
                System.Console.WriteLine($"{museumdulovre.ID} {museumdulovre.Lat} {museumdulovre.Lng} {museumdulovre.Info}");
                System.Console.WriteLine($"{dorsemuse.ID} {dorsemuse.Lat} {dorsemuse.Lng},{dorsemuse.Info}");
                System.Console.WriteLine($"{palaisgarnier.ID} {palaisgarnier.Lat} {palaisgarnier.Lng},{palaisgarnier.Info}");
                return Ok();
            }
        }


    }
}
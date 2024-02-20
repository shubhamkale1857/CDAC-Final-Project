using TrainerUseCases.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.DotNet.MSIdentity.Shared;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Security.Cryptography;
using System.Diagnostics;

namespace TrainerUseCases.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class TrainerController : ControllerBase
    {
        [Produces("application/json")]
        [HttpGet]
        public List<Trainer> Index()
        {
            List<Trainer> list = new List<Trainer>();
            //Console.WriteLine("********************************%%%%%%%%%%%%%%%%%%%%**********************");
            using (var db = new dac_projectContext())
            {
                list = db.Trainers.ToList();
            }
            return list;
        }
        [HttpGet]
        public String SaveTrainerReq(int tid,int cid)
        {
            Console.WriteLine("saving trainer request");
            using(var db = new dac_projectContext())
            {
                var cust = db.Customers.Where(s => s.UserId == cid).FirstOrDefault();
                TrainerRequest req = new TrainerRequest();
                req.TrainerId = tid;
                req.CustomerId = cust.CustomerId;
                req.ReqStatus = 0;
                Console.WriteLine(req.TrainerId+"  "+req.CustomerId+"  "+req.ReqStatus);
                Console.WriteLine(req.ToString());
                db.Add(req);
                db.SaveChanges();
                Console.WriteLine("saved trainer request");
                return "Success";
            }
        }

        [HttpGet]
        public List<Customer> getReq(int tid)
        {
            Console.WriteLine(tid);
            List<TrainerRequest> list = new List<TrainerRequest>();
            List<Customer> custs = new List<Customer>();
            using (var db = new dac_projectContext())
            {
                var train = db.Trainers.Where(s => s.UserId == tid).FirstOrDefault();
                list = db.TrainerRequests
                        .Where(t => t.ReqStatus == 0 && t.TrainerId == train.TrainerId)
                        .ToList();

                foreach (var l in list)
                {
                    Customer? c = db.Customers.Where(c => c.CustomerId == l.CustomerId).FirstOrDefault();
                    custs.Add(c);
                }
            }
            return custs;
        }

        [HttpGet]
        public String approve(int tid,int cid)
        {
            Console.WriteLine(tid);
            List<TrainerRequest> list = new List<TrainerRequest>();
            List<Customer> custs = new List<Customer>();
            using (var db = new dac_projectContext())
            {
                var train = db.Trainers.FirstOrDefault(s => s.UserId == tid);
                var cust = db.Customers.FirstOrDefault(c => c.CustomerId == cid);
                if(train != null)
                {
                    if (cust != null)
                    {
                        cust.Trainer = train.TrainerId;
                        db.SaveChanges();
                    }
                    else
                    {
                        Console.WriteLine("cust is null");
                    }
                }
                else
                {
                    Console.WriteLine("trianer is null");
                }
                //Console.WriteLine("Trainer ID=" + train.TrainerId + "  Customer ID: " + cust.CustomerId);
                var trainerreqlist = db.TrainerRequests.Where(t => t.CustomerId == cust.CustomerId).ToList();
                if(trainerreqlist != null)
                {
                    //Console.WriteLine("Length: " + trainerreqlist.Count);
                    foreach (TrainerRequest a in trainerreqlist)
                    {
                        a.ReqStatus = 1;
                        Console.WriteLine(a.ReqStatus);
                        db.SaveChanges();
                    }
                }
                else
                {
                    Console.WriteLine("trainer list is null");
                }   
            }
            Console.WriteLine("response send successfully");
            return "Success";
        }

        [HttpGet]
        public String deny(int tid, int cid)
        {
            Console.WriteLine(tid);
            List<TrainerRequest> list = new List<TrainerRequest>();
            List<Customer> custs = new List<Customer>();
            using (var db = new dac_projectContext())
            {
                var train = db.Trainers.FirstOrDefault(s => s.UserId == tid);
                var cust = db.Customers.FirstOrDefault(c => c.CustomerId == cid);
                var trainerreqlist = db.TrainerRequests.Where(t => t.TrainerId == train.TrainerId && t.CustomerId == cust.CustomerId).ToList();
                if (trainerreqlist != null)
                {
                    //Console.WriteLine("Length: " + trainerreqlist.Count);
                    foreach (TrainerRequest a in trainerreqlist)
                    {
                        a.ReqStatus = 2;
                        //Console.WriteLine(a.ReqStatus);
                        db.SaveChanges();
                    }
                }
                else
                {
                    Console.WriteLine("trainer list is null");
                }
            }
            Console.WriteLine("response send successfully");
            return "Denied";
        }
    }
}

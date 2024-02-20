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
                return "Success";
            }
            return "failed";
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
        public List<Customer> approve(int tid,int cid)
        {
            Console.WriteLine(tid);
            List<TrainerRequest> list = new List<TrainerRequest>();
            List<Customer> custs = new List<Customer>();
            using (var db = new dac_projectContext())
            {
                var train = db.Trainers.Where(s => s.UserId == tid).FirstOrDefault();
                var cust = db.Customers.Where(c => c.CustomerId == cid).FirstOrDefault();
                cust.Trainer = train.TrainerId;


                db.SaveChanges();
                
            }
            return custs;
        }
    }
}

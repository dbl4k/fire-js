using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace fire_js.Controllers
{
    public class FireExperimentController : Controller
    {
        // GET: FireExperiment
        public ActionResult Index()
        {
            return View();
        }

        // GET: FireExperiment/Details
        public ActionResult Details(int id)
        {
            return View(new Models.FireExperiment() { id = id });
        }
    }
}
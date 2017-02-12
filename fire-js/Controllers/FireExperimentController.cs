using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace fire_js.Controllers
{
    public class FireExperimentController : Controller
    {

        List<Models.FireExperiment> m_fireExperimentList = Utilities.GetFireExperimentList();

        // GET: FireExperiment
        public ActionResult Index()
        {
            return View(m_fireExperimentList);
        }

        // GET: FireExperiment/Details
        public ActionResult Details(int id)
        {
            // TODO will need to firm up existence before getting singular result, exception will occur.
            Models.FireExperiment result = 
                m_fireExperimentList.Where(
                fireExperiment => fireExperiment.id.Equals(id)
                ).FirstOrDefault();

            return View(new Models.FireExperiment() { id = id });
        }
    }
}
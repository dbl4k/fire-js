using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace fire_js
{
    public class Utilities
    {
        public static List<Models.FireExperiment> GetFireExperimentList()
        {
            // This is just a mock at this stage.
            List<Models.FireExperiment> fireExperimentList = new List<Models.FireExperiment>();

            for (int i = 1; i <= 5; i++)
            {
                Models.FireExperiment fireExperiment = new Models.FireExperiment();
                fireExperiment.Id = i;
                fireExperiment.Scriptname = "~/Scripts/FireExperiment1.js";
                fireExperimentList.Add(fireExperiment);
            }

            return fireExperimentList;
        }


    }
}
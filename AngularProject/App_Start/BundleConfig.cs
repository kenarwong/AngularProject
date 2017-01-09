using System.Web;
using System.Web.Optimization;

namespace AngularProject
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Scripts/lib").Include(
                      "~/Scripts/dist/vendor.bundle.js"
                      ));

            bundles.Add(new StyleBundle("~/Scripts/app").Include(
                      "~/Scripts/dist/app.bundle.js"
                      ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/Site.css"));
        }
    }
}

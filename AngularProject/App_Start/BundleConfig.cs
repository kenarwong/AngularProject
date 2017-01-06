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
                      "~/Scripts/node_modules/dist/jquery/jquery.min.js",
                      "~/Scripts/node_modules/angular/angular.min.js",
                      "~/Scripts/node_modules/angular-route/angular-route.min.js"
                      ));

            bundles.Add(new StyleBundle("~/Scripts/app").Include(
                      "~/Scripts/dist/app.bundle.js"
                      ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/Site.css"));
        }
    }
}

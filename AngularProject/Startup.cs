using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularProject.Startup))]
namespace AngularProject
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

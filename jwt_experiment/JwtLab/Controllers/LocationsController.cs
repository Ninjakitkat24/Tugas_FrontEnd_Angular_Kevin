using Microsoft.AspNetCore.Mvc;

namespace JwtLab.Controllers;

public sealed record LocationCity(string Name, string[] Districts);
public sealed record LocationProvince(string Name, LocationCity[] Cities);

[ApiController]
[Route("api/locations")]
public class LocationsController : ControllerBase
{
    [HttpGet]
    public ActionResult<LocationProvince[]> Get()
    {
        return Ok(new[]
        {
            new LocationProvince("Kepulauan Riau", new[]
            {
                new LocationCity("Batam", new[] { "Batam Kota", "Batu Aji" }),
                new LocationCity("Tanjungpinang", new[] { "Tanjungpinang Barat", "Tanjungpinang Kota" })
            }),
            new LocationProvince("Riau", new[]
            {
                new LocationCity("Pekanbaru", new[] { "Bukit Raya", "Marpoyan Damai" }),
                new LocationCity("Dumai", new[] { "Dumai Barat", "Dumai Timur" })
            }),
            new LocationProvince("Sumatera Utara", new[]
            {
                new LocationCity("Medan", new[] { "Medan Kota", "Medan Johor" }),
                new LocationCity("Binjai", new[] { "Binjai Kota", "Binjai Utara" })
            })
        });
    }
}

using System.Text;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;

public record LoginDto(string Email, string Password);
public class DemoUser {
  public string Email = "user@example.com";
  public string Hash;
  public DemoUser(IConfiguration c) {
    Hash = new PasswordHasher<DemoUser>()
      .HashPassword(this, c["Demo:Password"]
        ?? throw new Exception("Isi Demo:Password"));
  }
}
[ApiController, Route("api/auth")]
public class AuthController(
  IConfiguration c, DemoUser user) : ControllerBase {
  [AllowAnonymous, HttpPost("login")]
  public IActionResult Login(LoginDto d) {
    if (d.Email != user.Email ||
        string.IsNullOrWhiteSpace(d.Password))
      return Unauthorized();
    var check = new PasswordHasher<DemoUser>()
      .VerifyHashedPassword(user, user.Hash, d.Password);
if (check == PasswordVerificationResult.Failed)
      return Unauthorized();
    var key = new SymmetricSecurityKey(
      Encoding.UTF8.GetBytes(c["Jwt:Key"]!));
    var jwt = new JwtSecurityToken(
      issuer: "JwtLab", audience: "AngularLab",
      claims: new[] {
        new Claim("sub", "1"),
        new Claim("email", user.Email),
        new Claim("name", "Percobaan Payload")
      },
      expires: DateTime.UtcNow.AddMinutes(15),
      signingCredentials: new SigningCredentials(
        key, SecurityAlgorithms.HmacSha256));
    return Ok(new {
      token = new JwtSecurityTokenHandler()
        .WriteToken(jwt)
    });
  }
  [Authorize, HttpGet("profile")]
  public IActionResult Profile() => Ok(new {
    id = User.FindFirst("sub")?.Value,
    name = User.FindFirst("name")?.Value,
    email = User.FindFirst("email")?.Value
  });
}
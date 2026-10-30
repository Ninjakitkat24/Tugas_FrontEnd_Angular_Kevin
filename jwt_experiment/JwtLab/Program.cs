
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

var b = WebApplication.CreateBuilder(args);

// Membaca secret key dari konfigurasi
var key = b.Configuration["Jwt:Key"]
    ?? throw new Exception("Isi Jwt:Key di appsettings.json");

if (Encoding.UTF8.GetByteCount(key) < 32)
{
    throw new Exception("Jwt:Key harus minimal 32 byte.");
}

b.Services.AddControllers();
b.Services.AddSingleton<DemoUser>();

// Konfigurasi CORS untuk Angular
b.Services.AddCors(o => o.AddPolicy("Angular", p =>
    p.WithOrigins("http://localhost:4200")
     .AllowAnyHeader()
     .AllowAnyMethod()));

// Konfigurasi autentikasi JWT
b.Services.AddAuthentication(
    JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(o =>
    {
        o.MapInboundClaims = false;

        o.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,

            ValidIssuer = "JwtLab",
            ValidAudience = "AngularLab",

            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(key)),

            ClockSkew = TimeSpan.Zero
        };
    });

b.Services.AddAuthorization();

var app = b.Build();

app.UseHttpsRedirection();
app.UseRouting();
app.UseCors("Angular");

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();

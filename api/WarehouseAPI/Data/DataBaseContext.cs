using MagazynAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace MagazynAPI.Data
{
    public class DataBaseContext : DbContext
    {
        public DataBaseContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Item> Items { get; set; }
    }
}

namespace MagazynAPI.Models
{
    public class Item
    {
        public Guid Id { get; set; }
        public string Category { get; set; }
        public string Model { get; set; }
        public string SerialNumber { get; set; }
        public string Warehouse { get; set; }
    }
}

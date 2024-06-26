namespace MagazynAPI.Models
{
    public class UpdateItemRequest
    {
        public string Category { get; set; }
        public string Model { get; set; }
        public string SerialNumber { get; set; }
        public string Warehouse { get; set; }
    }
}

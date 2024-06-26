namespace MagazynAPI.Models
{
    public class AddItemRequest
    {
        public string Category { get; set; }
        public string Model { get; set; }
        public string SerialNumber { get; set; }
        public string Warehouse { get; set; }
    }
}

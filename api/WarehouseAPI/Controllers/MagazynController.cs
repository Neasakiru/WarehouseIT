using MagazynAPI.Data;
using MagazynAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MagazynAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MagazynController : ControllerBase
    {
        private readonly DataBaseContext dbContext;
        public MagazynController(DataBaseContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetItems()
        {
            return Ok(await dbContext.Items.ToListAsync());
        }

        [HttpGet]
        [Route("{id:guid}")]
        public async Task<IActionResult> GetItem([FromRoute] Guid id)
        {
            var item = await dbContext.Items.FindAsync(id);
            if (item == null)
            {
                return NotFound();
            }
            return Ok(item);
        }

        [HttpPost]
        public async Task<IActionResult> AddItem(AddItemRequest addItemRequest)
        {
            var item = new Item()
            {
                Id = Guid.NewGuid(),
                Category = addItemRequest.Category,
                Model = addItemRequest.Model,
                SerialNumber = addItemRequest.SerialNumber,
                Warehouse = addItemRequest.Warehouse
            };

            await dbContext.Items.AddAsync(item);
            await dbContext.SaveChangesAsync();

            return Ok(item);
        }

        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> UpdateContact([FromRoute] Guid id, UpdateItemRequest updateItemRequest)
        {
           var item = await dbContext.Items.FindAsync(id);
            if (item != null) 
            {
                item.Category = updateItemRequest.Category;
                item.Model = updateItemRequest.Model;
                item.SerialNumber = updateItemRequest.SerialNumber;
                item.Warehouse = updateItemRequest.Warehouse;

                await dbContext.SaveChangesAsync();

                return Ok(item);
            }

            return NotFound();
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteItem([FromRoute] Guid id)
        {
            var item = await dbContext.Items.FindAsync(id);

            if(item != null)
            {
                dbContext.Items.Remove(item);
                await dbContext.SaveChangesAsync();
                return Ok(item);
            }
            return NotFound();
        }
    }
}
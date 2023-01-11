using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class ActivitiesController : BaseApiController
{
    private readonly DataContext _context;

    public ActivitiesController(DataContext context)
    {
        _context = context;
    }

    [HttpGet] //api/activities
    public async Task<ActionResult<List<Activity>>> GetActivities()
    {
        return await _context.Activities.ToListAsync();
    }

    [HttpGet("{id:guid}")] //api/activities/2C59FB9E-0597-41B6-B280-28B46AECE47E
    public async Task<ActionResult<Activity>> GetActivityById(Guid id)
    {
        return await _context.Activities.FindAsync(id);
    }

}
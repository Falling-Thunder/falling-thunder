namespace Falling.Thunder.Domain.Catalog;

public class Item
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string Brand { get; set; }
    public decimal Price { get; set; }
    public List<Rating> Ratings { get; set; } = new List<Rating>();


    public Item(string name, string description, string brand, decimal price)
    {
        if(string.IsNullOrWhiteSpace(name))
        {
            throw new ArgumentException("Name is required and cannot be empty.");
        }

        if(string.IsNullOrWhiteSpace(description))
        {
            throw new ArgumentException("Description is required and cannot be empty.");
        }

        if(string.IsNullOrWhiteSpace(brand))
        {
            throw new ArgumentException("Brand is required and cannot be empty.");
        }

        if(price <= 0)
        {
            throw new ArgumentException("Price must be greater than zero.");
        }

        Name = name;
        Description = description;
        Brand = brand;
        Price = price;
    }

    public void AddRating(Rating rating){
        Ratings.Add(rating);
    }
}

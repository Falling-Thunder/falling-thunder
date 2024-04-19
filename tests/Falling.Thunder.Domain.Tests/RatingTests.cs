using Falling.Thunder.Domain.Catalog;

namespace Falling.Thunder.Domain.Tests;

[TestClass]
public class RatingTests 
{
    [TestMethod]
    public void Can_Create_New_Rating()
    {
        var rating = new Rating(5, "John Doe", "Great!");


        Assert.AreEqual(5, rating.Stars);
        Assert.AreEqual("John Doe", rating.UserName);
        Assert.AreEqual("Great!", rating.Review);
    }

    [TestMethod]
    [ExpectedException(typeof(ArgumentException))]
    public void Rating_With_Zero_Stars_Throws_Exception()
    {
        var rating = new Rating(0, "John Doe", "Great!");
               
    }
}


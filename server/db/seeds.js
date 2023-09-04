use hotel_bookings;
db.dropDatabase();

db.booking.insertMany([
    {
        name:"Jesse Bellhanger",
        email:"jbellhanger@time.com",
        checked_in:true
    },
    {
        name:"Randa Helks",
        email:"rhelks@sina.com.cn",
        checked_in:false
    }
]);
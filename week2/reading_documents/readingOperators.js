db.movieDetails.find({ rated: "PG-13", year: 2013} ).count()
db.movieDetails.find({ "writers": ["Ethan Coen", "Joe Coen"]} ).count()
db.movieDetails.find({ "actors.0": "Jeff Bridges"]} ).count()

Cursors
find returns a Cursors

var c= db.movieDetails.find();
var doc = function() {return c.hasNext() ? c.next() : null;}
c.objsLeftInBatch();
Projections
filters the result  from the find.

db.movieDetails.find({ rated: "PG-13"}, {title: 1} ).count()

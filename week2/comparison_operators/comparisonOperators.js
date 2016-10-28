db.movieDetails.find({ runtime: { $gt: 90 } }).count()

db.movieDetails.find({ runtime: { $gt: 90, $lt: 120 } }).count()

db.movieDetails.find({ "tomato.meter": { $gte: 95 }, runtime: { $gt: 180 } })

db.movieDetails.find({ rated: { $ne: "UNRATED" } }).count()

db.movieDetails.find({ rated: { $in: ["G", "PG"] } }).pretty()


db.movieDetails.find({ "awards.wins": { $gt: 0 } })
db.movieDetails.find({year: 1996})

db.movieDetails.find({"imdb.votes": {$gt: 10000}, year: {$gte: 2010, $lte: 2013}})
db.movieDetails.find({ $or : [ { "tomato.meter": { $gt: 99 } },
                               { "metacritic": { $gt: 95 } } ] })


db.movieDetails.find({ $and : [ { "metacritic": { $ne: 100 } },
                                { "metacritic" { $exists: true } } ] })


2.5
db.movieDetails.find({ $and : [ { "genres": "Comedy" },
                               { "genres": "Crime"  } ] })
db.movieDetails.find({ "awards.wins": { $gt: 0}})
db.movieDetails.find({ $or : [ { "awards.wins": { $gt: 0}},
                               { "awards.nominations": { $gt: 0}} ] }).pretty()
db.movieDetails.find( { {"awards.oscars.award":"bestPicture"}, {title: 1}}).pretty()

db.movieDetails.updateOne({ $or : [ { "awards.wins": { $gt: 0}},
                               { "awards.nominations": { $gt: 0}} ] },
                               {$set: {"oscars" : [
        {"award": "bestAnimatedFeature", "result": "won"},
        {"award": "bestMusic", "result": "won"},
        {"award": "bestPicture", "result": "nominated"},
        {"award": "bestSoundEditing", "result": "nominated"},
        {"award": "bestScreenplay", "result": "nominated"}
    ] }})
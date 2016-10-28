db.movieDetails.updateOne({ $or : [ { "awards.wins": { $gt: 0}},
                               { "awards.nominations": { $gt: 0}} ] },
                               {$set: {"oscars" : [
        {"award": "bestAnimatedFeature", "result": "won"},
        {"award": "bestMusic", "result": "won"},
        {"award": "bestPicture", "result": "nominated"},
        {"award": "bestSoundEditing", "result": "nominated"},
        {"award": "bestScreenplay", "result": "nominated"}
    ] }})

db.movieDetails.find({"imdb.votes": {$gt: 10000}, year: {$gte: 2010, $lte: 2013}})

db.movieDetails.find({"imdb.votes": {$gt: 10000}, year: {$gte: 2010, $lte: 2013}, "tomato.consensus": null}).pretty().count()
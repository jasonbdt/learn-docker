// Datei: 18-mongodb/queries/hannover.js
let hannover_hauptbahnhof = db.geoname.findOne({ name: /Hannover.*Hauptbahnhof/ });

const query = [
    {
        $geoNear: {
            near: hannover_hauptbahnhof.location,
            spherical: true,
            distanceField: 'dis',
            maxDistance: 1000,
            query: { feature_code: 'HTL' }
        }
     }, {
        $limit: 10
    }
];

let res = db.geoname.aggregate(query);

res.forEach(data => {
    print(Math.round(data.dis) + "m: " + data.name);
});

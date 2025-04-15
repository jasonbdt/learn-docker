// Datei: 18-mongodb/queries/freiberg.js
let freiberg = db.geoname.findOne({ geonameid: 2925192 });

const query = [
    {
        $geoNear: {
            near: freiberg.location,
            spherical: true,
            distanceField: 'dis',
            maxDistance: 25000,
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

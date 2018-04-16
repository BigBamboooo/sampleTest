
module.exports = function (app, db) {

    //create, insert , update and delete..

    //to get all the values from the db.
    app.get('/api/all', function (req, res) {
        db.test.findAll({}).then(function (results) {
            res.json(results);
        });
        console.log("hello you are in here");
    });

    //to get the specific values into the db.
    app.get('/api/getSpecify/:val', function (req, res) {
        db.test.findById(
            req.params.val
        ).then(function (result, err) {
            if (err) {
                console.log("error");
            } else {
                res.json(result);
            }
        });

    });

    //to post a record in db.
    app.post('/api/new', function (req, res) {
        db.test.create({
            testkey: req.body.testkey,
            status: req.body.status,
            comments: req.body.comments
        }).then(function (result) {
            res.json(result);
        })
    });

    //to update the records in the db.
    app.put('/api/update/:id', function (req, res) {
        db.test.update({
            comments: req.body.comments
        }, {
                where: {
                    id: req.params.id
                }
            }
        ).then(function (result) {
            res.json(result);
        });
    });
    
    //to delete the records in to the db.
    app.delete('/app/delete/:id', function (req,res) {
        db.test.destroy({
            where:{
                id:req.params.id
            }
        }).then(function(result){
            res.json(result);
        })
     });

}
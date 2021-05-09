'use strict';

let express = require('express');
let router = express.Router();
var multer  = require('multer');
var path  = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname , '../../videos'))
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
});

var webstorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname , '../../webinars'))
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
});

var uploadVideo = multer({ storage: storage });

var uploadweb = multer({ storage: webstorage });

let UserController = require('./controller/UserController');
let CourseController = require('./controller/CourseController');
let SubjectController = require('./controller/SubjectController');
let UploadController = require('./controller/UploadController');
const { uploadWebinar } = require('./controller/UploadController');
let SearchController = require('./controller/SearchController');

router.get('/student', UserController.getStudent);
router.post('/student', UserController.createStudent);
router.get('/instructor', UserController.getInstructor);
router.post('/instructor' , UserController.createInstructor);

router.post('/course', CourseController.createCourse);
router.get('/course', CourseController.getCourse);
router.delete('/course', CourseController.deleteCourse);
router.put('/course' , CourseController.updateCourse);

router.post('/subject', SubjectController.createSubject);
router.get('/subject', SubjectController.getSubject);
router.delete('/subject', SubjectController.deleteSubject);
router.put('/subject' , SubjectController.updateSubject);

router.post('/upload/video' , uploadVideo.single('vfile') , UploadController.uploadVideo);
router.post('/upload/webinar' , uploadweb.single('wfile') , UploadController.uploadWebinar);
router.get('/get/video' , express.static('../../videos') , UploadController.getVideo);

router.get('/get/webinar' , express.static('../../webinars') , UploadController.getWebinar);

router.get('/search/video' , SearchController.searchVideo);
router.get('/search/webinar' , SearchController.searchWebinar);

router.get('/search/video/count' , SearchController.searchVideoByCount);
router.get('/search/webinar/count' , SearchController.searchWebinarByCount);




module.exports = router;
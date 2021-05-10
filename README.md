Architectural Overview

cloud System : Regarding the cloud technologies, i haven't used any here , but yes we can use Amazon S3 for storing videos / webinars and Amazon SQS from uploading videos in case there are many requests at a time .

Distributed Systems : Haven't use as such any distributed system but i wrote my code in a very modularize manner. There are three layers for each service :
Controller :  which routes the requests
Service : which helps in processing of requests and responses.
DataProvider : whic take care of database intractions

For each service , i tried to write a seperate sequence of controller , service and Dataprovider.


Technical Overview : 

API's : Node
Database : MYSQL

Libraries Used : Multer , Express , path , util and few internal libraries

Used Multer library for uploading and downloading a video.
In the project, for simplicity and keeping time in mind , I have uploaded a video/file from the system only and getting file by downloading it. Live streaming can be done using other libraries or multer , for that i need to do the research and implement it.

Improvements : 

There is a lot of scope for improvement in design , Architecture , use of libraries and technologies . With this new languauge and my experience with older platforms , I tried to implement my best in one day . 
Rest we can discuss during our call



Note :  I have used Node.js in the project . I am learning node from last ten days, and i got this opportunity to do this assignment. I could have done it in java or python , which i am more familiar with , but i choose to do it in Node with the learning prespective. Keeping things simple , i tried to implement as much as i can .Few things might be left but that we can keep for discussion.

Thanks



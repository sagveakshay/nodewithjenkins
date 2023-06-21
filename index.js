
const JenkinsClient = require("jenkins-api");
// require('./dbconnect');
const express = require('express');
const app = express();
app.use(express.json());
const axios = require('axios');
const fetch = require('node-fetch');
const jenkinsurl = "http://sagveakshay:Writer@123@localhost:8080/";
const { MongoClient } = require('mongodb');
// const mongoose = require('mongoose');

// const url = 'mongodb://127.0.0.1/jenkins';
// mongoose.connect(url);
// console.log("MongoDB connected to Nodejs");

// const postdata = new mongoose.Schema({
//     "_class": String,
//     "jobs": Array
// })

// const Post = mongoose.model('jenkinscollection', postdata)

const url = 'mongodb://127.0.0.1/jenkins';
const client = new MongoClient(url);

// Database Name
const dbName = 'jenkins';
client.connect();
console.log('Connected successfully to server');
const db = client.db(dbName);

async function insertjobdetails() {
    const jobdetails = await fetch(jenkinsurl + "api/json?tree=jobs[name,color]");
    const response = await jobdetails.json();
    console.log(response);
    const collection = db.collection('jenkinscollection');
    const insertData = await collection.insertOne(response)
    console.log('Inserted documents =>', insertData);

    // const post = new Post(response)
    // let result = await post.save();
    // console.log(result);


}

async function jenkinsDetaila() {
    const details = await fetch(jenkinsurl + "api/json");
    const response = await details.json();
    console.log(response);
    const collection = db.collection('jenkinsDetails');
    const insertData = await collection.insertOne(response)
    console.log('Inserted documents =>', insertData);
}

async function jenkinsBuilds() {
    const jenkinsBuils = await fetch(jenkinsurl + "job/jira project/api/json?tree=builds[number,status,timestamp,id,result]");
    const response = await jenkinsBuils.json();
    console.log(response);
    const collection = db.collection('jenkinsBuilds');
    const insertedData = await collection.insertOne(response);
    console.log('Inserted documents =>', insertedData);
}

// jenkinsBuilds();
// insertjobdetails();
// jenkinsDetaila();

app.listen(5000, () => {
    console.log("Server is running on port :5000");
})




var username = "sagveakshay";
var password = "Writer@123";
var token = "11c5d35fcfd8a03e4917e3e36d303cdf8611c5d35fcfd8a03e4917e3e36d303cdf86";

// var jenkins = JenkinsClient.init("http://localhost:8080")
var jenkins = JenkinsClient.init("http://sagveakshay:Writer@123@localhost:8080")
// var jenkins = JenkinsClient.init("http://sagveakshay:11c5d35fcfd8a03e4917e3e36d303cdf8611c5d35fcfd8a03e4917e3e36d303cdf86@localhost:8080/job/")


const jobName = "itechgenic";


// jenkins.last_build_info(jobName, function (err, data) {
//     if (err) { return console.log(err); }
//     console.log(data)
// });

// jenkins.all_jobs((err, data) => {
//     if (err) { return console.log(err); }
//     console.log(data)
// })







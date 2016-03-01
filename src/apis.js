/**
 * Created by edwardhunton on 01/03/2016.
 */

var ALL_CAMPAINS = "http://ec2-54-217-172-171.eu-west-1.compute.amazonaws.com/campaigns/"

var CAMPAIGN = "http://ec2-54-217-172-171.eu-west-1.compute.amazonaws.com/campaigns/ec5b8da8-35ce-11e5-a151-feff819cdc9f/"

var TIME_SERIES = "http://ec2-54-217-172-171.eu-west-1.compute.amazonaws.com/campaigns/ec5b8da8-35ce-11e5-a151-feff819cdc9f/timeline"

var Datatest = (function(){

 var that = this;

 function testAllCampaigns(){
  $.ajax({
   url: ALL_CAMPAINS,
   headers: {"Authorization": "xxx123"},
   complete: setCampaigns
  })
   }

 function setCampaigns(res){

   that.campaigns = res.responseJSON;

 }

 function getCampaigns(){

      return that.campaigns;

 }

 return {

  testAllCampaigns : testAllCampaigns,
  getCampaigns : getCampaigns



 }





})()


Datatest.testAllCampaigns();




/*
 Params:
 dateFrom=YYYY-MM-DD
 dateTo=YYYY-MM-DD
 datePeriod=DAY/WEEK/MONTH

 Describe flow topology:
 http://ec2-54-217-172-171.eu-west-1.compute.amazonaws.com/campaigns/ec5b8da8-35ce-11e5-a151-feff819cdc9f/flow

 Stats per node and path:
 http://ec2-54-217-172-171.eu-west-1.compute.amazonaws.com/campaigns/ec5b8da8-35ce-11e5-a151-feff819cdc9f/stats
 */
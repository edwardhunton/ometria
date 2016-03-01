
$(function() {

    var App = (function () {

        var ALL_CAMPAINS = "http://ec2-54-217-172-171.eu-west-1.compute.amazonaws.com/campaigns/";

        var CAMPAIGN = "http://ec2-54-217-172-171.eu-west-1.compute.amazonaws.com/campaigns/ec5b8da8-35ce-11e5-a151-feff819cdc9f/";

        var TIME_SERIES = "http://ec2-54-217-172-171.eu-west-1.compute.amazonaws.com/campaigns/ec5b8da8-35ce-11e5-a151-feff819cdc9f/timeline";

        var that = this;


        function request(url, cb) {


            $.ajax({
                url: url,
                headers: {"Authorization": "xxx123"},
                complete: cb
            })
        }


        function init() {



            that.campaignsData = request(ALL_CAMPAINS, setCampaigns);
            that.controller  = new CampainsController();


        }

        function createViews(){

            that.controller.buildViews(that.campaigns);
        }
// pub sub to listern to this
        function setCampaigns(res) {

            that.campaigns = res.responseJSON;

            createCampaignsCollection();

        }

        function getCampaigns() {

            return that.campaigns;

        }

        function createCampaignsCollection() {

            var campaignsD = getCampaigns();
            var campaigns = new CampaignsCollection();

            for (var i in campaignsD) {

                var c  = new Campaign(campaignsD[i])
                c.init();

                campaigns.add(c)


            }


            createViews();


        }

        return {

            init: init,



        }


    })();

    App.init();

})
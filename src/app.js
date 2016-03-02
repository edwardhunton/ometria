
$(function() {

    var App = (function () {

        var ALL_CAMPAINS = "http://ec2-54-217-172-171.eu-west-1.compute.amazonaws.com/campaigns/";

        var CAMPAIGN = "http://ec2-54-217-172-171.eu-west-1.compute.amazonaws.com/campaigns/";

        var TIME_SERIES = "http://ec2-54-217-172-171.eu-west-1.compute.amazonaws.com/campaigns/";




        function request(url, cb, scope) {


            $.ajax({
                url: url,
                headers: {"Authorization": "xxx123"},
                context: scope,
                complete: cb
            })
        }


        function init() {
            that = this;
            this.campaignsData = request(ALL_CAMPAINS, setCampaigns, that);
            this.controller  = new CampainsController({'app': this});
        }

        function createViews(){
            that.controller.buildViews(that.campaignModels);
        }
// pub sub to listern to this
        function setCampaigns(res) {
            that.campaigns = res.responseJSON;
            createCampaignsCollection();

        }

        function setCampain(res) {

            that.campaign = res.responseJSON;
            that.controller.displayCampaign(that.campaign);
            getTimeSequence(that.campaignId);
        }

        function convertToGraphData(){
            var clicks = 0, dt = 0, entries= 0, openes = 0, revenue = 0,  sends = 0;
            for(var i in that.timeSeries){

                clicks+=parseInt(that.timeSeries[i].clicks);
                dt+=parseInt(that.timeSeries[i].dt);
                entries+=parseInt(that.timeSeries[i].entries);
                openes+=parseInt(that.timeSeries[i].openes);
                revenue+=parseInt(that.timeSeries[i].revenue);
                sends+=parseInt(that.timeSeries[i].sends);




            }
            var data = {'clicks': clicks, 'dt': dt, 'entries': entries, 'openes': openes, 'revenue': revenue, 'sends': sends};

            return data;
        }

        function drawTimeSeriesData(d){
            that.controller.displayTimeSeries(d);
        }

        function setTimeSeries(res){
            that.timeSeries = res.responseJSON;
            drawTimeSeriesData(convertToGraphData());
        }

        function getTimeSequence(id){
            request(TIME_SERIES+id+'/timeline', setTimeSeries, that);
        }

        function setCampaignId(id){

            this.campaignId = id;
            this.getCampaign(id);

        }



        function getCampaign(id){

            request(CAMPAIGN+id, setCampain, that)

        }

        function getCampaigns() {

            return that.campaigns;

        }

        function createCampaignsCollection() {

            var campaignsD = getCampaigns();
            that.campaignModels = new CampaignsCollection();

            for (var i in campaignsD) {

                var c  = new Campaign(campaignsD[i])
                c.init();

                that.campaignModels.add(c)


            }


            createViews();


        }

        return {

            init: init,
            getCampaign: getCampaign,
            setCampaignId: setCampaignId




        }


    })();

    App.init();

})
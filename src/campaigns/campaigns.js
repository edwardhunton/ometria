var CampainsController = function(_app){

    var app = _app, that = this;

    function setCurrentCampaign(id){

        console.log("set c: "+id)

        that.currentModelId = id;
        app.app.setCampaignId(id);



    }

    function displayCampaign(){

        var mod  = getModelById(that.currentModelId);

            var campaignDetailView  = new CampaignDetailView({'model':mod });
        campaignDetailView.render();

    }

    function displayTimeSeries(data){

        var mod = new CampaignTimeSeries(data);
        var campaignTimeSeriesView  = new CampaignTimeSeriesView({'model':mod });
        campaignTimeSeriesView.render();

    }

    function getModelById(id){

        console.log(id);

        var m  = that.campains.models

        for(var i in m){
            if(that.campains.models[i].id === id){

                return that.campains.models[i];
            }
        }

    }


    function buildViews(campains){

        that.campains = campains;



        for(var i in campains.models){

            var v = new CampaignView({'model': campains.models[i]});
            c.add(v)
            v.setController(this);
        }

        c.draw();

    }

    var c =  new CampaignsCollectionView();

return {
    buildViews : buildViews,
    setCurrentCampaign: setCurrentCampaign,
    displayCampaign: displayCampaign,
    displayTimeSeries: displayTimeSeries

}



}
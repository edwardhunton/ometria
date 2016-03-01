var CampainsController = function(){




    function buildViews(campains){



        for(var i in campains){

            c.add(new CampaignView())

        }

        c.draw();

    }

    var c =  new CampaignsCollectionView();

return {
    buildViews : buildViews

}



}
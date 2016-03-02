var CampaignsCollectionView = function(){


   var that = this;
    var target = $('.campaigns');
    var campaignsCollectionView = [];


        function add(v){


            campaignsCollectionView.push(v)



        }
    function draw(){

        for(var i in campaignsCollectionView){
            target.append(campaignsCollectionView[i].render().el);
        }



    }


    return {

        add: add,
        draw : draw
    }







}
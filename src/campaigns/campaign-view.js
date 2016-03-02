/**
 * Created by edwardhunton on 01/03/2016.
 */
var CampaignView = Backbone.View.extend({



    tagName: 'li',

    that: this,

    $el: $(this.el),

    className: 'campaignRow',

    events: {

        'click': 'chooseCampaign'

    },

    initialize: function() {

        var that = this;
        this.template =  _.template($('#campaign-template').html())

    },

    chooseCampaign: function(){
       controller.setCurrentCampaign(this.model.attributes.id);
    },

    setController: function(c){

    controller = c;

    },


    render: function() {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },









})

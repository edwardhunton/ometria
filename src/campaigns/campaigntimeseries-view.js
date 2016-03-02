/**
 * Created by edwardhunton on 01/03/2016.
 */
var CampaignTimeSeriesView = Backbone.View.extend({



    tagName: 'div',

    target: $('.campaignstimeseries'),

    that: this,

    $el: $(this.el),

    className: 'campaignTimeSeries',

    initialize: function() {
        this.template = _.template($('#campaigntimeseries-template').html());
    },

    setController: function(c){

        that.controller = c;

    },


    render: function() {
       // this.target.html('<div>'+this.model.attributes.title+'<div>'); //this.template({campaign: this.attributes})
        this.target.html(this.$el.html(this.template(this.model.toJSON()))); //this.template({campaign: this.attributes})

        return this;
    },









})

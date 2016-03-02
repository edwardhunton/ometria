/**
 * Created by edwardhunton on 01/03/2016.
 */
var CampaignDetailView = Backbone.View.extend({



    tagName: 'div',

    target: $('.campaignsdetail'),

    that: this,

    $el: $(this.el),

    className: 'campaignDetail',

    initialize: function() {
        this.template = _.template($('#campaigndetail-template').html());
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

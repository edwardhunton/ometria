/**
 * Created by edwardhunton on 01/03/2016.
 */
var CampaignView = Backbone.View.extend({



    tagName: 'li',

    $el: $(this.el),

    className: 'campaignRow',

    initialize: function() {
        this.template = _.template($('#todo-template').html());
        this.render();
    },
    render: function() {
        this.$el.html(this.template({item: this.model}));
        return this;
    },









})

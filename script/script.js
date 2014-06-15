(function() {
	window.RI = {
		Collections: {},
		Views: {}
	};

	window.template = function(id){
		return _.template( $('#' + id).html());
	}

	RI.Collections.Issues = Backbone.Collection.extend({
	  	url: 'https://api.github.com/repos/rails/rails/issues?state=open&per_page=25'
	});

	RI.Collections.Comments = Backbone.Collection.extend({
		
	});

	RI.Views.ListView = Backbone.View.extend({		
	  	template: template('list'),
	  
	  	render: function() {
	   		this.el.innerHTML = this.template({ model: this.model });
            return this;
	  	}
	});

	RI.Views.DetailView = Backbone.View.extend({
	  	template: template('detail'),
	  
	  	render: function() {
	    	this.el.innerHTML = this.template({ model: this.model });
            return this;
	  	}
	});

	RI.Views.CommentView = Backbone.View.extend({
		template: template('comment'),

		render: function() {
			this.el.innerHTML = this.template({ model: comments });
			return this;			
		}
	});

	RI.Router = Backbone.Router.extend({
		routes: {
		   '': 'list',
		   'issue/:id': 'detail'
		},
		  
		list: function() {
		    if (this.listView) {
		      	this.listView.remove();
		    }
		    this.listView = new RI.Views.ListView({ model: this.issues });
		    this.listView.render();
		    $('#content').html('');
		    $('#content').append(this.listView.el);
		},

		detail: function(id) {
		    if (this.detailView) {
		        this.detailView.remove();
		    }
		    this.detailView = new RI.Views.DetailView({
		        model: this.issues.get(parseInt(id))
		    });
		    this.detailView.render();
		    $('#content').html('');
		    $('#content').append(this.detailView.el);
		    
		    this.commentView = new RI.Views.CommentView({collection: comments});
		    this.commentView.render();
		    $('#commentList').append(this.commentView.el);
		  }
		});

	var yesterday = new Date(); 
	yesterday.setDate(yesterday.getDate() -1);

	var previously = new Date();
	previously.setDate(previously.getDate() -2);

	var comments = new RI.Collections.Comments([
		{ 	commenter: "John Adams", 
			date: new Date(),
			body: "Few issues have comments. Epsum factorial non deposit quid pro quo hic escorol. Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre."
		},
		{ 	commenter: "Sarah Woodson", 
			date: yesterday,
			body: "We are providing examples of comments. Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium."
		},
		{ 	commenter: "Ali Rajah", 
			date: previously,
			body: "The purpose is to make the example more robust. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. "
		}
	]);

	var router = new RI.Router();
	router.issues = new RI.Collections.Issues();
	router.issues.fetch().done(function() {
	    Backbone.history.start();
	})
})(); 

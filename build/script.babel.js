"use strict";

//Source: http://tutorialzine.com/2014/07/5-practical-examples-for-learning-facebooks-react-framework/
var ServiceChooser = React.createClass({
	displayName: "ServiceChooser",

	getInitialState: function getInitialState() {
		return { total: 0 };
	},
	addTotal: function addTotal(price) {
		this.setState({ total: this.state.total + price });
	},
	render: function render() {
		var self = this;
		var services = this.props.items.map(function (s, i) {
			return React.createElement(Service, { name: s.name, price: s.price, active: s.active, addTotal: self.addTotal, key: i });
		});
		return React.createElement(
			"div",
			null,
			React.createElement(
				"h1",
				null,
				"Our services"
			),
			React.createElement(
				"div",
				{ id: "services" },
				services,
				React.createElement(
					"p",
					{ id: "total" },
					"Total ",
					React.createElement(
						"b",
						null,
						"$",
						this.state.total.toFixed(2)
					)
				)
			)
		);
	}
});

var Service = React.createClass({
	displayName: "Service",

	getInitialState: function getInitialState() {
		return { active: false };
	},
	clickHandler: function clickHandler() {
		var active = !this.state.active;
		this.setState({ active: active });

		this.props.addTotal(active ? this.props.price : -this.props.price);
	},
	render: function render() {
		return React.createElement(
			"p",
			{ className: this.state.active ? 'active' : '', onClick: this.clickHandler },
			this.props.name,
			" ",
			React.createElement(
				"b",
				null,
				"$",
				this.props.price.toFixed(2)
			)
		);
	}
});

var services = [{ name: 'Web Development', price: 300 }, { name: 'Design', price: 400 }, { name: 'Integration', price: 250 }, { name: 'Training', price: 220 }];

ReactDOM.render(React.createElement(ServiceChooser, { items: services }), document.getElementById('app'));

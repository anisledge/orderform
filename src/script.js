//Source: http://tutorialzine.com/2014/07/5-practical-examples-for-learning-facebooks-react-framework/
var ServiceChooser = React.createClass({
	getInitialState: function() {
		return { total: 0 };
	},
	addTotal: function( price ) {
		this.setState({ total: this.state.total + price });
	},
	render: function() {
		var self = this;
		var services = this.props.items.map(function(s, i) {
			return <Service name={s.name} price={s.price} active={s.active} addTotal={self.addTotal} key={i} />;
		});
		return (
			<div>
				<h1>Our services</h1>
				<div id="services">
					{services}

					<p id="total">Total <b>${this.state.total.toFixed(2)}</b></p>
				</div>
			</div>
		);
	}
});

var Service = React.createClass({
	getInitialState: function() {
		return { active: false };
	},
	clickHandler: function() {
		var active = !this.state.active;
		this.setState({ active: active });

		this.props.addTotal( active ? this.props.price : -this.props.price );
	},
	render: function() {
		return (
			<p className={ this.state.active ? 'active' : '' } onClick={this.clickHandler}>
				{this.props.name} <b>${this.props.price.toFixed(2)}</b>
			</p>
		);
	}
});

var services = [
    { name: 'Web Development', price: 300 },
    { name: 'Design', price: 400 },
    { name: 'Integration', price: 250 },
    { name: 'Training', price: 220 }
];

ReactDOM.render(
	<ServiceChooser items={ services } />,
	document.getElementById('app')
);

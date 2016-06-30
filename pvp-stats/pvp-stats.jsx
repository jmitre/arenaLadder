var Charts =  React.createClass({
  getInitialState: function() {
    return {
      ladder: ''
    };
  },
  componentDidMount: function() {
    var ladderPromise =  $.get('https://us.api.battle.net/wow/leaderboard/3v3?locale=en_US&jsonp=true&apikey=ezhmufv23ckvbnvak4gdnhgamdayp9p8');

    var classPromise =
    $.get('https://us.api.battle.net/wow/data/character/classes?locale=en_US&jsonp=true&apikey=ezhmufv23ckvbnvak4gdnhgamdayp9p8');

    Promise.all([ladderPromise, classPromise]).then((data) => {
      var ladder = data[0].rows.slice(0, 1000)
      this.setState({
        ladder: ladder,
        ladderPerc: percOfClasses(ladder)
      });
      console.log(this.state);
      console.log(data[1]);
    });
  },
  render: function(){
    return(
      <Table/>
    )
  }
});

var Table = React.createClass({
  render: function(){
    return(
      <table/>
    )
  }
});

ReactDOM.render(<Charts/>, document.getElementById('charts'))

var React = require('react');
var {Link} = require('react-router');

var Example = (props) => {
  return(
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out: </p>
      <ol>
        <li>
          <Link to='/?loction=Denver'>Denver,CO</Link>
        </li>
        <li>
          <Link to='/?loction=Austin'>Austin,TX</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Example;

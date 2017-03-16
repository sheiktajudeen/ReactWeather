var React = require('react');

var About = (props) => {
  return(
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application built on React.</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
        </li>
        <li>
          <a href="http:openweathermap.org">Open Weather map</a> - I used open weather map to fetch weather details.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Canvas.css';

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  componentDidMount () {
    this.setState({
      c: this.canvas.current,
      ctx: this.canvas.current.getContext('2d')
    }, this.updateCanvas);

    window.addEventListener('resize', _ => {
      clearInterval(this.intervalId);
      this.updateCanvas();
    });
  }

  updateCanvas = () => {
    const { c } = this.state;
    const { fontSize, dropSpeed } = this.props;

    c.height = window.innerHeight;
    c.width = window.innerWidth;

    const columns = c.width / fontSize;
    const drops = new Array(Math.floor(columns) + 1).fill(1);

    this.setState({ drops });
    this.intervalId = setInterval(this.draw, dropSpeed);
  }

  draw = () => {
    const { c, ctx, drops } = this.state;
    const { matrix, fontSize, fontColor, backgroundColor } = this.props;

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = fontColor;
    ctx.font = `${fontSize}px arial`;

    drops.forEach((_, i) => {
      const text = matrix[ Math.floor( Math.random() * matrix.length ) ];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > c.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });
  }

  render () {
    return <canvas ref={this.canvas} className={styles.canvas}></canvas>
  }
}

Canvas.propTypes = {
  matrix: PropTypes.array,
  fontSize: PropTypes.number,
  dropSpeed: PropTypes.number,
  fontColor: PropTypes.string,
  backgroundColor: PropTypes.string
}

Canvas.defaultProps = {
  matrix: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%'.split(''),
  fontSize: 10,
  dropSpeed: 35,
  fontColor: '#0F0',
  backgroundColor: 'rgba(0, 0, 0, 0.04)'
};

export default Canvas;

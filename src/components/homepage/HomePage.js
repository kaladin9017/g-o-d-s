import React, { Component } from 'react';
import './home-page.css';

class HomePage extends Component {
  componentDidMount() {
    const panels = document.querySelectorAll('.category');
    function toggleOpen(e) {
      e.stopPropagation();
      this.classList.toggle('open');
    }
    function toggleActive(e) {
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }
    panels.forEach(panel => panel.addEventListener('mouseenter', toggleOpen));
    panels.forEach(panel => panel.addEventListener('mouseleave', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
  }

  render() {
    return (
      <div className="categories">
        <div className={"category category_box_1"}>
          <p>DEAD</p>
          <p>Humor</p>
          <p>G.O.D.S</p>
        </div>
        <div className={"category category_box_2"}>
          <p>DEAD</p>
          <p>De</p>
          <p>Luna</p>
          <p>G.O.D.S</p>
        </div>
        <div className={"category category_box_3"}>
          <p>Dead</p>
          <p>WIFI</p>
          <p>G.O.D.S</p>
        </div>
        <div className={"category category_box_4"}>
          <p>Dead</p>
          <p>Air</p>
          <p>G.O.D.S</p>
        </div>
      </div>
    )
  }
}

export default HomePage;

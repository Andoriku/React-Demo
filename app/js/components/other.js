import React, { Component } from 'react';

import styles from '../../css/FAQ.css';

export default class Other extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otherQuestion: '',
    };
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleAnswerSelection = this.handleAnswerSelection.bind(this);
  }
  handleAnswerSelection(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  }
  handleAnswer(number){
    if (this.state.otherQuestion === 'answer1' && number === 1) {
      return (
        <div>
          <p>Fusce tincidunt laoreet metus, sit amet viverra ligula porta eget. Donec placerat
          posuere urna quis porttitor. Aliquam mollis justo in dui tristique, quis faucibus
          tellus accumsan. Quisque molestie libero nec ante bibendum, ut congue leo auctor.
          </p>
        </div>
      );
    }
    else if (this.state.otherQuestion === 'answer2' && number === 2) {
      return (
        <div>
          <p>oowaf jfah;lasjjf ifja;so of oawer;oawe rfv;oaeuih eahjfnv uir gjnfvuoi
          fvgn;eoarfvg efv;o foijhvg eij ejvio lfvn; u hbvelnv'eiporj rfvnme'ifvj evke
          vedjjnv eij' vgj'pejiov ae ghj.
          </p>
        </div>
      );
    }
    else if (this.state.otherQuestion === 'answer3' && number === 3) {
      return (
        <div>
          <p>Blah blah blah info info info, this is just a test test.
          I wish i knew what else to put here but im not sure what else to
          say except that this is a fake descritpion and I waisted my time writing it.
          </p>
        </div>
      );
    }
    return (
      <div />
    );
  }

  render() {
    return (
      <div className={styles.questionBlock}>
        <div className={styles.questionZone}>
          <button
          className={styles.question}
          onClick={this.handleAnswerSelection}
          name="otherQuestion"
          value="answer1"
          >Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas?
          </button>
          <div id="answer1" className={styles.answer}>
          {this.handleAnswer(1)}
          </div>
        </div>
        <div className={styles.questionZone}>
          <button
          className={styles.question}
          onClick={this.handleAnswerSelection}
          name="otherQuestion"
          value="answer2"
          >Donec fringilla vestibulum orci, vitae tincidunt ipsum viverra non?
          </button>
          <div id="answer2" className={styles.answer}>
          {this.handleAnswer(2)}
          </div>
        </div>
        <div className={styles.questionZone}>
          <button
          className={styles.question}
          onClick={this.handleAnswerSelection}
          name="otherQuestion"
          value="answer3"
          >Nulla ultricies pulvinar tincidunt. Donec commodo imperdiet lacus, sit amet
          molestie nunc lacinia non?
          </button>
          <div id="answer3" className={styles.answer}>
          {this.handleAnswer(3)}
          </div>
        </div>
      </div>
    );
  }
}

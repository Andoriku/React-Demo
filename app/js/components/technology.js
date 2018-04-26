import React, { Component } from 'react';

import styles from '../../css/FAQ.css';

export default class Technology extends Component {
  constructor(props) {
    super(props);
    this.state = {
      techQuestion: '',
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
    if (this.state.techQuestion === 'answer1' && number === 1) {
      return (
        <div>
          <p>owejfowijf weoifjpsadi jfpo eujidf ekj fei8h ;asdjwdiuo fcvnuvrhpwearfgvewa handleAnswerSelectionrv
          rfvouiev erfoiuverfvj erfoierfv erfvouefrv pefjffiuipoeofivkfv foief veje fihvef;ojvoefjv efuvhewfov
          vfjfopoenfivrf.
          </p>
        </div>
      );
    }
    else if (this.state.techQuestion === 'answer2' && number === 2) {
      return (
        <div>
          <p>no me vccome nrdhjoifnm nujgo hyunre skldif hnujfiohy erjhhlkjd;fkjsdfire refn direw fwdjhre
          fdvkjhfekf hefrgviuerfvglefv efvjhfr rfkfdvsejsdldfoi s;l;dkloojfirjf vnfjkvopep;ewfdlkvns av. flvjkherfvg efvjhfrfvjif
          fvijfe ve;fovjirvkjjn a;lkddowernmd cower fnmdms,.sdcvkd dld d;l;djvpefvj a;wedfv.
          </p>
        </div>
      );
    }
    else if (this.state.techQuestion === 'answer3' && number === 3) {
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
          name="techQuestion"
          value="answer1"
          >Lorem ipsum dolor sit amet, movet constituto consectetuer in mel,
           ad dico vidit detracto mel. Eu novum putent vel?
          </button>
          <div id="answer1" className={styles.answer}>
          {this.handleAnswer(1)}
          </div>
        </div>
        <div className={styles.questionZone}>
          <button
          className={styles.question}
          onClick={this.handleAnswerSelection}
          name="techQuestion"
          value="answer2"
          >Primis imperdiet duo cu, eum inciderint scriptorem ad,
            an cibo consul vim.
            Rebum putent oportere mei ne, nihil libris cum an.
            Ad movet adipiscing contentiones nec, cu albucius
            scriptorem dissentiet cume?
          </button>
          <div id="answer2" className={styles.answer}>
          {this.handleAnswer(2)}
          </div>
        </div>
        <div className={styles.questionZone}>
          <button
          className={styles.question}
          onClick={this.handleAnswerSelection}
          name="techQuestion"
          value="answer3"
          >Ei nec aliquip voluptaria, ad cum rebum inani timeam. Movet
            graeci accumsan an qui,
            ad mel tota etiam torquatos,
            ei vim unum eleifend corrumpit?
          </button>
          <div id="answer3" className={styles.answer}>
          {this.handleAnswer(3)}
          </div>
        </div>
      </div>
    );
  }
}

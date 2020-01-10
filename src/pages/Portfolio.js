import React from 'react';

import Layout from '../components/Layout';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Portfolio</h2>
          <p>What I've built and what I've learned </p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Data Science and Machine Learning</h3>
          <p>
            I found data science and machine learning in my junior year of high school.
            A friend of mine had been gushing over neural networks for weeks, and he encouraged
            me to look into it. It led me to take <a href="https://www.coursera.org/learn/machine-learning?"> Andrew
            Ng's Machine Learning course</a> on Coursera. It was my first experience with a MOOC (Massive Open
            Online Course), and would the first of many that I would take over the next few years.
          </p>

          <h4>Courses That I've Taken</h4>
          <ul>
            <li><a href="https://www.coursera.org/specializations/deep-learning">Deep Learning Specialization</a>
              <ul>
                <li><a href="https://www.coursera.org/learn/neural-networks-deep-learning?specialization=deep-learning">Neural Networks and Deep Learning</a></li>
                <li><a href="https://www.coursera.org/learn/deep-neural-network?specialization=deep-learning">Improving Deep Neural Networks</a></li>
                <li><a href="https://www.coursera.org/learn/machine-learning-projects?specialization=deep-learning">Structuring Machine Learning Projects</a></li>
                <li><a href="https://www.coursera.org/learn/convolutional-neural-networks?specialization=deep-learning">Convolutional Neural Networks</a></li>
                <li><a href="https://www.coursera.org/learn/nlp-sequence-models">Sequence Models</a></li>
              </ul>
            </li>
            <li><a href="https://www.coursera.org/specializations/tensorflow-in-practice">Tensorflow in Practice Specialization</a>
              <ul>
                <li><a href="https://www.coursera.org/learn/introduction-tensorflow">Introduction to Tensorflow</a></li>
                <li><a href="https://www.coursera.org/learn/convolutional-neural-networks-tensorflow">Convolutional Neural Networks in Tensorflow</a></li>
                <li><a href="https://www.coursera.org/learn/natural-language-processing-tensorflow">Natural Language Processing in Tensorflow</a></li>
                <li><a href="https://www.coursera.org/learn/tensorflow-sequences-time-series-and-prediction">Sequences, Time Series, and Prediction</a></li>
              </ul>
            </li>
          </ul>

          <ul>
            <li><a href="https://pythonprogramming.net/">Python Programming</a>
              <ul>
                <li><a href="https://pythonprogramming.net/introduction-python3-pandas-data-analysis/">Data Analysis with Python and Pandas</a></li>
                <li><a href="https://pythonprogramming.net/matplotlib-intro-tutorial/">Data Visualization</a></li>
                <li><a href="https://pythonprogramming.net/machine-learning-tutorials/">Practical Machine Learning with Python</a></li>
                <li><a href="https://pythonprogramming.net/q-learning-reinforcement-learning-python-tutorial/">Reinforcement Learning</a></li>
                <li><a href="https://pythonprogramming.net/quantum-computer-programming-tutorial/">Quantum Computer Programming</a></li>
              </ul>
            </li>
          </ul>

          <h4>Teaching Experience</h4>
          <p>
            As the President of the Machine Learning Club At UVA (MLC@UVA), I've taught workshops
            in Deep Learning and Image Processing.
          </p>
          <ul>
            <li>Fall 2019 - Autoencoders and CVAE</li>
            <li>Spring 2020 (Planned) - Neural Style Transfer</li>
            <li>Spring 2020 (Planned) - GANs</li>
          </ul>

          <p>
            As the Data Analayst Co-VP for HooThinks Consulting Club at UVA, I taught
            a series of beginner data analytics workshops to prepare consultants. In Spring
            2020, I'll be teaching an intermediate series of workshops.
          </p>

          <ul>
            <li>Beginner Workshops - Fall 2019
              <ul>
                <li>Data Visualization (Matplotlib/Seaborn) <a href="https://tinyurl.com/hoothinks-data-viz">Notebook</a></li>
                <li>Data Analysis (Pandas/Numpy) <a href="https://tinyurl.com/hoothinks-data-analysis">Notebook</a></li>
                <li>Web Scraping (BeautifulSoup/Twitter) <a href="https://tinyurl.com/hoothinks-web-scraping">Notebook</a></li>
                <li>Time Series Analysis (Statsmodels/Prophet) <a href="https://tinyurl.com/hoothinks-time-series">Notebook</a></li>
                <li>Machine Learning (Scikit-Learn) <a href="https://tinyurl.com/hoothinks-machine-learning">Notebook</a></li>
              </ul>
            </li>
            <li>Intermediate Workshops - Spring 2020
              <ul>
                <li>Development Environment Setup (Anaconda/Jupyter/VS Code)</li>
                <li>Introduction to GitHub (GitHub/Git Bash)</li>
                <li>Effective Presentation of Data (Matplotlib/Seaborn) <a href="https://tinyurl.com/hoothinks-effective-data-viz">Notebooks/Sample Project/Slides</a></li>
                <li>Working with APIs (Curl/Postman)</li>
                <li>Natural Language Processing (Gensim/spaCy) <a href="https://tinyurl.com/hoothinks-nlp">Notebook, Sample Project, and  Slides</a></li>
              </ul>
            </li>
          </ul>

          <h4>Skills Acquired</h4>
          <p></p>
          <ul style={{
            columns: 3
          }}>
            <li>Tensorflow</li>
            <li>PyTorch</li>
            <li>spaCy</li>
            <li>Gensim</li>
            <li>Pandas</li>
            <li>Numpy</li>
            <li>Seaborn</li>
            <li>Matplotlib</li>
            <li>Sci-kit Learn</li>
            <li>Statsmodels</li>
            <li>NLTK</li>
            <li>DGL (Deep Graph Learning)</li>
            <li>BeautifulSoup</li>
            <li>Prophet</li>
          </ul>

          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Sed feugiat lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Nisl placerat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <a href="https://github.com/dylankfernandes" className="button">
              Check out my GitHub
            </a>
          </section>
        </div>
      </div>
    </section>
  </Layout >
);

export default IndexPage;

import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import programmer2 from '../assets/images/programmer2.jpg';
import nasaimagesearch from '../assets/images/nasaimagesearch.png';
import rotunda from '../assets/images/rotunda.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Portfolio and Skills</h2>
          <p>What I've built and what I've learned </p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3>My Programming Experience</h3>
          <p>I've pursued a variety of different programming subfields. </p>
          <ul>
            <li><a href="#datasci">Data Science and Machine Learning</a></li>
            <li><a href="#webdev">Web Development and Design</a></li>
            <li><a href="#database">Database Development and Management</a></li>
          </ul>
          <p>
            I've listed technologies I've worked with, my teaching experience, some courses I've taken, and my portfolio projects down below.
            For a complete list of my projects, check out my <a href="https://github.com/dylankfernandes">GitHub</a> page.
          </p>

          <div className="image fit">
            <img src={programmer2} alt="" />
          </div>

          <h2 className="major" id="datasci">Data Science and Machine Learning</h2>
          <p>
            I found data science and machine learning in my junior year of high school.
            A friend of mine had been gushing over neural networks for weeks, and he encouraged
            me to look into it. It led me to take <a href="https://www.coursera.org/learn/machine-learning?"> Andrew
            Ng's Machine Learning course</a> on Coursera. It was my first experience with a MOOC (Massive Open
            Online Course), and would the first of many that I would take over the next few years.
          </p>

          <h3>Courses That I've Taken</h3>
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

          <h3>Teaching Experience</h3>
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

          <div className="image fit">
            <img src={rotunda} alt="" />
          </div>

          <h3>Skills Acquired</h3>
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

          <h3>Projects</h3>

          <section className="features">
            <article>
              <a href="https://github.com/dylankfernandes/adult-income-knn/blob/master/adult-income.ipynb" className="image">
                {/* <img src={pic4} alt="" /> */}
              </a>
              <h3 className="major">Adult Income Classifier</h3>
              <p>
                Classifying income groups based on other features.
              </p>
              <a href="https://github.com/dylankfernandes/adult-income-knn/blob/master/adult-income.ipynb" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="https://github.com/dylankfernandes/calcofi-linear-regression/blob/master/water-salinity-temperature.ipynb" className="image">
                {/* <img src={pic5} alt="" /> */}
              </a>
              <h3 className="major">CalCOFI Linear Regression</h3>
              <p>
                Predicting the salinity of water based on other features.
              </p>
              <a href="https://github.com/dylankfernandes/calcofi-linear-regression/blob/master/water-salinity-temperature.ipynb" className="special">
                Learn more
              </a>
            </article>
            {/* <article>
              <a href="https://github.com/dylankfernandes/exam-performance-data-analysis/blob/master/exam-performance.ipynb" className="image">
                {/* <img src={pic5} alt="" />
              </a>
              <h3 className="major">Exam Performance</h3>
              <p>
                Exploring exam performance data
              </p>
              <a href="https://github.com/dylankfernandes/exam-performance-data-analysis/blob/master/exam-performance.ipynb" className="special">
                Learn more
              </a>
            </article> */}
            {/* <article>
              <a href="https://github.com/dylankfernandes/aircraft-safety-visualization" className="image">
                {/* <img src={pic5} alt="" /> 
              </a>
              <h3 className="major">Aircraft Safety</h3>
              <p>
                Visualizing an aircraft safety dataset.
              </p>
              <a href="https://github.com/dylankfernandes/aircraft-safety-visualization" className="special">
                Learn more
              </a>
            </article> */}
          </section>

          <h2 className="major" id="webdev">Web Development and Design</h2>
          <p>
            I joined the web development sub-team of my high school's robotics team
            during my sophomore year of high school. I wasn't the best at it at first,
            but I got better with practice. I've grown a lot as a developer since
            my first year on the team. In my senior year, I was elected as the Lead Web
            Developer of the team, and led the efforts to construct a new team website.
          </p>

          <h3>Skills</h3>
          <ul style={{ columns: 3 }}>
            <li>Gatsby</li>
            <li>React</li>
            <li>SASS/LESS</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>Django</li>
            <li>Flask</li>
            <li>jQuery</li>
          </ul>

          <div className="image fit">
            <img src={nasaimagesearch} alt="" />
          </div>

          <h3>Projects</h3>
          <section className="features">
            <article>
              <a href="http://ilite.us/" className="image">
                {/* <img src={pic4} alt="" /> */}
              </a>
              <h3 className="major">ILITE Robotics</h3>
              <p>
                Led a web development sub-team of my high school's robotics team to build a new website.
              </p>
              <a href="http://ilite.us/" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="https://github.com/dylankfernandes/df-zimu" className="image">
                {/* <img src={pic5} alt="" /> */}
              </a>
              <h3 className="major">ZIMU</h3>
              <p>
                A recreation of a design I found on Dribble, put into code.
              </p>
              <a href="https://github.com/dylankfernandes/df-zimu" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="https://nasa-image-search-r.herokuapp.com/" className="image">
                {/* <img src={pic5} alt="" /> */}
              </a>
              <h3 className="major">NASA Image Search</h3>
              <p>
                Built a search engine that queries the NASA Image API.
              </p>
              <a href="https://nasa-image-search-r.herokuapp.com/" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="https://github.com/dylankfernandes/transactions-dashboard" className="image">
                {/* <img src={pic5} alt="" /> */}
              </a>
              <h3 className="major">Transaction Dashboard</h3>
              <p>
                Reads transaction histories and presents them in interactive table and chart visualizations.
              </p>
              <a href="https://github.com/dylankfernandes/transactions-dashboard" className="special">
                Learn more
              </a>
            </article>
          </section>
          <h2 className="major" id="database">Database Development and Management</h2>
          <p>
            I took three semesters of dual-enrolled relational database programming
            with Oracle in high school. Since then, I've experimented with and used
            several different types of databases since then, including relational, graph,
            distributed, and document based databases.
          </p>

          <h3>Skills</h3>
          <ul style={{ columns: 3 }}>
            <li>Oracle</li>
            <li>MongoDB</li>
            <li>DataStax Graph</li>
            <li>TinkerPop</li>
            <li>Neo4j</li>
            <li>MySQL</li>
            <li>Cassandra</li>
            <li>CouchDB</li>
          </ul>
        </div>
      </div>
    </section>
  </Layout >
);

export default IndexPage;

import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import resume from '../assets/dylanfernandes_resume.pdf';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-diamond"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        {/* <a href="/#" className="button">Resume</a>
        <a href="/#" className="button">Contact Me</a> */}
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h2 className="major">College Student</h2>
            <p>
              I’m a second year computer science major at the University of Virginia with a
              passion for programmer, movies, sports, weight lifting,
              teaching, and writing. Interested? Catch my resume down below.
            </p>
            <a href={resume} className="special">
              My Resume
            </a>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Computer Programmer</h2>
            <p>
              In 7th grade, I found Java programming, and I've loved it ever since.
              These days, I specialize in Machine Learning, Web Development, and Database
              Programming. My projects and a complete list of my skills are primarily stored on <a href="https://github.com/dylankfernandes">GitHub</a>.
              Check out my portfolio down below.
            </p>
            <Link className='special' to='/Portfolio'>My Portfolio</Link>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Beyond the Resume</h2>
            <p>
              I'm a movie detente, weight lifting fanatic,
              baseball and tennis player, and former blogger. I've also
              got an impossible list (concept desribed here <a href="https://collegeinfogeek.com/about/meet-the-author/my-impossible-list/">here</a>)
              that will give you a better look at who I am.
            </p>
            <Link className='special' to='/Generic'>Learn more about me</Link>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">My Blog</h2>
          <p>
            I write about all things productivity, academics, programming, and self development.
            Check out my latest posts below.
          </p>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Become 10x more productive — kill your distractions and improve your focus</h3>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">How to take on the day — maximize your motivation with your morning routine</h3>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">A Complete Guide To Staying Organized for Students</h3>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">Warren Buffett’s Productivity Hack for Prioritization</h3>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
          </section>
          <ul className="actions">
            <li>
              <a href="https://medium.com/@dylan.fernandes00" className="button">
                Browse All
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;

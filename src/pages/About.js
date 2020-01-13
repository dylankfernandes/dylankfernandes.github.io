import React from 'react';

import Layout from '../components/Layout';
import homebackground from '../assets/images/home__background.jpg';
import rotunda from '../assets/images/rotunda.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>About Me</h2>
          <p>A deep dive into my personality beyond the resume</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h2 className="major">Hi, I'm Dylan Fernandes</h2>
          <p>
            Besides being a computer programmer and college student,
            I'm also passionate about cooking, writing, sports (go Wahoos!), public speaking, business, weight lifting, and traveling.
          </p>

          <p>
            Some facts you may find interesting about me
          </p>

          <ul>
            <li>I've been a die-hard Yankees fan since I was 9.</li>
            <li>I have three things I'd be willing to die for - my family, my friends, and cheescake.</li>
            <li>I played baseball for 10 years and played varsity tennis for 3 years.</li>
            <li>I group my friends into two groups - those who buy me donuts, and those who don't.</li>
            <li>I make a mean honey cornbread.</li>
            <li>My favorite vacation spot in the world is Montego Bay, Jamaica</li>
          </ul>

          <p>
            My life's goal is to do work I love with people I love. I'll admit it's abstract,
            but anything I do in life is structured around that goal.
          </p>

          <div className="image fit">
            <img src={homebackground} alt="" />
          </div>

          <h2 className="major">Quotes that I live by</h2>
          <blockquote>“In life you suffer one of two pains - the pain of discipline or the pain of regret. Choose wisely.” - Jim Rohn</blockquote>
          <blockquote>“The quickest way to get the success you’ve been looking for is to execute. Success lies in the execution” - Tim Denning</blockquote>
          <blockquote>“Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless until all living humans read the book” - John Green</blockquote>
          <blockquote>“Your input determines your outlook. Your outlook determines your output, and your output determines your future.” - Zig Zaglar</blockquote>
          <blockquote>“Everybody’s impatient at a macro, and just so patient at a micro, wasting your days worrying about years. I’m not worried about my years, because I’m squeezing the fuck out of my seconds, let alone my days. It’s going to work out.” - Gary Vaynerchuk</blockquote>
          <blockquote>“When I was 24, I came across a website that says most people live for about 30,000 days — and I was shocked to find that I was already 8,000 days down. So you have to make every day count.” - Drew Houston</blockquote>
          <blockquote>“So many of our dreams at first seem impossible. Then they seem improbable. And then, when we summon the will, they soon become inevitable.” - Christopher Reeves</blockquote>
          <blockquote>“We have two ears and one mouth so that we can listen twice as much as we speak.” - Epictetus</blockquote>

          <h2 className="major">My Impossible List</h2>
          <p>
            I've never been a fan of bucket lists. Bucket lists are static, unattainable goals that people hope to reach "someday". I found out about the Impossible List from <a href="https://collegeinfogeek.com/about/meet-the-author/my-impossible-list/">Thomas Frank</a>, and
            It was just what I was looking for - actionable goals that I could work and focus on. Not only would it leave a record of what I've accomplished, but also where I'm going.
            I started my Impossible List in the Spring of 2020.
          </p>

          <div className="image fit">
            <img src={rotunda} alt="" />
          </div>

          <h3>Life Goals</h3>
          <ul>
            <li>Get a job after graduation</li>
            <li>Graduate "with highest distinction" from college undergrad</li>
            <li>Get into graduate school</li>
            <li>Save $1 million by age 30</li>
            <li>Have 5 different income sources</li>
            <li>Pay off my college debt</li>
            <li>Pay for a part of my brother's tuition</li>
            <li>Pay for part of my parents' retirement</li>
          </ul>

          <h3>Fitness Goals</h3>
          <ul>
            <li><strike>Bench press 100 lbs</strike> (September 2019)
              <ul className="nested">
                <li><strike>Bench press 115 lbs</strike> (November 2019)</li>
                <li>Bench press 130 lbs</li>
              </ul>
            </li>
            <li><strike>Deadlift 100 lbs</strike> (May 2019)
              <ul className="nested">
                <li><strike>Deadlift 115 lbs</strike> (November 2019)</li>
                <li>Deadlift 130 lbs</li>
              </ul>
            </li>
            <li><strike>Leg press 200 lbs</strike> (December 2019)
              <ul className="nested">
                <li>Leg press 240 lbs</li>
              </ul>
            </li>
            <li>Run a 5K</li>
            <li><strike>Run a 7 minute mile</strike> (December 2018)
              <ul className="nested">
                <li>Run a 6 minute mile</li>
              </ul>
            </li>
            <li><strike>Do 10 pull ups in a single set</strike> (May 2019)
              <ul className="nested">
                <li>Do 15 pull ups in a single set</li>
              </ul>
            </li>
            <li>Hit 15% body fat</li>
          </ul>

          <h3>Professional Goals</h3>
          <ul>
            <li><strike>Speak for 100+ people</strike> (Done @ ILITE Robotics "Effective Leadership in FRC" World Championship Conference) (May 2018)
              <ul className="nested">
                <li>Speak for 500+ people</li>
              </ul>
            </li>
            <li><strike>Finish "Deep Learning" Specialization</strike> (July 2019)
              <ul className="nested">
                <li><strike>Finish "Tensorflow in Practice" Specialization</strike> (September 2019)</li>
                <li>Finish "Tensorflow: Data and Deployment" Specialization</li>
              </ul>
            </li>
            <li><strike>Teach a lecture series</strike> (Done w/ HooThinks Consulting “Introduction to Data Analysis”) (Fall 2019)
              <ul className="nested">
                <li>Teach a student-taught class at UVA</li>
              </ul>
            </li>
            <li><strike>Get an internship for Summer 2019</strike> (SWIFT)
              <ul className="nested">
                <li><strike>Get an internship for Summer 2020</strike> (Capital One)</li>
                <li>Get an internship for Summer 2021</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;

import React from 'react';

import Layout from '../components/Layout';
import pic4 from '../assets/images/pic04.jpg';

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
          <h3 className="major">Hi, I'm Dylan Fernandes</h3>
          <center>
            <img src={pic4} alt="" />
          </center>
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
          </ul>

          <p>
            My life's goal is to do work I love with people I love. I'll admit it's abstract,
            but anything I do in life is structured around that goal.
          </p>

          <h3 className="major">Quotes that I live by</h3>
          <blockquote>“In life you suffer one of two pains - the pain of discipline or the pain of regret. Choose wisely.” - Jim Rohn</blockquote>
          <blockquote>“The quickest way to get the success you’ve been looking for is to execute. Success lies in the execution” - Tim Denning</blockquote>
          <blockquote>“Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless until all living humans read the book” - John Green</blockquote>
          <blockquote>“Your input determines your outlook. Your outlook determines your output, and your output determines your future.” - Zig Zaglar</blockquote>
          <blockquote>“Everybody’s impatient at a macro, and just so patient at a micro, wasting your days worrying about years. I’m not worried about my years, because I’m squeezing the fuck out of my seconds, let alone my days. It’s going to work out.” - Gary Vaynerchuk</blockquote>
          <blockquote>“When I was 24, I came across a website that says most people live for about 30,000 days — and I was shocked to find that I was already 8,000 days down. So you have to make every day count.” - Drew Houston</blockquote>
          <blockquote>“So many of our dreams at first seem impossible. Then they seem improbable. And then, when we summon the will, they soon become inevitable.” - Christopher Reeves</blockquote>
          <blockquote>“We have two ears and one mouth so that we can listen twice as much as we speak.” - Epictetus</blockquote>

          <h3 className="major">My Impossible List</h3>
          <p>
            Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
            Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
            egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
            in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;

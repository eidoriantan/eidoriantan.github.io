
import React from 'react';

import './style.scss';
import projects from '../../assets/projects.json';
import ContactForm from '../ContactForm';
import Socials from '../Socials';

class Home extends React.Component {
  componentDidMount () {
    const visibles = document.querySelectorAll('[data-visible]');
    document.addEventListener('scroll', event => {
      visibles.forEach(element => {
        const className = element.dataset.visibleClass;
        const percentVisible = parseInt(element.dataset.visiblePercent || '25');
        const rect = element.getBoundingClientRect();
        const height = (window.innerHeight || document.clientHeight);

        if (!(
          Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100)) < percentVisible ||
          Math.floor(100 - ((rect.bottom - height) / rect.height) * 100) < percentVisible
        )) {
          element.classList.add(className);
        }
      });
    });
  }

  render () {
    const projectsElements = [];

    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      const image = project.image
        ? <img src={ project.image } alt={ project.name } width={128} height={128} className="project-image" />
        : '';

      projectsElements.push(
        <div className="project" key={i} data-visible data-visible-class="anim-float-up" data-visible-percent="50">
          { image }

          <div className="project-info">
            <h3 className="project-title">
              <a href={ project.url }>{ project.name }</a>
            </h3>
            <p className="project-description">{ project.description }</p>
            <div className="project-tags">
              <a href={ project.url } className="project-url">{ project.url }</a>
            </div>
          </div>
        </div>
      );
    }

    return (
      <React.Fragment>
        <img src="/images/wireframe.png" alt="Wireframe" width={1024} height={1024} className="bg-wireframe" />

        <section className="blankslate">
          <h1>Adriane Justine Tan</h1>
          <p>
            I'm a self-taught web developer skilled in backend development with
            JavaScript, PHP, and SQL. I also have an experience in frontend
            development with HTML and CSS, Node.js and React.js framework, Linux
            operating system, and Git/GitHub.
          </p>
        </section>

        <section className="section" data-visible data-visible-class="anim-fade" data-visible-percent="10">
          <h2>My Projects</h2>
          <p className="section-description">These are my personal projects that I'm working on.</p>
          { projectsElements }
        </section>

        <section className="section" data-visible data-visible-class="anim-fade">
          <h2>Contact</h2>
          <p className="section-description">Feel free to send me a message.</p>
          <ContactForm className="w-75 mx-auto" />
        </section>

        <section className="section" data-visible data-visible-class="anim-fade">
          <h2>Social Media</h2>
          <p className="section-description">Reach me out on my social media!</p>
          <Socials />
        </section>
      </React.Fragment>
    );
  }
}

export default Home;

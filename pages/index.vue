<template>
  <v-layout column justify-center align-center text-center>
    <section id="first-page">
      <div class="first-page--image my-2 my-sm-5">
        <img src="/DSC_cover.png" alt="DSC Cover" />
      </div>
      <div class="first-page--actions py-1 py-lg-5">
        <v-btn tile light :large="$vuetify.breakpoint.mdAndUp" :medium="$vuetify.breakpoint.smAndBelow" class="my-btn explore-btn">
          Explore Now
        </v-btn>
      </div>
    </section>

    <section id="who-are-we">
      <div class="head">
        <h1 class="head_text">Who Are We?</h1>
        <p class="head_desc desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem sint excepturi recusandae possimus dolores eos aspernatur nemo
          delectus illum voluptates corrupti corporis adipisci eveniet eius porro unde, maiores placeat laborum.
        </p>
      </div>
      <div class="cont">
        <div class="cont-box cont-box-1">
          <div class="cont-box--icon">
            <ion-icon name="book"></ion-icon>
          </div>
          <div class="cont-box--body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
          </div>
          <div class="cont-box--title">
            <span>Study</span>
          </div>
        </div>
        <div class="cont-box cont-box-2">
          <div class="cont-box--icon">
            <ion-icon name="shapes"></ion-icon>
          </div>
          <div class="cont-box--body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
          </div>
          <div class="cont-box--title">
            <span>Analyze</span>
          </div>
        </div>
        <div class="cont-box cont-box-3">
          <div class="cont-box--icon">
            <ion-icon name="construct"></ion-icon>
          </div>
          <div class="cont-box--body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
          </div>
          <div class="cont-box--title">
            <span>Solve</span>
          </div>
        </div>
      </div>
      <div class="action">
        <v-btn tile light :large="$vuetify.breakpoint.mdAndUp" :medium="$vuetify.breakpoint.smAndBelow" class="my-btn join-btn">
          Join Us
        </v-btn>
      </div>
    </section>

    <section id="events">
      <div class="head">
        <h1 class="head_text">Events</h1>
        <p class="head_desc desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
      <div class="cont">
        <div class="event-list">
          <EventCard class="eventcard" v-for="event in events" :event="event" :key="event.id" />
        </div>
      </div>
      <div class="action">
        <v-btn tile light :large="$vuetify.breakpoint.mdAndUp" :medium="$vuetify.breakpoint.smAndBelow" class="my-btn join-btn">
          Wanna Attend!
        </v-btn>
      </div>
    </section>

    <section id="projects">
      <div class="head">
        <h1 class="head_text">Projects</h1>
        <p class="head_desc desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
      <div class="cont">
        <div class="project-list">
          <ProjectCard class="projectcard" v-for="project in projects" :project="project" :key="project.id" />
        </div>
      </div>
      <div class="action">
        <v-btn tile light :large="$vuetify.breakpoint.mdAndUp" :medium="$vuetify.breakpoint.smAndBelow" class="my-btn join-btn">
          Way to All Repo
        </v-btn>
      </div>
    </section>
    <section id="footer" class="footer">
      <div class="footer-top">
        <div class="footer-top--left">
          <img src="/icon-crop.png" alt="DSC icon" />
          <h1 class="dsc-title">Developer Students Club</h1>
          <h2 class="dsc-place">NIT Rourkela</h2>
        </div>
        <div class="footer-top--right">
          <div class="location">
            <div class="icon">
              <ion-icon name="location-sharp"></ion-icon>
            </div>
            <div class="cont">
              <h3>National Institute of Technology</h3>
              <h4>Rourkela, Orissa</h4>
            </div>
          </div>
          <div class="mail">
            <div class="icon">
              <ion-icon name="mail-open-sharp"></ion-icon>
            </div>
            <div class="cont">
              <h3><span>Mails @ </span>dsc.nitr@gmail.com</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <MyFooter />
      </div>
    </section>
  </v-layout>
</template>

<script>
import EventCard from '~/components/EventCard'
import ProjectCard from '~/components/ProjectCard'
import MyFooter from '~/components/MyFooter'
export default {
  components: {
    EventCard,
    ProjectCard,
    MyFooter,
  },
  data() {
    return {
      events: [
        {
          id: 1,
          cover: '/event-covers/Intro to Git and Github_FB-Master.png',
          upcoming: true,
          org: [
            {
              name: 'John Doe 01',
              photo: 'member-photos/128/harish-teens.jpg',
            },
          ],
          det: {
            title: 'Introduction To Git & GitHub',
            desc:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua defantu. ',
          },
          date: 'Jan 09, 2020',
        },
        {
          id: 2,
          cover: '/event-covers/Intro to Git and Github_FB-Master.png',
          upcoming: true,
          org: [
            {
              name: 'John Doe 01',
              photo: 'member-photos/128/harish-teens.jpg',
            },
            { name: 'John Doe 02', photo: 'member-photos/128/abel-mathew.jpg' },
          ],
          det: {
            title: 'Intro To Git and GitHub',
            desc:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua defantu. ',
          },
          date: 'Jan 09, 2020',
        },
        {
          id: 3,
          cover: '/event-covers/Intro to Git and Github_FB-Master.png',
          upcoming: false,
          org: [
            {
              name: 'John Doe 01',
              photo: 'member-photos/128/harish-teens.jpg',
            },
          ],
          det: {
            title: 'Intro To Git and GitHub',
            desc:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua defantu. ',
          },
          date: 'Jan 09, 2020',
        },
        {
          id: 4,
          cover: '/event-covers/Intro to Git and Github_FB-Master.png',
          upcoming: false,
          org: [
            {
              name: 'John Doe 01',
              photo: 'member-photos/128/harish-teens.jpg',
            },
          ],
          det: {
            title: 'Intro To Git and GitHub',
            desc:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua defantu. ',
          },
          date: 'Jan 09, 2020',
        },
        {
          id: 5,
          cover: '/event-covers/Intro to Git and Github_FB-Master.png',
          upcoming: false,
          org: [
            {
              name: 'John Doe 01',
              photo: 'member-photos/128/harish-teens.jpg',
            },
            { name: 'John Doe 02', photo: 'member-photos/128/abel-mathew.jpg' },
          ],
          det: {
            title: 'Intro To Git and GitHub',
            desc:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua defantu. ',
          },
          date: 'Jan 09, 2020',
        },
        {
          id: 6,
          cover: '/event-covers/Intro to Git and Github_FB-Master.png',
          upcoming: false,
          org: [
            {
              name: 'John Doe 01',
              photo: 'member-photos/128/harish-teens.jpg',
            },
          ],
          det: {
            title: 'Intro To Git and GitHub',
            desc:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua defantu. ',
          },
          date: 'Jan 09, 2020',
        },
      ],
      projects: [
        {
          id: 1,
          cover: '/project-covers/1.png',
          title: 'Avacado',
          desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua defantu. ',
          contr: '40',
          forks: '29',
        },
        {
          id: 2,
          cover: '/project-covers/2.png',
          title: 'Banana',
          desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua defantu. ',
          contr: '40',
          forks: '29',
        },
        {
          id: 3,
          cover: '/project-covers/3.png',
          title: 'Cherry',
          desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua defantu. ',
          contr: '40',
          forks: '29',
        },
        {
          id: 4,
          cover: '/project-covers/4.png',
          title: 'Dates',
          desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua defantu. ',
          contr: '40',
          forks: '29',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
#first-page {
  margin-bottom: max(50px, 6vw);
  .first-page--image {
    img {
      width: max(80%, 60vw);
      @media (min-width: 1900px) {
        width: 60vw;
      }
    }
  }
}

#who-are-we {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: max(50px, 6vw);
  .head {
    max-width: 900px;
    margin: 0 25px;
  }
  .cont {
    display: flex;
    flex-direction: row;
    margin: 5rem 0;
    @media (max-width: 900px) {
      flex-direction: column;
    }

    &-box {
      height: 300px;
      width: 250px;
      margin: 2rem 2vw;
      border: 3px solid #fff;
      border-radius: 25px 25px 10px 10px;
      display: grid;
      grid-template-rows: 250px 45px;
      position: relative;
      opacity: 0.8;
      transition: all 0.1s ease;

      &:hover {
        opacity: 1;
      }

      &--icon {
        position: absolute;
        top: -5%;
        right: -5%;
        padding: 5px;
        background-color: #2c2c2c;
        ion-icon {
          font-size: 7rem;
        }
      }

      &--body {
        padding: 50px 25px;
        font-size: 16px;
        text-align: left;
        line-height: 1.2;
        font-weight: 400;
      }
      &--title {
        background-color: #fff;
        color: #444;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          font-weight: 500;
          font-size: 3rem;
        }
      }
    }
  }
}

#events {
  margin-bottom: max(60px, 6vw);
  .head {
    margin: 0 20px;
  }
  .cont {
    margin: 50px auto;
    @media (max-width: 700px) {
      margin: 30px auto;
    }
    .event-list {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: scroll;

      width: min(95vw, 1200px);
      margin: 4rem auto;

      scrollbar-color: #000 #333;
      scrollbar-width: 5px;
      scrollbar-width: thin;

      // -webkit-overflow-scrolling: touch;

      &::-webkit-scrollbar-track {
        // -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #333;
      }

      &::-webkit-scrollbar {
        height: 5px;
        border-radius: 5px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #000;
        border-radius: 5px;
      }

      .eventcard {
        flex: 0 0 auto;

        @media (max-width: 1200px) {
          transform: scale(0.85);
        }
        @media (min-width: 1200px) {
          margin: 3rem 4rem;
        }
      }
    }
  }
}

#projects {
  margin-bottom: max(50px, 6vw);

  @media (max-width: 400px) {
    width: 340px;
    margin: 0 auto 50px;
  }

  .head {
    margin: 0 20px;
  }

  .cont {
    margin: 50px auto;
    @media (min-width: 400px) {
      margin: 70px auto;
    }

    .project-list {
      display: grid;
      grid-column-gap: max(5rem, 5vw);
      grid-row-gap: max(5rem, 3vw);
      justify-content: center;
      // grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
      grid-template-columns: repeat(2, minmax(400px, 1fr));
      @media (max-width: 840px) {
        grid-template-columns: repeat(1, minmax(400px, 1fr));
      }
    }
  }
}

.footer {
  font-size: 8px;
  width: min(1400px, 90vw);
  margin-top: 5rem;
  &-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5rem;

    @media (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
    }

    &--left {
      text-align: left;
      @media (max-width: 600px) {
        text-align: center;
        margin: 2rem;
      }
      img {
        width: min(250px, 20vw);
        margin-bottom: 2rem;
      }
      h1.dsc-title {
        font-size: 4rem;
        @media (max-width: 1000px) {
          font-size: 3rem;
        }
        @media (min-width: 701px) and (max-width: 800px) {
          font-size: 2.5rem;
        }
      }
      h2.dsc-place {
        font-size: 3rem;
        font-weight: 500;
        @media (max-width: 1000px) {
          font-size: 2rem;
        }
        @media (min-width: 701px) and (max-width: 800px) {
          font-size: 1.5rem;
        }
      }
    }
    &--right {
      @media (max-width: 600px) {
        text-align: center;
        margin: 2rem;
      }
      ion-icon {
        font-size: 4rem;
        margin-right: 2rem;
      }
      h3 {
        margin: 0;
        font-size: 2rem;
        font-weight: 600;
        @media (min-width: 701px) and (max-width: 800px) {
          font-size: 1.5rem;
        }
        span {
          font-weight: 500;
        }
      }
      .location {
        display: flex;
        align-items: center;
        margin: 2rem;

        .cont {
          text-align: left;

          h4 {
            font-size: 1.75rem;
            @media (min-width: 701px) and (max-width: 800px) {
              font-size: 1.25rem;
            }
          }
        }
      }
      .mail {
        display: flex;
        align-items: center;
        margin: 2rem;
      }
    }
  }
}
</style>

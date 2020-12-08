<template>
  <div class="about-container">
    <div class="about-us">
      <div class="about-us--title">
        <h1 class="head_text text-center">About Us.</h1>
      </div>
      <div class="about-us--content">
        <div class="video">
          <iframe
            style="max-width: 100%"
            width="480"
            height="270"
            src="https://www.youtube.com/embed/wTLe8nwJ_Lw"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="desc">
          <div class="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco aboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco aboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div class="actn">
            <v-btn tile light :large="$vuetify.breakpoint.mdAndUp" :medium="$vuetify.breakpoint.smAndBelow" class="my-btn member-btn">
              Become a Member
            </v-btn>
            <v-btn tile :large="$vuetify.breakpoint.mdAndUp" :medium="$vuetify.breakpoint.smAndBelow" class="my-btn learn-btn">
              Learn More
            </v-btn>
          </div>
        </div>
      </div>
    </div>

    <div class="what-we-do">
      <div class="head">
        <h1 class="head_text">What We Do?</h1>
        <p class="head_desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div class="cont">
        <div class="activity-boxes">
          <div class="box box-1">
            <ion-icon name="people"></ion-icon>
            <h2 class="box-title">Events</h2>
            <p class="box-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
          <div class="box box-2">
            <ion-icon name="megaphone"></ion-icon>
            <h2 class="box-title">Talks</h2>
            <p class="box-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
          <div class="box box-3">
            <ion-icon name="cube"></ion-icon>
            <h2 class="box-title">Projects</h2>
            <p class="box-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
          <div class="box box-4">
            <ion-icon name="game-controller"></ion-icon>
            <h2 class="box-title">Fun</h2>
            <p class="box-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
        </div>
      </div>
    </div>

    <div class="comm-guide">
      <h1 class="head_text">Community Guidelines</h1>
      <div class="guides">
        <v-expansion-panels accordion focusable hover tile>
          <v-expansion-panel v-for="(item, i) in 5" :key="i">
            <v-expansion-panel-header>
              <h1>ITEM</h1>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>

    <div class="privacy-policy">
      <h1 class="head_text">Privacy Policy</h1>
      <div class="policies">
        <v-expansion-panels accordion focusable hover tile>
          <v-expansion-panel v-for="(item, i) in 5" :key="i">
            <v-expansion-panel-header>
              <h1>ITEM</h1>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
    <MyFooter />
  </div>
</template>

<script>
import MyFooter from '~/components/MyFooter'
export default {
  components: {
    MyFooter,
  },
}
</script>

<style lang="scss" scoped>
.about-us {
  max-width: 1200px;
  margin: 4rem auto;
  &--title {
    h1 {
    }
  }
  &--content {
    margin: 3rem;
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-gap: 5rem;

    @media (max-width: 800px) {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr auto;

      justify-items: center;
    }

    .desc {
      .text {
        font-size: 2rem;
      }
      .actn {
        margin-top: 4rem;
        @media (max-width: 800px) {
          display: flex;
          justify-content: center;
        }
        .member-btn {
          margin-right: 2rem;
        }
      }
    }
  }
}

.what-we-do {
  margin: 12rem auto;
  @media (max-width: 1440px) {
    max-width: 720px;
  }

  .head {
    text-align: center;
    margin: 4rem 2rem;
  }
  .cont {
    .activity-boxes {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      align-content: center;
      justify-items: center;
      @media (max-width: 1440px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: 740px) {
        grid-template-columns: repeat(1, 1fr);
      }

      .box {
        width: 300px;
        height: 150px;
        margin: 3rem 30px;
        background-color: #2c2c2c;
        border-radius: 15px;
        box-shadow: 2px 2px 25px #00000088;
        position: relative;
        overflow: hidden;
        padding: 16px 20px;

        ion-icon {
          font-size: 150px;
          position: absolute;
          top: -20%;
          right: -10%;
          opacity: 0.05;
        }
        &-title {
          font-size: 28px;
        }
        &-body {
          font-size: 16px;
        }
      }
    }
  }
}

.comm-guide {
  text-align: center;
  max-width: 800px;
  margin: 8rem auto;
  .guides {
    text-align: left;
    margin: 4rem auto;
    font-size: 16px;
  }
}

.privacy-policy {
  text-align: center;
  max-width: 800px;
  margin: 8rem auto 12rem;
  .policies {
    text-align: left;
    margin: 4rem auto;
    font-size: 16px;
  }
}
</style>

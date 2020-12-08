<template>
  <div
    class="profile-card"
    @mouseover="mouseOver(member.id)"
    @mouseleave="mouseLeave(member.id)"
  >
    <div class="profile-card--container" :id="member.id">
      <div class="circle1"></div>
      <div class="circle2"></div>
      <div class="profile">
        <div class="content">
          <div class="head">
            <div class="user-img">
              <img
                :src="'member-photos/512/' + member.id + '.jpg'"
                :alt="member.name"
                loading="lazy"
              />
            </div>
            <p class="name">{{ member.name }}</p>
            <p class="desc">{{ member.desc }}</p>
          </div>
          <div class="body">
            <p class="cont">
              {{ member.cont }}
            </p>
          </div>
          <div class="social">
            <div class="icons">
              <a
                v-show="member.social.ig"
                :href="member.social.ig"
                target="_blank"
                ><ion-icon
                  style="pointer-events: none"
                  name="logo-instagram"
                ></ion-icon
              ></a>
              <a
                v-show="member.social.gh"
                :href="member.social.gh"
                target="_blank"
                ><ion-icon
                  style="pointer-events: none"
                  name="logo-github"
                ></ion-icon
              ></a>
              <a
                v-show="member.social.tw"
                :href="member.social.tw"
                target="_blank"
                ><ion-icon
                  style="pointer-events: none"
                  name="logo-twitter"
                ></ion-icon
              ></a>
              <a
                v-show="member.social.fb"
                :href="member.social.fb"
                target="_blank"
                ><ion-icon
                  style="pointer-events: none"
                  name="logo-facebook"
                ></ion-icon
              ></a>
              <a
                v-show="member.social.in"
                :href="member.social.in"
                target="_blank"
                ><ion-icon
                  style="pointer-events: none"
                  name="logo-linkedin"
                ></ion-icon
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['member'],
  methods: {
    mouseOver: (id) => {
      let mouse = {
        x: event.layerX - 200,
        y: event.layerY - 250,
      }
      //   console.log('Mouseover | Profile Card', id, event, mouse)
      var style =
        'rotateX(' + mouse.y / -25 + 'deg) rotateY(' + mouse.x / 25 + 'deg)'
      let doc = document.getElementById(id)
      doc.style.transform = style
      // console.log(style)
    },
    mouseLeave: (id) => {
      let doc = document.getElementById(id)
      doc.style = ''
      //   console.log('MOUSE LEAVE')
    },
  },
}
</script>

<style lang="scss" scoped>
.profile-card {
  perspective: 2000px;
  width: 400px;
  transform: scale(0.85);

  @media (max-width: 400px) {
    transform: scale(0.75);
    transform-origin: 25% 25%;
    margin-bottom: -100px;
  }

  &--container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 500px;
    background-color: #292929;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;
    box-shadow: 5px 5px 25px #00000088;

    &::before {
      content: '';
      position: absolute;
      display: block;
      width: 25%;
      top: -50%;
      left: -65%;
      height: 200%;
      background-color: #ffffff10;
      transform: rotate(30deg);
      z-index: 20;
      transition: all 0.4s ease;
      pointer-events: none;
    }

    &:hover {
      .circle1 {
        top: -84%;
      }
    }

    &:hover::before {
      left: 150%;
    }

    .circle1 {
      height: 600px;
      width: 600px;
      background-color: #1d1d1d;
      border-radius: 50%;
      position: absolute;
      top: -85%;
      transition: all 0.5s ease-in-out;
    }
    .circle2 {
      height: 600px;
      width: 600px;
      background-color: #1d1d1d;
      position: absolute;
      top: 86%;
    }
    .profile {
      z-index: 5;
      padding: 20px;

      .content {
        text-align: center;
        .head {
          padding: 12px 0 0;
          .user-img {
            margin: auto;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            overflow: hidden;
            transform: scale(0.95);
            transition: all 0.2s ease-in-out;
            box-shadow: 2px 2px 15px #000;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: all 0.2s ease-in-out;
            }
          }
          .name {
            font-size: 28px;
            font-weight: 600;
            text-transform: uppercase;
            margin: 4px auto;
            color: #fff;
          }
          .desc {
            color: #ffffffcc;
            font-weight: 500;
            margin: 0;
          }

          &::after {
            content: '';
            display: inline-block;
            text-align: center;
            width: 100px;
            height: 1px;
            background-color: #ffffff25;
          }
        }
        .body {
          padding: 18px 6px;
          .cont {
            color: #ffffffaa;
            font-size: 12px;
          }
        }
        .social {
          .icons {
            display: flex;
            justify-content: space-around;

            a {
              padding: 12px 16px;
              border-radius: 5px;
              transition: all 0.2s ease;
              &:hover {
                background-color: #ffffff22;
                ion-icon {
                  transform: rotate(-15deg) scale(1.1);
                }
              }
              &:active {
                background-color: #ffffff33;
                ion-icon {
                  transform: rotate(-15deg) scale(0.9);
                }
              }
              ion-icon {
                transition: all 0.2s ease;
                color: #fff;
                font-size: 25px;
              }
            }
          }
        }
      }
    }
  }
}
</style>

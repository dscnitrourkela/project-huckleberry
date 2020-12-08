<template>
  <div class="event">
    <div class="event-soon" v-show="event.upcoming">
      <p>COMING SOON</p>
    </div>
    <div class="event-cont">
      <div class="event-cont--cover">
        <img :src="event.cover" :alt="event.det.title" loading="lazy" />
      </div>
      <div class="event-cont--orgs">
        <div class="orgs">
          <div class="org" v-for="o in event.org" :key="o.name">
            <img :src="o.photo" :alt="o.name" />
            <span>{{ o.name }}</span>
          </div>
        </div>
      </div>
      <div class="event-cont--dets">
        <div class="dets">
          <h2 class="dets-title">{{ event.det.title }}</h2>
          <p class="dets-desc">{{ event.det.desc }}</p>
        </div>
      </div>
      <div class="event-cont--date">
        <div class="date-container">
          <h3 class="date">
            {{ event.date }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['event'],
}
</script>

<style lang="scss" scoped>
.event {
  width: 300px;
  height: 400px;
  border-radius: 0 0 60px 60px;
  overflow: hidden;
  background-color: #2c2c2c25;
  box-shadow: 5px 5px 20px #000000bb;
  position: relative;
  transition: all 0.2s ease-in-out;
  transform: scale(0.99);

  &:hover {
    box-shadow: 5px 5px 20px #000;
    transform: scale(1);
  }

  @media (min-width: 600px) {
    &:hover {
      .event-soon {
        opacity: 0;
      }
    }
  }
  .event-soon {
    position: absolute;
    z-index: 3;
    right: 10px;
    top: 0px;
    width: 50px;
    height: 75px;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 80%, 0% 100%);
    background-color: rgb(255, 60, 60);
    opacity: 1;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 2px 5px #000;

    p {
      font-size: 10px;
      padding: 10px 0;
      color: rgb(255, 255, 255);
    }
  }
  .event-cont {
    display: grid;
    grid-template-rows: 140px 1fr 50px;

    position: relative;
    &--cover {
      box-shadow: 0 4px 10px #000;
      img {
        height: 140px;
        width: 300px;
        object-fit: cover;
      }
    }
    &--orgs {
      position: absolute;
      top: 150px;
      left: 50%;
      transform: translate(-50%, -50%);
      .orgs {
        width: 300px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .org {
          display: flex;
          flex-direction: column;
          align-items: center;

          img {
            height: 48px;
            width: 48px;
            border-radius: 50%;
            box-shadow: 0 0 5px #000;
          }
          span {
            font-size: 15px;
            opacity: 0.8;
            font-weight: 500;
          }
        }
      }
    }
    &--dets {
      .dets {
        padding: 60px 30px 0 30px;
        &-title {
          font-size: 25px;
          line-height: 1.2;
        }
        &-desc {
          margin-top: 5px;
          font-size: 12px;
          opacity: 0.7;
        }
      }
    }
    &--date {
      margin-top: -5px;
      align-self: center;
      font-size: 20px;
    }
  }
}
</style>

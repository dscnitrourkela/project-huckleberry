<template>
  <div class="project">
    <div class="project-cover">
      <img :src="project.cover" :alt="project.title" loading="lazy" />
    </div>
    <div class="project-cont">
      <h2 class="project-cont--title">{{ project.title }}</h2>
      <p class="project-cont--desc">{{ project.desc }}</p>
      <div class="project-cont--dets">
        <div class="contr">
          <ion-icon name="people"></ion-icon>
          <span>{{ project.contr }}</span>
        </div>
        <div class="forks">
          <span>{{ project.forks }}</span>
          <ion-icon name="git-branch"></ion-icon>
        </div>
      </div>
      <v-btn small width="120" light>
        <h1>Contribute</h1>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: ['project'],
}
</script>

<style lang="scss" scoped>
.project {
  width: 400px;
  height: 250px;
  display: grid;
  grid-template-columns: 3fr 5fr;

  border-radius: 30px;
  box-shadow: 5px 5px 20px #000000bb;
  overflow: hidden;
  margin: 0 auto;
  transform: scale(0.99);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1);
    box-shadow: 5px 5px 20px #000;
  }

  @media (max-width: 450px) {
    width: 300px;
    height: 180px;
    margin: 0 auto;
  }

  &-cover {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &-cont {
    padding: 20px;
    display: grid;
    grid-template-rows: 40px 1fr 40px 30px;
    justify-items: center;
    @media (max-width: 450px) {
      grid-template-rows: 35px 1fr 40px 25px;
      padding: 4px;
      height: 170px;
    }

    &--title {
      font-size: 28px;
      @media (max-width: 450px) {
        font-size: 20px;
      }
    }
    &--desc {
      font-size: 12px;
      opacity: 0.7;
      @media (max-width: 450px) {
        font-size: 8px;
        padding: 0 10px;
      }
    }
    &--dets {
      width: 80%;
      display: flex;
      justify-content: space-evenly;
      position: relative;
      margin-bottom: 10px;
      opacity: 0.8;

      &::after {
        content: '';
        display: block;
        height: 20px;
        width: 2px;
        border-radius: 10px;
        background-color: #ffffff22;
        position: absolute;
        top: 20%;
        left: 50%;
      }

      .contr {
        display: flex;
        align-items: center;
      }
      .forks {
        display: flex;
        align-items: center;
      }
      ion-icon {
        font-size: 18px;
      }
      span {
        padding: 1px 5px 0;
        font-size: 18px;
      }
    }
  }
}
</style>

<template>
  <div>
    <h1 class="head_text text-center">This is Us.</h1>
    <div id="team-wrap">
      <div class="profiles">
        <ProfileCard v-for="member in team" :member="member" :key="member.id" />
      </div>
    </div>
  </div>
</template>

<script>
import ProfileCard from '~/components/ProfileCard'
export default {
  components: {
    ProfileCard,
  },
  data() {
    return {
      team: [
        {
          id: 'abel-mathew',
          name: 'Abel MAthew',
          desc: 'Ex-DSC Lead',
          cont:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          social: {
            ig: '',
            gh: 'https://github.com/DesignrKnight',
            tw: '',
            fb: 'https://facebook.com/designrknight',
            in: 'https://www.linkedin.com/in/DesignrKnight',
          },
        },
        {
          id: 'harish-teens',
          name: 'Harish Teens',
          desc: 'DSC Lead',
          cont:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          social: {
            ig: 'https://www.instagram.com/harish_teens/',
            gh: 'https://github.com/HarishTeens',
            tw: '',
            fb: 'https://facebook.com/blazing.teens.376',
            in: 'https://www.linkedin.com/in/harish-r-76272221',
          },
        },
        {
          id: 'ankesh-anku',
          name: 'Ankesh Anku',
          desc: 'App Development',
          cont:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          social: {
            ig: 'http://instagram.com/ankeshank',
            gh: 'http://github.com/ankank30',
            tw: '',
            fb: 'https://fb.com/ankesh.anku30',
            in: 'http://linkedin.com/in/ankesh-anku',
          },
        },
        {
          id: 'ashwin-sekari',
          name: 'Ashwin Sekhari',
          desc: 'Blockchain',
          cont:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          social: {
            ig: 'http://instagram.com/ashsek2',
            gh: 'http://github.com/ashsek',
            tw: '',
            fb: 'http://fb.com/ashsek10',
            in: 'https://www.linkedin.com/in/ashwin-sekhari-898bba152',
          },
        },
        {
          id: 'chinmay-kabi',
          name: 'Chinmay Kabi',
          desc: 'App Development',
          cont:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          social: {
            ig: 'http://instagram.com/chinu.kb',
            gh: 'http://github.com/Chinmay-KB',
            tw: 'http://twitter.com/ChinuKabi',
            fb: 'http://fb.com/kablitzkreig',
            in: 'http://linkedin.com/in/chinmaykabi',
          },
        },
        {
          id: 'ritom-sonowal',
          name: 'Ritom Sonowal',
          desc: 'Web Development',
          cont:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          social: {
            ig: 'http://instagram.com/ritom__',
            gh: 'http://github.com/ritomsonowal',
            tw: '',
            fb: 'http://fb.com/ritom.sonowal.7',
            in: 'http://in.linkedin.com/in/ritom-sonowal-008250176',
          },
        },
        {
          id: 'roshan-shaw',
          name: 'Roshan Shaw',
          desc: 'Web Development',
          cont:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          social: {
            ig: 'http://instagram.com/roshan.k.shaw',
            gh: 'http://github.com/roshankshaw',
            tw: '',
            fb: 'http://fb.com/roshan.kumarshaw',
            in: 'http://linkedin.com/in/roshankshaw',
          },
        },
        {
          id: 'reuben-abraham',
          name: 'Reuben Abraham',
          desc: 'Designer',
          cont:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          social: {
            ig: 'http://instagram.com/reuben.abraham',
            gh: '',
            tw: '',
            fb: 'https://www.facebook.com/knowreuben',
            in: 'https://www.linkedin.com/in/reuben-abraham-6b5a7a161',
          },
        },
        {
          id: 'shaswat-lenka',
          name: 'Shaswat Lenka',
          desc: 'Web Development',
          cont:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          social: {
            ig: '',
            gh: 'www.github.com/ShaswatLenka',
            tw: '',
            fb: 'https://www.facebook.com/shaswatlenka10',
            in: 'www.linkedin.com/in/shaswat-lenka',
          },
        },
        {
          id: 'smarak-das',
          name: 'Smarak Das',
          desc: 'App Development',
          cont:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          social: {
            ig: 'https://www.instagram.com/thesmader',
            gh: 'https://github.com/Thesmader',
            tw: '',
            fb: 'https://www.facebook.com/smarak.das.94',
            in: 'https://www.linkedin.com/in/thesmader',
          },
        },
        {
          id: 'ritesh-patil',
          name: 'Ritesh Patil',
          desc: 'Web Development',
          cont:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          social: {
            ig: '',
            gh: 'https://github.com/riteshsp2000',
            tw: 'https://twitter.com/riteshp2000',
            fb: '',
            in: 'https://www.linkedin.com/in/ritesh-patil-6049631a0/',
          },
        },
        {
          id: 'abhibhaw',
          name: 'Abhibhaw',
          desc: 'App Development',
          cont:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          social: {
            ig: '',
            gh: 'https://github.com/abhibhaw',
            tw: 'https://twitter.com/imabhibhaw',
            fb: 'https://www.facebook.com/iamabhibhaw',
            in: 'https://www.linkedin.com/in/abhibhaw',
          },
        },
        {
          id: 'astha-nayak',
          name: 'Astha Nayak',
          desc: 'App Development',
          cont:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          social: {
            ig: '',
            gh: 'https://github.com/nayakastha',
            tw: '',
            fb: 'https://www.facebook.com/astha.nayak.92',
            in: 'https://www.linkedin.com/in/astha-nayak-90b98a1a3',
          },
        },
        {
          id: 'ankit-kumar',
          name: 'Ankit Kumar',
          desc: 'Web Development',
          cont:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          social: {
            ig: '',
            gh: 'https://github.com/ankitkumarsamota121',
            tw: '',
            fb: '',
            in: 'https://www.linkedin.com/in/ankitkumarsamota121/',
          },
        },
        {
          id: 'patibanda-sriram',
          name: 'Patibanda Sriram',
          desc: 'App Development',
          cont:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          social: {
            ig: '',
            gh: 'https://github.com/SriramPatibanda',
            tw: 'https://twitter.com/PatibandaSriram',
            fb: 'https://www.facebook.com/PatibandaSriram',
            in: 'https://www.linkedin.com/in/patibanda-sriram-237a0b193/',
          },
        },
        {
          id: 'manikandan',
          name: 'Manikandan',
          desc: 'Web Development',
          cont:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          social: {
            ig: '',
            gh: 'https://github.com/Manikandan9206',
            tw: 'https://twitter.com/manikandan9206',
            fb: '',
            in: 'https://www.linkedin.com/in/manikandan-l-57b57b134/',
          },
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
#team-wrap {
  font-size: 16px;
  max-width: 1200px;
  margin: auto;
}
.profiles {
  display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-template-columns: repeat(3, minmax(400px, 1fr));
  @media (min-width: 840px) and (max-width: 1280px) {
    grid-template-columns: repeat(2, minmax(400px, 1fr));
  }
  @media (max-width: 840px) {
    grid-template-columns: repeat(1, minmax(400px, 1fr));
  }

  justify-items: center;
}
</style>

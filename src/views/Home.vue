<template>
  <div class="home">
    <!-- <section :src="require('../assets/images/IMG_20180324_120523-min.jpg')">
      <v-row class="fill-height" align="center" justify="center">
        <v-col class="text-center " cols="12">
          <h1 class="display-1 mb-4">ILYAS BENDAAS</h1>
          <h4 class="subheading">NETWORK ADMINISTRATOR, WEB DEVELOPER</h4>
        </v-col>
      </v-row>
    </section> -->

    <div class="col-md-12 col-sm-12 col-xs-12">
      <v-card>
        <v-img
          :src="require('@/assets/images/IMG_20180324_120523-min.jpg')"
          class="white--text align-center"
          gradient="rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="100%"
        >
          <v-col class="text-center " cols="12">
            <h1 class="display-1 mb-4">ILYAS BENDAAS</h1>
            <h4 class="subheading">NETWORK ADMINISTRATOR, WEB DEVELOPER</h4>
          </v-col>
        </v-img>
      </v-card>
    </div>

    <div class="pl-4 pr-4 row">
      <div class="col-md-6 col-sm-6 col-xs-12">
        <v-card>
          <v-img
            :src="require('@/assets/images/IMG_1737-min.jpg')"
            height="500px"
          >
          </v-img>
        </v-card>
      </div>
      <div class="col-md-6 col-sm-6 col-xs-12">
        <v-card text--center>
          <v-img
            :src="require('@/assets/images/IMG-20190802-WA0018.jpg')"
            class="white--text align-center"
            gradient="rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="500px"
          >
            <v-card-title>
              <h1 class="text-center text-justify font-size">About Me</h1>
            </v-card-title>
            <v-card-text
              class="text-center text-justify d-flex align-center justify-center"
            >
              I am ILYAS BENDAAS passionate, motivated, creative mind also
              independent work ethic. First of all at a personal level, I am a
              diligent and industrious young man with a pleasant personality.
              beside I am highly ambitious and always do my best therefore
              achieve my professional goals. I have team work spirit and
              leadership skills.
            </v-card-text>
            <v-card-actions class="text-center text-justify">
              <v-btn href="#" class="white--text" outlined>Resume</v-btn>
            </v-card-actions>
          </v-img>
        </v-card>
      </div>
      <div
        class="mx-auto col-md-12 col-sm-12 col-xs-12"
        max-width="344"
        outlined
      >
        <v-card class="pa-8 white--text text-center" color="grey">
          <h1>SKILLS</h1>
        </v-card>
      </div>
      <div class="col-md-12 col-sm-12 col-xs-12">
        <v-carousel cycle="2000" class="bg" height="500" :show-arrows="false">
          <v-carousel-item class="bg1 text-justify pa-8">
            <v-row class="fill-height" align="center" justify="right">
              <div class="display-1 grey--text pl-5 pr-5 ">
                <strong class="white--text">PROGRAMMING</strong>
                <p class="grey--text display-1 d-none d-sm-flex">
                  PYTHON<br />
                  WORDPRESS<br />
                  HTML<br />
                  CSS<br />
                  JAVASCRIPT
                </p>
              </div>
              <br />
            </v-row>
          </v-carousel-item>
          <v-carousel-item class="bg2 text-justify pa-8">
            <v-row class="fill-height" align="center" justify="right">
              <div class="display-1 grey--text pl-5 pr-5 ">
                <strong class="white--text">OPERATING SYSTEMS</strong>
                <p class="grey--text display-1 d-none d-sm-flex">
                  CISCO IOS<br />
                  WINDOWS<br />
                  LINUX
                </p>
              </div>
              <br />
            </v-row>
          </v-carousel-item>
          <v-carousel-item class="bg3 text-justify pa-8">
            <v-row class="fill-height" align="center" justify="right">
              <div class="display-1 grey--text pl-5 pr-5 ">
                <strong class="white--text">NETWORK</strong>
                <p class="grey--text display-1 d-none d-sm-flex">
                  ROUTING PROTOCOLS<br />
                  Switching(VLAN, STP, VTP …)<br />
                  Others (SDN, DNS, DHCP, TCP/IP, ACL,IPV6 …)
                </p>
              </div>
              <br />
            </v-row>
          </v-carousel-item>
          <v-carousel-item class="bg4 text-justify pa-8">
            <v-row class="fill-height" align="center" justify="right">
              <div class="display-1 grey--text pl-5 pr-5 ">
                <strong class="white--text">SYSTEMS</strong>
                <p class="grey--text display-1 d-none d-sm-flex">
                  WINDOWS SERVER<br />
                  PFSENSE<br />
                  NAGIOS
                </p>
              </div>
              <br />
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </div>
      <div
        class="mx-auto col-md-12 col-sm-12 col-xs-12"
        max-width="344"
        outlined
      >
        <v-card class="pa-8 white--text text-center" color="grey">
          <h1>HOBBIES</h1>
        </v-card>
      </div>
      <div class="col-md-12 col-sm-12 col-xs-12">
        <v-card text--center>
          <v-img
            :src="require('@/assets/images/thumbnail_20191208_140522-01.jpg')"
            class="white--text align-center"
            gradient="rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="600px"
          >
            <v-col cols="auto" class="text-center pl-0">
              <v-row class="flex-column ma-0 fill-height" justify="center">
                <v-col class="px-0">
                  <v-icon color="blue">mdi-handshake mdi-48px</v-icon>
                </v-col>
                <v-col class="px-0">
                  <span class="title font-weight-light">Volunteering</span>
                </v-col>

                <v-col class="px-0">
                  <v-icon color="blue">mdi-run-fast mdi-48px</v-icon>
                </v-col>
                <v-col class="px-0">
                  <span class="title font-weight-light">Athletics</span>
                </v-col>

                <v-col class="px-0">
                  <v-icon color="blue">mdi-airplane mdi-48px</v-icon>
                </v-col>
                <v-col class="px-0">
                  <span class="title font-weight-light">Travel</span>
                </v-col>

                <v-col class="px-0">
                  <v-icon color="blue">mdi-bike mdi-48px</v-icon>
                </v-col>
                <v-col class="px-0">
                  <span class="title font-weight-light">Cycling</span>
                </v-col>
              </v-row>
            </v-col>
          </v-img>
        </v-card>
      </div>

      <div
        class="mx-auto col-md-12 col-sm-12 col-xs-12"
        max-width="344"
        outlined
      >
        <v-card class="pa-4 white--text text-center" color="grey">
          <v-btn icon @click="$vuetify.goTo(0, easeInOutCubic)">
            <v-icon>mdi-arrow-up-bold-circle-outline</v-icon>
            <span class="title font-weight-light">Back to Top</span>
          </v-btn>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.bg {
  width: 100%;
  height: auto;
  background: url("../assets/images/apple-coffee-computer-cup-459653-min.jpg")
    no-repeat center center;
  background-size: 100% 100%;
  box-sizing: inherit;
}
.bg1 {
  width: 100%;
  height: auto;
  background: url("../assets/images/image1.png") no-repeat center center;
  background-size: 100% 100%;
  box-sizing: inherit;
}
.bg2 {
  width: 100%;
  height: auto;
  background: url("../assets/images/image2.png") no-repeat center center;
  background-size: 100% 100%;
  box-sizing: inherit;
}
.bg3 {
  width: 100%;
  height: auto;
  background: url("../assets/images/image3.png") no-repeat center center;
  background-size: 100% 100%;
  box-sizing: inherit;
}
.bg4 {
  width: 100%;
  height: auto;
  background: url("../assets/images/image4.png") no-repeat center center;
  background-size: 100% 100%;
  box-sizing: inherit;
}
</style>

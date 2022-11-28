<template>
  <v-app class="green">
    <v-container class="py-0 fill-height">
    <v-navigation-drawer class="blue lighten-1"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
    <v-app-bar app
      color="blue lighten-1"
      flat
      :clipped-left="clipped"
      fixed
      
    >
      <v-app-bar-nav-icon max-width="800" @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon></v-icon>
      </v-btn>
      <v-btn to='home'
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>Speed Turn</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon></v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-car</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
          to='/login'
          color="green"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Sign up or Log in
        </v-btn>
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
      <v-badge
        bordered
        bottom
        color="deep-purple accent-4"
        dot
        offset-x="10"
        offset-y="10"
      >
    <v-avatar color="gray">
      <v-icon dark>
        mdi-account-circle
      </v-icon>
    </v-avatar>
      </v-badge>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list class="red">
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-badge
        bordered
        bottom
        color="deep-purple accent-4"
        dot
        offset-x="10"
        offset-y="10"
      >
        <v-avatar size="40">
          <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
        </v-avatar>
      </v-badge>
          </v-list-item-action>
          <v-list-item-title>Gormott Forger</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list color="transparent" ><v-btn text="center" href="acount">Account </v-btn>
              </v-list>
              <v-list color="transparent" ><v-btn text="center" to='/login'>Log out</v-btn>
              </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home-outline',
          title: 'Home',
          to: '/home'
        },
        {
          icon: 'mdi-car',
          title: 'Manage customer car data',
          to: '/adminvalid'
        },
        {
          icon: 'mdi-account-box',
          title: 'Create order',
          to: '/createorder'
        },
        {
          icon: 'mdi-border-color',
          title: 'Order',
          to: '/order'
        },
        {
          icon: 'mdi-map-marker',
          title: 'Location',
          to: '/ProductList'
        }
        
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'By ISUZU'
    }
    
  }
}
</script>
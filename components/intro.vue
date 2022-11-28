<template>
    <v-carousel hide-delimiters height="800">
      <v-carousel-item 
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </template>

<script>
    export default {
      data () {
        return {
          items: [
            {
              src: 'https://www.honda.co.th/uploads/car_models/performance/1605790620_345.jpg',
            },
            {
              src: 'https://www.9carthai.com/wp-content/uploads/2021/09/HONDA-CIVIC.jpg',
            },
            {
              src: 'https://www.9carthai.com/wp-content/uploads/2021/09/TOYOTA-YARIS-2021.jpg',
            },
            {
              src: 'https://imgcdn.oto.com/large/gallery/interior/23/190/mazda-2-dashboard-view-931550.jpg',
            },
            {
              src: 'https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1624628451/autoexpress/2021/06/New%20Suzuki%20Swift%202020%20UK.jpg',
            },
          ],
        }
      },
    }
  </script>
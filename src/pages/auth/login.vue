<template>
<div>shubhangi</div>
</template>

<script>

import { serachApi } from "../../apiService/apiService";
export default {
  setup() { 
  },
  created(){
  this.fetchKeyPair()
  },
  
  methods:{
      async fetchKeyPair() {
        try {
          const res = await serachApi({val:2});
          console.log(res)
        } catch (err) {
          alert(err);
          console.log(err);
        }
      },
  },
};

</script>


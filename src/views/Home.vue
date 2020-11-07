<template>
  <div class="home">
    <Header />
    <Banner />
    <About />
    <Users />
    <Form />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/abz-header";
import Banner from "@/components/abz-banner";
import About from "@/components/abz-about";
import Users from "@/components/abz-users";
import Form from "@/components/abz-form";
import Footer from "@/components/abz-footer";

export default {
  name: "Home",

  components: {
    Header,
    Banner,
    About,
    Users,
    Form,
    Footer,
  },
};
</script>
<style lang="scss">
</style>

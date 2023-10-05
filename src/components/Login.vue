<style>
/*remove custom style*/
.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}


.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {

  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }

}

.triangle {
  border-top: 60rem solid #fff;
  border-left: 25rem solid transparent;
}

</style>
<template>
  <div class="relative min-h-screen flex ">
    <div
      class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
      <!-- Bagian Gambar dan Animasi -->
      <div
        class="invisible lg:visible sm:flex sm:w-1/2 xl:w-2/5 h-full md:flex flex-auto items-center justify-start p-10 overflow-hidden bg-green-900 text-white bg-no-repeat bg-cover relative"
        style="background-image: url(https://images.unsplash.com/photo-1520333764090-778d6dc95ec3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbmdyb3ZlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60);">
        <div class="absolute bg-gradient-to-b from-green-900 to-gray-900 opacity-75 inset-0 z-0"></div>
        <div class="absolute triangle min-h-screen right-0 w-16" style=""></div>
        <img
          src="https://jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com/bd2253a9671dac36a95faf821b52e78935050140be1718ce001f6aace45cf25c.png"
          class="h-96 absolute right-1 mr-5">
        <div class="w-full  max-w-md z-10">
          <div class="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">Reference site about Lorem Ipsum..</div>
          <div class="sm:text-sm xl:text-md text-gray-200 font-normal"> What is Lorem Ipsum Lorem Ipsum is simply dummy
            text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it
            has?</div>
        </div>
        <!---remove custom style-->
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <!-- Bagian Form Login -->
      <div
        class="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
        <div class="max-w-md w-full space-y-8">
          <div class="text-center">
            <h2 class="mt-6 text-3xl font-bold text-gray-900">
              Welcome Back!
            </h2>
            <p class="mt-2 text-sm text-gray-500">Please sign in to your account</p>
          </div>
          <!-- Form Login -->
          <Form class="mt-8 space-y-6" @submit="handleLogin" :validation-schema="schema">
            <input type="hidden" name="remember" value="true">
            <div class="relative">
              <!-- <div class="absolute right-3 mt-4"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div> -->
              <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">Email</label>
              <Field
                class=" w-full form-control text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                type="" name="username" placeholder="Enter Your Email"/>
            </div>
            <div class="mt-8 content-center">
              <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                Password
              </label>
              <Field
                class="w-full form-control content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                type="" name="password" placeholder="Enter your password"/>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
              <input id="remember_me" name="remember_me" type="checkbox"
                class="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded">
              <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <div class="text-sm">
              <a href="#" class="text-indigo-400 hover:text-blue-500">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button class="btn btn-primary btn-block" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              <span>Login</span>
            </button>
            <!-- <button
              class="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
              Sign in
            </button> -->
          </div>
          <p class="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
            <span>Don't have an account?</span>
            <a href="#"
              class="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">Sign
              up</a>
          </p>
          <div class="form-group">
            <div v-if="message" class="alert alert-danger" role="alert">
              {{ message }}
            </div>
          </div>
        </Form>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup.string().required("Username is required!"),
      password: yup.string().required("Password is required!"),
    });

    return {
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/maps");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;

      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/maps");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>

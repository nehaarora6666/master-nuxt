<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100"
         :style="{ backgroundImage: 'url(https://images.pexels.com/photos/2519175/pexels-photo-2519175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', backgroundSize: 'cover' }">
      <div class="w-full max-w-md p-8 space-y-6 rounded-xl bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-md">
        <h1 class="text-2xl font-bold text-center">Log in to your account</h1>
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="text-sm font-semibold" >Email</label>
            <input type="text" id="email" placeholder="Email"  required
              class="w-full p-2 mt-1 border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
          <div>
            <label for="password" class="text-sm font-semibold">Password</label>
            <input type="password" id="password" placeholder="Password" required
              class="w-full p-2 mt-1 border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember_me" type="checkbox"
                class="w-4 h-4 border-gray-300 rounded focus:ring-blue-500">
              <label for="remember_me" class="ml-2 text-sm">Remember me</label>
            </div>
            <a href="#" class="text-sm text-blue-600 hover:underline">Forgot password?</a>
          </div>
          <button type="submit"
            class="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Sign in
          </button>
        </form>
      </div>
    </div>
  </template>
  
<script lang="ts">
  import { applyAction, enhance } from '$app/forms'
  import { pb } from '$lib/pocketbase'
  import '$lib/app.postcss'
</script>

<div class="shit bg-white">
  <form
    method="POST"
    class="card max-w-xl mx-auto"
    use:enhance={() => {
      return async ({ result }) => {
        pb.authStore.loadFromCookie(document.cookie)
        await applyAction(result)
      }
    }}
  >
    <h1 class="text-2xl mb-3 mt-20 text-center">Регистрация</h1>
    <div class="form-control gap-2 mb-4 mt-10  ">
      <input
        type="name"
        name="name"
        placeholder="First Name"
        class="input input-bordered"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        class="input input-bordered"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        class="input input-bordered"
      />
      <input
        type="password"
        name="passwordConfirm"
        placeholder="Confirm password"
        class="input input-bordered"
      />
      <button class="btn btn-primary">Зарегистрироваться</button>
    </div>
  </form>
  <h2 class="text-1xl mb-3 mt-4 text-center">
    <a href="/login"> Авторизация</a>
  </h2>
</div>

<style>
  .shit {
    overflow: hidden;
  }
</style>

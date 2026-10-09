<script lang="ts">
  let itemCount = $state(0);
</script>

<svelte:head>
  <title>Mini Ecommerce — Web Starter</title>
  <meta
    name="description"
    content="Starter page for the Web Development course mini-ecommerce project."
  />
</svelte:head>

<main class="mx-auto flex min-h-screen max-w-5xl flex-col gap-8 px-6 py-12">
  <header class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
    <div>
      <p class="text-sm font-semibold uppercase tracking-wide text-indigo-700">Course starter</p>
      <h1 class="mt-1 text-3xl font-bold">Mini Ecommerce</h1>
    </div>
    <a class="rounded-lg border border-slate-300 px-4 py-2 text-sm hover:bg-white" href="#catalog">
      Catalog
    </a>
  </header>

  <section class="grid gap-8 rounded-2xl bg-white p-8 shadow-sm md:grid-cols-[1.4fr_1fr] md:items-center">
    <div>
      <h2 class="text-2xl font-semibold">เว็บฝั่งผู้เรียน</h2>
      <p class="mt-3 max-w-prose leading-7 text-slate-600">
        หน้านี้เป็นจุดเริ่มต้นของวิชา Web Development ใช้ SvelteKit และ Tailwind CSS
        และยังไม่เรียก API จนกว่าจะมี contract ที่ผ่านการยอมรับ
      </p>
      <div class="mt-6 flex flex-wrap items-center gap-3">
        <button
          class="rounded-lg bg-indigo-700 px-4 py-2 font-medium text-white hover:bg-indigo-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
          onclick={() => (itemCount += 1)}
        >
          เพิ่มสินค้าตัวอย่าง
        </button>
        <span class="text-sm text-slate-700" aria-live="polite">จำนวนในตะกร้า: {itemCount}</span>
      </div>
    </div>

    <aside id="catalog" class="rounded-xl border border-slate-200 bg-slate-50 p-6">
      <p class="text-sm text-slate-500">ข้อมูลตัวอย่างสำหรับเริ่มต้น</p>
      <h3 class="mt-2 text-lg font-semibold">สมุดบันทึก</h3>
      <p class="mt-1 text-slate-600">ใช้ข้อมูล mock จนกว่าจะรับ API contract จาก Microservices</p>
      <p class="mt-4 text-xl font-bold">฿129.00</p>
    </aside>
  </section>
</main>

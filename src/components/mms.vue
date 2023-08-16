<template>
  <div>
    <div class="bg-black text-green-500 p-8">
      <div class="max-w-lg mx-auto">
        <h1 class="text-2xl mb-4">{{ title }}</h1>
        <form class="space-y-4">
          <div>
            <label class="block mb-1" for="lambda">lambda (λ):</label>
            <input
              class="w-full p-2 rounded bg-gray-900 text-green-500 focus:outline-none focus:ring focus:border-green-500"
              type="number"
              step="any"
              id="lambda"
              name="lambda"
              placeholder="Ingresa el valor de lambda"
              v-model="form.lambda"
            >
          </div>
          <div>
            <label class="block mb-1" for="mu">mu (µ):</label>
            <input
              class="w-full p-2 rounded bg-gray-900 text-green-500 focus:outline-none focus:ring focus:border-green-500"
              type="number"
              step="any"
              id="mu"
              name="mu"
              placeholder="Ingresa el valor de mu"
              v-model="form.mu"
            >
          </div>
          <div>
            <label class="block mb-1" for="s">s (s):</label>
            <input
              class="w-full p-2 rounded bg-gray-900 text-green-500 focus:outline-none focus:ring focus:border-green-500"
              type="number"
              step="any"
              id="s"
              name="s"
              placeholder="Ingresa el valor de s"
              v-model="form.s"
            >
          </div>

          <button
            class="bg-green-500 hover:bg-green-600 text-black rounded px-4 py-2"
            type="button"
            @click="calculate"
          >
            Calcular
          </button>
        </form>
      </div>
    </div>

    <div class="grid grid-cols-2 mt-6 gap-4">
      <div class="mx-auto">
        <div class="flex justify-center items-center">
          <div class="bg-white shadow-lg rounded-lg p-6 space-y-4 ml-4">
            <b>Número Promedio de Clientes en la Cola (Lq):</b> Esta métrica proporciona información sobre la congestión de la cola y la eficiencia del sistema al estimar el número promedio de clientes esperando servicio.
            <br>
            <b>Número Promedio de Clientes en el Sistema (L):</b> Se calcula el número promedio total de clientes en el sistema, incluyendo aquellos en la cola y aquellos que están siendo atendidos actualmente.
            <br>
            <b>Tiempo Promedio que un Cliente Pasa en la Cola (Wq):</b> Esta métrica calcula el tiempo promedio que un cliente pasa esperando en la cola antes de recibir servicio.
            <br>
            <b>Tiempo Promedio que un Cliente Pasa en el Sistema (W):</b> Se calcula el tiempo promedio general que un cliente pasa en el sistema, incluyendo tanto el tiempo en la cola como el tiempo de servicio.
          </div>
        </div>
      </div>

      <div v-if="calculated" class="mx-auto">
        <div class="flex justify-center items-center">
          <div class="bg-white shadow-lg rounded-lg p-6 space-y-4">
            <h1 class="text-2xl font-semibold">Resultados de Métricas</h1>
            <ul>
              <li v-for="(value, key) in results" :key="key" class="flex items-center space-x-2">
                <span class="font-semibold">{{ key }}:</span>
                <span class="text-green-500">{{ value }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../assets/request"></script>
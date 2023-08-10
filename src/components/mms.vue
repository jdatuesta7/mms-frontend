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
                        v-model="form.lambda">
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
                        v-model="form.mu">
                  </div>
                  <div>
                      <label class="block mb-1" for="mu">s (s):</label>
                      <input 
                        class="w-full p-2 rounded bg-gray-900 text-green-500 focus:outline-none focus:ring focus:border-green-500" 
                        type="number" 
                        step="any" 
                        id="mu" 
                        name="mu" 
                        placeholder="Ingresa el valor de s"
                        v-model="form.s">
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

      <div v-if="calculated" class="max-w-lg mx-auto mt-3">
          <div class="bg-gray-100 flex justify-center items-center">
            <div class="bg-white shadow-lg rounded-lg p-6 space-y-4">
                <h1 class="text-xl font-semibold">Resultados de Métricas</h1>
                <ul>
                    <li class="flex items-center space-x-2">
                        <span class="font-semibold">Número Promedio de Clientes en el Sistema (L):</span>
                        <span class="text-green-500">{{ results.l }}</span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <span class="font-semibold">Número Promedio de Clientes en la Cola (Lq):</span>
                        <span class="text-green-500">{{ results.lq }}</span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <span class="font-semibold">Tiempo Promedio que un Cliente Pasa en el Sistema (W):</span>
                        <span class="text-green-500">{{ results.w }}</span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <span class="font-semibold">Tiempo Promedio que un Cliente Pasa en la Cola (Wq):</span>
                        <span class="text-green-500">{{ results.wq }}</span>
                    </li>
                </ul>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      form: {
        lambda: null,
        s: null,
        mu: null
      },
      results: {
        l: 0,
        lq: 0,
        w: 0,
        wq: 0
      },
      calculated: false,
      title: 'Teoria de trafico y colas - MMS'
    }
  },
  methods: {
    calculate() {
      this.calculated = true;
    }
  },
}
</script>
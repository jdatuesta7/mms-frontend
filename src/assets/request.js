export default {
    name: 'HelloWorld',
    data() {
      return {
        form: {
          lambda: null,
          s: null,
          mu: null
        },
        results: {},
        calculated: false,
        title: 'Teoria de trafico y colas - MMS'
      };
    },
    methods: {
      async calculate() {
        const requestBody = {
          lambda: parseFloat(this.form.lambda),
          mu: parseFloat(this.form.mu),
          s: parseFloat(this.form.s)
        };
  
        try {
          const response = await fetch('https://mms-backend-pc54-dev.fl0.io/calculate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
          });
  
          if (response.ok) {
            const data = await response.json();
            this.results = data; 
            console.log(data);
            this.calculated = true;
          } else {
            console.error('Error:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      }
    }
  };
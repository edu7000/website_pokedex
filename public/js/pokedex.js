const app= new Vue({
    el:'#pokedex',
    data:{
      mensaje: 'hola mundo Pokedex',
      pokemons:[],
      txtname:'',
      loading: false,
      chktipos: [],
      listipos: ["Bug","Dark","Dragon","Electric","Fairy","Fighting","Fire","Flying","Ghost","Grass","Ground","Ice","Normal","Poison","Psychic","Rock","Steel","Water"],
      allSelected: true
    },
    methods: {
        Buscar: function() {
            const frm = document.querySelector('#frmPokedex');
            frm.submit();
        },
        BuscarAjax: function () {
            
            var Object={};
            if(this.chktipos.length > 0){
              this.loading = true;
            Object.name=this.txtname;
            Object.type=this.chktipos;
            const requestOptions = {
                method: 'POST',
                headers: { 
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(Object)
              };

 fetch('/', requestOptions)
    .then(async response => {
      const data = await response.json();
      
      if (!response.ok) {
        const error = (data && data.message) || response.status;
        
        return Promise.reject(error);
        this.loading = false;
      }
           
      this.pokemons=data.data;
      this.txtname=data.param.name;
      this.loading = false;
      
    })
    .catch(error => {
      this.errorMessage = error;
      console.log('There was an error!', error);
      this.loading = false;
    });
  }else{
    alert("Debe Seleccionar al menos un tipo");
    document.querySelector('#name').focus();
  }
          },
          selectAll: function() {
            this.chktipos = [];

            if (this.allSelected) {
              
                for (item in this.listipos) {
                  this.chktipos.push(this.listipos[item]);
                }
            }else{
              
            }
            
          }
      },
      beforeMount(){
        
        this.selectAll();
        
        this.BuscarAjax();
       
     },
})

if(document.querySelector('#pokemon')){
const app2= new Vue({
    el:'#pokemon',
    data:{
      mensaje: 'hola mundo Pokemon'
    }
});
}

const price = document.querySelector('#price')
const output = document.querySelector('.price-output')
if(price){
output.textContent = price.value

price.addEventListener('input', function() {
  output.textContent = price.value
});
}
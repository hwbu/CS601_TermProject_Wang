const {createApp} = Vue

let huiwang="photos/HuiWang.jpg";
let mouse1="photos/mouseover1.jpg";
let toto="photos/Toto.jpg";
let mouse2="photos/mouseover2.jpg";
const mouseoverPhotos=[huiwang, mouse1, toto, mouse2];

createApp({
    data(){
        return{
            mouseoverPhotos,
            photo:mouseoverPhotos[id],
        } 
    },
    methods:{
        updatePhoto(id){
            this.photo=this.mouseoverPhotos[id];
        },
    },
}).mount('#app')